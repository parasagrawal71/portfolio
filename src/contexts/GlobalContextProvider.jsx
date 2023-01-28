import React, { createContext, useContext, useMemo, useReducer } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE

const GlobalContext = createContext({ defaultValue: {} });

export function useGlobalState() {
  return useContext(GlobalContext);
}

function GlobalContextProvider(props) {
  // PROPS HERE
  const { initialState = {} } = props;

  const globalStateReducer = (state, action) => {
    state = { ...state, [action?.key]: action?.value };
    // console.log(`state: `, state);
    return state;
  };
  const [globalState, dispatchGlobalState] = useReducer(globalStateReducer, initialState);

  const valueToPass = useMemo(
    () => ({ globalState, dispatchGlobalState }),
    [globalState, dispatchGlobalState]
  );

  return <GlobalContext.Provider value={valueToPass}>{props?.children}</GlobalContext.Provider>;
}

export default GlobalContextProvider;
