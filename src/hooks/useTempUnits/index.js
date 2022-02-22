import { useGlobalContext } from "..";
import * as actionTypes from "./actionTypes";

const useTempUnits = () => {
  const {
    state: { units },
    dispatch,
  } = useGlobalContext();

  const getTempUnits = () => units;
  const setTempUnits = (value) =>
    dispatch({
      type: actionTypes.SET_UNITS,
      payload: value,
    });
  const toggleTempUnits = () =>
    dispatch({
      type: actionTypes.TOGGLE_UNITS,
    });

  return {
    getTempUnits,
    setTempUnits,
    toggleTempUnits,
  };
};
useTempUnits.actionTypes = {
  toggleTempUnits: actionTypes.TOGGLE_UNITS,
};

export default useTempUnits;
