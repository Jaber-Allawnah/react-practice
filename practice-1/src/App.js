import './App.css';
import Button from './components/Button';
import Label from './components/Label';
import { useState } from 'react';

function App() {
  const [myXValue,setmyXValue]=useState(0);
  const increaseMyXValue=()=>{
      setmyXValue(
          ()=>{
              const newValue=myXValue+1;
              return newValue;

          }
      );
      console.log(myXValue);
  }
  const decreaseMyXValue=()=>{
    setmyXValue(()=>{
      const newValue=myXValue-1;
      if(myXValue<=0)
      return 0;

      return newValue;

    })
    console.log(myXValue);

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
