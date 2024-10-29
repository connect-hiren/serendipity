import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {
  fontScale,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';

const RadioButton = ({onPress, status, text, textStyle, isWithText, style}) => {
  if (isWithText) {
    return (
      <Pressable style={[styles.RadioButtonContainer, style]} onPress={onPress}>
        <View style={styles.radioButton}>
          {status === 'checked' ? (
            <View style={styles.radioChecked}></View>
          ) : null}
        </View>
        <Text style={[styles.radioButtonText, textStyle]}>{text}</Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable style={styles.radioButton} onPress={onPress}>
        {status === 'checked' ? (
          <View style={styles.radioChecked}></View>
        ) : null}
      </Pressable>
    );
  }
};

export default RadioButton;
const styles = StyleSheet.create({
  RadioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: width / 15,
    height: width / 15,
    borderRadius: 150 / 2,
    marginHorizontal: 4,
  },
  radioChecked: {
    backgroundColor: Colors.blue1,
    width: width / 20,
    height: width / 20,
    borderRadius: 150 / 2,
  },
  radioButtonText: {
    color: Colors.blue1,
    fontSize: fontScale * 12,
  },
});
