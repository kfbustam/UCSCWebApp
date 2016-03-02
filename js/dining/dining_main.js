function main() {
  var diningHallModel = newDiningHallModel(newDiningHallApi());
  var diningListView = newDiningListView();
  newDiningListController(diningListModel, diningHallModel, diningListView);

}
