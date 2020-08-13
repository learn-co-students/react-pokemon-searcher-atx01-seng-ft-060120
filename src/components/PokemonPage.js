import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const desPoke = this.state.pokemon.filter(p => 
      p.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={desPoke}/>
      </Container>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(json => {
      this.setState({ pokemon: json })})
  }

}

export default PokemonPage
