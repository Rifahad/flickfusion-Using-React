const initialState = JSON.parse(localStorage.getItem("Movies")) || [];

const movieReducer = (state = initialState, action) => {
  if (action.type == "Movies") {
    const updateMovies = [...state, action.payload];

    localStorage.setItem("Movies", JSON.stringify(updateMovies));
    return updateMovies;
  } else if (action.type == "RetriveMovies") {
    const movieDetails = localStorage.getItem("Movies");
    return JSON.parse(movieDetails) || [];
  }
  return state;
};

export default movieReducer;
