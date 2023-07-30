'use client';

import useMovieStore from '@/lib/store/movie-store';
import { useEffect, useRef } from 'react';
import MovieCard from './movie-card';
import useSearchStore from '@/lib/store/search-store';
import SelectedMovieCard from './selected-movie-card';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const { getMovies, movies } = useMovieStore();
  const { searchingParam } = useSearchStore();

  useEffect(() => {
    // fetching the movies to global store
    getMovies();
  }, [getMovies]);

  return (
    <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      <SelectedMovieCard />
      {/* if there any searchingParam, show only filtered result */}
      {(searchingParam
        ? movies.filter((movie) =>
            movie.Title.toLowerCase().includes(searchingParam.toLowerCase())
          )
        : movies
      ).map((_, idx) => (
        <MovieCard key={_.Title} {..._} index={idx + 1} />
      ))}
    </section>
  );
}
