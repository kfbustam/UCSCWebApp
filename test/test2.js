var expect = chai.expect;

var test_div = document.getElementById("test_div");

function newMockObserver() {
    var mock = {};
    mock.notified = false;

    mock.update = function() {
      mock.notified = true;
    }
    return mock;
}

describe('Event List', function() {
  function newMockEventsApi() {
    var events = null;

    function postEventsToServer() {
      return events;
    }

    function postEvents(eventInfo) {
      events = eventInfo;
    }
    return {
      postEventsToServer: postEventsToServer,
      postEvents: postEvents,
    };
  }

  describe('Model', function() {
    it('has correct null state', function() {
      var model = newEventPostModel(null);
      var mockApi = newMockEventsApi();

      mockApi.postEvents("");
      expect(model.postEventsToServer()).to.deep.equal("");
    });

    it('handles posts correctly', function() {
      var view = gatherTextBoxData();
      var mockApi = newMockEventsApi();
      var observer = newMockObserver();
      var model = newEventPostModel(mockApi);


      model.postEvents(["a","b","c","d","e","f"])
      model.update();
      expect(model.postEventsToServer()).to.deep.equal("a,b,c,d,e,f");


    });

    it('notifies observer on update', function() {
      var view = gatherTextBoxData();
      var observer = newMockObserver();
      view.attach(observer);
      view.updateEvents();
      expect(observer.notified).to.be.true;
    });
  });

  it('has correct initial view', function() {
    var model = newEventPostModel(newMockEventsApi());
    var view = gatherTextBoxData();
    var controller = newEventPostController(model, view);
    test_div.appendChild(view.root);

    expect(test_div.innerHTML).to.equal("<ul></ul>");
  });
  
});

describe('Observable', function() {
  it('should notify attached observers', function() {
      
    var observable = newObservable();

    var observer1 = newMockObserver();
    var observer2 = newMockObserver();

    observable.attach(observer1);
    observable.attach(observer2);

    observable.notify()

    expect(observer1.notified).to.be.true;
    expect(observer2.notified).to.be.true;
  });

});
