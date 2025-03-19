import { Children, createContext, useReducer, useState } from "react";


export const ToDoItemsContext = createContext({
    toDoItems: [],
    addItem: () => { },
    deleteItem: () => { }
})

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

function ToDoItemsContextProvider({ children }) {

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

    return <ToDoItemsContext.Provider value={{ toDoItems, addItem, deleteItem }}>
        {children}
    </ToDoItemsContext.Provider>

}
export default ToDoItemsContextProvider 