import React from 'react';
import src from '../assets/videoprueba.mp4';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="video-informativo" controls>
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
