import AppName from "./components/AppName"
import AddToDoItem from "./components/AddToDoItem"
import ItemsList from "./components/itemsList"
import "./App.css"
import { useReducer, useState } from "react"
import { ToDoItemsContext } from "./stores/ToDoItemsStore"

const toDoItemsReducer = (currItems, action) => {
  let newToDoItems = currItems
  if (action.type === 'NEW_ITEM') {
    newToDoItems = [
      ...currItems,
      { toDo: action.payload.toDo, dueDate: action.payload.dueDate }
    ]
  } else if (action.type === 'DELETE_ITEM') {
    newToDoItems = currItems.filter((x) => x.toDo != action.payload.toDo)
  }
  return newToDoItems
}

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

  // const [toDoItems, setToDoItems] = useState(defaultItems)

  const [toDoItems, dispatchItems] = useReducer(toDoItemsReducer, defaultItems)


  const addItem = (item, dueDate) => {
    if (item != "" && dueDate != "") {
      // const newToDoItems = [...toDoItems, { toDo: item, dueDate }]
      // setToDoItems(newToDoItems)
      // setToDoItems((currValue) => [...currValue, { toDo: item, dueDate }])
      const newActionItem = {
        type: 'NEW_ITEM',
        payload: {
          toDo: item,
          dueDate
        }
      }
      dispatchItems(newActionItem)
    }
  }

  const deleteItem = (item) => {
    // const newToDoItems = toDoItems.filter((x) => x.toDo != item)
    // setToDoItems(newToDoItems)
    const newActionItem = {
      type: 'DELETE_ITEM',
      payload: {
        toDo: item
      }
    }
    dispatchItems(newActionItem)
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
