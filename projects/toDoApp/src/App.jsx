import AppName from "./components/AppName"
import AddToDoItem from "./components/AddToDoItem"
import ItemsList from "./components/itemsList"
import "./App.css"
import { useState } from "react"

function App() {
  const [toDoItems, setToDoItems] = useState([
    {
      toDo: "Trim the beard",
      dueDate: "25/02/2025"
    },
    {
      toDo: "Take shower",
      dueDate: "25/02/2025"
    }
  ])


  const addItem = (item, dueDate) => {
    if (item != "" && dueDate != "") {
      const newToDoItems = [...toDoItems, { toDo: item, dueDate }]
      setToDoItems(newToDoItems)
    }
  }

  const deleteItem = (item) => {
    const newToDoItems = toDoItems.filter((x) => x.toDo != item)
    setToDoItems(newToDoItems)
  }



  return <center className="todo-container">

    <AppName></AppName>

    <AddToDoItem onAddItem={addItem}  ></AddToDoItem>

    <ItemsList toDoItems={toDoItems} onDeleteItem={deleteItem}></ItemsList>
    {/* <div className="container items-container">

      <div className="row kg-row">
        <div className="col-6 ">
          Trim the beard
        </div>

        <div className="col-4">
          25/02/2025
        </div>

        <div className="col-2 ">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>

      </div>

      <div className="row kg-row">
        <div className="col-6">
          Take shower
        </div>

        <div className="col-4">
          25/02/2025
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>

      </div>

    </div> */}

  </center>
}

export default App
