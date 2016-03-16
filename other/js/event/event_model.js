/**
 * Creates a new EventPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newEventModel(eventApi) {

    var events = [];

    function init(data) {
        for (i = 0; i < data.length; i++) {
            events[i] = Event(data[i].name, data[i].summary);
        }
    }

    function apiCall(handlers) {
        eventApi.getEvents(handlers);
    }

    /**
     * Get event array
     */
    function getEvents() {
        return events;
    }

    /**
     * Persist an event to the API
     */
    function upload(name, description) {
        eventApi.postEvent({
            name: name,
            description: description,
        });
    }

    return {
        init: init,
        apiCall: apiCall,
        getEvents: getEvents,
        upload: upload,
    };
}

function Event(newName, newDescription) {
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