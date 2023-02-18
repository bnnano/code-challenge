import { Pokemon } from '@/types';
import { create } from 'zustand'

type Mode = 'grid' | 'search';
export interface SearchState {
  searchResult: Pokemon | null;
  toogleMode: () => void;
  updateSearchResult: (payload: Pokemon | null) => void;
  mode: Mode;
  isLoading: boolean;
  updateIsLoading: (value: boolean) => void;
};

export const useSearchStore = create<SearchState>()((set) => ({
  mode: 'grid',
  toogleMode: () => set((state) => {
    if(state.mode === 'grid'){
      return ({ mode: 'search' })
    }
    return ( {mode: 'grid' })
  }),
  searchResult: null,
  isLoading: false,
  updateSearchResult: (payload: Pokemon | null) => set(() => ({ searchResult: payload })),
  updateIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
}))