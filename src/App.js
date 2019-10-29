import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserLiked from '.components/UserLiked'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We gunna like some beers today.
        </p>

		<ul className="beers-list">
			<li>Beer<button>Like</button></li>
		</ul>
      </header>
    </div>
  );
}

export default App;
