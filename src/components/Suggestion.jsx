import React, { useState, useEffect } from "react";
import '../components/Suggestion.css';

const Suggestion = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
          .then((response) => response.json())
          .then((data) => setUser(data.results[0]));
      }, []);
    
      if (!user) {
        return <div>Loading...</div>;
      }


  return (
    <>
    <div className="sugg">
     <ul>

        <li>  <img className="dp-image" src={user.picture.medium}></img>   <h3>{user.name.first} {user.name.last}</h3>  </li>
        <li> {user.login.username} </li>
     </ul>

      
    </div>
    
    
    
    
    </>
  )
}

export default Suggestion;