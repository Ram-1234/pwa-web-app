import "./App.css";
import Home from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Home />
    </div>
  );
}

export default App;
