import { useReducer, useState } from "react";

import Page from "./Components/Page";
import { MovieContext, ThemeContext } from "./Contexts";
import { CartReducer, initialState } from "./Reducers/CartReducer";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
