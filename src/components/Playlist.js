import React from 'react';
import '../styles/Playlist.css';

const songs = [
  {
    id: 1,
    title: "Where Is The Love?",
    artist: "Black Eyed Peas",
    cover: "https://th.bing.com/th/id/R.510cc0c6664ccdb6ef77e686ffdfe36c?rik=VmA7XfEBkd6a9g&riu=http%3a%2f%2fhiphop-n-more.com%2fwp-content%2fuploads%2f2016%2f09%2fblack-eyed-peas-where-is-the-love.jpeg&ehk=XzyFrb4kI%2be9XJ39dGztKTX8l0%2bu%2fy4EGPyssRJdsvU%3d&risl=&pid=ImgRaw&r=0",
    year: 2003,
    videoId: "WpYeekQkAdc"
  },
  {
    id: 2,
    title: "Umbrella",
    artist: "Rihanna ft. Jay-Z",
    cover: "https://th.bing.com/th/id/R.de85200ac74f0ebf72a6b2e780d6faa0?rik=AJmcMrlvhxiV6Q&pid=ImgRaw&r=0",
    year: 2007,
    videoId: "CvBfHwUxHIk"
  },
  {
    id: 3,
    title: "Viva La Vida",
    artist: "Coldplay",
    cover: "https://i.ytimg.com/vi/jcu7UWeObPA/maxresdefault.jpg",
    year: 2008,
    videoId: "dvgZkm1xWPE"
  },
  {
    id: 4,
    title: "I Gotta Feeling",
    artist: "Black Eyed Peas",
    cover: "https://th.bing.com/th/id/R.78bec2dd1040eaf458dd3bcf32d03e24?rik=u43ZqBE12tDZ0Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-xpx6S7S1LTM%2fTrVIPmG40mI%2fAAAAAAAADBk%2fuhPghIG2feM%2fw1200-h630-p-k-no-nu%2fBEP_Feeling_mq.jpg&ehk=nkxE5dsTzcOZn2M6OehPvTdo9SECXOZ3jLcJS6TDgcg%3d&risl=&pid=ImgRaw&r=0",
    year: 2009,
    videoId: "uSD4vsh1zDA"
  },
  {
    id: 5,
    title: "Don't Stop The Music",
    artist: "Rihanna",
    cover: "https://th.bing.com/th/id/OIP.gjNR3RVv6qPo8zv1hTUiogHaHa?rs=1&pid=ImgDetMain",
    year: 2007,
    videoId: "yd8jh9QYfEs"
  },
  {
    id: 6,
    title: "Fix You",
    artist: "Coldplay",
    cover: "https://images.genius.com/672199a304458160fbcc6072aa9042ca.1000x1000x1.jpg",
    year: 2005,
    videoId: "k4V3Mo61fJM"
  },
  {
    id: 7,
    title: "The Scientist",
    artist: "Coldplay",
    cover: "https://images.genius.com/6064eadde0b2727a6cc21f651d3a0f42.1000x1000x1.png",
    year: 2002,
    videoId: "RB-RcX5DS5A"
  },
  {
    id: 8,
    title: "Clocks",
    artist: "Coldplay",
    cover: "https://th.bing.com/th/id/OIP.NpkVhFpNC9mm4L7BqupdrwHaHa?rs=1&pid=ImgDetMain",
    year: 2002,
    videoId: "d020hcWA_Wg"
  },
  {
    id: 9,
    title: "Yellow",
    artist: "Coldplay",
    cover: "https://external-preview.redd.it/vfx5wIy9DpU1W80wXpo8yorYL4urI29sPLsr0UBCO4Y.png?format=pjpg&auto=webp&s=b82e16868feafb339d4025c8907bbfa5a4429d14",
    year: 2000,
    videoId: "yKNxeF4KMsY"
  }
];

const Playlist = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
  const handleSongClick = (song) => {
    // Limpa o player atual
    const player = document.getElementById('youtube-player');
    if (player) {
      player.innerHTML = '';
    }
    
    // Define a nova música e força o play
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="playlist">
      <h2>2000s Nostalgia</h2>
      <div className="songs-list">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
            onClick={() => handleSongClick(song)}
          >
            <img src={song.cover} alt={song.title} />
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <span className="year">{song.year}</span>
            </div>
            {currentSong?.id === song.id && isPlaying && (
              <div className="playing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist; 