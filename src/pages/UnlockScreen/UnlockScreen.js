import "./UnlockScreen.css";
import { useEffect, useState } from "react";

const loadingMessages = [
    "💌 Unlocking your surprise...",
    "✨ Gathering beautiful memories...",
    "🎂 Preparing something special...",
    "❤️ Almost there..."
];

const UnlockScreen = ({ nextPage }) => {

    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {

        const progressTimer = setInterval(() => {

            setProgress(prev => {

                if (prev >= 100) {

                    clearInterval(progressTimer);

                    setTimeout(() => {

                        nextPage();

                    }, 1500);

                    return 100;
                }

                return prev + 1;

            });

        }, 60);

        return () => clearInterval(progressTimer);

    }, [nextPage]);

    useEffect(() => {

        const messageTimer = setInterval(() => {

            setMessageIndex(prev => (prev + 1) % loadingMessages.length);

        }, 2000);

        return () => clearInterval(messageTimer);

    }, []);

    return (

        <div className="unlock-screen">

            <div className="sparkle sparkle1">✨</div>
            <div className="sparkle sparkle2">✨</div>
            <div className="sparkle sparkle3">✨</div>
            <div className="sparkle sparkle4">✨</div>

            <div className="heart">
                ❤️
            </div>

            <h1>{loadingMessages[messageIndex]}</h1>

            <div className="progress-bar">

                <div
        className="loader-fill"
        style={{ width: `${progress}%` }}
    />

            </div>

            <p>{progress}%</p>

        </div>

    );

};

export default UnlockScreen;