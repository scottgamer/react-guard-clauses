import { useState, useEffect } from "react";

const API_URL =
  process.env.REACT_APP_JSON_PLACEHOLDER_URL ||
  "https://jsonplaceholder.typicode.com";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useData = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPosts();
  });

  return posts;
};

export default useData;
