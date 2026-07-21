import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaEnvelopeOpen } from "react-icons/fa";
import "./LetterPage.css";
import letterSong from "../../assets/khat2.mp3";

const letter = [
  "Dear Bestest Friend, ❤️",
  "",
  "If you've made it this far, congratulations... you survived all the embarrassing pictures, the random compliments, and my nonstop bakwaas. 😂",
  "",
  "But this page is different.",
  "This is where I stop joking for a little while.",
  "",
  "I just want you to read this slowly...",
  "Because every single word here was written only for you.",
  "",
  "You know what's funny?",
  "People spend years trying to find someone they can completely be themselves around.",
  "Somehow...",
  "I got lucky enough to find that person in you.",
  "",
  "You're genuinely one of the most beautiful souls I've ever met.",
  "Not just because you're pretty...",
  "Trust me, after the gallery I think we've already established that. 😭",
  "",
  "But because of your heart.",
  "Your kindness.",
  "Your innocence.",
  "The way you care about people.",
  "",
  "You have absolutely no idea how much happiness you bring into people's lives.",
  "",
  "There are days when you don't even realize...",
  "that your smile can fix someone else's entire mood.",
  "",
  "Including mine.",
  "",
  "Life hasn't always been fair to you.",
  "I know there have been days when you've smiled outside...",
  "while fighting battles nobody knew about.",
  "",
  "I wish I had a magic button.",
  "One click...",
  "and every reason behind your tears would disappear forever.",
  "",
  "Because if someone deserves genuine happiness...",
  "it's you.",
  "",
  "I wish one day...",
  "you could see yourself through my eyes.",
  "",
  "You'd stop doubting yourself.",
  "You'd stop comparing yourself.",
  "You'd stop overthinking.",
  "",
  "Because all I'd see...",
  "is someone incredibly precious.",
  "",
  "Thank you.",
  "",
  "Thank you for trusting me.",
  "Thank you for listening to my endless nonsense.",
  "Thank you for laughing at my terrible jokes.",
  "Thank you for staying.",
  "",
  "No matter where life takes us...",
  "Different cities...",
  "Different jobs...",
  "Different responsibilities...",
  "",
  "I just hope one thing never changes.",
  "",
  "Us. ❤️",
  "",
  "Whenever life becomes difficult...",
  "Come back here.",
  "",
  "Whenever you think nobody appreciates you...",
  "Come back here.",
  "",
  "Whenever you feel like giving up...",
  "Come back here.",
  "",
  "Because every single page before this...",
  "was made for one person.",
  "",
  "You.",
  "",
  "Happy Birthday to the most amazing best friend.",
  "",
  "And remember...",
  "",
  "You'll always have one idiot...",
  "who'll keep annoying you...",
  "hyping you up...",
  "making fun of you...",
  "and reminding you how amazing you truly are.",
  "",
  "Forever. ❤️",
  "",
  "With endless love,",
  "",
  "— Your Least Important Friend 🤍"
];

export default function LetterPage({ previousPage, nextPage }) {

  const [opened, setOpened] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);

  const bottomRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {

    if (!opened) return;

    let index = 0;

    const interval = setInterval(() => {

      setVisibleLines(prev => [...prev, letter[index]]);

      index++;

      if (index === letter.length) {
        clearInterval(interval);
      }

    }, 1800);

    return () => clearInterval(interval);

  }, [opened]);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [visibleLines]);

  return (

    <div className="letter-page">

      <div className="stars" />

      <div className="overlay" />

      <AnimatePresence>

        {!opened && (

          <motion.div
            className="envelope-container"
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
          >

            <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: .95 }}
  className="envelope"
  onClick={() => {
    setOpened(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch((err) => {
        console.log(err);
      });
    }
  }}
>

              <FaEnvelopeOpen className="envelope-icon" />

              <h1>A Letter...</h1>

              <p>Written only for you ❤️</p>

              <button>
                Open Letter
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {opened && (

        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="title">
            To My Bestest Friend ❤️
          </h1>

          <div className="letter-content">

            {visibleLines.map((line, index) => (

              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
              >
                {line}
              </motion.p>

            ))}

            <div ref={bottomRef} />

          </div>

          {visibleLines.length === letter.length && (

            <motion.div
              className="ending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >

              <motion.div
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              >

                <FaHeart className="heart" />

              </motion.div>

              <p>
                Thank you for reading till the end.
                <br />
                You mean more than you'll ever know.
              </p>

              <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "30px" }}>

                <button
  className="next-btn"
  onClick={() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    previousPage();
  }}
>
                  ← Back
                </button>

                <button
  className="next-btn"
  onClick={() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (nextPage) {
      nextPage();
    } else {
      alert("Final Page Coming Soon ❤️");
    }
  }}
>
                  One Last Surprise 🎁
                </button>

              </div>

            </motion.div>

          )}

        </motion.div>

      )}

      <audio
  ref={audioRef}
  src={letterSong}
  preload="auto"
/>

    </div>

  );

}