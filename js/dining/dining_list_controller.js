/**
 * Connects the DiningModel to the DiningView.
 */
function newDiningListController(dlmodel, dhmodel, view) {
    view.bind('makeDiningListApiCall', function(handlers) {
        dlmodel.apiCall(handlers);
    });

    view.bind('loadDiningList', function(handlers, data) {
        dlmodel.init(data);
        var diningList = dlmodel.getDiningList();
        var ul = document.getElementById("dining_list");
        for (i = 0; i < diningList.length; i++) {
            var li = document.createElement("li");
            var name = diningList[i];
            li.setAttribute("id", name);
            li.appendChild(document.createTextNode(name + "\n"));
            li.onclick = function() {
                if (handlers.makeDiningHallApiCall) {
                    handlers.makeDiningHallApiCall(handlers, this.textContent || this.innerText);
                }
            };
            ul.appendChild(li);
        }
    });

    view.bind('makeDiningHallApiCall', function(handlers, text) {
        dhmodel.apiCall(handlers, text);
    });

    view.bind('loadDiningHall', function(data) {
        var id = "dining_hall";
        var ul = document.getElementById(id);
        if (ul != null) $(ul).empty();
        ul.appendChild(document.createTextNode(dhmodel.getTod() + "\n"));
        dhmodel.init(data);
        var diningHall = dhmodel.getDiningHall();
        for (j = 0; j < diningHall.length; j++) {
            var li = document.createElement("li");
            var br = document.createElement("br");
            var foodName = diningHall[j].getName();
            var foodAttr = diningHall[j].getAttrs();
            li.appendChild(document.createTextNode(foodName));
            for (k = 0; k < foodAttr.length; k++) {
                li.appendChild(br);


                /* changes attribute strings to the appropriate images*/
                var aimg = document.createElement('img');

                if (foodAttr[k] == 'eggs') {
                    aimg.src = 'css/attributes/eggs.png';
                    aimg.alt = 'eggs';
                }
                if (foodAttr[k] == 'fish') {
                    aimg.src = 'css/attributes/fish.png';
                    aimg.alt = 'fish';
                }
                if (foodAttr[k] == 'gluten') {
                    aimg.src = 'css/attributes/glutenf.png';
                    aimg.alt = 'gluten free';
                }
                if (foodAttr[k] == 'milk') {
                    aimg.src = 'css/attributes/dairy.png';
                    aimg.alt = 'dairy';
                }
                if (foodAttr[k] == 'nuts') {
                    aimg.src = 'css/attributes/nuts.png';
                    aimg.alt = 'nuts';
                }
                if (foodAttr[k] == 'soy') {
                    aimg.src = 'css/attributes/soy.png';
                    aimg.alt = 'soy';
                }
                if (foodAttr[k] == 'veggie') {
                    aimg.src = 'css/attributes/vegetarian.png';
                    aimg.alt = 'vegetarian';
                }
                if (foodAttr[k] == 'vegan') {
                    aimg.src = 'css/attributes/vegan.png';
                    aimg.alt = 'vegan';
                }
                if (foodAttr[k] == 'pork') {
                    aimg.src = 'css/attributes/pork.png';
                    aimg.alt = 'pork';
                }
                if (foodAttr[k] == 'beef') {
                    aimg.src = 'css/attributes/beef.png';
                    aimg.alt = 'beef';
                }
                li.appendChild(aimg);
            }
            ul.appendChild(li);
        }
    });

    return {};
}