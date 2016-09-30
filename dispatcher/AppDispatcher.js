var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');
var ReactExamStore = require('../stores/ReactExamStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
  	case 'ADD_NEW_ITEM':
  		ListStore.addNewItemHandler(action.text);
  		ListStore.emitChange();
  		break;
      
  	case 'ADD_REACT_EXAM_ITEM':
  		ReactExamStore.addItem();
  		ReactExamStore.emitChange();
  		break;
  		
  	case 'GET_REACT_LIST':	
  		ReactExamStore.getReactList();
  		ReactExamStore.emitChange();
  		break;
  		
    default:
  }
})

module.exports = AppDispatcher;
