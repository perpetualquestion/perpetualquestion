import React from 'react';
import _ from 'lodash';
import SearchListEntry from './SearchListEntry'

export default class SearchList extends React.Component {
	renderItems() {
		return _.map(this.props.searches, (item, index) =>
		<SearchListEntry key={index} item={item} />);
	}

  render() {
  	return (
  		<table>
  			<tbody>
  				<tr>
  					<th width="200px">Name</th>
            <th width="200px">Lesson</th>
  				</tr>
  				{this.renderItems()}
  			</tbody>
  		</table>
  	);
  }



}
