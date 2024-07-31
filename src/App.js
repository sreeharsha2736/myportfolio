import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
