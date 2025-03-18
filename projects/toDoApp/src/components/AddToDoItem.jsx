import { useState, useRef, useContext } from "react"
import { IoIosAddCircle, IoMdAddCircle } from "react-icons/io";
import { ToDoItemsContext } from "../stores/ToDoItemsStore";


function AddToDoItem() {

    // const [toDoItem, setToDoItem] = useState("")
    // const [dueDate, setDueDate] = useState("")
    const { addItem } = useContext(ToDoItemsContext)
    const toDoItem = useRef()
    const dueDate = useRef()

    // const onChangeItem = (event) => {
    //     console.log(event.target.value)
    //     setToDoItem(event.target.value)
    // }

    // const onChangeDate = (event) => {
    //     console.log(event.target.value)
    //     setDueDate(event.target.value)
    // }

    const addItemButton = (event) => {
        event.preventDefault()

        addItem(toDoItem.current.value, dueDate.current.value)
        toDoItem.current.value = ""
        dueDate.current.value = ""
        // setDueDate("")
        // setToDoItem("")

    }

    return <div className="container items-container">
        <form className="row kg-row" onSubmit={addItemButton}>
            <div className="col-6">
                <input type="text" placeholder="Enter ToDo Here" ref={toDoItem}  ></input>
            </div>

            <div className="col-4">
                <input type="date" placeholder="mm/dd/yyyy" ref={dueDate} ></input>
            </div>

            <div className="col-2">
                <button className="btn btn-success kg-button" ><IoMdAddCircle /></button>
            </div>

        </form>
    </div>

}

export default AddToDoItem