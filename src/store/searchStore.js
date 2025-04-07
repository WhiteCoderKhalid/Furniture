import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchQuery: '',
  setSearch: (query) => set({ searchQuery: query }),
}));

export default useSearchStore;