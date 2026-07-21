import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import "./FinalPage.css";

const sceneOne = [
  "❤️",
  "",
  "Wait...",
  "",
  "Don't close this website yet.",
  "",
  "Because...",
  "",
  "I have one last thing to tell you."
];

const sceneTwo = [
  "This website...",
  "was never about React.",
  "",
  "It was never about coding.",
  "",
  "It wasn't about animations.",
  "",
  "It wasn't about the pictures.",
  "",
  "It wasn't about the videos.",
  "",
  "It was about making sure...",
  "",
  "one girl...",
  "",
  "never forgets...",
  "",
  "how loved she is. ❤️"
];

const sceneThree = [
  "Keep smiling 😊",
  "",
  "Keep annoying everyone 😂",
  "",
  "Keep taking mirror selfies 📸",
  "",
  "Keep wearing tank tops 🤍",
  "",
  "Keep looking like a doll in white dresses 👗",
  "",
  "Keep making purple look expensive 💜",
  "",
  "Keep making every room brighter just by walking into it ✨",
  "",
  "And please...",
  "",
  "Never stop being YOU ❤️"
];

const sceneFour = [
  "Promise me...",
  "",
  "Whenever life gets difficult...",
  "",
  "Read this website again.",
  "",
  "Whenever someone makes you feel like you're not enough...",
  "",
  "Read this website again.",
  "",
  "Whenever you forget how amazing you are...",
  "",
  "Read this website again.",
  "",
  "Because somewhere...",
  "",
  "there's one idiot...",
  "",
  "who'll always be proud of you. ❤️"
];

const sceneFive = [
  "🎂",
  "",
  "Happy Birthday",
  "",
  "to",
  "",
  "the prettiest",
  "",
  "the strongest",
  "",
  "the funniest",
  "",
  "the kindest",
  "",
  "the most dramatic 😂",
  "",
  "the cutest",
  "",
  "best friend",
  "",
  "I could've ever asked for. ❤️"
];

const sceneSix = [
  "P.S.",
  "",
  "You smiled...",
  "",
  "didn't you? 😊",
  "",
  "Mission Accomplished. ❤️",
  "",
  "Thank you for watching this little story.",
  "",
  "❤️"
];

export default function FinalPage({ nextPage }) {

  const [step, setStep] = useState(0);
  const [lines, setLines] = useState([]);
  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const scenes = [
    sceneOne,
    sceneTwo,
    sceneThree,
    sceneFour,
    sceneFive,
    sceneSix
  ];

  useEffect(() => {

    if (!started) return;

    setLines([]);

    let index = 0;

    const interval = setInterval(() => {

      setLines(prev => [...prev, scenes[step][index]]);

      index++;

      if (index === scenes[step].length) {
        clearInterval(interval);
      }

    }, 1500);

    return () => clearInterval(interval);

  }, [step, started]);

  useEffect(() => {

    if (
      started &&
      step === scenes.length - 1 &&
      lines.length === scenes[step].length
    ) {

      const timer = setTimeout(() => {

        setFadeOut(true);

        setTimeout(() => {
          nextPage();
        }, 2500);

      }, 5000);

      return () => clearTimeout(timer);
    }

  }, [started, step, lines, nextPage]);

  function nextScene() {
    setStep(prev => prev + 1);
  }

  return (

    <motion.div
      className="final-page"
      animate={{
        opacity: fadeOut ? 0 : 1
      }}
      transition={{
        duration: 2.5
      }}
    >

      <div className="stars"></div>

      <AnimatePresence mode="wait">

        {!started ? (

          <motion.div
            key="intro"
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <FaHeart className="intro-heart" />

            <h1>Before You Leave...</h1>

            <p>I have one final thing to tell you.</p>

            <button
              className="continue-btn"
              onClick={() => setStarted(true)}
            >
              ❤️ Continue
            </button>

          </motion.div>

        ) : (

          <motion.div
            key={step}
            className="scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {lines.map((line, index) => (

              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {line}
              </motion.p>

            ))}

            {lines.length === scenes[step].length && (

              <div className="bottom-buttons">

                {step < scenes.length - 1 ? (

                  <button
                    className="continue-btn"
                    onClick={nextScene}
                  >
                    Continue ❤️
                  </button>

                ) : (

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{
                      marginTop: "40px",
                      color: "#bbb",
                      fontStyle: "italic",
                      letterSpacing: "2px",
                      fontSize: "1.2rem"
                    }}
                  >
                    Fading into the credits...
                  </motion.p>

                )}

              </div>

            )}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>

  );

}