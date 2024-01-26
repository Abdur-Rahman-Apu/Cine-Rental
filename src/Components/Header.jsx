import { useState } from "react";
import { useMovieContext, useThemeContext } from "../Contexts";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Cart from "../assets/shopping-cart.svg";
import CartModal from "./CartModal";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData, setCartData } = useMovieContext();

  const { darkMode, setDarkMode } = useThemeContext();

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleRemoveMovie = (itemId) => {
    setCartData(cartData.filter((item) => item.id !== itemId));
  };

  return (
    <>
      {showCart && (
        <CartModal
          onClose={handleCloseCart}
          cartData={cartData}
          onRemove={handleRemoveMovie}
        />
      )}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="Theme wise Icon"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
                href="#"
                onClick={handleShowCart}
              >
                <img src={Cart} width="24" height="24" alt="Cart" />
                {cartData.length > 0 && (
                  <p className="absolute top-[-15px] right-[-10px] rounded-full bg-[#00D991] w-6 h-6 text-center font-bold text-sm">
                    {cartData.length}
                  </p>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
