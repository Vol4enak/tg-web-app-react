const getPopularMovieFromServer = () => {
  return fetch(
    `https://api-seller.rozetka.com.ua/market-categories/search?parent_id=4630027`
  ).then((response) => response.json());
};
export default getPopularMovieFromServer;
