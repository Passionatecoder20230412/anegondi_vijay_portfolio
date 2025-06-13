import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Animation.css'; // Adjust path if necessary

const Animation = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
    }, 100); // Play audio after 100ms

    const redirectTimer = setTimeout(() => {
      navigate('/'); // Redirect to the home page after animation
    }, 9000); // Trigger after animation

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

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
