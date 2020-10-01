export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:
  //   "BQCjq7aZubylI7knuuTQgNns_sgdUuo9V_EhbrFNLPTGDRu5M6QjmVsSXNSu0gDD4n9A5SP2hWfumCdtY17u_SSByhZlW94CmevtPf0XLogksp9Ep-t1DDCJD1ykmJk2-hAry8p0R4lTbL8Ca8vq6aYThAMHCpQtt5Mn-wfSVqzFlK7e",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
