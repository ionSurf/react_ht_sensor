import React, { useState, useEffect } from "react";
import { useRanges } from "../../../../hooks";
import { Column, Row, Heading, TextField, Button } from "../layout";

const RangesTab = () => {
  const [_humRange, set_humRange] = useState({
    min: 0,
    max: 0,
  });
  const [_tmpRange, set_tmpRange] = useState({
    min: 0,
    max: 0,
  });

  const {
    getHumidityRange,
    getTemperatureRange,
    setHumidityRange,
    setTemperatureRange,
  } = useRanges();

  //  On mount useEffect
  useEffect(() => {
    _onDefaultHandler();
  }, []);
  const _onSaveHandler = () => {
    // setHumidityRange({
    //   min: parseFloat(_humRange.min).toFixed(2),
    //   max: parseFloat(_humRange.max).toFixed(2),
    // });
    // setTemperatureRange({
    //   min: parseFloat(_tmpRange.min).toFixed(2),
    //   max: parseFloat(_tmpRange.max).toFixed(2),
    // });
    setHumidityRange(_humRange);
    setTemperatureRange(_tmpRange);
  };
  const _onDefaultHandler = () => {
    const hum = getHumidityRange();
    set_humRange({
      min: parseFloat(hum.min).toFixed(2),
      max: parseFloat(hum.max).toFixed(2),
    });
    const tmp = getTemperatureRange();
    set_tmpRange({
      min: parseFloat(tmp.min).toFixed(2),
      max: parseFloat(tmp.max).toFixed(2),
    });
  };

  return (
    <Column>
      <Row>
        <Column>
          <Row>
            <Heading>{`Humidity`}</Heading>
          </Row>
          <Row>
            <TextField
              label="min."
              value={_humRange.min}
              onChange={(e) => {
                console.log(e.target.value);
                set_humRange({
                  ..._humRange,
                  min: e.target.value,
                });
              }}
              onBlur={(e) =>
                parseFloat(e.target.value).toFixed(2) !== _humRange.min &&
                set_humRange({
                  ..._humRange,
                  min: parseFloat(e.target.value).toFixed(2),
                })
              }
            />
          </Row>
          <Row>
            <TextField
              label="max."
              value={_humRange.max}
              onChange={(e) =>
                set_humRange({
                  ..._humRange,
                  // max: parseFloat(e.target.value).toFixed(2),
                  max: e.target.value,
                })
              }
              onBlur={(e) =>
                parseFloat(e.target.value).toFixed(2) !== _humRange.max &&
                set_humRange({
                  ..._humRange,
                  max: parseFloat(e.target.value).toFixed(2),
                })
              }
            ></TextField>
          </Row>
        </Column>
        <Column>
          <Row>
            <Heading>{`Temperature`}</Heading>
          </Row>
          <Row>
            <TextField
              label="min."
              value={_tmpRange.min}
              onChange={(e) =>
                set_tmpRange({
                  ..._tmpRange,
                  // min: parseFloat(e.target.value).toFixed(2),
                  min: e.target.value,
                })
              }
              onBlur={(e) =>
                parseFloat(e.target.value).toFixed(2) !== _tmpRange.min &&
                set_tmpRange({
                  ..._tmpRange,
                  min: parseFloat(e.target.value).toFixed(2),
                })
              }
            ></TextField>
          </Row>
          <Row>
            <TextField
              label="max."
              value={_tmpRange.max}
              onChange={(e) =>
                set_tmpRange({
                  ..._tmpRange,
                  // max: parseFloat(e.target.value).toFixed(2),
                  max: e.target.value,
                })
              }
              onBlur={(e) =>
                parseFloat(e.target.value).toFixed(2) !== _tmpRange.max &&
                set_tmpRange({
                  ..._tmpRange,
                  max: parseFloat(e.target.value).toFixed(2),
                })
              }
            ></TextField>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Button onClick={_onSaveHandler}>{`Save`}</Button>
          <Button onClick={_onDefaultHandler}>{`Default`}</Button>
        </Column>
      </Row>
    </Column>
  );
};
export default RangesTab;
