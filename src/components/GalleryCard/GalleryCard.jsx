import "./GalleryCard.css";

const GalleryCard = ({
    card,
    preview = false,
    flipped,
    setFlipped
}) => {

    // ==========================
    // PREVIEW CARD (Left / Right)
    // ==========================
    if (preview) {

        return (

            <div className="gallery-preview-card">

                {

                    card.type === "image"

                        ?

                        <img
                            src={card.media}
                            alt={card.title}
                            className="gallery-image"
                        />

                        :

                        <video
                            className="gallery-video"
                            muted
                            playsInline
                            preload="metadata"
                        >

                            <source
                                src={card.media}
                                type="video/mp4"
                            />

                        </video>

                }

            </div>

        );

    }

    // ==========================
    // CENTER CARD
    // ==========================

    return (

        <div
            className="gallery-card"
            onClick={() => setFlipped(!flipped)}
        >

            <div
                className={`gallery-card-inner ${flipped ? "flipped" : ""}`}
            >

                {/* ==========================
                    FRONT
                ========================== */}

                <div className="gallery-front">

                    {

                        card.type === "image"

                            ?

                            <img
                                src={card.media}
                                alt={card.title}
                                className="gallery-image"
                            />

                            :

                            <video
                                className="gallery-video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            >

                                <source
                                    src={card.media}
                                    type="video/mp4"
                                />

                            </video>

                    }

                    <div className="flip-hint">

                        ❤️ Tap To Read What's Behind

                    </div>

                </div>

                {/* ==========================
                    BACK
                ========================== */}

                <div className="gallery-back">

                    <h2>

                        {card.title}

                    </h2>

                    <p className="compliment">

                        {card.compliment}

                    </p>

                    {

                        card.song && (

                            <div
                                className="memory-song"
                                onClick={(e) => e.stopPropagation()}
                            >

                                <p className="song-note">

                                    🎵 Press play ❤️

                                </p>

                                <audio
                                    controls
                                    preload="metadata"
                                >

                                    <source
                                        src={card.song}
                                        type="audio/mpeg"
                                    />

                                    Your browser does not support audio.

                                </audio>

                            </div>

                        )

                    }

                    <div className="gallery-heart">

                        ❤️

                    </div>

                </div>

            </div>

        </div>

    );

};

export default GalleryCard;