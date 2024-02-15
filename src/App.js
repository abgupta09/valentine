import React, { useState } from 'react';
import './App.css';
import SignIn from './SignIn';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showRoses, setShowRoses] = useState(false);

  const triggerRoseShower = () => {
    setShowRoses(true);
    setTimeout(() => setShowRoses(false), 5000); // Show the roses for 5 seconds
  };

  return (
    <div className="App">
      {!isSignedIn ? (
        <SignIn onSignIn={setIsSignedIn} />
      ) : (
        <>
          <header className="App-header">
            <h1>Happy Valentine's Day! ❤️</h1>
            <p>Dear Anugya,</p>
            <p>Wishing you all the love and happiness you so richly deserve. I hope today was as special as you are.</p>
            <button onClick={triggerRoseShower}>Click Me</button>
          </header>
          {showRoses && <div className="rose-shower">
            {Array.from({ length: 200 }).map((_, index) => (
              <div key={index} className={`rose rose-${index % 5 + 1}`}>🌹</div>
            ))}
          </div>}
        </>
      )}
    </div>
  );
}

export default App;
