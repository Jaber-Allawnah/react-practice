import './App.css';
import Button from './components/Button';
import Label from './components/Label';
import { useState } from 'react';

function App() {
  const [myXValue,setmyXValue]=useState(0);
  const increaseMyXValue=()=>{
      setmyXValue(myXValue+1);
  }
  const decreaseMyXValue=()=>{
    setmyXValue(myXValue-1)
    if(myXValue<=0)
      setmyXValue(0);

  }

  return (
    <>
    <Button increaseMyXValue={increaseMyXValue} name="+" />
    <Label myXValue={myXValue} />
    <Button increaseMyXValue={decreaseMyXValue} name="-" />
    </>

  );
}

export default App;
