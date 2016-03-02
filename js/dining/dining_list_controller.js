/**
 * Connects the DiningModel to the DiningView.
 */
function newDiningListController(dlmodel, dhmodel, view) {
  view.bind('loadDiningList', function(handlers) {
      var diningList = dlmodel.getDiningList();
      var ul = document.getElementById("dining_list");
      for (i=0;i<diningList.length;i++) {
        var li = document.createElement("li");
        var name = diningList[i];
        li.setAttribute("id", name);
        li.appendChild(document.createTextNode(name + "\n"));
        li.onclick = function() {
          if(handlers.addMeal) {
            handlers.addMeal();
          }
        };
        ul.appendChild(li);
      }
    });
  
  view.bind('addMeal', function() {
      var id = "dining_hall";
      var ul = document.getElementById(id);
      if (ul != null) $(ul).empty();
      ul.appendChild(document.createTextNode(dhmodel.getTod() + "\n"));
      var diningHall = dhmodel.getDiningHall();
      for (j=0;j<diningHall.length;j++) {
        var li = document.createElement("li");
        var br = document.createElement("br");
        var foodName = diningHall[j].getName();
        var foodAttr = diningHall[j].getAttrs();
        li.appendChild(document.createTextNode(foodName));
        for (k=0;k<foodAttr.length;k++) {
          li.appendChild(br);
          li.appendChild(document.createTextNode(foodAttr[k]));
        }
        ul.appendChild(li);
      }
  });

  return {};
}
