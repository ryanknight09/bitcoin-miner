import { useReducer } from "react";

const useCustomReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [
    state,
    (type, payload) => {
      dispatch({ type, payload });
    },
  ];
};

export default useCustomReducer;
