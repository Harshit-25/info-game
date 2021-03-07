import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailReducer from "./gameDetailReducer";

const rootReducer = combineReducers({
  game: gamesReducer,
  detail: gameDetailReducer,
});

export default rootReducer;
