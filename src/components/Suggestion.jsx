import React, { useState, useEffect } from "react";
import '../components/Suggestion.css';

const Suggestion = () => {

    const [user, setUser] = useState(null);
    

    

    useEffect(() => {
      fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => setUser(data.results[0]));
    }, []);
  
    if (!user) {
      return <div>Loading...</div>;
    }
  

  return (
    <>
    <div className="sugg">
     <div className="dp-cont"> <img className="dp" src={user.picture.large}></img>
     <div className="username-head-text"> {user.name.first} {user.name.last} <div className="Uid-text">{user.login.username} <div className="swicth-btn"> <a href="#">Switch</a></div></div></div>
     

     </div>
     <div className="suggestions-list">
      <h6>Suggestions for you</h6>

      <div className="dp-cont"> <img className="dp" src={user.picture.large}></img>
     <div className="username-head-text"> {user.name.first} {user.name.last} <div className="Uid-text">{user.login.username} <div className="follow-btn"> <a href="#">Follow</a></div></div></div></div>

     <div className="dp-cont"> <img className="dp" src={user.picture.large}></img>
     <div className="username-head-text"> {user.name.first} {user.name.last} <div className="Uid-text">{user.login.username} <div className="follow-btn"> <a href="#">Follow</a></div></div></div></div>

     <div className="dp-cont"> <img className="dp" src={user.picture.large}></img>
     <div className="username-head-text"> {user.name.first} {user.name.last} <div className="Uid-text">{user.login.username} <div className="follow-btn"> <a href="#">Follow</a></div></div></div></div>
     

      
     </div>
     
     
     
   






      
    </div>
    
    
    
    
    </>
  )
}

export default Suggestion;