function newEventApi() {
    function getEvents(handlers) {
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "http://ec2-54-183-90-100.us-west-1.compute.amazonaws.com:8080/event",
            success: function(responseData, textStatus, jqXHR) {
                console.log(responseData);
                handlers.loadevents(responseData);
            },
            error: function(responseData, textStatus, errorThrown) {
                console.log(responseData);
            }
        });
    }

    function postEvent(e) {
        $.ajax({
            type: 'POST',
            data: e,
            dataType: "json",
            url: "http://ec2-54-183-90-100.us-west-1.compute.amazonaws.com:8080/event",
            success: function(responseData, textStatus, jqXHR) {
                console.log(responseData);
            },
            error: function(responseData, textStatus, errorThrown) {
                console.log(responseData.responseText);
            }
        });
    }

    return {
        getEvents: getEvents,
        postEvent: postEvent,
    };
}