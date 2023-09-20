import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MovieCard.css'
import photo from '../../images/photo.svg'

function MovieCard({ card }){
const [isLiked,setIsLiked] = useState(false)

function toggleLike (){
    setIsLiked(!isLiked)
}

const { pathname } = useLocation();

    return (
         <article className='movie-card'>
            <img src={card.image} alt={card.title} className='movie-card__cover' />
            <div className="movie-card__container">
                <h3 className="movie-card__title">{card.title}</h3>
                {pathname === '/saved-movies' ? (
                    <button type='button' className='movie-card__like movie-card__like_delete'></button>
                ) : (
                <button onClick={toggleLike} type='button' className={`movie-card__like movie-card__like${!isLiked ? '_unactive' : '_active'}`}></button>
                )}
            </div>
            <p className="movie-card__duration">{card.duration}</p>
         </article>
    )
}

export default MovieCard;