import './App.css';
import rooftops from './assets/images/central-park.jpg';
import ReactPlayer from "react-player";

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=RzhAS_GnJIc";

  return (
    <div className='App'>
      <div>
      <h1>
        Task: add three images with some styling
      </h1>
        <img height={200} src={rooftops} alt="An image of a rooftop in New York" />
        <img height={200} src={require("./assets/images/central-park.jpg")} alt="An image of central park" />
        <img height={200} src="https://picsum.photos/id/400/265" alt="An image of a random pic" />
      
      </div>

      <h1>React Player example</h1>
      <ReactPlayer
        // style={{ textAlign: "auto" }}
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
    </div>
  );
}

export default App;
