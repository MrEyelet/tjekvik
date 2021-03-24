import logo from './assets/logo.png';
import checkInIcon from './assets/check-in-icon.png';
import checkOutIcon from './assets/check-out-icon.png';
import noAppointmentIcon from './assets/no-appointment-icon.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <h1>
        BMW Here&There
      </h1>

      <h2>
        Welcome to the service station
      </h2>

      <main>
        <div className="App-box">
          <div className="Icon-wrap">
            <img src={checkInIcon} />
          </div>

          <h3>
            Check in
          </h3>
        </div>

        <div className="App-box">
          <div className="Icon-wrap">
            <img src={checkOutIcon} />
          </div>

          <h3>
            Check out
          </h3>
        </div>

        <div className="App-box">
          <div className="Icon-wrap">
            <img src={noAppointmentIcon} />
          </div>

          <h3>
            Without appointment
          </h3>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  );
}

export default App;
