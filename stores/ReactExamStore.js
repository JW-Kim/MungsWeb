var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

var ReactExamStore = assign({}, EventEmitter.prototype, {
	reactListItems : [],
	
	getReactList : function(){		
		this.reactListItems = [];
		
		$.ajax({
			url : '../components/reactExam/listData.json',
			dataType : 'json',
	        cache: false,
			success : function(data){
				this.reactListItems = data;
				return this.reactListItems;
				
			}.bind(this),
			error : function(xhr, status, err){
				console.log('error', status, err.toString())
				
			}.bind(this)
		});
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
