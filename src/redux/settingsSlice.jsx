import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next'; // Import i18next

const initialState = {
  language: 'en',
  theme: 'light',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      i18next.changeLanguage(action.payload); 
    },
    setTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setLanguage, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;