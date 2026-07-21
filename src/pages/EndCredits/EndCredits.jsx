import { useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import "./EndCredits.css";
import finalSong from "../../assets/final-song.mp3";

export default function EndCredits({restartJourney}) {
  const audioRef = useRef(null);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio autoplay prevented:", err);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const credits = [
  "A Birthday Story",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Starring",
  "",
  "Kashish Saxena ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Created With",
  "",
  "Lots Of Love",
  "And Countless Smiles ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Inspired By",
  "",
  "A Girl",
  "Who Makes Ordinary Days",
  "Feel Extraordinary",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "The Story",
  "",
  "Late Night Conversations 🌙",
  "Endless Smiles 😊",
  "Random Calls 📞",
  "Beautiful Memories ❤️",
  "Moments I'll Always Treasure",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "The Voice",
  "",
  "Mostly Yours 😂",
  "Sometimes Mine",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Special Appearance By",
  "",
  "Every Mirror Selfie 📸",
  "Every Cute Expression 🥹",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Wardrobe Collection",
  "",
  "Tank Tops 🤍",
  "Purple Suits 💜",
  "White Dresses 👗",
  "Every Outfit",
  "That Left Me Speechless ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Soundtrack",
  "",
  "Every Song",
  "That Brings Back",
  "A Memory Of You 🎵",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Favorite Places",
  "",
  "Patiala",
  "Jaipur",
  "",
  "And Every Place",
  "That Felt More Beautiful",
  "Because You Were There ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Things I'll Never Forget",
  "",
  "Your Smile 😊",
  "Your Laugh 😂",
  "Your Eyes ❤️",
  "Your Voice 🎶",
  "Your Kind Heart",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Special Thanks",
  "",
  "To Every Memory",
  "To Every Laugh",
  "To Every Conversation",
  "To Every Random Fight 😂",
  "To Every Late Night Call",
  "To Every Good Morning Text ☀️",
  "To Every Good Night Wish 🌙",
  "To Every Voice Note 🎧",
  "To Every Photo 📸",
  "To Every Video ❤️",
  "To Every Inside Joke",
  "To Every Smile 😊",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Things You Never Knew",
  "",
  "How Many Times",
  "You Made Me Smile 😊",
  "",
  "How Many Times",
  "I Revisited Our Memories ❤️",
  "",
  "How Many Times",
  "You Brightened My Day ✨",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Little Truths",
  "",
  "Some Pictures",
  "Stayed In My Gallery",
  "Longer Than They Needed To 🥹",
  "",
  "Some Songs",
  "Always Reminded Me",
  "Of You ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Favorite Moments",
  "",
  "Random Conversations",
  "Unexpected Laughs",
  "Comfortable Silence",
  "Every Little Memory ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "A Small Confession",
  "",
  "Meeting You",
  "Was Never Planned",
  "",
  "But I'm Really Glad",
  "It Happened ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "One Final Message",
  "",
  "If This Little Surprise",
  "Made You Smile...",
  "",
  "Then It",
  "Was Worth Every Moment ❤️",
  "",
  "If It Made You Emotional...",
  "",
  "Those Were",
  "Happy Tears 😊",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Dedicated To",
  "",
  "The Girl",
  "Who Probably Doesn't Realize",
  "How Much Happiness",
  "She Brings To Others ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "No Matter",
  "Where Life Takes Us...",
  "",
  "I Hope",
  "Whenever You Remember",
  "This Day...",
  "",
  "You Smile ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "Happy 23rd Birthday",
  "",
  "Kashish ❤️",
  "",

  "━━━━━━━━━━━━━━━━━━━━",
  "",
  "THE END",
  "",
  "...",
  "",
  "Or Maybe...",
  "",
  "Just Another",
  "Beautiful Beginning ❤️"
];

  return (
    <div className="credits-container">

      <audio ref={audioRef}>
        <source src={finalSong} type="audio/mpeg" />
      </audio>

      <div className="stars"></div>

      {!showEnd && (
  <motion.div
  className="credits"
  initial={{ y: "0%" }}
animate={{ y: "-480%" }}
transition={{
  duration: 600,
  ease: "linear"
}}
  onAnimationComplete={() => setShowEnd(true)}
>
    {credits.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </motion.div>
)}


    </div>
  );
}