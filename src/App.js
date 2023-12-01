import Home from "./nuevoComponente/Home";
import Services from "./nuevoComponente/Services";
import HowWeWork from "./nuevoComponente/HowWeWork";
import Benefits from "./nuevoComponente/Benefits";
import Contact from "./nuevoComponente/Contact";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
