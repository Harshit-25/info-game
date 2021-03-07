import axios from "axios";
import { gameDetailsURL } from "../api";
import { gameScreenshotURL } from "../api";

export const loadGameDetail = (id) => async (dispatch) => {
  const gameDetail = await axios.get(gameDetailsURL(id));
  const screenDetail = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: gameDetail.data,
      screen: screenDetail.data,
    },
  });
};
