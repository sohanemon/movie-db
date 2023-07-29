import { Movie } from '@/global.types';
import { create } from 'zustand';

interface MovieStoreType {
  movies: Movie[];
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie) => void;
  getMovies: () => void;
}

const useMovieStore = create<MovieStoreType>()((set, get) => ({
  movies: [],
  selectedMovie: null,
  setSelectedMovie(movie) {
    if (movie.Title === get().selectedMovie?.Title)
      return set({ selectedMovie: null });
    set({ selectedMovie: movie });
  },
  async getMovies() {
    fetch('/assets/data.json')
      .then((res) => res.json())
      .then((data) => set({ movies: data }));
  },
}));

export default useMovieStore;
