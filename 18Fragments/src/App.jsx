
import './App.css'
import React from 'react'
import Header from './components/Header'
import FoodItems from './components/FoodItems'
import Container from './components/container/Container'


let healthyItems = ['Amla', 'Apple', 'carrot', 'beetroot']
// healthyItems = []

function App() {

  // if (healthyItems.length == 0) {
  //   return <h1>Healthy Items not available</h1>

  // }

  return <>
    <Container>
      <Header items={healthyItems}></Header>

    </Container>
    <Container>

      <ul class="list-group">
        {healthyItems.map((item, index) => (
          <FoodItems item={item} key={index}></FoodItems>
        ))}
      </ul>
    </Container>
    <Container>
      <p>This is footer message for healthy foods</p>
    </Container>
  </>


}

export default App
