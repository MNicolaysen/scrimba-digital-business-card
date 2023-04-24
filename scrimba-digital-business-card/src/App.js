import './App.css';
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="bio">
        <Info />
        <div className="bio-info">
          <About />
          <Interests />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
