import React from 'react';
import src from '../assets/videoprueba.mp4';

const VideoPlayer = ({ width = '60%', height = 'auto' }) => {
  return (
    <div className="video-container">
      <video
        width={width}
        height={height}
        controls
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
