import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";

const Button = React.memo((props) => (
  <TouchableHighlight
    style={[styles.buttonStyles, props.style]}
    onPress={props.onPress}
    underlayColor="#777"
  >
    <View style={styles.containerButton}>
      <Text style={styles.textButtons}>{props.text}</Text>
    </View>
  </TouchableHighlight>
));

export default Button;
