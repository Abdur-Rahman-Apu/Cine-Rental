import { createContext, useContext } from "react";

const MovieContext = createContext();
const ThemeContext = createContext();

function useMovieContext() {
  return useContext(MovieContext);
}

function useThemeContext() {
  return useContext(ThemeContext);
}

export { MovieContext, ThemeContext, useMovieContext, useThemeContext };
