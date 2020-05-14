//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log(props.data);
  return (
    <div className="posts-container-wrapper">
      {props.data.map((item) => {
        return <Post post={item} />
      })}
    </div>
  );
};

export default PostsPage;


