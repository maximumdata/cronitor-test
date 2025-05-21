const cronitor = require('cronitor')('77d933c4061d44f1b2f9ae46e6860f6c');

const monitor = new cronitor.Monitor('events job');
console.log('running background job with monitoring - events!');

monitor.ping({state: 'run'});

if(Math.random() < 0.33) {
    monitor.ping({state: 'fail'});
    throw new Error('random error');
} else {
    monitor.ping({state: 'complete'});
    return;
}