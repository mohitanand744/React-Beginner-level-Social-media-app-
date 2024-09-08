import "./App.css";
import PostList from "./components/PostList";
import RightSidebar from "./components/RightSidebar";
import SideBar from "./components/SideBar";
import Status from "./components/Status";

function App() {
  return (
    <>
      <div className="hero_Container">
        <SideBar />
        <div className="post-status">
          <Status />
          <PostList />
        </div>
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
