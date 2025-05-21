const cronitor = require('cronitor')('77d933c4061d44f1b2f9ae46e6860f6c');
const nodeCron = require('node-cron');
cronitor.wraps(nodeCron);

// the first parameter is now the key that Cronitor will use
// to send telemetry events when the jobs runs, completes or fails
cronitor.schedule('important-background-job', '*/5 * * * *', function() {
    console.log('running background job with monitoring!');
    
    if(Math.random() > 0.25) {
        throw new Error('random error');
    } else {
        return;
    }
});
