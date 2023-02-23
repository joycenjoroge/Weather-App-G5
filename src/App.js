import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <Navigation />
      </div>
      <div className='grid'>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />

      </div>
      
    </div>
  );
}

export default App;

