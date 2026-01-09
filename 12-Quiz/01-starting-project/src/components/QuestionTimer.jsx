import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTiNG TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearInterval(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTiNG INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
};

export default QuestionTimer;
