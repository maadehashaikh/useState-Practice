// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      {/* <button>Counter</button>
      <button>Greeting</button> */}
      <Counter/>
      <Greetings/>
    </div>
  );
}

export default App;
