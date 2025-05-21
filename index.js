const cronitor = require('cronitor')('77d933c4061d44f1b2f9ae46e6860f6c');

// create an empty IIFE function
(async () => {
    // create a monitor
    const monitor = await cronitor.Monitor.put({
        type: 'job',
        key: 'important-background-job',
        schedule: '59 * * * *'
    });

    cronitor.wrap('important-background-job', function () {
        console.log('running background job with monitoring!');
        
        if(Math.random() > 0.5) {
            throw new Error('random error');
        } else {
            return;
        }
    });
})();



// Or, embed telemetry events directly in your code.
// const monitor = new cronitor.Monitor('important-background-job');

