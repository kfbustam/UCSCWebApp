function newEventApi() {
  function getEvents() {
      events = $.ajax({
      type: 'GET',
      data: e,
      dataType: "json",
      url: "http://localhost:8080/event",
      success: function (responseData, textStatus, jqXHR) {
          console.log(responseData);
      },
      error: function (responseData, textStatus, errorThrown) {
          console.log('GET failed.');
      }
      });
      return events;
  }
  function postEvent(e) {
      $.ajax({
      type: 'POST',
      data: e,
      dataType: "json",
      url: "http://localhost:8080/event",
      success: function (responseData, textStatus, jqXHR) {
          console.log(responseData);
      },
      error: function (responseData, textStatus, errorThrown) {
          console.log('POST failed.');
      }
      });
  }

  return {
    getEvents: getEvents,
    postEvent: postEvent,
  };
}

function newEventTestApi() {
  function getEvents() {
      events = '[{"name":"Holi Festival","description":"oaishoaisdoih"},{"name":"Meeting","description":"basoucboaisb"}]';
      return events;
  }

  return {
    getEvents: getEvents,
  };
}
