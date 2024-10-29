import {template} from '@babel/core';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {NavigationHeader, PrimaryButton} from '../../../Exporter';
import {ImageAndIconResources} from '../../../Exporter/ImageExporter';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';
import Icon from 'react-native-vector-icons/Ionicons';

const TrackingRequests = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.blue3}}>
      <NavigationHeader screenName={'Tracking Requests'} iconLeftName="close" />
      <View style={styles.userDetailsCard}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={ImageAndIconResources.person3}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Text style={{fontWeight: 'bold', fontSize: fontScale * 14}}>
              Loreena Sandeman
            </Text>{' '}
            has requested to track you and receive the following notifications
            from the addresses below:
          </Text>
        </View>
      </View>

      <View style={styles.requests}>
        <View style={styles.textContainer1}>
          <Text
            style={{
              width: width / 1.5,
              color: Colors.blue1,
              fontSize: fontScale * 15,
            }}>
            One time departure Notifications within{' '}
            <Text style={{fontWeight: 'bold'}}>100 feet</Text> of:
          </Text>
        </View>
        <View style={styles.textContainer2}>
          <View style={{paddingLeft: 10}}>
            <Icon
              name={'location-outline'}
              color={Colors.blue1}
              size={fontScale * 40}
            />
          </View>
          <View style={styles.textBesideIcon}>
            <Text
              style={{
                color: Colors.blue1,
                fontSize: fontScale * 15,
                fontWeight: 'bold',
              }}>
              Home
            </Text>
            <Text style={{color: Colors.blue1, fontSize: fontScale * 15}}>
              123 Bedfore Ave Woodbury, CO
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style={{
              backgroundColor: Colors.heart,
              padding: 10,
              borderRadius: 10,
            }}
            containerStyles={styles.buttonContainer1}>
            Decline Request
          </PrimaryButton>
          <PrimaryButton
            style={{
              backgroundColor: Colors.blue1,
              padding: 10,
              borderRadius: 10,
            }}
            containerStyles={styles.buttonContainer2}>
            Agree To Tracking Request
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default TrackingRequests;
const styles = StyleSheet.create({
  userDetailsCard: {
    width: width,
    height: height / 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width / 4,
    height: width / 4,
    borderRadius: 150,
    borderColor: 'white',
    borderWidth: 3,
  },
  textContainer: {
    flex: 2.5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.blue1,
    fontSize: fontScale * 13,
    textAlign: 'left',
  },

  requests: {
    width: width,
    height: height / 3.8,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
  textContainer1: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textContainer2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBesideIcon: {
    paddingLeft: 10,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer1: {
    width: '40%',
    height: height / 15,
    padding: 5,
  },
  buttonContainer2: {
    width: '60%',
    height: height / 15,
    padding: 5,
  },
});
