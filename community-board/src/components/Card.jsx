import React from 'react';
import Game from './Game';

const Card = () => {
    return(
        <div className="Card">
            <table>
                <tbody>
                    <tr>
                        <Game date='6/10' location='Denver - Away'/>
                        <Game date='6/11' location='Denver - Away'/>
                        <Game date='6/12' location='Denver - Away'/>
                    </tr>
                    <tr>
                        <Game date='6/13' location='LA - Away'/>
                        <Game date='6/14' location='LA - Away'/>
                        <Game date='6/15' location='LA - Away'/>
                    </tr>
                    <tr>
                        <Game date='6/17' location='Cleveland - Home'/>
                        <Game date='6/18' location='Cleveland - Home'/>
                        <Game date='6/19' location='Cleveland - Home'/>
                    </tr>
                    <tr>
                        <Game date='6/20' location='Boston - Home' />
                        <Game date='6/21' location='Boston - Home' />
                        <Game date='6/22' location='Boston - Home' />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card