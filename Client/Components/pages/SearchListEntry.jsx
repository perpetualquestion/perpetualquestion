import React from 'react';

export default class SearchListEntry extends React.Component {
  render() {
    return (
      <tr>
        <td>Search List Entry</td>
        <td>
          {this.props.item.user_id}  
        </td>
        <td>
          {this.props.item.lesson}  
        </td>

      </tr>
    );
  }

}