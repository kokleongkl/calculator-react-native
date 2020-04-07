import { combineReducers } from "redux";
import { dispatchReducer } from "./actions";
import { INITOUTPUT, ERROR_MESSAGE } from "./constants";

export const reducer = combineReducers({
  dispatchReducer,
});

export const handleOnClick = (value, props) => {
  if (value == "C") {
    props.clear();
  } else if (value == "=") {
    let lastChar = props.output.slice(-1);
    let pattern = RegExp(/[+-/*]/);
    let result = pattern.test(lastChar);
    if (result == true) {
      props.clear();
      props.replace(ERROR_MESSAGE);
    } else {
      props.equals();
    }
  } else {
    if (props.output == ERROR_MESSAGE) {
      props.clear();
      props.replace(value);
    } else {
      let lastChar = props.output.slice(-1);
      if (isNaN(lastChar) && isNaN(value)) {
        props.replace(value);
      } else if (props.output !== INITOUTPUT || isNaN(value)) {
        props.concat(value);
      } else {
        props.concatwithout(value);
      }
    }
  }
};
