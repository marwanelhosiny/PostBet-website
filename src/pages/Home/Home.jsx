import { t } from "i18next";
import React from "react";
import media from "../../assets/images/social-media-2210580_1280.png";
import "./home.scss";
import wave1 from "../../assets/images/wave1.png";
import wave2 from "../../assets/images/wave2.png";
import wave3 from "../../assets/images/wave3.png";
import line from "../../assets/images/blueLine.png";
import about from "../../assets/images/about.jpg";
import { useTypewriter } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words : [t("PostBet")],
    loop : {} ,
    typeSpeed : 120 ,
    deleteSpeed : 80
  })
  return (
    <div className="home">
      <div className="container main">
        <div className="text">
          <h1>
            {t("Welcome To")} <span>{text}</span>
          </h1>
          <p>
            {t(
              "Connect your social media platforms and share your message with the world all at once,"
            )}
            <br />
            <span style={{ margin: "0px 5px" }}>
              {t("with just one click!")}
            </span>
          </p>
        </div>
        <div className="cube one">
          <div className="top">
            <img src={media} alt="" />
          </div>
          <div className="spans">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
      </div>
      <div className="waves">
        <img src={wave1} alt="" className="wave1" />
        <img src={wave2} alt="" />
        <img src={wave3} alt="" className="wave3" />
      </div>
      <div className="container sectionHome">
        <div className="title">
          <h1>{t("What is Post Bet ?")}</h1>
          <img src={line} alt="" />
        </div>
        <div className="flex">
          <div className="img">
            {" "}
            <img src={about} alt="" />
          </div>
          <div className="content">
            <p>
              {t("PostBet is a cutting-edge application that aims to make it easier and faster to manage and publish content across multiple social media platforms. We provide a complete solution for content creators, businesses, marketers, and even individual users to publish photos and videos on platforms like Instagram, Facebook, X, TikTok, YouTube, etc., simultaneously and with ease.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
