import React from 'react';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import VideoGrid from './Component/VideoGrid';



function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;

