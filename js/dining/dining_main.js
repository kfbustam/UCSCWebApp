function main() {
  var diningListModel = newDiningListModel(newDiningListApi());
<<<<<<< HEAD
  var diningListView = newDiningListView();
  newDiningListController(diningListModel, diningListView);
=======
  var diningHallModel = newDiningHallModel(newDiningHallApi());
  var diningListView = newDiningListView();
  newDiningListController(diningListModel, diningHallModel, diningListView);
>>>>>>> origin/Develop
}
