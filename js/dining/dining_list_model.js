// onclick
// getactive(str)
// setactive(str)

/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningListModel(diningApi) {
    
  var diningList = constructor();
  
  function constructor() {
    var json = diningApi.getDiningList();
    var jsonArray = JSON.parse(json);
    var list = [];
    
    for (i=0;i<jsonArray.length;i++) {
        list[i] = jsonArray[i];
    }
    return list;
  }
  
  function getDiningList() {
    return diningList;
  }

  return {
      getDiningList: getDiningList,
    };
}
