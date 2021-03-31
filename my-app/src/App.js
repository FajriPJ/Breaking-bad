import './App.css';
import { Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters.jsx'
import Favorite from './pages/Favorite'
import CharacterDetail from './pages/CharacterDetail'


function App() {

  return (
    <Router>
      <div className="container mt-3 mb-2">
        {/* <h2 className="display-4 text-center"><span className='px-2' style={{color: 'white', background: "#134717"}}>Br</span>eaking <span className='px-1' style={{color: 'white', background: "#134717"}}>Ba</span>d</h2> */}
        <Nav className="p-3 justify-content-end shadow" activeKey="/home">
          <Nav.Item>
            <Nav.Link >
              <Link to='/'> 
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to='/Characters'> 
                Characters
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to='/Favorite'> 
                Favorite
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/Characters/:id">
            <CharacterDetail />
          </Route>
          <Route path="/Characters">
            <Characters />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
