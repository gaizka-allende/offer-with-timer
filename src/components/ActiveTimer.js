import React, { useState, useEffect } from 'react';

import Timer from './Timer';

export default function ActiveTimer ({
  miliseconds,
  onTimeUp,
}) {
  const [secondsLeft, setSecondsLeft] = useState(
    window.localStorage.getItem('secondsLeft')
      ? parseInt(window.localStorage.getItem('secondsLeft'))
      : miliseconds
  );

  useEffect(
    () => {
      const timerInterval = setInterval(
        () => {
          setSecondsLeft(
            secondsLeft => {
              window.localStorage.setItem('secondsLeft', secondsLeft)
              return secondsLeft - 1000
            }
          );
        },
        1000,
      );
      return () => clearInterval(timerInterval);
    },
    [],
  );

  if (secondsLeft === 0) {
    onTimeUp();
  }

  const hours = Math.floor(secondsLeft / 3600000);
  const minutes = Math.floor((secondsLeft % 3600000) / 60000);
  const seconds = ((secondsLeft % 3600000) % 60000) / 1000;
  return (
    <Timer
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

