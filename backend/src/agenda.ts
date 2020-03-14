import Agenda from 'agenda'
import { MONGODB_URI } from './Utils/secrets';
import ExirTradesJob from './Jobs/exirTrades';
import CryptoPriceJob from './Jobs/cryptoPrice';
import TgjuPriceJob from './Jobs/tgjuPrice';

var agenda = new Agenda({db:{address:MONGODB_URI,collection:'jobs',options:{useUnifiedTopology: true}}});

//define events
agenda.on('start', job => {
  console.log('event Job %s starting', job.attrs.name);
});

agenda.on('complete', job => {
  console.log(`event Job ${job.attrs.name} finished`);
});
agenda.on('success', job => {
  console.log(`event Job Successfully ${job.attrs.name}`);
});
agenda.on('fail', (err, job) => {
  console.log(`Job failed with error: ${err}`);
});

//define jobs
agenda.define('ExirTradesJob',{lockLifetime: 10000}, ExirTradesJob);
agenda.define('CryptoPriceJob',{lockLifetime: 10000}, CryptoPriceJob);
agenda.define('TgjuPriceJob',{lockLifetime: 10000}, TgjuPriceJob);

//define timing
(async () => {
  await agenda.start();
  //minutes
  await agenda.every('30 seconds', 'ExirTradesJob');
  await agenda.every('30 seconds', 'CryptoPriceJob');
  await agenda.every('30 seconds', 'TgjuPriceJob');
})()
