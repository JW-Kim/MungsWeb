var React = require('react');
var ReactListItem = require('./ReactListItem');

var ReactList = React.createClass({
		  
	render : function(){
		return(
			<table>
				<thead>
					<tr>
						<td>
							글제목
						</td>
						<td>
							글쓴이
						</td>
						<td>
							시간
						</td>
					</tr>
				</thead>	
				<ReactListItem
					items = {this.props.items}
				/>
			</table>
		)
	}
});

module.exports = ReactList;