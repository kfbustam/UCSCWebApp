function newEventGetView(postElem) {
  // Map between callbacks and their handlers
  var handlers = {};

  function bind(callback, fn) {
    handlers[callback] = fn;
  }

  postElem.onclick = function() {
    if(handlers.redirect) {
      handlers.redirect();
    }
  };
  
  window.onload = function() {
    if(handlers.loadevents) {
      handlers.loadevents();  
    }
  };

  return {
    bind: bind
  };
}

