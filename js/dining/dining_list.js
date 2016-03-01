/**
 * Connects the DiningModel to the DiningView.
 */
function newDiningController(model, view) {
  view.bind('loaddininglist', function(handlers) {
      var dining_list = model.getList();
      var ul = document.getElementById("dining_list");
      for (i=0;i<dining_list.length;i++) {
        var li = document.createElement("li");
        var name = dining_list[i];
        li.setAttribute("id", name);
        li.appendChild(document.createTextNode(name + "\n"));
        li.onclick = function() {
          if(handlers.addmeal) {
            handlers.addmeal(this);
          }
        };
        ul.appendChild(li);
      }
    });
  
  view.bind('addmeal', function(li) {
      var id = "dining_hall";
      var dh = document.getElementById(id);
      if (dh != null) $(dh).remove();
      var li_ul = document.createElement("ul");
      li_ul.setAttribute("id", id);
      li_ul.appendChild(document.createTextNode(model.getTod() + "\n"));
      var dining_hall = model.getDiningHall();
      for (j=0;j<dining_hall.length;j++) {
        var li_ul_li = document.createElement("li");
        var food_name = dining_hall[j].getName();
        li_ul_li.appendChild(document.createTextNode(food_name + "\n"));
        li_ul.appendChild(li_ul_li);
      }
      $(li_ul).insertAfter(li);
  });

  return {};
}

function newDiningView() {
  // Map between callbacks and their handlers
  var handlers = {};

  function bind(callback, fn) {
    handlers[callback] = fn;
  }
  
  window.onload = function() {
    if(handlers.loaddininglist) {
      handlers.loaddininglist(handlers);  
    }
  };

  return {
    bind: bind
  };
}
