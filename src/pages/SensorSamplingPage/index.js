import React, { useState, useEffect, useCallback, useRef } from "react";
import SensorSamplingPageView from "./view";
import {
  parseTimestampDateToString,
  parseTimestampTimeToString,
  parseUNIXTimestampToString,
} from "./helper";
import useWebSocket from "../../hooks/useWebSocket";

const SensorSamplingPage = () => {
  const [_reading, set_reading] = useState({
    hum: 0,
    tmp: 0,
    timestamp: null,
  });
  const timerRef = useRef();

  const { subscribe, sendMessage, isOpen } = useWebSocket();
  const { message: onMessage } = useWebSocket.events;

  const _sensorResponseCallback = useCallback((msg) => {
    const { payload } = JSON.parse(msg.data);
    set_reading({
      hum: parseFloat(payload.humidity).toFixed(2),
      tmp: parseFloat(payload.temperature).toFixed(2),
      timestamp: payload.timestamp,
    });
  }, []);

  useEffect(() => {
    if (!isOpen()) {
      timerRef.current = setTimeout(() => {
        subscribe({
          eventName: onMessage,
          callback: _sensorResponseCallback,
        });
      }, 1000);
    } else {
      subscribe({
        eventName: onMessage,
        callback: _sensorResponseCallback,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateReading = (val) => set_reading(val);
  handleUpdateReading;

  const onGetSingleSample = () =>
    sendMessage(
      JSON.stringify({
        type: "single-reading",
      })
    );
  return (
    <SensorSamplingPageView
      hum_val={+_reading.hum}
      tmp_val={+_reading.tmp}
      hum_units={`%`}
      tmp_units={`˚K`}
      last_reading={{
        date: parseTimestampDateToString(_reading.timestamp),
        time: parseTimestampTimeToString(_reading.timestamp),
        full: parseUNIXTimestampToString(_reading.timestamp),
      }}
      onGetSingleSampleCallback={onGetSingleSample}
    />
  );
};
export default SensorSamplingPage;
