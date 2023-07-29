'use client';

import useMovieStore from '@/lib/store/movie-store';
import { useEffect, useRef } from 'react';
import MovieCard from './movie-card';
import useSearchStore from '@/lib/store/search-store';
import SelectedMovieCard from './selected-movie-card';

export default function Home() {
  const { getMovies, movies } = useMovieStore();
  const { searchingParam } = useSearchStore();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <section
      ref={gridRef}
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    >
      <SelectedMovieCard />

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
