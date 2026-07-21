import "./GalleryIntroPage.css";

const GalleryIntroPage = ({ nextPage }) => {

    return (

        <div className="gallery-intro-page">

            <div className="gallery-content">

                <h1>📸 One Last Little Surprise...</h1>

                <p>

                    We've already travelled through some beautiful memories.

                    <br /><br />

                    We've met the VIPs of your life.

                    <br /><br />

                    But there's still one person whose gallery deserves its own chapter...

                </p>

                <h2>You. ❤️</h2>

                <p>

                    Over the last couple of years...

                    <br /><br />

                    I've probably seen hundreds of your pictures.

                    <br />

                    Some you sent me yourself.

                    <br />

                    Some I shamelessly stole from Instagram. 😂

                    <br />

                    And some randomly appeared in my gallery because I just couldn't resist saving them.

                    <br /><br />

                    The funny thing is...

                    <br /><br />

                    no matter what you're wearing...

                    no matter where you are...

                    and no matter how random the picture is...

                    you somehow manage to look absolutely beautiful in every single one.

                </p>

                <div className="gallery-verdict">

                    ✨ I genuinely don't think you've ever taken a bad picture.

                </div>

                <p>

                    So before this birthday surprise comes to an end...

                    <br /><br />

                    here's your very own Hall of Fame.

                    <br /><br />

                    Every picture has a little compliment waiting behind it...

                    <br /><br />

                    and there's one more tiny surprise.

                    <br /><br />

                    Every memory has a small song I've picked especially for it.

                    <br />

                    Just a few seconds...

                    <br />

                    but every single one reminds me of that particular picture.

                    <br /><br />

                    So whenever you flip a card...

                    <br />

                    don't forget to press play. ❤️🎵

                </p>

                <button
                    onClick={() => {

                        window.scrollTo({
                            top: 0,
                            behavior: "auto"
                        });

                        nextPage();

                    }}
                >
                    Enter The Gallery ❤️
                </button>

            </div>

        </div>

    );

};

export default GalleryIntroPage;