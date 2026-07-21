import "./JourneyIntro.css";

const JourneyIntro = ({ nextPage }) => {

    return (

        <div className="journey-intro">

            <div className="book-icon">
                💖
            </div>

            <h1>
                Since The Day I Met You...
            </h1>

            <p>

                I don't remember every single day of my life...

                <br /><br />

                But somehow...

                <br /><br />

                I remember every day that had <strong>you</strong> in it.

                <br /><br />

                Every random plan...
                every long conversation...
                every laugh...
                every photo...
                every silly moment...

                <br /><br />

                became a memory I'll always treasure.

                <br /><br />

                You never had to do anything extraordinary.

                <br /><br />

                Just being there somehow made ordinary days feel
                brighter...
                happier...
                and worth remembering.

                <br /><br />

                Honestly...

                <br /><br />

                If I had one wish...

                <br /><br />

                Every time you came to meet me, the world outside somehow stopped mattering.

                <br /><br />

                Because every moment spent with you
                added something beautiful to my life.

                <br /><br />

                ❤️

                <br /><br />

                So before we continue...

                <br /><br />

                Let's relive some of my favourite memories with you.

            </p>

            <button
                className="journey-btn"
                onClick={nextPage}
            >
                Relive Our Memories ❤️
            </button>

        </div>

    );

};

export default JourneyIntro;