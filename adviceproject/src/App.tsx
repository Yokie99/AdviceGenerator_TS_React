import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Advice from "./Interfaces/interface";
import getData from "./DataServices/DataServices";

import dice from "./images/icon-dice.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import mobileDivider from "./images/pattern-divider-mobile.svg";

function App() {
  const [adviceData, setAdvicedata] = useState<Advice>();

  useEffect(() => {
    const adviceFetch = async () => {
      const fetchData = await getData();
      setAdvicedata(fetchData);
    };
    adviceFetch();
  }, []);

  const getNewAdvice = async () => {
    const fetchData = await getData();
    setAdvicedata(fetchData);
  };

  return (
    <div className="dark-blue-background h-screen font-Manrope">
      <div className="text-sm sm:text-2xl text-white text-center centered-div sm:w-[40vw] w-[90vw] pt-8 pb-3 px-10 rounded-[3%]">
        <p className="neonGreen tracking-[0.3em]">ADVICE #{adviceData?.slip.id}</p>
        <p className="text-2xl sm:text-4xl my-10 grayTxt font-extrabold">"{adviceData?.slip.advice}"</p>

        <div className="flex justify-center">
          <img src={desktopDivider} />
        </div>

        <div className="flex justify-center relative translate-y-[70%]">
          <button onClick={() => getNewAdvice()}>
            <div className="glow w-16 h-16 bg-green-400 rounded-[50%]">
              <img className="middle" src={dice} />
            </div>
          </button>
        </div>


      </div>
    </div>
  );
}

export default App;
