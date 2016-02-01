function main() {
  var model = newEventModel(newEventApi());
  var view = newEventView(
      document.getElementById("name"),
      document.getElementById("description"),
      document.getElementById("save")
    );
  newEventController(model, view);
}
