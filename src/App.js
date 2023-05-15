import './App.css';
import {BrowserRouter as Router, Route , Routes,Link } from 'react-router-dom';
import Home from './Pages/Home';
import CreatePost from './Pages';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/"> Home </Link>
        <Link to="/createpost"> Create a Post</Link>
        <Routes>
          <Route exact path="/"  element={<Home />}/>
          <Route exact path="/createpost"   element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
