import React from 'react';
import Helper from '../../Helper/Helper';

export default class Signout extends React.Component {
  constructor (props) {
    super(props);

  }

  signout () {
    Helper.signout(); 
  }
  
  render() {

      return (  
        <div>  
          <button onClick={ this.signout.bind(this)}>Sign Out</button>
        </div>
      );

  }

}