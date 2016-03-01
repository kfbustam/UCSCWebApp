function main() {
  var diningListModel = newDiningListModel(newDiningListApi());
  var diningHallModel = newDiningHallModel(newDiningHallApi());
  var diningListView = newDiningListView();
  newDiningListController(diningListModel, diningHallModel, diningListView);
}
