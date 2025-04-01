import React from 'react';

export const Card = ({ eachMovieProp }) =>
{
    const { title } = eachMovieProp;
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 max-w-xs hover:shadow-xl transition-shadow duration-300">
            <img src={'https://image.tmdb.org/t/p/w500' + eachMovieProp.poster_path}></img>
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
            <h2 className="text-gray-600 mt-2"></h2>
        </div>
    );
};
