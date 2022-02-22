import * as types from "./actionTypes";

const setUnits = (units) => units;

const toggleUnits = (state) => (state.units === "F" ? "C" : "F");

const unitsReducer = (state, action) => {
  switch (action.type) {
    case types.SET_UNITS:
      return setUnits(action.payload);
    case types.TOGGLE_UNITS:
      return toggleUnits(state);
    default:
      return state;
  }
};
export default unitsReducer;
