import { useEffect, useState, useRef } from "react";

export default function CountDown() {
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const timeState = useRef(0);

  const updateValue = (value) => {
    setValue(value);
  };

  const resetTimer = () => {
    clearTimeout(timeState.current);
    setTimer(0);
  };

  const pauseTimer = () => {
    setPauseTime(timer);
    clearTimeout(timeState.current);
  };

  const continueTimer = () => {
    setTimer(pauseTime);
    timeState.current = setTimeout(() => {
      if (timer > 0) {
        updateTimer(timer - 1);
      } else if (timer === 0) {
        clearTimeout(timeState.current);
      }
    }, 1000);
  };

  const startTimer = () => {
    setTimer(value);
  };

  const updateTimer = (value) => {
    setTimer(value);
  };

  useEffect(() => {
    timeState.current = setTimeout(() => {
      if (timer > 0) {
        updateTimer(timer - 1);
      } else if (timer === 0) {
        clearTimeout(timeState.current);
      }
    }, 1000);
  }, [timer]);

  return (
    <div>
      <h1>
        {" "}
        Start timer for{" "}
        {
          <input
            type="text"
            id="user-input"
            onChange={(e) => {
              updateValue(e.target.value);
            }}
          />
        }{" "}
        seconds.{" "}
      </h1>
      <h2>{timer}</h2>
      <span>
        <button
          id="start-button"
          type="button"
          onClick={() => {
            startTimer();
          }}
        >
          Start
        </button>{" "}
      </span>
      <span>
        <button
          id="pause-button"
          type="button"
          onClick={() => {
            pauseTimer();
          }}
        >
          Pause
        </button>{" "}
      </span>
      <span>
        <button
          id="continue-button"
          type="button"
          onClick={() => {
            continueTimer();
          }}
        >
          Continue
        </button>{" "}
      </span>
      <span>
        <button
          id="reset-button"
          type="button"
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </button>
      </span>
    </div>
  );
}
