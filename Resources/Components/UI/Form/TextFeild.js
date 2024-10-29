import React from 'react';
import {Dimensions, Image, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

// window width and heightF
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const fontScale = Dimensions.get('window').fontScale;

const TextFeild = ({
  keyboardType,
  iconName,
  placeholder,
  without,
  style,
  secureTextEntry,
  textInputStyle,
  iconRight,
  iconSize,
  placeholderTextColor
}) => {
  return (
    <View style={[styles.container, style]}>
      {!without ? (
        <Icon
          style={{marginLeft: 16}}
          name={iconName}
          color={Colors.blue1}
          size={iconSize}
        />
      ) : null}

      <TextInput
        selectionColor={Colors.blue2}
        secureTextEntry={secureTextEntry}
        style={[
          styles.textInput,
          {marginLeft: without ? width / 20 : null},
          textInputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : Colors.blue2
        }
        keyboardType={keyboardType}
      />

      {iconRight ? (
        <Icon
          style={{marginRight: 16}}
          name={iconRight}
          color={Colors.blue1}
          size={iconSize}
        />
      ) : null}
    </View>
  );
};
export default TextFeild;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 8.1,
    width: '88%',
    height: height / 14,
    marginVertical: 5,
  },
  textInput: {
    borderRadius: 8.1,
    width: '80%',
    height: height / 14,
    fontSize: fontScale * 15,
  },
});
