import React from 'react';
import { Link } from "react-router";
import Newsfeed from "./NewsfeedView";
import Helper from "../../Helper/Helper";

export default class SearchListEntry extends React.Component {
  constructor(props) {
    super();
    this.state = {
      enrolled: ''
    };
  }

  enroll() {
    console.log(this.props.item);
    var setState = this.setState.bind(this);
    Helper.enroll(this.props.item, function(enrolled) {
      console.log(enrolled);
      setState({enrolled});
    });
  }

  render() {
    if (!this.state.enrolled) {
      return (
          <tr>
            <td>
              {this.props.item.firstname + ' ' + this.props.item.lastname}
            </td>
            <td onClick={this.enroll.bind(this)}>
              <a href="/">{this.props.item.lesson}</a>
            </td>
          </tr>
      );
    } else {
      return (<h4>You are enrolled in {this.state.enrolled}</h4>);
    }
  }

}