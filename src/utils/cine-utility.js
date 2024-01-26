function getImageUrl(name) {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url);
}

export { getImageUrl };
