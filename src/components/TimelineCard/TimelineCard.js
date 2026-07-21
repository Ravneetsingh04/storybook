import "./TimelineCard.css";

const TimelineCard = ({ memory, index }) => {

    const isLeft = index % 2 === 0;

    return (

        <div className={`timeline-row ${isLeft ? "left" : "right"}`}>

            <div className="timeline-content">

                <div className="date">
                    📅 {memory.date}
                </div>

                <h2>{memory.title}</h2>

                {
    memory.type === "image" && (

        <div className="polaroid-memory">
    <img
        src={memory.image}
        alt={memory.title}
        className="memory-image"
    />
</div>

    )
}

{memory.type === "mixed" && (

    <div className="memory-mixed">

        <img
            src={memory.image}
            alt={memory.title}
            className="memory-image"
        />

        <video
            className="memory-video"
            autoPlay
            muted
            loop
            playsInline
            controls
        >
            <source src={memory.video} type="video/mp4" />
        </video>

    </div>

)}

{memory.type === "gallery" && (

    <div className="memory-gallery">

        {memory.images.map((img, index) => (

            <img
                key={index}
                src={img}
                alt=""
                className="gallery-image"
            />

        ))}

    </div>

)}

                {
                    memory.type === "text" && (

                        <div className="emoji">
                            {memory.emoji}
                        </div>

                    )
                }

                {memory.type === "video" && (

    <div className="phone-frame">

        <video
            className="memory-video"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={memory.video} type="video/mp4" />
        </video>

    </div>

)}

                <p>{memory.text}</p>

            </div>

        </div>

    );

};

export default TimelineCard;