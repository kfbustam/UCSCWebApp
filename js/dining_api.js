function newDiningApi() {
  function getDiningHall(e) {
      $.ajax({
      type: 'GET',
      data: e,
      dataType: "json",
      url: "http://localhost:8080/dining",
      success: function (responseData, textStatus, jqXHR) {
          console.log(responseData);
      },
      error: function (responseData, textStatus, errorThrown) {
          console.log('GET failed.');
      }
  });
  }

  return {
    getEvent: getEvent,
  };
}
