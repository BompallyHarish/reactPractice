import { createContext } from "react";


export const ToDoItemsContext = createContext({
    toDoItems: [],
    addItem: () => { },
    deleteItem: () => { }
})