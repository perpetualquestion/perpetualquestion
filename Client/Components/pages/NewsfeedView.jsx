import React from 'react';
import NewfeedsEntryView from './NewsfeedEntryView'

var Newfeeds = (props) =>(
  //Display all message for particular teacher.
  <div>
		<h3>Newfeeds</h3>
    {props.messages.map(message=>(
      <NewfeedsEntryView message={message} />
    ))}
  </div>
);

export default Newfeeds;