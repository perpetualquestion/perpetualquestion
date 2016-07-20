import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super();
    //default value of state is empty search text
    this.state = {
      value: ''
    };
  }


  render() {
    return (
      <div>
        <input
          type="text"
          paceholder="Search a subject"
          value={this.state.value}
          // onChange={this.handleInputChange.bind(this)} <--- function that changes the state based on what is entered
         />
        <button></button>
      </div>

    )
  }
}

