import React from 'react';
// import './components/Game.css'

const Game = (props) => {
    return (
        <td className="Game">
            <h1>Date: {props.date}</h1>
            <h2>{props.location}</h2>
            <img src="./src/assets/giants_s.png" alt="SF Giants"/>
        </td>
    )
}

export default Game;