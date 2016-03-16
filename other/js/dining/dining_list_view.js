function newDiningListView() {
    // Map between callbacks and their handlers
    var handlers = {};

    function bind(callback, fn) {
        handlers[callback] = fn;
    }

    window.onload = function() {
        if (handlers.makeDiningListApiCall) {
            handlers.makeDiningListApiCall(handlers);
        }
    };

    return {
        bind: bind
    };
}
