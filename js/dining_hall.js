/**
 * Creates a new DiningPost model.
 * Takes an dining API gateway as a parameter to post event data.
 */
function newDiningHallModel(diningHallApi) {

  /**
   * @var name of the event.
   */
  var collegeName = "";

  /**
   * @var description of the event.
   */
  var food = [];

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
      setCollegeName: setCollegeName,
      getCollegeName: getCollegeName,
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
}

/**
 * Connects the EventModel to the EventView.
 */
function newDiningController(model, view) {
  view.bind('descChange', function() {
      return model.getCollegeName();
    });

  view.bind('nameChange', function() {
      model.setName(newName);
    }); 

  return {};
}

function newDiningView(nameElem, descElem, saveElem) {
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
