import Homepage from './Homepage';
import AboutMe from './AboutMe';
import { Routes, Route, Link } from 'react-router-dom';   
// 1. import the Routes, Route, Link components from react-router-dom

function App() {
  return (
    <div className="App">
      {/*2. create a nav element with the class of nav*/}
      <nav className="nav">  
        {/*// 3. use the Link component to create a link to the homepage} */}
        <Link to="/" className="nav-item">Homepage</Link> 
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>

      {/*4. use the Routes component to create the routes for the homepage and about me page*/}
      <Routes> 
        {/*5. use the Route component to create the route for the homepage and about me page*/}
        <Route path="/" element={<Homepage />} /> 
        <Route path="/about-me" element={<AboutMe />} />
        {/* path need to same name with the link created */}
      </Routes>
    </div>
  );
}

export default App;
