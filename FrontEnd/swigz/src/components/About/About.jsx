import React, { useEffect, useState } from "react";
import a1 from "../../Assests/about.png";
import a2 from "../../Assests/about2.png";
import mission from "../../Assests/misson.png";
// import vission from '../../Assests/vission.webp'
import values from "../../Assests/values.webp";
import walkthrought from "../../Assests/Walkthrough.avif";
import vission from "../../Assests/visson.png";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

// import { boardmembers } from '../../Assests/assets';
import { Footer } from "../Footer/Footer";

export const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    Aos.init({ duration: 2000, container: ".about" });
  }, []);

  useEffect(() => {
    const scores = document.querySelectorAll(".scores li span");
    scores.forEach((score) => {
      const value = parseInt(score.textContent, 10);
      gsap.fromTo(
        score,
        {
          textContent: 0,
        },
        {
          duration: 0.5,
          textContent: value,
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  return (
    <div className="about">
      <div className="about-header">
        <img src={a1} alt="" data-aos="fade-right" />
        <div className="main">
          <h1 data-aos="fade-up">About FareElite+</h1>
          <br />
          <h6 data-aos="fade-up">
            FareElite+ is a new-age consumer-first organization offering an
            easy-to-use convenience platform, accessible through a unified app.
          </h6>
        </div>
        <img src={a2} alt="" data-aos="fade-left" />
      </div>
      <div className="idea" data-aos="fade-up">
        <nav>
          <ul>
            <li
              onClick={() => handleTabChange("mission")}
              className={activeTab === "mission" ? "activeabout" : "inactive"}
            >
              Mission
            </li>
            <li
              onClick={() => handleTabChange("vission")}
              className={activeTab === "vission" ? "activeabout" : "inactive"}
            >
              vission
            </li>
            <li
              onClick={() => handleTabChange("values")}
              className={activeTab === "values" ? "activeabout" : "inactive"}
            >
              Values
            </li>
            <li
              onClick={() => handleTabChange("walkthrough")}
              className={activeTab === "walkthrough" ? "activeabout" : "inactive"}
            >
              Walkthrough
            </li>
          </ul>
        </nav>
        {activeTab === "mission" && (
          <div className="content" data-aos="fade-up">
            <img src={vission} alt="" />
            <div className="desc">
              <h1>Mission</h1>
              <br />
              <p>
                Our mission is to elevate the quality of life of the urban
                consumer by offering unparalleled convenience. Convenience is
                what makes us tick. It’s what makes us get out of bed and say,
                “Let’s do this.”
              </p>
            </div>
          </div>
        )}
        {activeTab === "vission" && (
          <div className="content" data-aos="fade-up">
            <div className="desc">
              <h1>Vission</h1>
              <br />
              <p>
                Through ups, downs, and everything in between; Swiggsters put
                these values practice in their everyday ways of working. Read on
                to get a taste of how Swiggsters live and breathe these values
                and how it forms the backbone of our culture.
              </p>
            </div>
            <img src={values} alt="" />
          </div>
        )}
        {activeTab === "values" && (
          <div className="content" data-aos="fade-up">
            <img src={mission} alt="" />
            <div className="desc">
              <h1>Values</h1>
              <br />
              <p>
                Our actions are strongly defined by the Swiggy values. Through
                ups, downs, and everything in between; Swiggsters put these
                values into practice in their everyday ways of working. Read on
                to get a taste of how Swiggsters live and breathe these values
                and how it forms the backbone of our culture.
              </p>
            </div>
          </div>
        )}
        {activeTab === "walkthrough" && (
          <div className="content" data-aos="fade-up">
            <div className="desc">
              <h1>Walkthrough</h1>
              <br />
              <p>
                Old love with young love feels. Watch the story of two empty
                nesters, Shailja and Pradeep, as they navigate through love,
                life, food, and a badminton court
              </p>
            </div>
            <img src={walkthrought} alt="" />
          </div>
        )}
      </div>
      <div className="content" data-aos="fade-up">
        <div className="desc">
          <h1>Industry pioneer</h1>
          <br />
          <p className="ip">
            Being among the first few entrants, Swiggy has successfully
            pioneered the hyperlocal commerce industry in India, launching Food
            Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering
            status of Swiggy, it is well-recognised as a leader in innovation in
            hyperlocal commerce and as a brand synonymous with the categories it
            is present in.
          </p>
        </div>
        <img src={mission} alt="" />
      </div>

      <div className="scores" data-aos="fade-up">
        <nav>
          <ul>
            <li>
              <span>3bn+</span>
              <br />
              ordes
            </li>
            <li>
              <span>~200k+</span>
              <br />
              restaurant partners
            </li>
            <li>
              <span>380k+</span>
              <br />
              delivery partners
            </li>
            <li>
              <span>650+</span>
              <br />
              cities in India
            </li>
          </ul>
        </nav>
      </div>

      <div className="career" data-aos="fade-up">
        <div className="career-content">
          <h4 id="careers">Careers</h4>
          <br />
          <h4 id="discover">Discover The Swiggster In You</h4>
          <br />
          <br />
          <button className="apply">Apply Now</button>
        </div>
      </div>

      <div className="members">
        <button className="btn-members" data-aos="fade-up">
          Board Members
        </button>

        <div className="board-members" data-aos="fade-up">
          {/* { boardmembers.map((index,id)=>{
            return(
              <div className="card">
                <img src={index.img} alt="" />
                <h2>{index.name}</h2>
                <h4>{index.position}</h4>
              </div>
            )
         })
        } */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
