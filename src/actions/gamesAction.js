import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

//action creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

export const fetchGame = (game_name) => async (dispatch) => {
  const searchGame = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SERACHED",
    payload: {
      searchResult: searchGame.data.results,
    },
  });
};
