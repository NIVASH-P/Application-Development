import React, { useState } from 'react';
import './Reels.css'
import Video from './Video/Video';
import video1 from '../../Assests-Video/Video1.mp4'
import video2 from '../../Assests-Video/Video2.mp4'
import video3 from '../../Assests-Video/Video3.mp4'

export default function Reels() {
  const [data, setData] = useState([
    {
      channels: "aaa",
      song: "bbb",
      url: video3,
      likes: "100",
      comment: '2',
      share: '4'
    },
    {
      channels: "aaa",
      song: "bbb",
      url: video2,
      likes: "100",
      comment: '2',
      share: '4'
    },
    {
      channels: "aaa",
      song: "bbb",
      url: video1,
      likes: "100",
      comment: '2',
      share: '4'
    }
  ])

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  }

  return (
    <div className='reels'>
      <center>
        <div className="center-div">
          <div className="videocontainer">
            <div className="video">
              <div className="video-Card">
                <Video
                  key={data[currentIndex].url}
                  channels={data[currentIndex].channels}
                  song={data[currentIndex].song}
                  url={data[currentIndex].url}
                  likes={data[currentIndex].likes}
                  comment={data[currentIndex].comment}
                  share={data[currentIndex].share} />
                <div className="controls">
                  <button className="prev-button" onClick={handlePrev}>
                    <i className="fas fa-chevron-up"></i>
                  </button>
                  <button className="next-button" onClick={handleNext}>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}