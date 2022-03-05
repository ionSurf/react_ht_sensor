import React from "react";
import propTypes from "prop-types";
import { CustomizedTables, StatsTabs, Graph } from "./components";
import { Container, Grid, Box } from "../../theme/components";
import { Heading } from "../../theme/textStyles";
import Tabs from "../../components/Tabs";

const SensorStatisticsPageView = ({ stats, samples }) => (
  <Container maxWidth="xl">
    <Box>
      <Heading typography="h2">Statistics</Heading>
    </Box>
    <Container>
      <StatsTabs
        tabs={[
          {
            id: "graph",
            name: "Graph",
          },
          {
            id: "table",
            name: "Table",
          },
        ]}
      >
        {(activeTabId) => (
          <>
            <Tabs.Tab activeTabId={activeTabId} id={"graph"}>
              <Box>
                <Graph
                  XAxisKey={"interval"}
                  YAxisKey={"humidity"}
                  data={samples.hum.map((e, i) => ({
                    interval: `${i}`,
                    humidity: e,
                    amt: 2400,
                  }))}
                />
              </Box>
              <Box>
                <Graph
                  XAxisKey={"interval"}
                  YAxisKey={"temperature"}
                  data={samples.tmp.map((e, i) => ({
                    interval: `${i}`,
                    temperature: e,
                    amt: 2400,
                  }))}
                />
              </Box>
            </Tabs.Tab>
            <Tabs.Tab activeTabId={activeTabId} id={"table"}>
              <CustomizedTables />
            </Tabs.Tab>
          </>
        )}
      </StatsTabs>
    </Container>
    <Container>
      <Box>
        <Heading typography="h5">humidity</Heading>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box>{stats.hum.min}</Box>
          <Box>min.</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{stats.hum.max}</Box>
          <Box>max.</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{stats.hum.avg}</Box>
          <Box>avg.</Box>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Box>
        <Heading typography="h5">temperature</Heading>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box xs={{}}>{stats.tmp.min}</Box>
          <Box xs={{}}>min.</Box>
        </Grid>
        <Grid item xs={4}>
          <Box xs={{}}>{stats.tmp.max}</Box>
          <Box xs={{}}>max.</Box>
        </Grid>
        <Grid item xs={4}>
          <Box xs={{}}>{stats.tmp.avg}</Box>
          <Box xs={{}}>avg.</Box>
        </Grid>
      </Grid>
    </Container>
  </Container>
);
SensorStatisticsPageView.propTypes = {
  samples: propTypes.object,
  stats: propTypes.object,
};
export default SensorStatisticsPageView;
