import PropTypes from "prop-types";
import { useState } from "react";
import Save from "../assets/save.svg";

const Card = ({ index, candidate }) => {
  const [hoveredRoundIndex, setHoveredRoundIndex] = useState(null); // Track hovered round
  const [hoveredScoreIndex, setHoveredScoreIndex] = useState(false); // Track hovered round

  const generateDots = (progress, roundIndex) => {
    const totalDots = 10;
    const fullDotsCount = Math.floor((progress / 100) * totalDots);
    const hasHalfDot = progress % 10 >= 5;

    return Array.from({ length: totalDots }, (_, index) => {
      let dotStyle = {};

      if (index < fullDotsCount) {
        dotStyle = {
          background: "#0071db", // Original blue color
          boxShadow: "0px 0px 8px rgba(0, 113, 219, 0.4)", // Original shadow
        };
      } else if (index === fullDotsCount && hasHalfDot) {
        dotStyle = {
          background:
            "linear-gradient(to top left, #004a9f, #0071db, rgba(0, 113, 219, 0.2), #d9d9d9)",
          boxShadow: "0px 0px 8px rgba(0, 113, 219, 0.3)",
        };
      } else {
        dotStyle = { background: "#d9d9d9" };
      }

      // Apply hover effect only for the hovered round
      if (hoveredRoundIndex === roundIndex && dotStyle.background === "#0071db") {
        dotStyle.background = "#026acc"; // Lighter blue shade
        dotStyle.boxShadow = "0px 0px 3px rgba(0, 0, 0, 0.6)"; // Change shadow to black on hover
      }

      return dotStyle;
    });
  };

  const getDotPosition = (index, radius = 31) => {
    const angle = ((2.5 - index) / 10) * 2 * Math.PI;
    return {
      left: `${Math.round(radius + radius * Math.cos(angle))}px`,
      top: `${Math.round(radius - radius * Math.sin(angle))}px`,
    };
  };

  return (
    <div className="min-w-[380px] w-[30%] min-h-[380px] bg-white rounded-[20px] shadow py-[2vh] px-[3vh] flex flex-col" style={{ direction: "ltr" }}
     onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 3px rgba(0, 114, 220, 0.3)")}
     onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
>
  <div className="flex items-center gap-4">
    <img
      className="w-[45px] h-[45px] rounded-full shadow-inner"
      src={candidate.src}
      alt="Profile"
    />
    <div className="flex flex-col gap-2">
      <div className="text-black text-[17px] font-medium leading-[18px]">
        {candidate.name}
      </div>
      <div className="text-[#a5a5a7] text-[12px] leading-[14px]">
        {candidate.title} at {candidate.location}
      </div>
      <div className="text-[#a5a5a7] text-[12px] leading-[14px]">
        {candidate.experience} years experience
      </div>
            {/* <-------------- Add Layila recommanded change ---------------> */}
            {candidate.recommanded && (
  <div className="HeaderTag h-5 px-2 py-1 rounded shadow border border-[#5c99ff] flex justify-center items-center gap-2">
    <div className="Label text-center text-[#5c99ff] text-sm font-normal uppercase leading-3 tracking-wide">
      Liyla Recommended
    </div>
  </div>
)}
    </div>
    <div className="ml-auto border border-[#464646] rounded-md py-1 px-2 text-[#464646] text-center font-normal">
      <p className="text-[1.5vh] font-[300]">Rank</p>

      {/* <-------------- change ---------------> */}
      <span className="text-[2vh] font-[400]">12</span>
    </div>
  </div>

  <div className="border-t border-[#cacaca] my-3"></div>

  <div className="flex justify-around h-full">
  <div className="flex gap-8">
    {candidate.rounds.map((round, roundIndex) => (
      <div key={roundIndex}
      className="flex flex-col items-center justify-around relative flex-grow hover:transform hover:scale-[1.02] hover:transition-transform hover:duration-300"
      onMouseEnter={() => setHoveredRoundIndex(roundIndex)} // Set hovered round index
      onMouseLeave={() => setHoveredRoundIndex(null)} // Reset hover state
      >
        <div className="text-center text-[10px] mt-1"
        style={{
          color: hoveredRoundIndex === roundIndex ? "#4d4d4d" : "#757575", // Change color on hover
        }}
        >
          {round.name}
        </div>
        <div className="relative flex justify-center items-center w-[63px] h-[61.66px]">
          {generateDots(round.progress).map((style, index) => (
            <div
              key={index}
              className="w-[12.06px] h-[12.06px] rounded-full absolute"
              style={{
                ...style,
                ...getDotPosition(index, 25),
              }}
            />
          ))}
        </div>

        <div className="text-center text-xs font-bold mt-2 absolute top-[44%] left-[38%]"
        style={{
          color: hoveredRoundIndex === roundIndex ? "#000000" : "#656565", // Hover color: black
        }}
        >
          {round.progress}%
        </div>

        <div className="text-center text-[12px] mt-1"
        style={{
          color: hoveredRoundIndex === roundIndex ? "#000000" : "#656565", // Hover color: black
        }}
        >
          {round.description}
        </div>
      </div>
    ))}
  </div>

  <div className="flex flex-col justify-around items-center hover:scale-[1.02] hover:transition-transform hover:duration-300"
  onMouseEnter={() => setHoveredScoreIndex(true)} // Set hovered round index
  onMouseLeave={() => setHoveredScoreIndex(false)} // Reset hover state
  >
  <div className="text-center text-[12px] font-semibold"
  style={{
    color: hoveredScoreIndex === true ? "#000000" : "#656565", // Hover color: black
  }}
  >
     Total
  </div>
  <div className="text-[40px] font-semibold"
  style={{
    color: hoveredScoreIndex === true ? "#24cf0a" : "#24df3a", // Hover color: black
  }}
  >
      86%
    </div>
    <div className="text-center text-[12px] font-semibold"
    style={{
      color: hoveredScoreIndex === true ? "#000000" : "#656565", // Hover color: black
    }}
    >
    Cumulative score
  </div>
  </div>
  </div>

  <div className="flex justify-center mt-[2vh]">
    <div className="p-[1vh] rounded-[30px] border border-[#0071db] flex justify-center items-center gap-2.5 hover:scale-[1.05] hover:transition-transform hover:duration-300 hover:cursor-pointer hover:shadow-[0px_0px_3px_rgba(0,_0,_220,_0.25)]">
      <div className="text-[#0071db] text-sm font-medium leading-[14px]">
        View more
      </div>
    </div>
  </div>
</div>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  candidate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    appliedDaysAgo: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    rounds: PropTypes.arrayOf(
      PropTypes.shape({
        progress: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Card;