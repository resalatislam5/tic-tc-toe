import Game from "./Game";
import "../../App.css";
import winnerImg from "../../assets/winner.gif";
import winnerAdo from "../../assets/winning-audio.mp3";
import { useState } from "react";
function Home() {
  const [state, setState] = useState(false);
  const handleState = (item) => {
    setState(item);
  };

  return (
    <div>
      <div className="p-20 relative flex justify-center">
        <Game handleState={handleState} />
        {state && (
          <>
            <div className="absolute top-[25%] left-[30%]">
              <img className="w-96" src={winnerImg} alt="" />
              <audio src={winnerAdo} preload="true" autoPlay></audio>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
