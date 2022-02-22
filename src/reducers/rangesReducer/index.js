import * as types from "./actionTypes";

const setHumidityRange = (state, range) => ({
  ...state,
  humidity: {
    min: range.min,
    max: range.max,
  },
});

const setTemperatureRange = (state, range) => ({
  ...state,
  temperature: {
    min: range.min,
    max: range.max,
  },
});

const rangesReducer = (state, action) => {
  switch (action.type) {
    case types.SET_HUM_RANGE:
      return setHumidityRange(state, action.payload);
    case types.SET_TMP_RANGE:
      return setTemperatureRange(state, action.payload);
    default:
      return state;
  }
};
export default rangesReducer;
