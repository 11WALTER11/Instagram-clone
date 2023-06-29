import Post from "./components/Post";
import SideNav from "./components/SideNav";
import Story from "./components/Story";
import Suggestion from "./components/Suggestion";

function App() {
  return (
    <div className="App">
      {/* <Story /> */}
      <SideNav />
      <Suggestion />
      <Post />
    </div>
  );
}

export default App;
