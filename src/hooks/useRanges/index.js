import { useGlobalContext } from "../";
import * as actionTypes from "./actionTypes";

const useRanges = () => {
  const {
    state: {
      ranges: { humidity, temperature },
    },
    dispatch,
  } = useGlobalContext();

  const getHumidityRange = () => humidity;

  const setHumidityRange = (val) =>
    dispatch({
      type: actionTypes.SET_HUM_RANGE,
      payload: val,
    });

  const getTemperatureRange = () => temperature;

  const setTemperatureRange = (val) =>
    dispatch({
      type: actionTypes.SET_TMP_RANGE,
      payload: val,
    });

  return {
    getHumidityRange,
    setHumidityRange,
    getTemperatureRange,
    setTemperatureRange,
  };
};
useRanges.actionTypes = {
  setHumidityRange: actionTypes.SET_HUM_RANGE,
  setTemperatureRange: actionTypes.SET_TMP_RANGE,
};

export default useRanges;
