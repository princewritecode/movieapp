import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { Link } from 'react-router';
import dataFetched from '../services/api';
export const Body = () =>
{
    const [movie, setMovies] = useState([]);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                const data = await dataFetched();
                setMovies(data); // Assuming data has a results array
            } catch (err)
            {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='flex flex-wrap justify-center item'>


                {

                    movie.map((eachMovie) =>
                    {
                        console.log(eachMovie.id);
                        return (<Link to={`/movie/${eachMovie.id}`}> <Card eachMovieProp={eachMovie} key={eachMovie.id}></Card> </Link>);
                    })
                }
            </div>
        </>
    );
};



