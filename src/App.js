import logo from './logo.svg';
import './App.css';
import Navbar from './shared-components/navbar';
import HomePage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
