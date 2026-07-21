import "./BirthdayPage.css";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const BirthdayPage = ({ nextPage }) => {

    const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});

useEffect(() => {
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

    return (

        <div className="birthday-page">

            <div className="top-right">
                🐻
            </div>

            <div className="bottom-left">
                🐱
            </div>
            <div className="sparkle s1">✨</div>
            <div className="sparkle s2">✨</div>
            <div className="sparkle s3">✨</div>
            <div className="sparkle s4">✨</div>
            <div className="sparkle s5">✨</div>

            <div className="heart h1">❤️</div>
            <div className="heart h2">💖</div>
            <div className="heart h3">💕</div>
            <div className="center-content">

                <h1>
                    <span className="blue">HAPPY BIRTHDAY</span>

                    <br/>

                    <span className="pink">MY FAVOURITE PERSON❤️</span>

                </h1>
                <Confetti
  width={windowSize.width}
  height={windowSize.height}
  recycle
  numberOfPieces={180}
/>

                <div className="birthday-image-wrapper">

    <img
        src={require("../../assets/tower.png")}
        alt="Birthday"
        className="birthday-image"
    />

</div>

                <p>
                    😂 Don't laugh pleaseeee... I wanted to hop on this trend so badly. I know it's ridiculous, but admit it... it's kind of funny too. Happy Birthday, Best Friend! ❤️
                </p>

                <button className='next-btn' onClick={nextPage}>
                    Open Your Surprise ❤️
                </button>

            </div>

        </div>

    );

};

export default BirthdayPage;