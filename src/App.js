import { useState } from 'react';
import './App.css';
import moonIcon from './assests/moon.png'
import sunIcon from './assests/sun.png'
import Header from './components/header/Header';
import KeyPad from './components/keypad/KeyPad';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className="app" data-theme={isDarkMode ? "dark" : ""}>
      <div className='app_calculator'>
        <div className='app_calculator_navbar'>
          <div
            className='app_calculator_navbar_toggle'
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div className={
              `app_calculator_navbar_toggle_circle 
            ${isDarkMode ?
                "app_calculator_navbar_toggle_circle_active" : ""}`
            } />
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="" />
        </div>

        <Header />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
