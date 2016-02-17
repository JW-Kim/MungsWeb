var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');
var MyGrid = require('./MyGrid');

var MyButtonController = React.createClass({
  getInitialState: function () {
    return {
      items: ListStore.getAll()
    };
  },

  componentDidMount: function() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  },

  render: function() {
    return(
   		<div>
	    	<MyButton
		      items={this.state.items}
		      onClick={this.createNewItem}
		    />
		    <MyGrid
		      items={this.state.items}
		      onClick={this.createNewItem}
		    />
		</div>
    )
  }

});

module.exports = MyButtonController;
