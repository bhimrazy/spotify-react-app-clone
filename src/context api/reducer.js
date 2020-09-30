export const initialState = {
  user: null,
  playlists: [],
  palying: false,
  item: null,
  token:
    "BQCf8nvUA91BvVXwQg_Bhe6pB2yKTCL-ya8itOXpy6IZKg2jgcXsewv_WpizkDn80szdgjkNhC6VCTdZfplH-PVN8ysbqHH-P8bdQSCoogIigPkCmHy0b4PTUMlqFBYEXIdRiLrGJ1-7qzG8zIXlXrz9ZssKmrDvpVnZ26gkQABD3uSJ",
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
    default:
      return state;
  }
};
export default reducer;
