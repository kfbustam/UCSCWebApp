/**
 * Creates a new DiningPost model.
 * Takes a dining API gateway as a parameter to post event data.
 */
function newDiningHallModel(diningHallApi) {

  /**
   * Parsing json
   */
  var json = diningHallApi.getDiningHall();
  var diningHall = JSON.parse(json);

  /**
   * @var name of the event.
   */
  var collegeName = diningHall.name;

  /**
   * @var description of the event.
   */
  var foodarray = diningHall.items;

  var breakfastjson = JSON.parse(foodarray.breakfast);
  var lunchjson = JSON.parse(foodarray.lunch);
  var dinnerjson = JSON.parse(foodarray.dinner);

  var breakfast = Food(breakfastjson.name, JSON.parse(breakfastjson.attribs));
  var lunch = Food(lunchjson.name, JSON.parse(lunchjson.attribs));
  var dinner = Food(dinnerjson.name, JSON.parse(dinnerjson.attribs));

  function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var time = (hours * 100) + min;
    return time;
  }

  function getCollegeName() {
    return this.collegeName;
  }

  function getMeal() {
    var time = getTime();
    if (time >= 0 && time < 1200) {
       return this.breakfast;
    } else if (time >= 1200 && time < 1700) {
       return this.lunch;
    } else if (time >= 1700 && time < 2399) {
       return this.dinner;
    } else {
       return this.breakfast;
    }
  }

  return {
      getCollegeName: getCollegeName,
      getMeal: getMeal,
    };
}

function Food(foodName, foodAttr) {
  var name = foodName;
  var attr = foodAttr;

  function getName() {
    return this.name;
  }

  function getAttr() {
    return this.attr;
  }

  return {
      getName: getName,
      getAttr: getAttr
  };
}

/**
 * Connects the DiningHallModel to the DiningHallView.
 */
function newDiningHallController(model, view) {
  return {};
}

function newDiningHallView(nameElem, foodElem, Elem) {
  // Map between callbacks and their handlers
  var handlers = {};

  saveElem.onclick = function() {
    if(handlers.saveClick) {
      handlers.saveClick();
    }
  };

  return {
    bind: bind
  };
}
