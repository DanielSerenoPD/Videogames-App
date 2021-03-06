import React from 'react';
import style from './styles.module.css';
const Card = ({ name, url, genres, limit}) => {
    return (
        <div className={style.card}>
            <div className={style.bodyCard} style={{
                backgroundImage: "url(" + `${url}` + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            >
                <div className={style.title}>
                    <h4>{name}</h4>
                </div>
                <div className={style.footerCard}>
                    <div className={style.labels}>
                        {genres &&
                            genres.map((data, index) =>
                                index < limit ? <span className={style.label} key={index}>{data.name}</span> : null
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;