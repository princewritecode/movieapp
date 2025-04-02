import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { Link } from 'react-router';
import dataFetched from '../services/api';
import Shimmer from './Shimmer';
export const Body = () =>
{
    const [movie, setMovies] = useState([]);
    const [movieInput, setMovieInput] = useState('');
    const [allMovie, setAllMovie] = useState([]);

    const filteredMovies = movie.filter((movieObject) =>
    {
        console.log('will run');
        return (movieObject.title.toLowerCase().includes(movieInput.toLowerCase()));

    });
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                const data = await dataFetched();
                setMovies(data); // Assuming data has a results array
                setAllMovie(data);
            } catch (err)
            {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return (movie.length === 0 ? <Shimmer></Shimmer> : <>

        <div class="flex justify-center space-x-4 mb-6 my-10">

            <button onClick={() =>
            {
                const filteredTopRatedMovies = movie.filter((movieObj) =>
                {
                    return movieObj.vote_average > 7;
                }
                );
                setMovies(filteredTopRatedMovies);
            }} class="bg-gray-800 hover:bg-gray-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded">
                Top Rated
            </button>






            <button
                onClick={() =>
                {
                    console.log('hello');
                    setMovies(allMovie);
                }}
                class="bg-gray-800 hover:cursor-pointer hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                Show All Movies
            </button>

        </div>


        <div className="flex justify-center items-center my-8">
            <div className="flex space-x-2">
                <input value={movieInput} onChange={(e) =>
                {
                    setMovieInput(e.target.value);
                    console.log(movieInput);

                }}
                    className="w-104 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 bg-gray-900 focus:border-transparent"
                    type="search"
                    placeholder="Search for movies..."
                />

            </div>
        </div>

        <div className='flex flex-wrap justify-center item'>
            {
                filteredMovies.map((eachMovie) =>
                {
                    return (
                        <Link to={`/movie/${eachMovie.id}`}> <Card eachMovieProp={eachMovie} key={eachMovie.id}></Card> </Link>
                    );
                })
            }
        </div>
    </>
    );
};



