const API_KEY = '337002c57ce166fd2b4afeb73e61db54';
const BASE_URL = 'https://api.themoviedb.org/3';

const dataFetched = async () =>
{
    try
    {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error)
    {
        console.error('Error fetching data:', error);
    }
};

export default dataFetched;


//https://api.themoviedb.org/3/movie/762509?api_key=337002c57ce166fd2b4afeb73e61db54