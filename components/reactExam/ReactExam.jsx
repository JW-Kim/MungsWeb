var React = require('react');
var ReactList = require('./reactList');
var ReactExamAction = require('../../actions/ReactExamAction');
var ReactExamStore = require('../../stores/ReactExamStore');

var ReactExam = React.createClass({
	
	
	getInitialState: function () {
		return {
			items: ReactExamStore.getReactList()
		};
	},
	
	componentDidMount: function() {
		ReactExamStore.addChangeListener(this._onChange);
	},
	
	componentWillUnmount: function() {
		ReactExamStore.removeChangeListener(this._onChange);
	},
	
	_onChange: function () {
		this.setState({
			items: ReactExamStore.getAll()
		});
	},
	
	addItem : function(){
		ReactExamAction.addItem();
	},
	
	render : function(){
		return(
			<div>	
				<section>
					<h1>top</h1>
					<button onClick={this.addItem}>글쓰기</button>
				</section>
				<section>
					<h1>List</h1>
					<ReactList items={this.state.items}/>
				</section>
			</div>	
		)
	}
});

module.exports = ReactExam;