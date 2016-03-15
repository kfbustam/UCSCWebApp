// onclick
// getactive(str)
// setactive(str)
/**
 * Creates a new DiningPost model.
 * Takes an event API gateway as a parameter to post event data.
 */
function newDiningListModel(diningApi) {

    var diningList = [];

    function init(data) {
        for (i = 0; i < data.length; i++) {
            diningList[i] = data[i];
        }
    }

    function apiCall(handlers) {
        diningApi.getDiningList(handlers);
    }

    function getDiningList() {
        return diningList;
    }

    return {
        init: init,
        apiCall: apiCall,
        getDiningList: getDiningList,
    };
}
