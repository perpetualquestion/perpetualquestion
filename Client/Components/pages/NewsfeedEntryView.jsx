import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


// //Initialize util until utilites file is created
// import util from '../util/util';

var NewsfeedEntryView = (props) => (
  // //Initialize ReactCSSTransitionGroup
  // <ReactCSSTransitionGroup transitionName='message' transitionEnterTimout={3000} transitionLeaveTimeout={5000}>
  //   {props.message.text}
  // </ReactCSSTransitionGroup>

  //Display individual message for teacher.
  <p className='lead bg-info'>
    {console.log('in newsfeedentryview ',props.student)}
    {props.student}  wants to take your {props.lesson}
  </p>
);

export default NewsfeedEntryView;