import React from 'react';

export const Card = ({ eachMovieProp }) =>
{
    console.log(eachMovieProp);
    const { title, overview, vote_average } = eachMovieProp;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 max-w-xs hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <img
                src={`https://image.tmdb.org/t/p/w500${eachMovieProp.poster_path}`}
                alt={title}
                className="rounded-t-lg w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col h-full">
                <h1 className="text-xl font-bold text-gray-800 truncate">{title}</h1>
                <p className="text-gray-600 mt-2 text-sm line-clamp-3">{overview}</p>

                {/* Release Date and Rating Section */}
                <div className="mt-auto border-t pt-4">
                    <div className="flex justify-between items-center">

                        <h3 className="text-md font-bold text-gray-800">
                            Rating:
                            <span className="text-yellow-500 ml-1">{vote_average} ⭐️</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
