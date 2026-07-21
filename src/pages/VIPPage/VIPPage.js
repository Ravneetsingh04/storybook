import "./VIPPage.css";
import { useState } from "react";

import vipData from "../../data/vipData";
import FlipCard from "../../components/FlipCard/FlipCard";

const VIPPage = ({
    nextPage,
    currentIndex,
    setCurrentIndex
}) => {

    const [flipped, setFlipped] = useState(false);

    const card = vipData[currentIndex];

    const nextCard = () => {

        setFlipped(false);

        if (currentIndex < vipData.length - 1) {

            setCurrentIndex(currentIndex + 1);

        } else {

            nextPage();

        }

    };

    const previousCard = () => {

        if (currentIndex > 0) {

            setFlipped(false);

            setCurrentIndex(currentIndex - 1);

        }

    };

    return (

        <div className="vip-page">

            <h1>❤️ The VIPs of Your Life</h1>

            <div className="vip-progress">

                <h2>💌 A Little Surprise</h2>

                <span>

                    Card {currentIndex + 1} of {vipData.length}

                </span>

            </div>

            <FlipCard
                key={currentIndex}
                card={card}
                flipped={flipped}
                setFlipped={setFlipped}
            />

            <div className="vip-buttons">

                <button
                    onClick={previousCard}
                    disabled={currentIndex === 0}
                >
                    ← Previous
                </button>

                <button
                    onClick={nextCard}
                    disabled={!flipped}
                >
                    {
                        currentIndex === vipData.length - 1
                            ? "Finish ❤️"
                            : flipped
                                ? "Next →"
                                : "Flip the Card ❤️"
                    }
                </button>

            </div>

        </div>

    );

};

export default VIPPage;