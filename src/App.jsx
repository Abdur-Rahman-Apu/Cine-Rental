import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import { MovieContext } from "./Contexts";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <Main />
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
