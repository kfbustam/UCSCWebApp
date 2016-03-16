function main() {
  var diningListModel = newDiningListModel(newDiningApi());
  var diningListView = newDiningListView();
  var diningHallModel = newDiningHallModel(newDiningApi());
  newDiningListController(diningListModel, diningHallModel, diningListView);
}
