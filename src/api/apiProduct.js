const getPopularMovieFromServer = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );
};

export default getPopularMovieFromServer;
