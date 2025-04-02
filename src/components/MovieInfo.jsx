import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
export const MovieInfo = () =>
{
    let [movie, setMovie] = useState({});
    const { movieId } = useParams();
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=337002c57ce166fd2b4afeb73e61db54`);
                const response = await data.json();
                setMovie(response);
            }
            catch (err)
            {
                console.log(err);
            }
        };
        fetchData();
    }, [movieId]);
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={'https://image.tmdb.org/t/p/w400' + movie.poster_path}
                    className="w-full md:w-1/3 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">{movie.original_title}</h1>
                    <p className="text-gray-600 mt-2">{movie.release_date}</p>
                    <p className="text-gray-700 mt-4">{movie.overview}</p>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Genres:</h2>
                        <ul className="flex space-x-2 mt-2">
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Rating:</h2>
                        <p className="text-gray-800">{movie.vote_average} / 10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

