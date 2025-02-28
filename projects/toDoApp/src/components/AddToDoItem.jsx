function AddToDoItem() {
    return <div className="container items-container">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter ToDo Here"></input>
            </div>

            <div className="col-4">
                <input type="date" placeholder="mm/dd/yyyy"></input>
            </div>

            <div className="col-2">
                <button type="button" className="btn btn-success kg-button">Add</button>
            </div>

        </div>
    </div>

}

export default AddToDoItem