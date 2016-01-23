/**
 * Creates a new EventPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newEventPostModel(eventApi) {
  /**
   * @var an array of event info: 
   * (Name of Event, Event description, date, time, name of organization, location).
   */
  var eventInfo = "";


  /**
   * Posts event to the provided API
   */
  function update() {
    var events = eventApi.postEvents(eventInfo);
  }

  /**
   * Posts the event
   */
  function postEvents(eventInfo) {
    var infoAsString = "{"+"name" + ":"+ eventInfo[0] +","+"summary"+":"+eventInfo[1]+"}"
    eventInfo = infoAsString;
    
  }

  /**
   * returns eventInfo which is a string of the event info
   */
  function getEventInfoString(eventInfo) {
    return eventInfo;
    
  }

  return {
      postEvents: postEvents,
      update: update,
    };
}


/**
 * Connects the EventPostModel to the EventPostView.
 */
function newEventPostController(model, view) {

  /**
   * @const The updater sends info to the model from the view.
   */
  var updater = {};
  updater.update = function() {
    model.postEvents(view.eventInfo);
    // Sends the data to the server
    model.update();  
  };
  view.attach(updater);

 
  return {};
}

/**
 * Gathers data from view and handles it to give to the model via the controller
 */
function gatherTextBoxData() {

  //todo: textbox and button view goes here?

  //gather (Name of Event, Event description, date, time, name of organization, location).
  var name = document.getElementById('name').value;
  var summary = document.getElementById('summary').value;
  /*
  var dateOfEvent = document.getElementsByName("dateOfEventText").value;
  var timeOfEvent = document.getElementsByName("timeOfEventText").value;
  var nameOfOrg = document.getElementsByName("nameOfOrgText").value;
  var locationOfEvent = document.getElementsByName("locationOfEventText").value;
  */

  var eventInfoArray = [name, summary];

  /**
   * @const obs is an Observable. The View uses it to allow other objects to
   * attach to it, and to notify attached observers when the Views's data has
   * changed.
   */
  var obs = newObservable();

  /**
   * Gets current events from the provided event API, and notifies observers
   * of the change.
   */

  function updateEvents() {
    obs.notify();
  }


  function eventInfo(){
    return eventInfoArray;
  }

  //if post button is pressed notify the observer (i.e., the controller)
  if(buttonpressed){
    updateEvents();
  }

  return {
      attach: obs.attach,
      eventInfo: eventInfo,
      updateEvents: updateEvents,
    };
}
