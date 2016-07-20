var SearchListEntry = (props) => (
  //Displays full name
  <div>
    <div>
      {props.search.firstname + props.search.lastname}  
    </div>
    //Display Subject
    <div>
      {props.search.subject}  
    </div>
  </div>
)

export default SearchListEntry;