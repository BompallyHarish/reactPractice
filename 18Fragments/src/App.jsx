
import './App.css'
import React from 'react'
import Header from './components/Header'
import FoodItems from './components/FoodItems'


let healthyItems = ['Amla', 'Apple', 'carrot', 'beetroot']
// healthyItems = []

function App() {

  // if (healthyItems.length == 0) {
  //   return <h1>Healthy Items not available</h1>

  // }

  return <>
    <Header items={healthyItems}></Header>

    <ul class="list-group">
      {healthyItems.map((item, index) => (
        <FoodItems item={item} key={index}></FoodItems>
      ))}
    </ul>
  </>

}

export default App
