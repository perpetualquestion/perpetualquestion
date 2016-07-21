import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super();
    //default value of state is empty search text
    this.state = {
      value: ''
    };
  }

  handleSearch(e) {
    e.preventDefault();
    console.log(this.refs.text.value.trim());
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
      </div>

    );
  };
}

