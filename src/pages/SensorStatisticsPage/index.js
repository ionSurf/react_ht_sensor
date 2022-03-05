import React, { useState } from "react";
import SensorStatisticsPageView from "./view";

const SensorStatisticsPage = () => {
  const [_samples_set, set_samples_set] = useState({
    hum: [18, 10.2, 15.1, 16, 16.1],
    tmp: [65, 68.3, 61, 60.7, 62.8],
    timestamp: [
      Date.now(),
      Date.now() + 1000,
      Date.now() + 2000,
      Date.now() + 3000,
      Date.now() + 4000,
    ],
  });
  const _statistics = {
    hum: {
      min: (_samples_set.hum.length > 0 && Math.min(..._samples_set.hum)) || 0,
      max: (_samples_set.hum.length > 0 && Math.max(..._samples_set.hum)) || 0,
      avg:
        (_samples_set.hum.length > 0 &&
          _samples_set.hum.reduce((p, c) => p + c, 0)) ||
        0,
    },
    tmp: {
      min: (_samples_set.hum.length > 0 && Math.min(..._samples_set.tmp)) || 0,
      max: (_samples_set.hum.length > 0 && Math.max(..._samples_set.tmp)) || 0,
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
