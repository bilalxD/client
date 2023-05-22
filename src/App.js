import './App.css';
import {BrowserRouter as Router, Route , Routes,Link } from 'react-router-dom';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import ViewPost from './Pages/ViewPost';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="navbar" >
          <Link to="/"> Home </Link>
          <Link to="/createpost"> Create a Post</Link>
        </div>
        <Routes>
          <Route exact path="/"  element={<Home />}/>
          <Route exact path="/createpost"   element={<CreatePost />} />
          <Route exact path="/viewpost/:id"   element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
