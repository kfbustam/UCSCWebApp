function newDiningListApi() {
  function getDiningList() {
      /*
      dining_list = $.ajax({
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
      */
      dining_list = '["c8/oakes","porter/kresge","c9/c10","crown/merrill","cowell/stevenson"]';
      return dining_list;
  //});
  }

  return {
    getDiningList: getDiningList,
  };
}