import "./FlipCard.css";

const FlipCard = ({
    card,
    flipped,
    setFlipped
}) => {

    return (

        <div
            className="flip-card"
            onClick={() => setFlipped(!flipped)}
        >

            <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>

                <div className="flip-card-front">

                    <h2>❤️ Guess Who?</h2>

                    <p>{card.frontText}</p>

                    <span>Tap to Reveal 👀</span>

                </div>

                <div className="flip-card-back">

                    {card.type === "image" && (

                        <img
                            src={card.media}
                            alt={card.person}
                            className="vip-image"
                        />

                    )}

                    {card.type === "video" && (

                        <video
                            className="vip-video"
                            controls muted playsInline
                        >
                            <source src={card.media} type="video/mp4" />
                        </video>

                    )}

                    <h2>{card.person}</h2>

                    <h4>{card.relation}</h4>

                    <p>{card.caption}</p>

                </div>

            </div>

        </div>

    );

};

export default FlipCard;