import "./App.css";
import Weather from "./Weather";

import Search from "./Search";

function App() {
  return (
    <div className="wrapApp">
      <div className="App">
        <div className="container">
          <Search name="Kyiv" />
          <Weather />
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
