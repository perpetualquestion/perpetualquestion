import React from "react";
import Helper from "../../Helper/Helper"

export default class Profile extends React.Component {
  constructor(props) {
    super()
    this.state = {
      //An user's profile should base on the login user's information
      firstName: '', 
      lastName: '', 
      userName: '', 
      github: '', 
      linkedin: '',
      skills: ''
    }
  }

  componentWillMount() {
    //we should pass-in the username of current-log-in user
    // var user = 'Yuyi';
    console.log("Component did mount called?");
    var update = this.updateAll.bind(this);
    Helper.searchProfile(function (data) {
      //Notice, data should be an object from successulf ajax call, and setProfile
      if( !data ){return;}
      console.log(data[0]);
      update(data[0]);
    });
  }

  addLesson(e) {
    e.preventDefault();
    var requestObj = {
      lesson: this.refs.lesson.value.trim()
    };
    console.log('this add lesson get called with:', requestObj);
    Helper.offerClass(requestObj);
  }

  updateAll(obj) {
    this.setState({
      firstName: obj.firstname,
      lastName: obj.lastname,
      userName: obj.username,
      github: obj.github,
      linkedin: obj.linkedin,
      email: obj.email
    });
  }   

	render() {
		return (
        <div>
          <div className='col-md-6'>
            <h2>Profile</h2>
            <p>First Name:  <span> {this.state.firstName} </span> </p>
            <p>Last Name:  <span> {this.state.lastName} </span> </p>
            <p>User Name:  <span> {this.state.userName} </span> </p>
            <p>Github:  <span> {this.state.github} </span> </p>
            <p>Linkedin:  <span> {this.state.linkedin} </span> </p>
            <p>Email:  <span> {this.state.email} </span> </p>
          </div>
          <div className='col-md-6'>
            <h2>Add Lessons</h2>
            <form method="post" onSubmit={this.addLesson.bind(this)} >
              <p>Lesson to offered:</p>
              <input type="text" ref="lesson" />
              <br />
              <input type="submit" value="Add Lesson" />
            </form>
          </div>   
        </div>
		);
	}
}

//general information from teacher (private profile)

//search bar: look at all people's
 
