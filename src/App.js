import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Header from './components/Header';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Playlist 
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <Player 
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
}

export default App;
