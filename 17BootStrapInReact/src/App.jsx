import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <button type="button" class="btn btn-primary">Primary</button>
    <br />
<button type="button" class="btn btn-secondary">Secondary</button>
<br />
<button type="button" class="btn btn-success">Success</button>
<br />
<button type="button" class="btn btn-danger">Danger</button>
<br />
<button type="button" class="btn btn-warning">Warning</button>
<br />
<button type="button" class="btn btn-info">Info</button>
<br />
<button type="button" class="btn btn-light">Light</button>
<br />
<button type="button" class="btn btn-dark">Dark</button>
<br />
<button type="button" class="btn btn-link">Link</button>
  </div>
}

export default App
