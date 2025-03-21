import { act, createContext, useReducer } from "react"


const defaultPosts = [
    {
        id: 1,
        title: "Appraisal",
        body: "I have to discuss with My manager and get good appraisal for this year",
        reactions: 4,
        userId: "1",
        tags: ["marriage", "event", "celebrations"]
    },
    {
        id: 2,
        title: "Flat",
        body: "We should sell our plot to pay some amount for flat",
        reactions: 6,
        userId: "2",
        tags: ["flat", "plot", "appraisal"]
    }
]

export const PostListContext = createContext({
    postListData: [],
    addPost: () => { },
    deletePost: () => { }
})

const postListReducer = (currPosts, action) => {
    let newPosts = currPosts

    if (action.type === "DELETE_POST") {
        newPosts = currPosts.filter((post) => post.id != action.payload.postId)
    } else if (action.type === "CREATE_POST") {

        newPosts = [...currPosts, action.payload]
    }
    return newPosts
}

function PostListProvider({ children }) {
    const [postListData, dispatchPost] = useReducer(postListReducer, defaultPosts)

    const addPost = (title, body, reactions, tags, userId) => {
        dispatchPost({
            type: "CREATE_POST",
            payload: {
                id: new Date().getTime(), title, body, reactions, userId, tags
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPost({
            type: "DELETE_POST",
            payload: {
                postId
            }
        })
    }

    return <PostListContext.Provider value={{ postListData, addPost, deletePost }}>
        {children}
    </PostListContext.Provider>

}

export default PostListProvider