import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super();
    //default value of state is empty search text
    this.state = {
      value: ''
    };
  }

  handleInputChange() {
    console.log('This got changed');
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <form>
          <input
            type="text" name="lessons"
            value={this.state.value} />

           <input type="submit" value="Search" onClick={this.handleInputChange.bind(this)} />
        </form>
      </div>

    );
  };
}

