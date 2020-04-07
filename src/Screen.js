import React from "react";
import { View, Text } from "react-native";
import { NUMBER_BUTTONS, SYMBOL_BUTTONS } from "./constants";
import { styles } from "./styles";
import Button from "../src/Button";
import { connect } from "react-redux";
import { handleOnClick } from "./reducer";

const Screen = (props) => (
  <View style={styles.rootContainer}>
    <View style={styles.displayOutput}>
      <Text style={styles.textDefault}>{props.output}</Text>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.flexNumbers}>
        {NUMBER_BUTTONS.map((row, index) => (
          <View key={index} style={styles.containerRow}>
            {row.map((col, index) => (
              <Button
                key={index}
                onPress={() => handleOnClick(col, props)}
                text={col}
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.rootContainer}>
        {SYMBOL_BUTTONS.map((row, index) => (
          <Button
            style={{ marginRight: 10 }}
            key={index}
            onPress={() => handleOnClick(row, props)}
            text={row}
          />
        ))}
      </View>
    </View>
  </View>
);

const mapStateToProps = (state) => ({ output: state.dispatchReducer.output });
const mapDispatchToProps = (dispatch) => {
  const {
    clear,
    equals,
    replace,
    concat,
    concatwithout,
  } = require("./actions");
  return {
    clear: () => dispatch(clear()),
    equals: () => dispatch(equals()),
    replace: (value) => dispatch(replace(value)),
    concat: (value) => dispatch(concat(value)),
    concatwithout: (value) => dispatch(concatwithout(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
