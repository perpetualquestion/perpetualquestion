import SearchListEntry from '/SearchListEntry.jsx'

export var SearchList = (props) => (

  //Need to update with property handed down
  <div> 
    {props.searches.map(search) => (      //Iterates through search data and creates an entry for each to populate list
      <SearchListEntry search={search} /> 
    )}
  </div>

);