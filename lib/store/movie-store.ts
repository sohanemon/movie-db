import { Movie } from '@/global.types';
import { create } from 'zustand';

interface MovieStoreType {
  movies: Movie[];
  getMovies: () => void;
}

const useMovieStore = create<MovieStoreType>()((set) => ({
  movies: [],
  async getMovies() {
    fetch('/assets/data.json')
      .then((res) => res.json())
      .then((data) => set({ movies: data }));
  },
}));

export default useMovieStore;
