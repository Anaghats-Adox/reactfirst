import "./App.css";
import Header from "./components/header";
function App() {
  let count = 0;
  return (
    <div className="des">
      <button onclick={addcount}>Add</button>
      <h1>MY APP </h1>
      <h2>counter : {count}</h2>
      <p>This My First React Project</p>
      <Header />
    </div>
  );
}

export default App;
