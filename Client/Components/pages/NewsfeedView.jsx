import React from 'react';
import NewfeedsEntryView from './NewsfeedEntryView'
import helper from '../../Helper/Helper';

export default class Newfeeds extends React.Component {
  constructor() {
    super();
    //dummy data
    this.messages = helper.newsfeed();
  }

  //Display all message for particular teacher.
  render() {
    return (
      <div>
    		<h3>Newfeeds</h3>
        {this.messages.map((message, index)=>(
          <NewfeedsEntryView message={message} key={index} />
        ))}
      </div>
    )
  }
}