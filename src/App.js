import "./App.css";
import TodaysWeather from "./TodaysWeather";
import Date from "./Date";
import Search from "./Search";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
