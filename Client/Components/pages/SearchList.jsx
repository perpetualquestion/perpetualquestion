import React from 'react';
import _ from 'lodash';
import SearchListEntry from './SearchListEntry'

export default class SearchList extends React.Component {
	renderItems() {
		console.log('here in renderItems ', this.props.searches);
		return _.map(this.props.searches, (item, index) =>
		<SearchListEntry key={index} item={item} />);
	}

  render() {
  	return (
  		<table>
  			<tbody>
  				<tr>
  					<th>Search Results</th>
  				</tr>
  				{this.renderItems()}
  			</tbody>
  		</table>
  	);
  }



}
