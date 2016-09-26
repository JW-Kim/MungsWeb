var AppDispatcher = require('../dispatcher/AppDispatcher');

var ReactExamAction = {
	addItem : function(){
		AppDispatcher.dispatch({
			actionType : 'ADD_REACT_EXAM_ITEM'
		})
	}
}

module.exports = ReactExamAction;
