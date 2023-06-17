import "./Styles/App.css";
import Header from "./Components/Header";
import VacationCard from "./Components/VacationCard";
import data from "./Data";

function App() {
  const vacations = data.map((vacation, index) => {
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
