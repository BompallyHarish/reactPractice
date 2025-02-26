
import './App.css'

import Display from './components/display/Display'
import Buttons from './components/buttons/Buttons'


function App() {

  return <>
    <div>
      <h1>Calculator App</h1>
    </div>
    <div className='calculator'>
      <Display></Display>
      <Buttons></Buttons>
    </div>
  </>
}

export default App
