import React from "react";
import useData from "./hooks/useData";

function App(): JSX.Element {
  const posts = useData();

  return (
    <div className="App">
      <h1>React Guard Clauses</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            {post.id} {post.title} {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
