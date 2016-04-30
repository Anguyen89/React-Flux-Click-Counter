var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;


var ClickStore = new Store(Dispatcher);

var _clickCount = 0;


  ClickStore.count = function () {
    return _clickCount;
  };

  ClickStore.increment = function(){
    _clickCount++;
    ClickStore.__emitChange();
  };


  ClickStore.__onDispatch = function(payload){
    switch(payload.actionType){
    case('INCREMENT'):
      ClickStore.increment();
    }
  };

module.exports = ClickStore;
