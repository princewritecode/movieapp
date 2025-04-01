import { createRoot } from 'react-dom/client';
import { MovieInfo } from './components/MovieInfo.jsx';
import App from './App.jsx';
import { Body } from './components/Body.jsx';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './components/About.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/', element: <App></App>,
    children: [
      {
        path: '/about', element: <About></About>
      },
      {
        path: '/', element: <Body></Body>
      },
      {
        path: '/movie/:movieId', element: <MovieInfo></MovieInfo>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
