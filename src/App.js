import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App bg-dark text-light">     
      <HashRouter>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </HashRouter>
    </div>
  );
}

export default App;
