import "./CSS/App.css";
import "./CSS/Fonts.css";
import NavFooter from "./components/NavFooter";
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
          <NavFooter />
        </div>
        <RightSidebar
          margin="mt-10"
          hight="h-[80vh]"
          borderRadius="rounded-l-3xl"
        />
      </div>
    </>
  );
}

export default App;
