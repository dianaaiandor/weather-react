import "./App.css";
import TodaysWeather from "./TodaysWeather";
import Date from "./Date";
import Search from "./Search";

function App() {
  return (
    <div className="wrapApp">
      <div className="App">
        <div className="container">
          <Date />
          <Search name="Kyiv" />
          <TodaysWeather
            description="Clouds"
            wind={12}
            humidity={80}
            temperature={20}
            feeling={18}
          />
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
