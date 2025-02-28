
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
        <div className="container items-container">
            <ul>
                {itemsData.map((item, index) => (
                    <div className="row kg-row">
                        <div className="col-6 ">
                            {item.todo}
                        </div>

                        <div className="col-4">
                            {item.dueDate}
                        </div>

                        <div className="col-2 ">
                            <button type="button" className="btn btn-danger kg-button">Delete</button>
                        </div>

                    </div>
                ))}
            </ul>
        </div>
    )

}

export default ItemsList