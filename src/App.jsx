import './App.css';
import Nav from './Componets/Nav';
import Intro from './Componets/Intro/Intro';
import About from './Componets/About/About';
function App() {
  return (
    <div>
        <Nav />
      <div id='content-parent'>    
        <div id='left-side'>
          <Intro />
        </div>
        <div id='right-side'>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
