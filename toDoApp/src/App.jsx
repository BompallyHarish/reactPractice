import AppName from "./components/AppName"
import AddToDoItem from "./components/AddToDoItem"
import "./App.css"

function App() {


  return <center class="todo-container">

    <AppName></AppName>

    <AddToDoItem></AddToDoItem>


    <div class="container items-container">

      <div class="row kg-row">
        <div class="col-6 ">
          Trim the beard
        </div>

        <div class="col-4">
          25/02/2025
        </div>

        <div class="col-2 ">
          <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>

      </div>

      <div class="row kg-row">
        <div class="col-6">
          Take shower
        </div>

        <div class="col-4">
          25/02/2025
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>

      </div>

    </div>

  </center>
}

export default App
