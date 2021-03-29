// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Navbar } from 'react-bootstrap'
import CharacterList from './components/CharacterList'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Breaking Bad',
      characters: [
        {
          id: 1,
          name: 'agus',
          age: 17
        },
        {
          id: 2,
          name: 'asep',
          age: 18
        }
      ]
    }
  }

  getDataFromServer = () => {
    fetch('https://breakingbadapi.com/api/characters')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          characters: res
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getDataFromServer()
  }


  render() {
    const { characters } = this.state
    return (
      <div>
        <div className="container mt-3 mb-5">
          <Navbar className="bg-light justify-content-between">
            <h2>Br.<span style={{color: "#0d3e10"}}>Bad</span></h2>
            {/* <Button type="submit">Submit</Button> */}
          </Navbar>
          <div className="jumbotron text-center">
            <h1 className="display-4 text-center">{this.state.name}</h1>
            <hr className="my-4" />
            <p className="lead">
              <a id="btn-jumbotron" className="btn" href="#" role="button">See Character</a>
            </p>
            {/* <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary" type="button">Button</button>
            </div> */}
          </div>
          <div className="row">
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
}


export default App;
