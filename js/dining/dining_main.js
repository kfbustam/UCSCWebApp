function main() {
  var diningHallModel = newDiningHallModel(newDiningHallApi());
  var diningListModel = newDiningListModel(newDiningListApi());
  var diningListView = newDiningListView();
  newDiningListController(diningListModel, diningHallModel, diningListView);
}
