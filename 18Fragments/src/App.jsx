
import './App.css'
import React from 'react'

let healthyItems = ['Amla', 'Apple', 'carrot', 'beetroot']
// healthyItems = []

function App() {

  if (healthyItems.length == 0) {
    return <h1>Healthy Items not available</h1>

  }

  return <>
    <h1>Healthy Food</h1>
    <ul class="list-group">
      {healthyItems.map((item, index) => (
        <li class="list-group-item" key={index}>{item}</li>
      ))}
    </ul>
  </>



}

export default App
