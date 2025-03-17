import { useState } from "react"
import { IoIosAddCircle, IoMdAddCircle } from "react-icons/io";


function AddToDoItem({ onAddItem }) {
    const [toDoItem, setToDoItem] = useState("")
    const [dueDate, setDueDate] = useState("")

    const onChangeItem = (event) => {
        console.log(event.target.value)
        setToDoItem(event.target.value)
    }

    const onChangeDate = (event) => {
        console.log(event.target.value)
        setDueDate(event.target.value)
    }

    const addItemButton = () => {
        onAddItem(toDoItem, dueDate)
        setDueDate("")
        setToDoItem("")

    }

    return <div className="container items-container">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter ToDo Here" value={toDoItem} onChange={onChangeItem} ></input>
            </div>

            <div className="col-4">
                <input type="date" placeholder="mm/dd/yyyy" value={dueDate} onChange={onChangeDate}></input>
            </div>

            <div className="col-2">
                <button type="button" className="btn btn-success kg-button" onClick={addItemButton}><IoMdAddCircle /></button>
            </div>

        </div>
    </div>

}

export default AddToDoItem