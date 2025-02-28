
import './App.css'

import Display from './components/display/Display'
import Buttons from './components/buttons/Buttons'
import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState("")

  const onButtonClick = (button) => {
    let newValue
    if (button === "=") {
      newValue = eval(inputValue)
      setInputValue(newValue)
    } else if (button === "C" || button === "AC") {
      newValue = ""
      setInputValue(newValue)
    } else {
      newValue = inputValue + button
      setInputValue(newValue)
    }
  }

  return <>

    <div>
      <h1>Calculator App</h1>
    </div>

    <div className='calculator'>
      <Display inputValue={inputValue}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>

  </>
}

export default App
