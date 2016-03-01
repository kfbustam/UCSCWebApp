// onclick
// getactive(str)
// setactive(str)

/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningListModel(diningListApi) {
  
  function getList() {
    var json = diningListApi.getDiningList();
    var json_array = JSON.parse(json);
    var dining_list = [];
    
    for (i=0;i<json_array.length;i++) {
        var name = json_array[i];
        dining_list[i] = name;
    }
    return dining_list;
  }
  
  function getDiningHall() {
    var json = diningListApi.getDiningHall();
    var json_array = JSON.parse(json);

    var breakfast_array = JSON.parse(json_array.breakfast);
    alert(breakfast_array);

    var breakfast = [];
    for (i=0;i<breakfast_array.length;i++) {
      breakfast[i] = Food(breakfast_array[i].name, JSON.parse(breakfast_array[i].attribs));
    }
    alert("Hihi");
    
    return breakfast;
  }

  return {
      getList: getList,
      getDiningHall: getDiningHall,
    };
}

function Food(foodName, foodAttr) {
  var name = foodName;
  var attr = foodAttr;

  function getName() {
    return this.name;
  }

  function getAttrs() {
    return this.attr;
  }

  return {
      getName: getName,
      getAttrs: getAttrs
  };
}

/**
 * Connects the DiningModel to the DiningView.
 */
function newDiningListController(model, view) {
  view.bind('loaddininglist', function() {
      var dining_list = model.getList();
      var ul = document.getElementById("dining_list");
      for (i=0;i<dining_list.length;i++) {
        var li = document.createElement("li");
        var name = dining_list[i];
        li.setAttribute("id", name);
        li.appendChild(document.createTextNode(name + "\n"));
        li.onclick = function() {
          var li_ul = document.createElement("ul");
          li_ul.setAttribute("id", "dining_hall");
          var dining_hall = model.getDiningHall();
          for (j=0;j<dining_hall.length;j++) {
            var li_ul_li = document.createElement("li");
            var food_name = dining_hall[j];
            li_ul_li.appendChild(document.createTextNode(dining_hall_name + "\n"));
          }
          li.appendChild(li_ul);
        };
        ul.appendChild(li);
      }
    });

  return {};
}

function newDiningListView() {
  // Map between callbacks and their handlers
  var handlers = {};

  function bind(callback, fn) {
    handlers[callback] = fn;
  }
  
  window.onload = function() {
    if(handlers.loaddininglist) {
      handlers.loaddininglist();  
    }
  };

  return {
    bind: bind
  };
}
