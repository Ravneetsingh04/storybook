import "./VIPIntro.css";

const VIPIntro = ({ nextPage }) => {

    return (

        <div className="vip-intro-page">

            <div className="floating-heart h1">❤️</div>
            <div className="floating-heart h2">✨</div>
            <div className="floating-heart h3">💖</div>
            <div className="floating-heart h4">🌸</div>

            <div className="intro-card">

                <h1>
                    ❤️ The VIPs of Your Life
                </h1>

                <p>

                    Every beautiful story has amazing people behind it.

                </p>

                <p>

                    Over the last couple of years, I've heard so many stories
                    about these people that I honestly feel like I already know
                    them.

                </p>

                <p>

                    So before we move ahead...
                    let me introduce some of the people who make
                    your world a little brighter. ✨

                </p>

                <button
                    onClick={nextPage}
                >

                    Meet Them ❤️

                </button>

            </div>

        </div>

    );

};

export default VIPIntro;