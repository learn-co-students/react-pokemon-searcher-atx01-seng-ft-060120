import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    front: true,
  };
  render() {
    const poke = this.props.poke;
    return (
      <Card>
        <div onClick={() => this.setState({ front: !this.state.front })}>
          <div className="image">
            <img
              src={this.state.front ? poke.sprites.front : poke.sprites.back}
              style={{ width: 90, height: 90 }}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poke.hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
