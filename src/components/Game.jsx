import React from 'react';

const Game = (props) => {
    return (
        <td className="Game">
            <h1>Date: {props.date}</h1>
            <h2>{props.location}</h2>
            <img src="./src/assets/giants_s.png" alt="SF Giants"/>
            <a href={props.link} target="_blank">
                <button class="detailsButton">Get Details</button>
            </a>
        </td>
    )
}

export default Game;