// src/actions/sampleActions.js
import axios from "../api";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("/data");
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
