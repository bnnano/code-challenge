import { ChangeEvent } from 'react';
import { create } from 'zustand';

export interface InputTextState {
    inputText: string;
    changeText: (newText: string) => void;
}

const useInputStore = create<InputTextState>((set) => ({
    inputText: '',
    changeText: (newText: string) => set(() => ({ inputText: newText })),
}));

export default useInputStore;
