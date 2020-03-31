import React from 'react';

import Offer from './components/offer';

export default function App() {
  return (
    <>
      <div className="App">
        <Offer />
      </div>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
        `}
      </style>
      <style jsx>{`
        .App {
          text-align: center;
          padding-top: 200px;
          font-family: 'Lucida Console','Courier New';
          font-size: 15px;
        }
      `}</style>`
    </>
  );
}

