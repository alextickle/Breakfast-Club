import types from "./types";

const initialState = {
  userButton: "admin_button",
  placeButton: "admin_button",
  eventButton: "admin_button",
  showModal: false,
  searchTerm: "",
  firstName: "",
  lastName: "",
  email: "",
  neighborhood: "",
  password: "",
  verifyPassword: "",
  name: "",
  yelp_rating: "",
  categories: "",
  price: "",
  address_street: "",
  phone: ""
};

const admin = (state = initialState, action) => {
  let temp = {};
  let fieldName;
  switch (action.type) {
    case types.SET_ACTIVE_BUTTON:
      temp = {
        userButton: "",
        placeButton: "",
        eventButton: ""
      };
      fieldName = action.button;
      temp[fieldName] = "admin_button_clicked";
      return Object.assign({}, state, temp);
    case types.OPEN_MODAL:
      return Object.assign({}, state, {
        showModal: true
      });
    case types.CLOSE_MODAL:
      return Object.assign({}, state, {
        showModal: false
      });
    case types.UPDATE_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      });
    case types.UPDATE_FIELD_VALUE:
      fieldName = action.field;
      temp[fieldName] = action.value;
      return Object.assign({}, state, temp);
    case types.RESET_FIELDS:
      return initialState;
    default:
      return state;
  }
};

export default admin;
