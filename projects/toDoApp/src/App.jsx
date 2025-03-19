import AppName from "./components/AppName"
import AddToDoItem from "./components/AddToDoItem"
import ItemsList from "./components/itemsList"
import "./App.css"
import ToDoItemsContextProvider from "./stores/ToDoItemsStore"



function App() {


  return (
    <ToDoItemsContextProvider>
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
    </ToDoItemsContextProvider>
  )
}

export default App
