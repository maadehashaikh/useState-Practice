// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';

function App() {
  const [counter,setCount] = useState(false);
  const [greeting,setGreeting] = useState(false);
  const counterFunc = () => {
    setCount(true);
    setGreeting(false);
  }
  const greetingFunc = () => {
    setGreeting(true);
    setCount(false);
  }
  return (
    <div className="App">
      <button onClick={counterFunc}>Counter</button>
      <button onClick={greetingFunc}>Greeting</button>
       {counter && <Counter/>}
       {greeting && <Greetings/>}
    </div>
  );
}

export default App;
