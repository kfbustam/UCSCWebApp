/**
 * Connects the EventModel to the EventView.
 */
function newEventGetController(model, view) {
  view.bind('redirect', function(newName) {
      window.location = 'event_post.html';
    });
  
  view.bind('loadevents', function() {
      var events = model.get();
      var ul = document.getElementById("event_list");
      for (i=0;i<events.length;i++) {
        var li = document.createElement("li");
        var br = document.createElement("br");
        li.appendChild(document.createTextNode(events[i].getName() + "\n"));
        li.appendChild(br);
        li.appendChild(document.createTextNode(events[i].getDescription()));
        ul.appendChild(li);
      }
    });

  return {};
}

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
  }

  return {
    bind: bind
  };
}

