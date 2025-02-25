
let itemsData = [
    {
        todo: "Trim the beard",
        dueDate: "25/02/2025"
    },
    {
        todo: "Take shower",
        dueDate: "25/02/2025"
    }
]
function ItemsList() {

    return (
        <div class="container items-container">
            <ul>
                {itemsData.map((item, index) => (
                    <div class="row kg-row">
                        <div class="col-6 ">
                            {item.todo}
                        </div>

                        <div class="col-4">
                            {item.dueDate}
                        </div>

                        <div class="col-2 ">
                            <button type="button" class="btn btn-danger kg-button">Delete</button>
                        </div>

                    </div>
                ))}
            </ul>
        </div>
    )

}

export default ItemsList