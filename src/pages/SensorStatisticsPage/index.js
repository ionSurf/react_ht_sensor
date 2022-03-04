import React, { useState } from "react";
import SensorStatisticsPageView from "./view";

const SensorStatisticsPage = () => {
  const [_samples_set, set_samples_set] = useState({
    hum: [],
    tmp: [],
  });
  const _statistics = {
    hum: {
      min: (_samples_set.hum.length > 0 && Math.min(_samples_set.hum)) || 0,
      max: Math.max(_samples_set.hum) ?? 0,
      avg:
        (_samples_set.hum.length > 0 &&
          _samples_set.hum.reduce((p, c) => p + c, 0)) ||
        0,
    },
    tmp: {
      min: Math.min(_samples_set.tmp) ?? 0,
      max: Math.max(_samples_set.tmp) ?? 0,
      avg:
        (_samples_set.tmp.length > 0 &&
          _samples_set.tmp.reduce((p, c) => p + c, 0)) ||
        0,
    },
  };
  set_samples_set;
  return (
    <SensorStatisticsPageView samples={_samples_set} stats={_statistics} />
  );
};
export default SensorStatisticsPage;
