const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searchResult: [],
};
const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SERACHED":
      return {
        ...state,
        searchResult: action.payload.searchResult,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchResult: [],
      };
    default:
      return { ...state };
  }
};
export default gamesReducer;
