import React from "react";
import Delete from "../delete.png";

const TimerBox = ({timer,handleDeleteTimer,index}) => {
  return (
    <div className="timerBox">
      <p className="remainTime">{timer.seconds.toFixed(2)}</p>
      <p >{timer.timeCreated}</p>
      <img className="deleteIcon" src={Delete} alt="delt" onClick={() => handleDeleteTimer(index)}/>
    </div>
  );
};

export default TimerBox;
