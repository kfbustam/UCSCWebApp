function main() {
  var diningModel = newDiningModel(newDiningApi());
  var diningView = newDiningView();
  newDiningController(diningModel, diningView);
}
