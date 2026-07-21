import "./TimelinePage.css";

import memories from "../../data/memories";

import TimelineCard from "../../components/TimelineCard/TimelineCard";

const TimelinePage = ({ nextPage }) => {

    return (

        <div className="timeline-page">

            <h1 className="timeline-title">

                ❤️ Some of my Best Days ❤️

            </h1>

            <div className="timeline">

                {

                    memories.map((memory,index)=>(

                        <TimelineCard

                            key={memory.id}

                            memory={memory}

                            index={index}

                        />

                    ))

                }

            </div>

            <button
                className="next-btn"
                onClick={nextPage}
            >
                Continue ❤️
            </button>

        </div>

    );

};

export default TimelinePage;