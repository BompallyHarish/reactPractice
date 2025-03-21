import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostListContext } from '../stores/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import Spinner from "./Spinner"



function PostList() {

    const { postListData, addMultiplePosts, deleteAllPosts } = useContext(PostListContext)
    const [fetching, setFetching] = useState(false)

    const getPostsFromServer = () => {
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if (postListData.length === 0) {
            setFetching(true);

            fetch('https://dummyjson.com/posts', { signal })
                .then(res => res.json())
                .then(data => {
                    const posts = data.posts.filter((post) => {
                        post.reactions = post.reactions.likes
                        return post
                    })
                    // deleteAllPosts();
                    addMultiplePosts(posts);
                    setFetching(false);

                })

        }
        return () => {
            controller.abort()
        }
    }, [])


    return <>
        {fetching && <Spinner></Spinner>}

        {!fetching && postListData.length == 0 && <WelcomeMessage getPostsFromServer={getPostsFromServer}></WelcomeMessage>}

        {/* <h1>{postListData.length}</h1> */}

        {!fetching && postListData.map((post) => (

            <Post className="postsDisplay" key={post.id} post={post} />

        ))}
    </>
}

export default PostList