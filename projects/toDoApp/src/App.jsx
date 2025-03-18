import AppName from "./components/AppName"
import AddToDoItem from "./components/AddToDoItem"
import ItemsList from "./components/itemsList"
import "./App.css"
import { useState } from "react"
import { ToDoItemsContext } from "./stores/ToDoItemsStore"

function App() {
  const defaultItems = [
    {
      toDo: "Buy Fruits",
      dueDate: "18-03-2025"
    },
    {
      toDo: "Take shower",
      dueDate: "18-03-2025"
    }
  ]
  const [toDoItems, setToDoItems] = useState(defaultItems)


  const addItem = (item, dueDate) => {
    if (item != "" && dueDate != "") {
      // const newToDoItems = [...toDoItems, { toDo: item, dueDate }]
      // setToDoItems(newToDoItems)
      setToDoItems((currValue) => [...currValue, { toDo: item, dueDate }])
    }
  }

  const deleteItem = (item) => {
    const newToDoItems = toDoItems.filter((x) => x.toDo != item)
    setToDoItems(newToDoItems)
  }



  return (
    <ToDoItemsContext.Provider value={{ toDoItems, addItem, deleteItem }} >
      <center className="todo-container">

        <AppName></AppName>

        <AddToDoItem  ></AddToDoItem>

        <ItemsList ></ItemsList>
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
    </ToDoItemsContext.Provider >
  )
}

export default App
