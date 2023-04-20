import React, { useState, useEffect } from "react";
import TimerBox from "./TimerBox";

const Timer = () => {
  const [timers, setTimers] = useState([]);
  const [newTimer, setNewTimer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleString();
    const newTimerObj = { timeCreated: currentTime, seconds: Number(newTimer) };
    setTimers([...timers, newTimerObj]);
    setNewTimer("");
  };

  const handleTimerCountdown = () => {
    setTimers((prevTimers) => {
      const updatedTimers = prevTimers.map((timer) => {
        return { ...timer, seconds: timer.seconds - 0.01 };
      });
      const filteredTimers = updatedTimers.filter((timer) => timer.seconds > 0);
      return filteredTimers;
    });
  };

  useEffect(() => {
    const timer = setInterval(handleTimerCountdown, 10);
    return () => clearInterval(timer);
  }, []);


  const handleDeleteTimer = (timerIndex) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers.splice(timerIndex, 1);
      return updatedTimers;
    });
  };

  return (
    <div className="mainTimer">
      <div className="leftTimerSection">
        <h2>Timers</h2>
        <ul
        className="timerUl"
        >
          {timers.map((timer, index) => (
            <li className="timerLi"  key={index}>
              <TimerBox
                timer={timer}
                handleDeleteTimer={handleDeleteTimer}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="rightTimerSection" >
        <h2>New Timer</h2>
        <form
          onSubmit={handleSubmit}
          className="timerForm"
        >
          <input
            type="number"
            className="timerInput"
            value={newTimer}
            onChange={(e) => setNewTimer(e.target.value)}
          />
          <button
            className="addTimerButton"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Timer;
