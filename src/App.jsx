import "./App.css";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import SideBar from "./components/SideBar";
import Status from "./components/Status";
import WarpingComponent from "./context/Contexts";

function App() {
  return (
    <WarpingComponent>
      <div className="main">
        <Header />

        <div className="hero_Container">
          <SideBar />
          <Status />
          <RightSidebar />
        </div>
      </div>

      <BottomNav />
    </WarpingComponent>
  );
}

export default App;
