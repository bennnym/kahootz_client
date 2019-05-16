import React, { Component } from "react";
import "./PlayersArea.scss";

class PlayersArea extends Component {
  renderPlayer() {
    const listPlayers = this.props.players.map(player => (
      <li key={player.nickname}>{player.nickname}</li>
    ));
    return listPlayers;
  }

  render() {
    return (
      <div className="playerArea">
        <ul>{this.renderPlayer()}</ul>
      </div>
    );
  }
}

export default PlayersArea;
