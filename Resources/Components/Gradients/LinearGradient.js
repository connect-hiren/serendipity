import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Constants/Colors';

const Gradient = ({children, gradientForEvent}) => {
  if (gradientForEvent) {
    return (
      <LinearGradient
        colors={['#8fc7df', '#147dc2']}
        style={styles.linearGradient}>
        {children}
      </LinearGradient>
    );
  }
  return (
    <LinearGradient
      colors={[Colors.blue1, Colors.blue2]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
