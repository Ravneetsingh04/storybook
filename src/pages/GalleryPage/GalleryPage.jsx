import "./GalleryPage.css";
import { useState } from "react";

import galleryData from "../../data/galleryData";
import GalleryCard from "../../components/GalleryCard/GalleryCard";

const GalleryPage = ({ nextPage, previousPage }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [direction, setDirection] = useState("");

    const prevIndex =
        currentIndex === 0
            ? galleryData.length - 1
            : currentIndex - 1;

    const nextIndex =
        currentIndex === galleryData.length - 1
            ? 0
            : currentIndex + 1;

    const nextCard = () => {

    if (!flipped) return;

    setDirection("slide-left");

    setTimeout(() => {

        setFlipped(false);

        if(currentIndex < galleryData.length-1){

            setCurrentIndex(currentIndex+1);

        }else{

            nextPage();

        }

        setDirection("");

    },300);

};

    const previousCard = () => {

    setDirection("slide-right");

    setTimeout(()=>{

        setFlipped(false);

        if(currentIndex>0){

            setCurrentIndex(currentIndex-1);

        }else{

            previousPage();

        }

        setDirection("");

    },300);

};
    return (

        <div className="gallery-page">

            <h1>📸 Hall of Fame</h1>

            <p>

                Every picture has something
                I wanted to tell you...

                <br /><br />

                Flip them one by one ❤️

            </p>

            <span className="gallery-counter">

                Photo {currentIndex + 1} of {galleryData.length}

            </span>

            <div className={`gallery-carousel ${direction}`}>

    <button
        className="gallery-nav left"
        onClick={previousCard}
    >
        ❮
    </button>

    <div className="gallery-preview left-preview">

        <GalleryCard
            card={galleryData[prevIndex]}
            preview={true}
        />

    </div>

    <div className="gallery-center">

        <GalleryCard
            key={currentIndex}
            card={galleryData[currentIndex]}
            flipped={flipped}
            setFlipped={setFlipped}
        />

    </div>

    <div className="gallery-preview right-preview">

        <GalleryCard
            card={galleryData[nextIndex]}
            preview={true}
        />

    </div>

    <button
        className="gallery-nav right"
        onClick={nextCard}
        disabled={!flipped}
    >
        ❯
    </button>

</div>

           </div>

    );

};

export default GalleryPage;