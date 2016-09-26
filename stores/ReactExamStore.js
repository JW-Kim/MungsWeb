var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

var ReactExamStore = assign({}, EventEmitter.prototype, {
	reactListItems : [],
	
	getReactList : function(){
		var reactListItem = {
			key: 1,	
			content : '글내용이빈다.',
			name : '김정우',
			date : '2016.03.21'
		}

		this.reactListItems.push(reactListItem);
		return this.reactListItems;
	},

	addItem : function(){
		
		var key = this.reactListItems.length + 1;
	
		var reactListItem = {
			key : key,	
			content : '글내용이빈다.'+key,
			name : '추가',
			date : '2016.03.21'
		}
		
		this.reactListItems.push(reactListItem)
	},
	
	getAll: function() {
	    return this.reactListItems;
	},
	
	emitChange: function () {
	    this.emit('change');
	},

	addChangeListener: function(callback) {
	    this.on('change', callback);
	},

	removeChangeListener: function(callback) {
	    this.removeListener('change', callback);
	}
	
});

module.exports = ReactExamStore;
