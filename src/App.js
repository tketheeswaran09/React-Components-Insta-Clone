/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';
// import dummy-data
import dummyData from './dummy-data';

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data, setData] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar />
      <PostPage data={data} setData={setData} />
    </div>
  );
};

export default App;

