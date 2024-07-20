import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Status from "./components/Status";
import WarpingComponent from "./context/Contexts";

function App() {
  return (
    <WarpingComponent>
      <Header />

      <div className="hero_Container">
        <SideBar />
        <Status />
      </div>
    </WarpingComponent>
  );
}

export default App;
