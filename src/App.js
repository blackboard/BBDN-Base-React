import logo from "./pages/home/logo.svg";
import "./App.css";
import Home from "./pages/home/home";

/**
 * Index Component for the application
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
