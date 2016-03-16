/**
 * Connects the EventModel to the EventView.
 */
function newEventPostController(model, view) {
    view.bind('saveClick', function(name, description) {
        model.upload(name, description);
    });

    return {};
}