/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import glob from 'glob';
import { Converter } from 'showdown';

const { join, relative } = require('path');

const { writeFile, readFile, readFileSync } = require('fs');

const helpDir = join(__dirname, '..', 'public', 'static', 'help');

const absoluteFiles = glob.sync(`/**/*.md`, { root: helpDir });
const absoluteDir = glob.sync(`/**/`, { root: helpDir });

const relativeAddress = (listFile, rootDir) => listFile.map(item => relative(rootDir, item));
const Dir = relativeAddress(absoluteDir, helpDir);
const file = relativeAddress(absoluteFiles, helpDir);

const newfile = file.map(item => {
  const converter = new Converter({ metadata: true });
  const mdfiledir = join(helpDir, item);
  const value = readFileSync(mdfiledir, 'utf8', (err, data) => {
    if (err) throw err;
  });
  converter.makeHtml(value);
  const meta = converter.getMetadata();
  return {
    id: parseInt(item.split('.md').join(''), 10),
    title: meta.title || '',
  };
});

const jsonContent = JSON.stringify(newfile);

writeFile('./public/static/help/manifest.json', jsonContent, 'utf8', err => console.log(err));
