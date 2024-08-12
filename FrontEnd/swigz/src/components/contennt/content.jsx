import React, { useEffect, useRef, useState } from "react";
import "./content.css";
import { videocontent } from "../../Assests/assets";
import { FaHeart } from "react-icons/fa";
import shorts from "../../Assests/shorts.jpg";

export const Content = () => {
  return (
    <div className="video-content">
      <div className="video-content-title">
        <img src={shorts} alt="" className="shorts-logo" />
        <h1>Share your Content</h1>
      </div>
      <p className="content-text">
        Discover mouthwatering recipes and quick cooking hacks to elevate your
        meals. Perfect for food lovers craving delicious, easy-to-make dishes!
      </p>

      <div className="content-video">
        {videocontent.map((cont, index) => {
          return (
            <div className="shorts" key={index}>
              <VideoWithHoverControl
                src={cont.video}
                desc={cont.desc}
                like={cont.like}
                tags={cont.tags}
              />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const VideoWithHoverControl = ({ src, desc, like, tags }) => {
  const videoRef = useRef(null);

  const [likes, setLikes] = useState(like);
  const [liked, setliked] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.setAttribute("controls", "controls");
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.removeAttribute("controls");
    }
  };

  const change = () => {
    if (!liked) setLikes(likes + 1);
    else setLikes(likes - 1);

    setliked(!liked);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.currentTime = 45;
    video.addEventListener("loadeddata", () => {
      captureThumbnail();
    });

    const captureThumbnail = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL("image/jpeg");
      video.setAttribute("poster", dataURL);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        className="video"
        muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></video>
      <div className="description">
        <p className="desc">
          {desc} <span>{tags}</span>
        </p>
        <p className="likecount">
          <FaHeart className={liked ? "like" : "notlike"} onClick={change} />
          <span className="like-number">{likes}</span>
        </p>
      </div>
    </>
  );
};
