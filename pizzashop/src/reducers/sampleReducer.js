// src/reducers/sampleReducer.js
const initialState = {
  data: [],
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default sampleReducer;
