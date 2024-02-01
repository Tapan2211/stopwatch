import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [elaspedtime, setElaspedTime] = useState(0);

  const formateTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins} : ${remainingSecs < 10 ? "0" : " "} ${remainingSecs}`
  }

  const toggleTime = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }

  const reset = () => {
    setIsRunning(false);
    setElaspedTime(0);
  }

  useEffect(() => {
    const ac = new AbortController();
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElaspedTime((prevElaspedTime) => prevElaspedTime + 1)
      }, 1000)
    } else {
      clearInterval(intervalId);
    }
    return()=> {clearInterval(intervalId);
    ac.abort();
  }
  }, [isRunning])

  //git remote set-url origin https://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@github.com/Tapan2211/stopwatch

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formateTime(elaspedtime)}</p>
      <button onClick={toggleTime}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
