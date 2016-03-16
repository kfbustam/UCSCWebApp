/**
 * Connects the EventModel to the EventView.
 */
function newEventGetController(model, view) {
    view.bind('makeEventApiCall', function(handlers) {
        model.apiCall(handlers);
    });

    view.bind('loadevents', function(data) {
        model.init(data);
        var events = model.getEvents();
        var ul = document.getElementById("event_list");
        for (i = 0; i < events.length; i++) {
            var li = document.createElement("li");
            var li_ul = document.createElement("ul");
            var li_ul_li = document.createElement("li");
            var br = document.createElement("br");
            var hr = document.createElement("hr");
            li.setAttribute("id", "event-name");
            li.appendChild(document.createTextNode(events[i].getName() + "\n"));
            li_ul_li.setAttribute("id", "event-detail");
            li_ul_li.appendChild(document.createTextNode(events[i].getDescription()));

            li_ul.appendChild(li_ul_li);
            li.appendChild(li_ul);
            li.appendChild(br);
            li.appendChild(hr);
            ul.appendChild(li);
        }
    });

    return {};
}