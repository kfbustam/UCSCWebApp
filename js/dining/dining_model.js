// onclick
// getactive(str)
// setactive(str)

/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningModel(diningApi) {
  
  function getList() {
    var json = diningApi.getDiningList();
    var json_array = JSON.parse(json);
    var dining_list = [];
    
    for (i=0;i<json_array.length;i++) {
        var name = json_array[i];
        dining_list[i] = name;
    }
    return dining_list;
  }
  
  function getDiningHall() {
    var json = diningApi.getDiningHall();
    var json_obj = JSON.parse(json);
    
    var array = getMeal(json_obj);

    var meal = [];
    for (i=0;i<array.length;i++) {
      var name = array[i].name;
      var attr = array[i].attribs;
      meal[i] = Food(name, attr);
    }
    
    return meal;
  }

  function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var time = (hours * 100) + min;
    return time;
  }

  function getMeal(obj) {
    var time = getTime();
    if (time >= 0 && time < 1200) {
       return obj.breakfast;
    } else if (time >= 1200 && time < 1700) {
       return obj.lunch;
    } else if (time >= 1700 && time < 2399) {
       return obj.dinner;
    } else {
       return obj.breakfast;
    }
  }

  function getTod() {
    var time = getTime();
    if (time >= 0 && time < 1200) {
       return "Breakfast";
    } else if (time >= 1200 && time < 1700) {
       return "Lunch";
    } else if (time >= 1700 && time < 2399) {
       return "Dinner";
    } else {
       return "Breakfast";
    }
  }

  return {
      getTod: getTod,
      getList: getList,
      getDiningHall: getDiningHall,
    };
}

function Food(foodName, foodAttr) {
  var name = foodName;
  var attr = foodAttr;

  function getName() {
    return name;
  }

  function getAttrs() {
    return attr;
  }

  return {
      getName: getName,
      getAttrs: getAttrs
  };
}
