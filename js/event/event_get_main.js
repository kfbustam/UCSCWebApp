function main() {
  var eventModel = newEventModel(newEventTestApi());
  var eventView = newEventGetView(
      document.getElementById("post_event")
    );
  newEventGetController(eventModel, eventView);
}
