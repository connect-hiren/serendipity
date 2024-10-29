import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {
  fontScale,
  width,
  height,
} from '../../Utils/ScreenDimensions/DimensionCalculator';
import Icon from 'react-native-vector-icons/Ionicons';

const OpenForDating = () => {
  return (
    <View style={styles.Datecontainer}>
      <Icon name={'heart-outline'} color={Colors.heart} size={fontScale * 20} />
      <Text style={styles.textStyle}>Open For Dating</Text>
    </View>
  );
};

export default OpenForDating;
const styles = StyleSheet.create({
  Datecontainer: {
    alignSelf: 'center',
    width: width / 2.3,
    height: height / 30,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderColor: Colors.blue1,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
},
  textStyle: {
    color: Colors.blue1,
    fontWeight: '500',
    fontSize:fontScale * 13
  },
});
