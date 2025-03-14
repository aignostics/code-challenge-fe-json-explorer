import "./App.css";
import JsonExplorer from "./components/JsonExplorer";
import { sampleData } from "./assets/data/sampleData";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>JSON Explorer</h1>
          <p>Explore the JSON structure by expanding and collapsing nodes</p>
        </header>

        <main>
          <div className="explorer-container">
            <JsonExplorer data={sampleData} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
