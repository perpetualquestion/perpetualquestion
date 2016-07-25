import React from 'react';

export default class SearchListEntry extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.item.firstname + ' ' + this.props.item.lastname}
        </td>
        <td>
          {this.props.item.lesson}  
        </td>
      </tr>
    );
  }

}