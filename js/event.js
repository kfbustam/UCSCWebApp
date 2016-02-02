/**
 * Creates a new EventPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newEventModel(eventApi) {

  /**
   * @var name of the event.
   */
  var name = "";

  /**
   * @var description of the event.
   */
  var description = "";

  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
  }

  function getDescription() {
    return description;
  }

  function setDescription(newDescription) {
    description = newDescription;
  }

  /**
   * Persist the event to the API
   */
  function upload() {
    eventApi.postEvent({
        name: name,
        description: description,
      }); 
    
  }

  return {
      getDescription: getDescription,
      setDescription: setDescription,
      setName: setName,
      getName: getName,
      upload: upload,
    };
}

/**
 * Connects the EventModel to the EventView.
 */
function newEventController(model, view) {
  view.bind('descChange', function(newDesc) {
      model.setDescription(newDesc);
    });

  view.bind('nameChange', function(newName) {
      model.setName(newName);
    }); 

  view.bind('saveClick', function() {
      model.upload();
    });

  return {};
}

function newEventView(nameElem, descElem, saveElem) {
  // Map between callbacks and their handlers
  var handlers = {};

  function bind(callback, fn) {
    handlers[callback] = fn;
  }

  nameElem.onkeyup = function() {
    if(handlers.nameChange) {
      handlers.nameChange(nameElem.value);
    }
  };

  descElem.onkeyup = function() {
    if(handlers.descChange) {
      handlers.descChange(descElem.value);
    }
  };

  saveElem.onclick = function() {
    if(handlers.saveClick) {
      handlers.saveClick();
    }
  };

  return {
    bind: bind
  };
}
