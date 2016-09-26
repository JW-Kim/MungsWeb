var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({		  
	render: function(){
		return(
			<div>
				<header id="header">
					<h1><Link to="/">header</Link></h1>
					<div>
						<ul>
							<li><Link to="reactInfo">react 설명</Link></li>
							<li><Link to="reactExam">react 예제</Link></li>
						</ul>
					</div>
				</header>
				<div>
					{this.props.children}
				</div>
				<footer id="footer"><h1>footer</h1></footer>
			</div>
		)
	}	
});

module.exports = Home;
