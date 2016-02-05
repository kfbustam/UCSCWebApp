function main() {
  var eventModel = newEventModel(newEventApi());
  var eventView = newEventView(
      document.getElementById("name"),
      document.getElementById("description"),
      document.getElementById("save")
    );
  newEventController(eventModel, eventView);

  var diningModel = newDiningModel(newDiningApi());
  var diningView = newDiningView(


    );
  newDiningController(diningModel, diningView());
}
