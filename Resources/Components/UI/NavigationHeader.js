import React from 'react';
import {findNodeHandle, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {
  fontScale,
  height,
  width,
} from '../../Utils/ScreenDimensions/DimensionCalculator';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButton} from './IconButton';
import DashedCircle from './DashedCircle';
import TextFeild from './Form/TextFeild';

const NavigationHeader = ({
  screenName,
  buttonRightText,
  icon,
  iconRightName,
  iconLeftName,
  headerForGroupOrEvent,
  TextForEventHeader,
  haveBottomComponent,
}) => {
  if (headerForGroupOrEvent) {
    return (
      <View
        style={[
          styles.container,
          {
            height: height / 4,
            backgroundColor: Colors.blue1,
          },
        ]}>
        <View
          style={[
            styles.firstContainer,
            {
              alignItems: 'flex-start',
              alignSelf: 'flex-end',
              height: '90%',
            },
          ]}>
          <Icon
            name={iconLeftName}
            color={Colors.white}
            size={fontScale * 40}
          />
        </View>

        <View
          style={[
            styles.midContainer,
            {flexDirection: 'column', alignSelf: 'flex-end', height: '95%'},
          ]}>
          <Text
            style={[
              styles.screenNameStyle,
              {
                fontSize:
                  screenName.length > 16 ? fontScale * 17 : fontScale * 20,
              },
            ]}>
            {screenName}
          </Text>
          <DashedCircle style={{marginBottom: 0}}>
            <Icon name={'add'} color={Colors.white} size={width / 8} />
          </DashedCircle>
          <Text style={{color: 'white'}}>{TextForEventHeader}</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Icon
            name={iconLeftName}
            color={Colors.white}
            size={fontScale * 25}
          />
        </View>

        <View style={styles.midContainer}>
          <Text
            style={[
              styles.screenNameStyle,
              {
                fontSize:
                  screenName.length > 15 ? fontScale * 14 : fontScale * 17,
              },
            ]}>
            {screenName}
          </Text>
        </View>

        {buttonRightText ? (
          <View style={styles.thirdContainer}>
            <Text style={styles.buttonRight}>{buttonRightText}</Text>
          </View>
        ) : icon ? (
          <View style={styles.thirdContainer}>
            <IconButton
              size={fontScale * 25}
              color={Colors.white}
              name={iconRightName}
              style={{backgroundColor: Colors.blue1}}
            />
          </View>
        ) : null}
      </View>
      {haveBottomComponent ? (
        <View
          style={[
            styles.container,
            {flexDirection: 'column', height: height / 11},
          ]}>
          <TextFeild
            iconName={'search'}
            iconSize={fontScale * 25}
            placeholder={'Search by email, name or phone'}
            placeholderTextColor={Colors.blue1}
            style={{justifyContent: 'space-around', backgroundColor: 'white'}}
            textInputStyle={{backgroundColor: 'white'}}
          />
        </View>
      ) : null}
    </>
  );
};

export default NavigationHeader;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 9,
    backgroundColor: Colors.blue4,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
  },
  screenNameStyle: {
    color: Colors.white,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  buttonRight: {
    color: Colors.white,
    fontSize: fontScale * 15,
    textTransform: 'capitalize',
  },
  firstContainer: {
    width: '15%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  midContainer: {
    width: '70%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  thirdContainer: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
