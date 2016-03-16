function main() {
    var eventModel = newEventModel(newEventApi());
    var eventView = newEventPostView(
        document.getElementById("name"),
        document.getElementById("description"),
        document.getElementById("save")
    );
    newEventPostController(eventModel, eventView);
}