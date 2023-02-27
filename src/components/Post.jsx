import { useEffect, useState } from 'react';
import '../components/Post.css';

const Post = () => {
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
 <div className='conatiner'>
  <div className='post-cont'>
    <div className='post-head'>
        <img className="post-dp" src={user.picture.medium}></img>
         <h4>{user.login.username}</h4>
         <ul className='text-muted'><li>{Math.floor(Math.random() * 24)}hr</li></ul>
    </div>

    <div className='post-content'>
    <img className='post-content-image'src={user.picture.large}></img>
    </div>
   
  
  
  </div>

 </div>
 
   
    </>
  )
}

export default Post;