// node loop.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// the loop.js content is executed. NOTE: the main event loop diesnt start here.
// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
    // check one: any pending setTimeout, setInterval, setImmediate?
    // check two: any OS tasks? (like server listening to port)
    // check three: any long running operations? (like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes over a `tick`
while(shouldContinue()){
    // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
    // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
    // 3) Pause execution. Continue when...
    //  - a new pendingOSTask is done
    //  - a new pendingOperation is done
    //  - a timer is about to complete
    // 4) Look at pendingTimers. Call any setImmediate
    // 5) Handle any 'close' events, clean up code after program is done
}


// exit back to terminal