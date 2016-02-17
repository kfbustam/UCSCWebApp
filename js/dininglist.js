// onclick
// getactive(str)
// setactive(str)

/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningListModel(diningListApi) {

  /**
   * @var list of dining halls
   */
  var diningList = [];

  function getDiningList() {
    return diningList;
  }

  function pushDiningHall(newDiningHall) {
    diningList.push(newDiningHall);
  }

  function popDiningHall() {
    diningList.pop();
  }

  function clearDiningList() {
    diningList = [];
  }

  function upload(){
   diningApi.postDining({
      name: name
   });
  }

  return {
      getDiningList: getDiningList,
      pushDiningHall: pushDiningHall,
      popDiningHall: popDiningHall,
      clearDiningList: clearDiningList,
    };
}

function DiningHall(name) {
  this.name = name;

  function getName() {
    return this.name;
  }
}

/**
 * Connects the EventModel to the EventView.
 */
function newDiningController(model, view) {
  view.bind('show', function() {
      model.getDiningList();
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
