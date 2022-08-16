import React from 'react'
import { Link } from 'react-router-dom';

const User = () => {

    const [search,setsearch]=React.useState("");
    const [Details,setDetails]=React.useState([{""}]);
    

    const Fetch = async () => {
        let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        let details= await api.json();
        setDetails(details[0].word==`${search}`?details:alert("This word not in my Dictionary"));
    }

    const Result=()=>{
       return(
            <div>
                <h1>{Details.}</h1>
            </div>
       );
    }

  return (
    <div>
        <h1>This is User Page</h1>
        <label htmlFor='search'>Please search a word</label>
        <input onChange={(event:any)=>{setsearch(event.target.value)}} placeholder='Word here!'></input>
        <button onClick={Fetch}>submit</button>
        <Result/>
    </div>
  )
}

export default User