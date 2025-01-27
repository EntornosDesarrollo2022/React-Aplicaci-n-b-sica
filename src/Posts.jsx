import { useState, useEffect } from 'react'

function Posts (){
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchPosts(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postList = await res.json();
        setPosts(postList);
        setLoading(false);
    }
    fetchPosts();
  }, [])

  useEffect(() => {
    async function fetchUserNames(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        const userList = await res.json();
        setUsers(userList);
        setLoading(false);
    }
    fetchUserNames();
  }, [posts])



  return (
    <div className="post-list">
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h1>Autor: {user ? user.name : "Desconocido"}</h1>
          </div>
        );
      })}
    </div>
  );
}  

export default Posts;