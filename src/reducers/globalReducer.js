import unitsReducer from "./unitsReducer";
import rangesReducer from "./rangesReducer";
// import endpointsReducer from "./endpointsReducer";

export default function globalReducer(state, action) {
  return {
    units: unitsReducer(state.units, action),
    ranges: rangesReducer(state.ranges, action),
  };
}
