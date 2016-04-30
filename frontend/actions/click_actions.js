var Dispatcher = require('../dispatcher/dispatcher');

var ClickActions = {
  increment: function(){
    Dispatcher.dispatch({
      actionType: 'INCREMENT'
    });
  }
};


module.exports = ClickActions;
