import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../stores/post-list-store"

function Post({ post }) {
    const { deletePost } = useContext(PostListContext)

    const handleDeletePost = (postId) => {
        deletePost(postId)
    }

    return (
        <div className="card postCard" style={{ width: "30rem" }}>

            <div className="card-body">

                <h5 className="card-title" key={post.title}>{post.title}</h5>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => handleDeletePost(post.id)}>
                    <MdDelete />

                </span>

                <p className="card-text" key={post.body}>{post.body}</p>

                {post.tags.map((tag) => (<span className="badge text-bg-primary hashTag" key={tag}>{tag}</span>))}

                <div className="alert alert-success reactions" role="alert" key={post.reactions}>
                    This post has been reacted by {post.reactions} people
                </div>

            </div>
        </div>
    )
}

export default Post