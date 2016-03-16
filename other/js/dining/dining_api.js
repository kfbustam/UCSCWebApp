function newDiningApi() {
    function getDiningList(handlers) {
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "http://ec2-54-183-90-100.us-west-1.compute.amazonaws.com:8080/dining",
            success: function(responseData, textStatus, jqXHR) {
                console.log(responseData);
                handlers.loadDiningList(handlers, responseData);
            },
            error: function(responseData, textStatus, errorThrown) {
                console.log('GET failed.');
            }
        });
    }

    function getDiningHall(handlers, e) {
        $.ajax({
            type: 'POST',
            data: e,
            dataType: "json",
            url: "http://ec2-54-183-90-100.us-west-1.compute.amazonaws.com:8080/dining/menu",
            success: function(responseData, textStatus, jqXHR) {
                console.log(responseData);
                handlers.loadDiningHall(responseData);
            },
            error: function(responseData, textStatus, errorThrown) {
                console.log(responseData.responseText);
            }
        });
    }

    return {
        getDiningList: getDiningList,
        getDiningHall: getDiningHall
    };
}
