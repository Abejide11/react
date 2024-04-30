
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Counter from './Component/Counter'

function App() {
  const [counter, setCounter]= useState(0)

  const handlePlusClick= () => setCounter(counter+1);
const handleMinusClick = () => setCounter(counter-1)
  const handleResetClick = () => setCounter (0)

  return (
    <>
  <Counter counter ={counter}/>
     <button onClick ={handlePlusClick}>
      plus
     </button>
     <button onClick={handleResetClick}>
reset
     </button >

     <button onClick={handleMinusClick}>
minus
     </button>
    </>
  )
}

export default App
