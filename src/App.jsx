import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import UserSelector from "./components/UserSelector";
import PostContent from "./components/PostContent";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const postsData = await postsResponse.json();
      const usersData = await usersResponse.json();
      setPosts(postsData);
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setSelectedPost(null);
  };

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <PostContent content={selectedPost} />
      <UserSelector users={users} onUserSelect={handleUserSelect} />

      <PostList
        posts={posts}
        selectedUserId={selectedUserId}
        handlePostSelect={handlePostSelect}
      />
    </div>
  );
};

export default App;
