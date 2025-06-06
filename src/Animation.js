import React, { useEffect, useRef } from 'react';
import './Animation.css'; // Import the Animation CSS

const Animation = () => {
  const audioRef = useRef(null); // Create a ref for the audio element

  useEffect(() => {
    const timer = setTimeout(() => {
      // Play audio after a short delay
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
    }, 100); // Delay before starting audio (100ms)

    const redirectTimer = setTimeout(() => {
      window.location.href = '#header'; // Redirect to the portfolio section
    }, 9000); // 10 seconds

    return () => {
      clearTimeout(timer); // Cleanup timer on unmount
      clearTimeout(redirectTimer); // Cleanup redirect timer on unmount
    };
  }, []);

  return (
    <div className="animationContainer">
      <audio ref={audioRef} src="/p_47060529_685.mp3" preload="auto" />
      <div className="box box1">Welcome</div>
      <div className="box box2">Anegondi Vijay</div>
      <div className="box box3">Portfolio</div>
    </div>
  );
};

export default Animation;
