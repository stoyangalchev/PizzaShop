export const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case "CONTACT_REQUEST":
      return { loading: true };
    case "CONTACT_SUCCESS":
      return { loading: false, success: true };
    case "CONTACT_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
