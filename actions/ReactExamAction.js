var AppDispatcher = require('../dispatcher/AppDispatcher');

var ReactExamAction = {
	addItem : function(){
		AppDispatcher.dispatch({
			actionType : 'ADD_REACT_EXAM_ITEM'
		})
	},
	
	getReactList : function(){
		AppDispatcher.dispatch({
			actionType : 'GET_REACT_LIST'
		})
	}
}

module.exports = ReactExamAction;
