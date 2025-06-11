import React from 'react';
import Game from './Game';

const Card = () => {
    return(
        <div className="Card">
            <table>
                <tbody>
                    <tr>
                        <Game date='6/10' location='Denver - Away' link="https://tinyurl.com/bdekuw4x"/>
                        <Game date='6/11' location='Denver - Away' link="https://tinyurl.com/2dt96vpz"/>
                        <Game date='6/12' location='Denver - Away' link="https://tinyurl.com/mrxvczrd"/>
                    </tr>
                    <tr>
                        <Game date='6/13' location='LA - Away' link="https://tinyurl.com/bp826dxj"/>
                        <Game date='6/14' location='LA - Away' link="https://tinyurl.com/ypajx93t"/>
                        <Game date='6/15' location='LA - Away' link="https://tinyurl.com/2rp53ndm"/>
                    </tr>
                    <tr>
                        <Game date='6/17' location='Cleveland - Home' link="https://tinyurl.com/2z26av5j"/>
                        <Game date='6/18' location='Cleveland - Home' link="https://tinyurl.com/28w63xr2"/>
                        <Game date='6/19' location='Cleveland - Home' link="https://tinyurl.com/3wpfpxm9"/>
                    </tr>
                    <tr>
                        <Game date='6/20' location='Boston - Home' link="https://tinyurl.com/yphkuzhh"/>
                        <Game date='6/21' location='Boston - Home' link="https://tinyurl.com/2batawvs"/>
                        <Game date='6/22' location='Boston - Home' link="https://tinyurl.com/uwktcefd"/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card