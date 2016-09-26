var React = require('react');

var ReactListItem = React.createClass({
	render : function(){		
		var itemNode = this.props.items.map(function(item){
			return (
				<tr key={item.key}>
					<td>
						{item.content}
					</td>
					<td>
						{item.name}
					</td>
					<td>
						{item.date}
					</td>
				</tr>	
			)
		});
		
		return (
			<tbody>
				{itemNode}
			</tbody>
		)
	}
});

module.exports = ReactListItem;