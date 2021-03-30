// import logo from './logo.svg';
import './App.css';
import { Button, Navbar } from 'react-bootstrap'
import CharacterList from './components/CharacterList' 
import Quotes from './components/Quotes'
import useFetch from './helpers/hooks/useFetch'

function App () {
  const { data: characters, loading, error } = useFetch('https://breakingbadapi.com/api/characters')

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>something error {error.message}</h1>
  }
 
  return (
    <div>
      <div className="container mt-3 mb-5">
        <Navbar id="navbar" className="bg-light justify-content-between shadow p-3 mb-2 bg-body rounded">
          <h2 className="display-4 text-center"><span className='px-2' style={{color: 'white', background: "#0d3e10"}}>Br</span>eaking <span className='px-1' style={{color: 'white', background: "#0d3e10"}}>Ba</span>d</h2>
          {/* <Button type="submit">Submit</Button> */}
        </Navbar>
        <div className="jumbotron text-center mt-4">
          <h1 className="display-4 text-center ">Breaking Bad</h1>
          <hr className="my-4" />
          <p className="lead">
            {/* <a id="btn-jumbotron" className="btn" href="#" role="button">See Character</a> */}
          </p>
          {/* <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Button</button>
          </div> */}
        </div>
        <Quotes className="m-3"></Quotes>
        <div className="row mt-3">
          {
            characters.map(character => {
              return <CharacterList character={character} key={character.char_id}></CharacterList>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;
