import React from 'react';
import { Link } from "react-router";
import Newfeeds from "./NewsfeedView";
import Helper from "../../Helper/Helper";

export default class SearchListEntry extends React.Component {
  constructor(props) {
    super();
    this.state = {
      enrolled: ''
    };
  }

  scheduleLesson() {
    console.log(this.props);
    var setState = this.setState.bind(this);
    var enrolled = Helper.enroll(this.props.item, function(enrolled) {
      setState({enrolled.lesson});
    });
  }

  render() {
    if (!this.state.enrolled) {
      return (
          <tr>
            <td>
              {this.props.item.firstname + ' ' + this.props.item.lastname}
            </td>
            <td onClick={this.scheduleLesson.bind(this)}>
              <a href="/">{this.props.item.lesson}</a>
            </td>
          </tr>
      );
    } else {
      return (<h4>You are enrolled in {this.state.enrolled}</h4>);
    }
  }

}