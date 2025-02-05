import React from 'react';

const MovieCard = ({movie: 
   {title, poster_path, vote_average, release_date, original_language}
}) => {
  return (
    <div className='movie-card'>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/No-movie.png'} alt={title} />

      <div className='mt-4'>
         <h3>{title}</h3>

         <div className='content'>
            <div className='rating'>
               <img src='./Rating.png' alt='rating' />
               <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            </div>

            <span>.</span>
            <p className='lang'>{original_language}</p>

            <span>{release_date ? release_date.slice(0, 4) : 'N/A'}</span>
         </div>

      </div>
    </div>
  )
}

export default MovieCard;
