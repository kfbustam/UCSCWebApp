/**
 * Connects the EventModel to the EventView.
 */
function newEventPostController(model, view) {
  view.bind('saveClick', function(name, description) {
      model.upload(name, description);
    });

  return {};
}

function newEventPostView(nameElem, descElem, saveElem) {
  // Map between callbacks and their handlers
  var handlers = {};

  function bind(callback, fn) {
    handlers[callback] = fn;
  }

  saveElem.onclick = function() {
    if(handlers.saveClick) {
      handlers.saveClick(nameElem.value, descElem.value);
    }
  };

  return {
    bind: bind
  };
}

