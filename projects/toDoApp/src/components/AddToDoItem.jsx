function AddToDoItem() {
    return <div class="container items-container">
        <div class="row kg-row">
            <div class="col-6">
                <input type="text" placeholder="Enter ToDo Here"></input>
            </div>

            <div class="col-4">
                <input type="date" placeholder="mm/dd/yyyy"></input>
            </div>

            <div class="col-2">
                <button type="button" class="btn btn-success kg-button">Add</button>
            </div>

        </div>
    </div>

}

export default AddToDoItem