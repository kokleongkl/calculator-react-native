import { combineReducers } from "redux";
import { dispatchReducer } from "./actions";
import { initialOutput } from "./constants";

export const reducer = combineReducers({
  dispatchReducer,
});

export const handleOnClick = (value, props) => {
  if (value == "C") {
    props.clear();
  } else if (value == "=") {
    props.equals();
  } else {
    let strLastChar = props.output.slice(-1);

    // new expression replace old expression
    if (isNaN(strLastChar) && isNaN(value)) {
      props.replace(value);
    } else if (props.output !== initialOutput || isNaN(value)) {
      props.concat(value);
    } else {
      props.concatwithout(value);
    }
  }
};
