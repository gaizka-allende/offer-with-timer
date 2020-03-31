import React from 'react';

export default function Timer ({
  hours,
  minutes,
  seconds
}) {
  return (
    <div>
      <span>{ hours < 10 ? `0${hours}` : `${hours}` }</span>
      :
      <span>{ minutes < 10 ? `0${minutes}` : `${minutes}` }</span>
      :
      <span>{ seconds < 10 ? `0${seconds}` : `${seconds}` }</span>
    </div>
  );
}

