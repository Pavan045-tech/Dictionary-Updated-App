import React from 'react';
import { useParams } from 'react-router-dom';


const Result = () => {

const {search} =useParams();

const [Details,setDetails]=React.useState([""]);

const Fetch = async () => {
    let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    let details= await api.json();
    setDetails(details[0].word==`${search}`?details:alert("This word not in my Dictionary"));
}

const Datafetch=() => {
    Fetch();
    return(
        console.log(Details)
    );
}

  return (
    <div></div>
  )
}

export default Result