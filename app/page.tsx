'use client';

import useMovieStore from '@/lib/store/movie-store';
import { useEffect } from 'react';
import MovieCard from './movie-card';
import useSearchStore from '@/lib/store/search-store';

export default function Home() {
  const { getMovies, movies } = useMovieStore();
  const { searchingParam } = useSearchStore();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {(searchingParam
        ? movies.filter((movie) =>
            movie.Title.toLowerCase().includes(searchingParam.toLowerCase())
          )
        : movies
      ).map((_) => (
        <MovieCard key={_.Title} {..._} />
      ))}
    </section>
  );
}
