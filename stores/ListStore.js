var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
import $ from 'jquery';

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
	  $.ajax({
		  url : '/user'
	  })
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
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

module.exports = ListStore;
