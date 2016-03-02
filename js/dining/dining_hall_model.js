// onclick
// getactive(str)
// setactive(str)

/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningHallModel(diningApi) {
    
  var foodList = constructor();
  
  function constructor() {
    var json = diningApi.getDiningHall();
    var jsonObj = JSON.parse(json);
    var array = getMeal(jsonObj);
    var list = [];

    for (i=0;i<array.length;i++) {
      list[i] = Food(array[i].name, array[i].attribs);
    }
    return list;
  }
  
  function getDiningHall() {
    return foodList;
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
