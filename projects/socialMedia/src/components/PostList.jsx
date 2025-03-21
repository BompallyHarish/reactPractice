import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from '../stores/post-list-store'



function PostList() {
    const { postListData } = useContext(PostListContext)
    return <>
        {postListData.map((post) => (
            <Post key={post.id} post={post} />
        ))}
    </>
}

export default PostList