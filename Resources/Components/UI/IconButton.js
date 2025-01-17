import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {width} from '../../Utils/ScreenDimensions/DimensionCalculator';

export const IconButton = ({style, onPress, name, color, size}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? {opacity: 0.5} : null)}>
      <View style={[styles.iconButton, style]}>
        <Icon name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: '#5649ba',
    width: width / 11,
    height: width / 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 6,
  },
  IconImageStyle: {
    height: 25,
    width: 25,
  },
});
