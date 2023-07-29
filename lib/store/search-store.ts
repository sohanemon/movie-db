import { create } from 'zustand';

interface SearchStoreType {
  searching: boolean;
  searchingParam: string;
  setSearchingParam: (text: string) => void;
  setSearching: (isSearching: boolean) => void;
}

const useSearchStore = create<SearchStoreType>()((set) => ({
  searching: false,
  searchingParam: '',
  setSearchingParam(text) {
    set({ searchingParam: text });
  },
  setSearching(state) {
    set(() => ({ searching: state }));
  },
}));

export default useSearchStore;
