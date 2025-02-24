import './App.css';
import Navbar from './shared-components/navbar';
import HomePage from './pages/homepage/Homepage';
import Experience from './pages/experience/Experience';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
