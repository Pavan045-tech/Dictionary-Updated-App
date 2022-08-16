import React from 'react'

const Admin = () => {

    const [search,setsearch]=React.useState("");
    const [Details,setDetails]=React.useState([""]);

    const Fetch = async () => {
        let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        let details= await api.json();
        setDetails(details[0].word==`${search}`?details:alert("This word not in my Dictionary"));
    }


  return (
    <div>
        <h1>This is Admin Page</h1>
        <label htmlFor='search'>Please search a word</label>
        <input placeholder='Word here!'></input>
        <input onChange={(event:any)=>{setsearch(event.target.value)}} placeholder='Word here!'></input>
        <button onClick={Fetch}>submit</button>
    </div>
  )
}

export default Admin