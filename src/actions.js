import { createActions, handleActions } from "redux-actions";
import { INITOUTPUT } from "./constants";

export const { clear, equals, replace, concat, concatwithout } = createActions(
  "CLEAR",
  "EQUALS",
  "REPLACE",
  "CONCAT",
  "CONCATWITHOUT"
);

const initialState = {
  output: INITOUTPUT,
};

export const dispatchReducer = handleActions(
  {
    CLEAR: (state) => ({
      ...state,
      output: INITOUTPUT,
    }),
    EQUALS: (state) => ({
      ...state,
      output: "" + eval(state.output),
    }),
    REPLACE: (state, action) => ({
      ...state,
      output: state.output.replace(/.$/, action.payload),
    }),
    CONCAT: (state, action) => ({
      ...state,
      output: state.output + "" + action.payload + "",
    }),
    CONCATWITHOUT: (state, action) => ({
      ...state,
      output: action.payload + "",
    }),
  },
  initialState
);
