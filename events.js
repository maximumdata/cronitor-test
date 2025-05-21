const cronitor = require('cronitor')('77d933c4061d44f1b2f9ae46e6860f6c');
const cron = require('node-cron');


(async () => {
    const monitor = await cronitor.Monitor.put({
        type: 'job',
        key: 'events job',
        schedule: '*/5 * * * *'
    });
})();


const monitor = new cronitor.Monitor('events job');

cron.schedule('*/5 * * * *', () => {
    console.log('running background job with monitoring - events!');

    monitor.ping({state: 'run'});

    if(Math.random() < 0.5) {
        monitor.ping({state: 'fail'});
        throw new Error('random error');
    } else {
        monitor.ping({state: 'complete'});
        return;
    }
});

