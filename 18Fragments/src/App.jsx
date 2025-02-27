
import './App.css'
import React from 'react'
import Header from './components/Header'
import FoodItems from './components/FoodItems'
import Container from './components/container/Container'
import FoodInput from './components/foodInput/FoodInput'
import { useState } from 'react'


// let healthyItems = ['Amla', 'Apple', 'carrot', 'beetroot']
// healthyItems = []

function App() {

  // if (healthyItems.length == 0) {
  //   return <h1>Healthy Items not available</h1>

  // }

  // let [inputValue, setInputValue] = useState("Default input value")
  // const handleInputChange = (event) => {
  //   // console.log(event.target.value)
  //   setInputValue(event.target.value)
  // }

  let [healthyItems, setHealthyItems] = useState(['Amla', 'Apple', 'Carrot', 'Beetroot'])

  const handleOnKeydown = (event) => {
    if (event.key === 'Enter' && event.target.value != "") {
      let newItems = [...healthyItems, event.target.value]
      event.target.value = ""
      setHealthyItems(newItems)
    }
  }

  let [activeItems, setActiveItems] = useState([])

  const handleBuyButton = (event, item) => {
    let newActiveItems = [...activeItems, item]
    setActiveItems(newActiveItems)
  }

  return <>
    <Container>

      <Header items={healthyItems}></Header>

    </Container>

    <Container>

      {/* <FoodInput handleInputChange={handleInputChange}></FoodInput> */}
      <FoodInput handleOnKeydown={handleOnKeydown}></FoodInput>
      {/* <p>{inputValue}</p> */}

      <ul className="list-group">
        {healthyItems.map((item, index) => (
          <FoodItems
            item={item}
            key={index}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => handleBuyButton(event, item)}
          ></FoodItems>
        ))}
      </ul>

    </Container>

    <Container>

      <p>This is footer message for healthy foods</p>

    </Container>
  </>


}

export default App
