var SearchListEntry = (props) => (

  //Displays full name
  <div>
  <div>
    {props.search.firstname + props.search.lastname}  
  </div>
 //Displays subject
  <div>
    {props.search.subject}  
  </div>
  </div>


)

export default SearchListEntry;