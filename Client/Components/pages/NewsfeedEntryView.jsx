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
  <div>
    {props.message.feeds}
  </div>
);

export default NewsfeedEntryView;