import {
  width,
  fontScale,
  height,
} from '../../Utils/ScreenDimensions/DimensionCalculator';

const {StyleSheet, View, Text, Image} = require('react-native');
const {Colors} = require('../../Constants/Colors');

const NotificationCard = ({style, notificationText, minsAgo}) => {
  return (
    <View style={[styles.NotificationCardContainer, style]}>
      {minsAgo ? <Text style={styles.minText}>{minsAgo}</Text> : null}
      <View style={styles.innerNotificationCardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../Assets/Icons/paywall_icon.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Serendipity Notification</Text>
          {notificationText ? (
            <Text style={styles.subHeading}>{notificationText}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  NotificationCardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: height / 10,
    width: width / 1.35,
    borderRadius: 8,
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  minText: {
    color: 'rgba(0,0,0,0.6)',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingTop: 3,
    fontSize: fontScale * 10,
  },
  imageContainer: {
    width: width / 15,
    height: width / 15,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  textContainer: {
    justifyContent: 'center',
  },
  heading: {
    color: Colors.blue1,
    fontWeight: 'bold',
    fontSize: fontScale * 12,
  },
  subHeading: {
    color: Colors.blue1,
    width: '80%',
    fontSize: fontScale * 10,
  },
  innerNotificationCardContainer: {
    flexDirection: 'row',
  },
});
