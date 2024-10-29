import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {width} from '../../Utils/ScreenDimensions/DimensionCalculator';

const DashedCircle = ({children, style, onPress}) => {
  return (
    <Pressable onPressIn={onPress} style={[styles.dashedCircle, style]}>
      {children}
    </Pressable>
  );
};

export default DashedCircle;
const styles = StyleSheet.create({
  dashedCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'white',
    width: width / 5,
    height: width / 5,
    borderRadius: 150 / 2,
    marginBottom: width / 15,
  },
});
