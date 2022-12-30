import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="wrapApp">
      <div className="App">
        <div className="container">
          <Weather defaultCity="Paris" />
        </div>
      </div>
      <a
        href="https://github.com/dianaaiandor/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Coded by Di and it is open-source
      </a>
    </div>
  );
}

export default App;
