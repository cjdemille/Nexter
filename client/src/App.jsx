import Header from "./Header";
import Sidebar from "./Sidebar";
import Realtors from "./Realtors";
import Features from "./Features";
import StoryPictures from "./StoryPictures";
import StoryContent from "./StoryContent";
import Homes from "./Homes";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />;
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
    </div>
  );
}

export default App;
