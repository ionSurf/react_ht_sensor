import React, { useEffect, useRef } from "react";
import propTypes from "prop-types";

const WebSocketContext = React.createContext({
  ws: null,
});

const WebSocketProvider = ({ children, value }) => {
  const ws = useRef();
  const { endpoint } = value;

  //  OnMount
  useEffect(() => {
    if (endpoint !== "") {
      ws.current = new WebSocket(endpoint);

      ws.current.addEventListener("open", () => {
        console.info("WebSocket: Connected successfully");
      });

      ws.current.addEventListener("error", (msg) => {
        console.error("WebSocket: Error:", msg);
      });
    } else {
      throw new Error(
        `Could not initialize WebSocket. Verify endpoint: ${endpoint}`
      );
    }
    return () => {
      // ws.current.removeAllListeners();
      ws.current.close();
      // ws.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <WebSocketContext.Provider value={{ ws: ws.current }}>
    <WebSocketContext.Provider value={{ ws: ws }}>
      {children}
    </WebSocketContext.Provider>
  );
};
WebSocketProvider.propTypes = {
  value: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};

const useWebSocketContext = () => {
  const context = React.useContext(WebSocketContext);
  if (context === undefined)
    throw new Error(
      "WebSocketContext must be used within a useWebSocketProvider"
    );
  return context;
};
useWebSocketContext.context = WebSocketContext;
useWebSocketContext.provider = WebSocketProvider;

export default useWebSocketContext;
