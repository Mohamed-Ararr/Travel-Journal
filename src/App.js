import "./Styles/App.css";
import Header from "./Components/Header";
import VacationCard from "./Components/VacationCard";
import data from "./Data";
import jap from "./images/japan-image.png";
import aus from "./images/australia-image.png";
import nor from "./images/norway-image.png";

function App() {
  const vacations = data.map((vacation, index) => {
    if (index === 0) {
      vacation.image = jap;
    } else if (index === 1) {
      vacation.image = aus;
    } else if (index === 2) {
      vacation.image = nor;
    }
    return <VacationCard key={vacation.key} vac={vacation} />;
  });
  return (
    <div className="App">
      <div className="travel-card">
        <Header />
        <main className="main-section">{vacations}</main>
      </div>
    </div>
  );
}

export default App;
