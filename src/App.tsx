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
            {/*
            TODO: Implement your JSON Explorer component here
            Requirements:
            1. Render the sample JSON data as an expandable/collapsible tree
            2. Display the path when a node is clicked
            3. Visually distinguish different data types
          */}
          </div>

          <div className="info-panel">
            <h2>Selected Node Info</h2>
            <div className="path-display">
              {/* Display the selected path here */}
              <p>
                Path: <code>No node selected</code>
              </p>
            </div>
            <div className="type-display">
              {/* Display the type information here */}
              <p>
                Type: <span>-</span>
              </p>
            </div>
            <div className="value-display">
              {/* Display the value here if applicable */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
