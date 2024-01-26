import { createContext, useContext } from "react";

const MovieContext = createContext();

export { MovieContext };

export function useMovieContext() {
  return useContext(MovieContext);
}
