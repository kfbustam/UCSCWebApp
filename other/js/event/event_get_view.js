function newEventGetView() {
    // Map between callbacks and their handlers
    var handlers = {};

    function bind(callback, fn) {
        handlers[callback] = fn;
    }

    window.onload = function() {
        if (handlers.makeEventApiCall) {
            handlers.makeEventApiCall(handlers);
        }
    };

    return {
        bind: bind
    };
}