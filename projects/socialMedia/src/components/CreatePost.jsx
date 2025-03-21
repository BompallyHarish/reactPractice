import { useContext, useRef } from "react"
import { PostListContext } from "../stores/post-list-store"

function CreatePost() {

    const titleElement = useRef()
    const bodyElement = useRef()
    const reactionsElement = useRef()
    const userIdElement = useRef()
    const tagsElement = useRef()

    const { addPost } = useContext(PostListContext)

    const createPostFromForm = (event) => {

        event.preventDefault()
        const title = titleElement.current.value
        const body = bodyElement.current.value
        const reactions = reactionsElement.current.value
        const userId = userIdElement.current.value
        const tags = tagsElement.current.value.split(" ")

        addPost(title, body, reactions, tags, userId)

        titleElement.current.value = ""
        bodyElement.current.value = ""
        reactionsElement.current.value = ""
        userIdElement.current.value = ""
    }

    return (
        <form className="createPost" onSubmit={createPostFromForm}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
                <input type="text" ref={titleElement} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter post title name" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Post Description</label>
                <textarea type="text" ref={bodyElement} className="form-control" id="exampleInputEmail1" placeholder="Enter post description" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">No of Reactions</label>
                <input type="text" ref={reactionsElement} className="form-control" id="exampleInputEmail1" placeholder="No.of reactions" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Post Tags</label>
                <input type="text" ref={tagsElement} className="form-control" id="exampleInputEmail1" placeholder="Enter tags for better marketing" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">User Id</label>
                <input type="text" ref={userIdElement} className="form-control" id="exampleInputEmail1" placeholder="Enter User id" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default CreatePost