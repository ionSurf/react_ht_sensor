import { useContext } from "react";
import { GlobalContext } from "../../contexts";

export default function useGlobalContextState() {
  const { state } = useContext(GlobalContext);
  return state;
}
