import axios from "axios";

export const sendContactInfo = (contactData) => async (dispatch) => {
  try {
    dispatch({ type: "CONTACT_REQUEST" });

    const { data } = await axios.post(
      "https://pizzashop-218v.onrender.com/api/contact/send",
      contactData
    );

    dispatch({ type: "CONTACT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "CONTACT_FAIL",
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
