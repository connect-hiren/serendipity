import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {AnimatedLoading} from '../../../Exporter';
import {hindi, english} from '../../../Exporter';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';

const Loading = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(english);

  return (
    <View style={styles.container}>
      <View style={styles.midContiner}>
        <Image source={require('../../../Assets/Logo/logo1x.png')} />
        <Image
          style={{top: 15}}
          source={require('../../../Assets/Logo/combined-shape-blue.png')}
        />
        {/* <View style={styles.textMidContainer}></View> */}
        {/* //TODO make a black box behind the mid container text */}
        <Text
          style={[
            {fontSize: fontScale * 18},
            {
              color: Colors.black,
              width: '60%',
              textAlign: 'center',
              // position: 'relative',
              // top: -80,
              // zIndex: +1,
            },
          ]}>
          {selectedLanguage.chancesEncounters}
        </Text>
        <AnimatedLoading style={styles.loadingAnimationStyles} />
      </View>
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  loadingAnimationStyles: {
    alignSelf: 'center',
    height: width / 2,
    width: width / 2,
  },
  midContiner: {
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});
