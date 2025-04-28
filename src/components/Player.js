import React from 'react';
import '../styles/Player.css';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  return (
    <div className="player">
      {currentSong ? (
        <>
          <div className="album-art">
            <img src={currentSong.cover} alt={currentSong.title} />
          </div>
          <div className="song-info">
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>
          </div>
          <div className="youtube-container">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${currentSong.videoId}?autoplay=1&controls=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <div className="no-song">
          <p>Select a song to start playing</p>
        </div>
      )}
    </div>
  );
};

export default Player; 