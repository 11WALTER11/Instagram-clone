import { useEffect, useState } from "react";
import "../components/Post.css";

const Post = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(`https://randomuser.me/api/?results=10&page=${page}`)
      .then((response) => response.json())
      .then((data) => setUsers((prevUsers) => [...prevUsers, ...data.results]));
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {users.map((user, index) => (
        <div className="container" key={index}>
          <div className="post-cont">
            <div className="post-head">
              <img
                className="post-dp"
                src={user.picture.medium}
                alt="Profile"
              />
              <h4>{user.login.username}</h4>
              <ul className="text-muted">
                <li>{Math.floor(Math.random() * 24)}hr</li>
              </ul>
            </div>

            <div className="post-content">
              <img
                className="post-content-image"
                src={user.picture.large}
                alt="Post"
              />
            </div>
          </div>
        </div>
      ))}

      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
};

export default Post;
