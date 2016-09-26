var React = require('react');

var ReactInfo = React.createClass({
	render : function(){
		return(
			<div>
				<nav>
					<h1>nav</h1>
				</nav>
				<section>
					<h1>section</h1>
					<article>
						<h1>article</h1>
					</article>
				</section>
			</div>
		)
	}
});

module.exports = ReactInfo;