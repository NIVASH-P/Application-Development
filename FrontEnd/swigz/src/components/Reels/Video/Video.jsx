import React, { useRef, useState, useEffect } from 'react';
import './Video.css';
import ReelsHeader from '../Header/ReelsHeader';
import ReelsFooter from '../Footer/ReelsFooter';
import { InView } from 'react-intersection-observer';

export default function Video({ channels, song, url, likes, comment, share }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(true);
  const videoRef = useRef();

  const onClickable = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (hasInteracted) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        setHasInteracted(true);
      }
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const otherVideos = document.querySelectorAll('.videoPlayer');
      otherVideos.forEach((video) => {
        if (video !== videoRef.current) {
          video.pause();
        }
      });
    }
  }, [isPlaying]);

  return (
    <InView
      as="div"
      onChange={(inView) => {
        if (inView && hasInteracted) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }}
    >
      <div className="video-container">
        <div className="video-cards">
          <ReelsHeader />
          <video
            className="videoPlayer"
            src={url}
            ref={videoRef}
            onClick={onClickable}
            autoPlay={false}
            loop={false}
          />
          <ReelsFooter song={song} likes={likes} comment={comment} share={share} />
        </div>
      </div>
    </InView>
  );
}
