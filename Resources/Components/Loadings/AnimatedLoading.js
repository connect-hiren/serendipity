import React from 'react';
import Lottie from 'lottie-react-native';

const AnimatedLoading = ({style}) => {
  return (
    <Lottie
      autoSize={true}
      autoPlay={true}
      source={require('../../Assets/Lottie/Loading.json')}
      style={style}
    />
  );
};

export default AnimatedLoading;
