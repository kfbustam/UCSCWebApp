/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningModel(diningApi) {

  /**
   * @var name of the event.
   */
  var collegeName = "";

  /**
   * @var description of the event.
   */
  var food = [];

  function getCollegeName() {
    return collegeName;
  }

  function setCollegeName(newCollegeName) {
    newCollegeName = newCollegeName;
  }

  function getFood() {
    return food;
  }

  function addFood(newFood) {
    food.push(newFood);
  }

  return {
      getFood: getFood,
      addFood: addFood,
      setCollegeName: setCollegeName,
      getCollegeName: getCollegeName,
    };
}

function Food() {
  var attr = [];
}

/**
 * Connects the EventModel to the EventView.
 */
function newDiningController(model, view) {
  view.bind('descChange', function(newDesc) {
      model.setDescription(newDesc);
    });

  view.bind('nameChange', function(newName) {
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
