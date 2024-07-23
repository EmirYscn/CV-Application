import Info from "./components/info";
import Education from "./components/education";
import Experience from "./components/experience";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Info />
      <Education />
      <Experience />
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;
