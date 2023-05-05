import React from 'react'
import Navigation from './components/Navbar/Navigation'
import Status from './components/storeis/Status'
import Post from './components/Posts/Post'
import dummyData from './dummy-data';
function App() {
  return (
    <>
    <Navigation />
    <Status />
  <Post posts={dummyData}/>
    </>
  )
}

export default App