import "./LockScreen.css";
import photo from "../../assets/photo.jpg";
import PasscodeDisplay from "../../components/PasscodeDisplay";
import NumberPad from "../../components/NumberPad";
import { useState } from "react";
import FloatingHearts from "../../components/FloatingHearts";

const PASSWORD = "0726";

const LockScreen = ({ unlock }) => {

    const [enteredCode, setEnteredCode] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleButtonClick = (value) => {

        if (value === "❤") return;

        if (value === "⌫") {
            setEnteredCode(prev => prev.slice(0, -1));
            return;
        }

        if (enteredCode.length >= 4) return;

        const newCode = enteredCode + value;

        setEnteredCode(newCode);

        if (newCode.length === 4) {

            setTimeout(() => {

                if (newCode === PASSWORD) {

                    setMessage("🎉 Unlocking your surprise...");

    setTimeout(() => {

        unlock();

    }, 700);

                } else {

                    const newAttempts = attempts + 1;
                    setAttempts(newAttempts);

                    if (newAttempts >= 2) {
                        setMessage("❌ In USA Format please (MMDD)");
                    } else {
                        setMessage("❌ 💡 Sorry: It's your birth date 🎂");
                    }

                    setEnteredCode("");

                }

            }, 300);
        }
    };

    return (
        <div className="lockscreen">
            <FloatingHearts />
            <div className="photo-section">

                <div className="flower">🌸</div>

                <div className="polaroid">
                    <img src={photo} alt="Friend" />
                    <p>Happiest Birthday to my Bestestestestest Friend ❤️</p>
                </div>

            </div>

            <div className="passcode-section">
            <p className="subtitle">
            A little surprise is waiting for you 💌
            </p>
                <h1>Enter your birth time</h1>

                <PasscodeDisplay code={enteredCode} />

                <NumberPad onButtonClick={handleButtonClick} />

                <p className="message">{message}</p>

            </div>
            

        </div>
        
    );
};

export default LockScreen;