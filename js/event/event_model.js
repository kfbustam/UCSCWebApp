/**
 * Creates a new EventPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newEventModel(eventApi) {
  
  function get() {
    var json = eventApi.getEvents();
    var json_array = JSON.parse(json);
    var events = [];
    
    for (i=0;i<json_array.length;i++) {
        var name = json_array[i].name;
        var description = json_array[i].description;
        events[i] = Event(name, description);
    }
    return events;
  }
  
  /**
   * Persist the event to the API
   */
  function upload(name, description) {
    eventApi.postEvent({
        name: name,
        description: description,
      });
  }

  return {
      get: get,
      upload: upload,
    };
}

function Event (newName, newDescription) {
  var name = newName;
  var description = newDescription;

  function getName() {
    return name;
  }

  function getDescription() {
    return description;
  }

  return {
      getName: getName,
      getDescription: getDescription,
    };
}

