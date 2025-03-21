import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import PostListProvider from './stores/post-list-store'

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post")

  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className='content'>
          <Header></Header>
          {selectedTab === "Home" ? <CreatePost></CreatePost> : <PostList></PostList>}
          <Footer></Footer>
        </div>

      </div>
    </PostListProvider>

  )
}

export default App
