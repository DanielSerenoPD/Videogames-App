import React from 'react';
import style from './styles.module.css';

const DetailCard = ({ game }) => {
    return (
        <div className={style.detailCard}>
            <h1>{game.name}</h1>
            <div className={style.items}>
                <ul>
                    <li>Launch Date: {game.launchDate}</li>
                    <li>Rating: {game.rating}</li>
                </ul>

                <h2>Available in</h2>
                {
                    game.platforms?.map((platform, index) =>
                        <label key={index} className={style.label}> {platform.hasOwnProperty('platform')? platform.platform.name : platform.name} </label>
                    )}
            </div>
        </div>
    );
}
export default DetailCard;