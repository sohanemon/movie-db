import { create } from 'zustand';

interface MovieStoreType {
  movies: [];
  setMovies: (movies: []) => void;
}

const useMovieStore = create<MovieStoreType>()((set) => ({
  movies: [],
  async setMovies() {
    fetch('/assets/data.json')
      .then((res) => res.json())
      .then((data) => set({ movies: data }));
  },
}));

export default useMovieStore;
