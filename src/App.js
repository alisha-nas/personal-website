import './App.css';
import Navbar from './shared-components/navbar';
import HomePage from './pages/Homepage';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ShootingStars from './assets/Shooting-Star';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
