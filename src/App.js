import { useState } from "react";
import vipData from "./data/vipData";

import LockScreen from "./pages/LockScreen/LockScreen";
import UnlockScreen from "./pages/UnlockScreen/UnlockScreen";
import BirthdayPage from "./pages/BirthdayPage/BirthdayPage";
import JourneyIntro from "./pages/JourneyIntro/JourneyIntro";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
import VIPIntro from "./pages/VIPIntro/VIPIntro";
import VIPPage from "./pages/VIPPage/VIPPage";
import GalleryIntroPage from "./pages/GalleryIntroPage/GalleryIntroPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import LetterPage from "./pages/LetterPage/LetterPage";
import FinalPage from "./pages/FinalPage/FinalPage";
import EndCredits from "./pages/EndCredits/EndCredits"; // <-- NEW

function App() {
    const [page, setPage] = useState("lock");
    const [vipCardIndex, setVipCardIndex] = useState(0);


    switch (page) {

        

        case "lock":
            return (
                <LockScreen
                    unlock={() => setPage("unlock")}
                />
            );

        case "unlock":
            return (
                <UnlockScreen
                    nextPage={() => setPage("birthday")}
                />
            );

        case "birthday":
            return (
                <BirthdayPage
                    nextPage={() => setPage("journey")}
                />
            );

        case "journey":
            return (
                <JourneyIntro
                    nextPage={() => setPage("timeline")}
                />
            );

        case "timeline":
            return (
                <TimelinePage
                    nextPage={() => setPage("vipIntro")}
                />
            );

        case "vipIntro":
            return (
                <VIPIntro
                    nextPage={() => setPage("vip")}
                />
            );

        case "vip":
            return (
                <VIPPage
                    currentIndex={vipCardIndex}
                    setCurrentIndex={setVipCardIndex}
                    nextPage={() => setPage("galleryIntro")}
                />
            );

        case "galleryIntro":
            return (
                <GalleryIntroPage
                    nextPage={() => setPage("gallery")}
                />
            );

        case "gallery":
            return (
                <GalleryPage
                    previousPage={() => {
                        setVipCardIndex(vipData.length - 1);
                        setPage("vip");
                    }}
                    nextPage={() => setPage("letter")}
                />
            );

        case "letter":
            return (
                <LetterPage
                    previousPage={() => setPage("gallery")}
                    nextPage={() => setPage("final")}
                />
            );

        case "final":
            return (
                <FinalPage
                    previousPage={() => setPage("letter")}
                    nextPage={() => setPage("credits")} // <-- Changed
                />
            );

        case "credits":
            return (
                <EndCredits
                    restartJourney={() => {
                        setVipCardIndex(0);
                        setPage("lock");
                    }}
                />
            );

        default:
            return null;
    }
}

export default App;