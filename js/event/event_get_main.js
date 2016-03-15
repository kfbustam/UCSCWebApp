function main() {
  var eventModel = newEventModel(newEventApi());
  var eventView = newEventGetView();
  newEventGetController(eventModel, eventView);
}
