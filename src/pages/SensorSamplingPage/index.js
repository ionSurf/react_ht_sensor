import React, { useState } from "react";
import SensorSamplingPageView from "./view";
import {
  parseTimestampDateToString,
  parseTimestampTimeToString,
} from "./helper";

const SensorSamplingPage = () => {
  const [_reading, set_reading] = useState({
    tmp: 0,
    hum: 0,
    timestamp: null,
  });

  const handleUpdateReading = (val) => set_reading(val);
  handleUpdateReading;
  return (
    <SensorSamplingPageView
      hum_val={_reading.hum}
      tmp_val={_reading.tmp}
      hum_units={`%`}
      tmp_units={`˚K`}
      last_reading={{
        date: parseTimestampDateToString(_reading.timestamp),
        time: parseTimestampTimeToString(_reading.timestamp),
      }}
    />
  );
};
export default SensorSamplingPage;
