import { useEffect } from "react";
import useWebSocketContext from "../useWebSocketContext";

const useWebSocket = () => {
  const { ws } = useWebSocketContext();
  const _sendMessage = (msg) => {
    if (!ws.current) {
      console.error("useWebSocket: WS has not been initialised");
      return;
    }
    ws.current && ws.current.send(msg);
  };
  const _subscribe = ({ eventName, callback }) => {
    console.log(ws);
    if (!ws.current) {
      console.error("useWebSocket: WS has not been initialised");
      return;
    }
    if (!["open", "close", "message"].includes(eventName)) {
      console.error(`useWebSocket: EventName is not recognized: ${eventName}`);
      return;
    }
    ws.current.addEventListener(eventName, callback);
  };

  useEffect(() => {
    const localWS = ws.current;
    !localWS &&
      console.error("useWebSocket @ useEffect: WS has not been initialised");
    return () => {
      localWS && localWS.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isOpen: () => (ws.current && true) || false,
    subscribe: _subscribe,
    sendMessage: _sendMessage,
  };
};
useWebSocket.events = {
  open: "open",
  close: "close",
  message: "message",
};
export default useWebSocket;
