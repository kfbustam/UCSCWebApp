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

  function getCollegeName() {
    return this.collegeName;
  }

  function setCollegeName(newCollegeName) {
    this.collegeName = newCollegeName;
  }

  function getFood() {
    return this.food;
  }

  function addFood(newFoodName, newFoodAttr) {
    var newFood = new Food(newFoodName, newFoodAttr);
    this.food.push(newFood);
  }

  function clearCollegeName() {
    this.collegeName = "";
  }

  function clearFood() {
    this.food = [];
  }

  return {
      getFood: getFood,
      addFood: addFood,
      clearFood: clearFood,
      setCollegeName: setCollegeName,
      getCollegeName: getCollegeName,
      clearCollegeName: clearCollegeName
    };
}

function Food(name, attr) {
  this.name = name;
  this.attr = attr;

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
 * Connects the EventModel to the EventView.
 */
function newDiningController(model, view) {
  return {};
}

function newDiningView(nameElem, mealElem, foodElem, attrElem) {
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
