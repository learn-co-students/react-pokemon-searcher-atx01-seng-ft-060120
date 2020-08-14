import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((pokemons) => this.setState({ pokemons }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const pokemon = {
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value,
      },
    };
    e.target.reset();
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    })
      .then((res) => res.json())
      .then((pokemon) => {
        const pokemons = [...this.state.pokemons, pokemon];
        this.setState({ pokemons });
      });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection
          pokemons={this.state.pokemons}
          search={this.state.search}
        />
      </Container>
    );
  }
}

export default PokemonPage;
