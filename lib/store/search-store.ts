import { create } from 'zustand';

interface SearchStoreType {
  searching: boolean;
  setSearching: (isSearching: boolean) => void;
}

const useSearchStore = create<SearchStoreType>()((set) => ({
  searching: false,
  setSearching(state) {
    set(() => ({ searching: state }));
  },
}));

export default useSearchStore;
