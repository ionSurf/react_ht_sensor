import * as pages from "../pages";

const sensorRoutes = [
  {
    id: "sensor_sampling_page",
    title: "Sampling",
    route: "/sensor/sampling",
    element: pages.HomePage,
  },
  {
    id: "sensor_statistics_page",
    title: "Statistics",
    route: "/sensor/statistics",
    element: pages.HomePage,
  },
];

const routes = [
  {
    id: "homepage",
    title: "Home",
    route: "/",
    element: pages.HomePage,
  },
  {
    id: "sensor",
    title: "Sensor",
    route: "/sensor",
    element: pages.SensorPage,
    nestedRoutes: sensorRoutes,
  },
];
export default routes;
