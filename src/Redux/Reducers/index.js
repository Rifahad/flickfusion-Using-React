import { combineReducers } from "redux";
import MovieReducer from "./movieReducer";

const reducer = combineReducers({
  MovieData: MovieReducer,
});

export default reducer;
