import React, { useState, useEffect } from 'react';

import ActiveTimer from './ActiveTimer';
import EndedTimer from './EndedTimer';
import HeaderImage from './offer-header.png';
import BackgroundImage from './offer-bg.jpg';

export default function Offer() {
  const [timeIsUp, onTimeUp] = useState(false);
  const [settings, getSettings] = useState({});

  useEffect(
    () => {
      async function fetchSettings() {
        const response = await fetch('/settings.json');
        const settings = await response.json();
        getSettings(settings);
      }
      fetchSettings();
    },
    [settings.status],
  );

  if(!settings.status) {
    return null;
  }

  const value = parseInt(settings.value, 10);
  const duration = settings.duration;
  const url = settings.url;
  return (
    <>
      <div class="offer">
        { timeIsUp && <EndedTimer />}
        {
          !timeIsUp && (
            <>
              <img src={HeaderImage} className="headerImage"/>
                <div className="message">{`Get your free £${value} cash now`}</div>
                <ActiveTimer
                  miliseconds={duration}
                  onTimeUp={() => onTimeUp(true)}
                />
                <button
                  onClick={() => window.open(url, '_blank')}
                  className="optIn"
                >Opt in</button>
            </>
          )
        }
      </div>
      <style jsx>{`
        .offer {
          color: white;
          background-image: url(${BackgroundImage});
          padding: 20px 20px;
          width: 250px;
          margin: 0 auto;
        }
        .headerImage {
          height: 50px;
          margin-bottom: 15px;
        }
        .message {
          margin-bottom: 15px;
        }
        .optIn {
          margin-top: 15px;
          width: 100%;
        }
      `}</style>
    </>
  );
}

