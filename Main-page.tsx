import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    const [state,setstate]=React.useState("");

    const change = (event:any)=>{
        setstate(event.target.value);
    }
  return (
    <div>
        <h1>Welcome to Pavan Library</h1>
        <h2>Please Choose the following to Move</h2>
        <select onChange={change}>
            <option>Choose Your Choice</option>
            <option>I'm admin</option>
            <option>I'm a User</option>
        </select>
        <button><Link to={`/${state}`}>Submit</Link></button>
    </div>
  );
}

export default Main