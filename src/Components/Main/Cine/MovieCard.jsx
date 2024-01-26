import { useState } from "react";
import { useMovieContext } from "../../../Contexts";
import Tag from "../../../assets/tag.svg";
import { getImageUrl } from "../../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const { cartData, setCartData } = useMovieContext();

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddCart = (e, movie) => {
    e.stopPropagation();
    const findMovie = cartData.find((item) => item.id === movie.id);

    if (!findMovie) {
      setCartData([...cartData, movie]);
    } else {
      console.log(`${movie.title} is already added`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={movie}
          onClose={handleCloseModal}
          onAddCart={handleAddCart}
        />
      )}
      <a href="#" onClick={handleShowModal}>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#4c4e5a] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddCart(e, movie)}
            >
              <img src={Tag} alt="Tag" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
