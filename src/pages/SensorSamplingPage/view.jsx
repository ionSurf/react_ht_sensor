import React from "react";
import propTypes from "prop-types";
import { Container, Box, Grid, Button } from "../../theme/components";
import { Heading } from "../../theme/textStyles";

const SensorSamplingPageView = ({
  tmp_val,
  tmp_units,
  hum_val,
  hum_units,
  last_reading,
  onGetMultiSampleCallback,
  onGetSingleSampleCallback,
}) => (
  <Container maxWidth="xl">
    <Container>
      <Box>
        <Heading typography="h2">Sampling</Heading>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Box>{`${hum_val ?? 0}${hum_units ?? `%`}`}</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>{`${tmp_val ?? 0}${tmp_units ?? `˚F`}`}</Box>
        </Grid>
      </Grid>
      {/* <Box>{last_reading.date}</Box>
      <Box>{last_reading.time}</Box> */}
      <Box>{last_reading.full}</Box>
    </Container>
    <Container>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <Button
            fullWidth={true}
            onClick={onGetSingleSampleCallback}
          >{`Take Single Sample`}</Button>
        </Grid>
        <Grid item md={6}>
          <Button
            fullWidth={true}
            onClick={onGetMultiSampleCallback}
          >{`Start Batch Sampling`}</Button>
        </Grid>
      </Grid>
    </Container>
  </Container>
);
SensorSamplingPageView.propTypes = {
  tmp_val: propTypes.number,
  tmp_units: propTypes.string,
  hum_val: propTypes.number,
  hum_units: propTypes.string,
  last_reading: propTypes.object,
  onGetMultiSampleCallback: propTypes.func,
  onGetSingleSampleCallback: propTypes.func,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default SensorSamplingPageView;
