import React, { useState, useEffect } from "react";
import { useRanges } from "../../../../hooks";
import Layout from "../../Layout";

//  Temporary layout
import { Grid, Box } from "@mui/material";

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

  const { Row, Column, Button, Heading, TextField } = Layout;

  //  On mount useEffect
  useEffect(() => {
    _onDefaultHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Layout>
      <Column>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Box>
              <Heading>{`Humidity`}</Heading>
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box>
              <Heading>{`Temperature`}</Heading>
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
          </Grid>
        </Grid>
        <Row>
          <Column>
            <Button onClick={_onSaveHandler}>{`Save`}</Button>
            <Button onClick={_onDefaultHandler}>{`Default`}</Button>
          </Column>
        </Row>
      </Column>
    </Layout>
  );
};
export default RangesTab;
