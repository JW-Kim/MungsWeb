var React = require('react');
var ReactList = require('./ReactList');
var ReactExamAction = require('../../actions/ReactExamAction');
var ReactExamStore = require('../../stores/ReactExamStore');

//ReactExam Component 생성
var ReactExam = React.createClass({
	//getInitialState : component 실행시 한번만 호출하여 초기 state 설정
	getInitialState: function () {
		return {
			items: []
		};
	},
	
	//componentDidMount : 컴포넌트가 랜더링 된 후 자동으로 호출되는 메소드
	componentDidMount: function() {
		ReactExamAction.getReactList();
		ReactExamStore.addChangeListener(this._onChange);
	},
	
	componentWillUnmount: function() {
		ReactExamStore.removeChangeListener(this._onChange);
	},
	
	_onChange: function () {
		//state 변경
		this.setState({
			items: ReactExamStore.getAll()
		});
	},
	
	addItem : function(){
		ReactExamAction.addItem();
	},
	
	//render : React Component Tree 리턴
	//state : 가변성을 가짐
	render : function(){
		//<div> 태그 : 실제 Dom 노드가 아닌 React div 컴포넌트 임
		return(
			<div className="reactExam">	
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