import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {
  fontScale,
  height,
  width,
} from '../../Utils/ScreenDimensions/DimensionCalculator';
import NotificationCard from './NotificationCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaywallFacilityCard = ({
  isNotificationCard,
  iconContainerCard,
  notificationText,
  minsAgo,
  imgUrl,
  heading,
  subHeading,
}) => {
  return (
    <View style={styles.container}>
      {isNotificationCard ? (
        <NotificationCard
          style={styles.NotificationCard}
          notificationText={notificationText}
          minsAgo={minsAgo}
        />
      ) : null}
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={styles.imgView}
        source={imgUrl}>
        {iconContainerCard ? (
          <View style={styles.overlayContainer}>
            <Icon
              style={{elevation: 5}}
              name={'notifications-active'}
              color={Colors.white}
              size={width / 5}
            />
          </View>
        ) : null}
      </ImageBackground>
      <View style={styles.txtView}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
    </View>
  );
};

export default PaywallFacilityCard;
const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: width / 1.3,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: height / 18,
  },
  imgView: {
    flex: 1,
  },
  imageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  overlayContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtView: {
    flex: 1,
    backgroundColor: 'rgba(251, 207, 48,0.25)',
  },
  heading: {
    color: Colors.blue1,
    fontSize: fontScale * 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: width / 15,
    paddingVertical: fontScale * 5,
  },
  subHeading: {
    color: Colors.blue1,
    fontSize: fontScale * 11,
    textAlign: 'center',
    paddingHorizontal: width / 15,
    paddingVertical: fontScale * 2,
  },
  NotificationCard: {
    top: -width / 10,
  },
});
