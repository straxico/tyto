/* eslint-disable global-require */
const express = require('express');
const nextserver = require('next');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const proxyMiddleware = require('http-proxy-middleware');
const { join } = require('path');
const { parse } = require('url');
const uuidv4 = require('uuid/v4');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextserver({ dev });

const handle = app.getRequestHandler();

// creat next server from express app

function sessionCookie(req, res, next) {
  const htmlPage =
    !req.path.match(/^\/(_next|static)/) &&
    !req.path.match(/\.(js|map)$/) &&
    req.accepts('text/html', 'text/css', 'image/png') === 'text/html';

  if (!htmlPage) {
    next();
    return;
  }
  if (!req.cookies.sid || req.cookies.sid.length === 0) {
    req.cookies.sid = uuidv4();
    res.cookie('sid', req.cookies.sid);
  }
  next();
}

const sourcemapsForSentryOnly = token => (req, res, next) => {
  // In production we only want to serve source maps for Sentry
  if (!dev && !!token && req.headers['x-sentry-token'] !== token) {
    res.status(401).send('Authentication access token is required to access the source map.');
    return;
  }
  next();
};

let server;
app
  .prepare()
  .then(() => {
    const { Sentry } = require('./sentry')(app.buildId);
    server = express();
    server.use(Sentry.Handlers.requestHandler());
    server.use(compression());
    server.use(cookieParser());
    server.use(sessionCookie);
    server.get(/\.map$/, sourcemapsForSentryOnly(process.env.SENTRY_TOKEN));

    server.get('/room(/(:slug1/:slug2?)?)?', (req, res) => {
      app.render(req, res, '/room', { slug1: req.params.slug1, slug2: req.params.slug2 });
    });
    server.get('/s/:slug(*)', (req, res) => {
      app.render(req, res, '/s', { slug: req.params.slug });
    });

    server.all('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      if (pathname === ('/service-worker.js' || '/.well-known/assetlinks.json')) {
        const filePath = join(__dirname, '..', '..', '.next', pathname);
        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res);
      }
    });

    server.use(Sentry.Handlers.errorHandler());
    // server listen to port
    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [env: ${process.env.NODE_ENV} | isDev:${dev}]`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
