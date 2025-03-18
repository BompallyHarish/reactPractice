import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ToDoItemsContext } from "../stores/ToDoItemsStore";


function ItemsList() {
    const { toDoItems, deleteItem } = useContext(ToDoItemsContext)
    return (
        <div className="container items-container">
            <ul>
                {toDoItems.map((item, index) => (
                    <div className="row kg-row">
                        <div className="col-6 " key={item.toDo}>
                            {item.toDo}
                        </div>

                        <div className="col-4" key={item.dueDate}>
                            {item.dueDate}
                        </div>

                        <div className="col-2 ">
                            <button type="button" className="btn btn-danger kg-button" onClick={() => deleteItem(item.toDo)}><MdDelete />
                            </button>
                        </div>

                    </div>
                ))}
            </ul>
        </div>
    )

}

export default ItemsList