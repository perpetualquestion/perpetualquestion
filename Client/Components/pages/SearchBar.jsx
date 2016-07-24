import React from 'react';
import SearchList from './SearchList';
var helper = require('../../Helper/Helper.js');

export default class Search extends React.Component {
  constructor(props) {
    super();
    //default value of state is empty search text
    this.state = {
      searches: ''
    };
  }

  handleSearch(e) {
    e.preventDefault();
    var text = this.refs.text.value.trim();
    var setState = this.setState.bind(this);
    helper.search(text, function(data) {
      setState({searches : data});
    });
  }

  handleInputChange() {
    console.log("Changing the search text...");
  }

  render() {
    return (
      <div>
        <form method="GET" onSubmit={this.handleSearch.bind(this)}>
          <h4>Search for skill you want to learn</h4>
          <input type="text" ref="text" onChange={this.handleInputChange.bind(this)} className="form-control" />

          <input type="submit" value="Search" />
        </form>
        <SearchList
          searches={this.state.searches}
        />
      </div>

    );
  };
}

