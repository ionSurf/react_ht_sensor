import React, { useReducer } from "react";
import {
  GlobalContextProvider,
  GlobalContextInitialState,
} from "../../contexts";
import globalReducer from "../../reducers/globalReducer";

//  Routing deps.
import { routes } from "../../config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../../pages";
import NaviBar from "../NaviBar";

//  theme
import { Layout } from "./components";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    globalReducer,
    GlobalContextInitialState
  );

  return (
    <GlobalContextProvider value={{ state, dispatch }}>
      <BrowserRouter>
        <Layout>
          <Layout.Head>
            <NaviBar routes={routes} />
          </Layout.Head>
          <Layout.Body>
            <Routes>
              {routes.map((r) => (
                <Route key={r.id} path={r.route} element={<r.element />} />
              ))}
              <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
          </Layout.Body>
        </Layout>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
