

function WelcomeMessage({ getPostsFromServer }) {
    return (
        <div className="welcomeMessage">
            <h1>There are no posts</h1>
            {/* <button type="button" className="btn btn-primary" onClick={getPostsFromServer}>Fetch from server</button> */}
        </div>
    )
}

export default WelcomeMessage