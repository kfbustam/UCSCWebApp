function main() {
  var diningListModel = newDiningListModel(newDiningListApi());
  var diningListView = newDiningListView();
  newDiningListController(diningListModel, diningListView);
}
