import "./App.css";
import CardSkeleton from "./components/CardSkeleton";

function App() {
  return (
    <div className="App">
        <CardSkeleton cards={8} />
    </div>
  );
}

export default App;
