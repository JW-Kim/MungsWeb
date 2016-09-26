var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var MyButtonController = require('./components/MyButtonController');
var Home = require('./components/Home');
var ReactInfo = require('./components/reactInfo/ReactInfo');
var ReactExam = require('./components/reactExam/ReactExam');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

ReactDOM.render(
  	<Router>
		<Route path="/" component={Home}>
			<Route path="reactInfo" component={ReactInfo}/>
			<Route path="reactExam" component={ReactExam}/>
		</Route>
	</Router>,
  document.querySelector('#wrapper')
);
