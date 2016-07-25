import React from 'react';
import { Link } from "react-router";
import Newfeeds from "./NewsfeedView";

export default class SearchListEntry extends React.Component {
  passProps() {
    console.log(this.props);
    return (<Newfeeds item={this.props.item} />);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.item.firstname + ' ' + this.props.item.lastname}
        </td>
        <td onClick={this.passProps.bind(this)}>
          {this.props.item.user_id}  
        </td>

      </tr>
    );
  }

}