console.log('running background job with monitoring!');

if(Math.random() > 0.15) {
    throw new Error('random error from crontab-job.js');
} else {
    return;
}