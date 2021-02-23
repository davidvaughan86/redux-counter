
import './App.css';
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReduxCounter from './ReduxCounter'



function App() {
  const [count, setCount]= useState(0)

  return (
    <div className="App">
    <h1>Local State Counter</h1>
    <p>{count}</p>
    <button onClick={() => setCount(count+1)}>Increase</button>
    <button onClick={() => setCount(count-1)}>Decrease</button>
    <ReduxCounter/> 
    </div>
  );
}

export default App;
   

