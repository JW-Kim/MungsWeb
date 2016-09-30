var React = require('react');
var ReactListItem = require('./ReactListItem');

var ReactList = React.createClass({
	
	//부모 데이터는 properties 로 사용 : 접근은 this.props로 가능 
	//props는 불변성
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