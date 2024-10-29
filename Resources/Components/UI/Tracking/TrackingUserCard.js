import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {IconButton, NavigationHeader} from '../../../Exporter';
import {ImageAndIconResources} from '../../../Exporter/ImageExporter';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';

const TrackingUserCard = ({
  image,
  name,
  address,
  designation,
  pendingRequest,
  onPressClose,
  onPress90Days,
  trackHistoryCard,
  date,
  days,
  isAddUserCard,
  onPressAddUserButton,
  // Text placeHolders
  view90DaysRoute,
  Notifications,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={[
        styles.card,
        {
          opacity: pendingRequest ? 0.8 : 1,
          height: isAddUserCard
            ? height / 3.5 - height / 9
            : height / 3 - height / 9,
        },
      ]}>
      <View
        style={[
          styles.upperContainer,
          {height: isAddUserCard ? '100%' : '60%'},
        ]}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={image} />
          <View
            style={{
              borderRadius: 150 / 2,
              backgroundColor: 'white',
              width: width / 12,
              height: width / 12,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: width / 4.5,
              zIndex: 1,
              borderColor: 'black',
              borderWidth: 0.5,
              // flexDirection: 'row',
            }}>
            <Text style={{color: Colors.blue1}}>
              2<Text>o</Text>
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.detailsContainer,
            {
              justifyContent: pendingRequest
                ? 'flex-start'
                : trackHistoryCard
                ? 'space-evenly'
                : 'center',
              paddingTop: pendingRequest ? (height / width) * 3 : 0,
            },
          ]}>
          <Text
            style={[
              styles.name,
              {color: pendingRequest ? Colors.blue3 : Colors.blue1},
            ]}>
            {name}
          </Text>
          {pendingRequest ? null : trackHistoryCard ? null : !isAddUserCard ? (
            <Text style={styles.desingnation}>{designation}</Text>
          ) : null}
          <Text
            style={[
              styles.address,
              {
                color: pendingRequest
                  ? Colors.blue3
                  : isAddUserCard
                  ? Colors.blue2
                  : Colors.blue1,
                paddingTop: pendingRequest
                  ? 2
                  : trackHistoryCard
                  ? 0
                  : (height / width) * 3,
              },
            ]}>
            {pendingRequest ? 'Pending Tracking Request' : address}
          </Text>
          {trackHistoryCard ? (
            <Text
              style={[
                styles.desingnation,
                {fontWeight: '400', fontSize: fontScale * 11},
              ]}>
              {`Last Update: ${date}`}
            </Text>
          ) : null}
          {trackHistoryCard ? (
            <Text
              style={{
                color: Colors.blue1,
                backgroundColor: Colors.white,
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}>{`${days} days ago`}</Text>
          ) : null}
        </View>
        {pendingRequest ? (
          <View style={styles.notificationButtonContainer}>
            <IconButton
              onPress={onPressClose}
              color={'white'}
              name="close"
              size={fontScale * 25}
              style={{backgroundColor: Colors.blue3}}
            />
          </View>
        ) : trackHistoryCard ? null : !isAddUserCard ? (
          <View style={styles.notificationButtonContainer}>
            <ToggleSwitch
              style={{paddingVertical: (height / width) * 4}}
              circleColor={Colors.blue1}
              isOn={isEnabled}
              onColor={Colors.white}
              offColor="rgba(255,255,255,0.7)"
              size="large"
              onToggle={isOn => toggleSwitch()}
            />
            <Text style={styles.desingnation}>
              {Notifications ? Notifications : 'Notifications'}
            </Text>
          </View>
        ) : (
          <View style={[styles.notificationButtonContainer, {flex: 0.6}]}>
            <IconButton
              onPress={onPressAddUserButton}
              color={'white'}
              name="add-outline"
              size={fontScale * 25}
              style={{backgroundColor: Colors.blue1}}
            />
          </View>
        )}
      </View>
      {isAddUserCard ? null : (
        <Pressable
          onPress={onPress90Days}
          style={[
            styles.lowerContainer,
            {backgroundColor: pendingRequest ? Colors.blue3 : Colors.blue1},
          ]}>
          <Text style={{color: Colors.white, fontSize: fontScale * 15}}>
            {view90DaysRoute ? view90DaysRoute : 'View 90 Day Route History'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default TrackingUserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    width: width,
    height: height / 3 - height / 9,
    justifyContent: 'space-between',
    marginBottom: (height / width) * 3,
  },
  upperContainer: {
    width: width,
    height: '60%',
    flexDirection: 'row',
  },
  lowerContainer: {
    alignSelf: 'center',
    width: width / 1.05,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: (-height / width) * 5,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  detailsContainer: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: width / 30,
  },
  notificationButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  name: {
    fontSize: fontScale * 16,
    color: Colors.blue1,
    fontWeight: 'bold',
  },
  desingnation: {
    fontSize: fontScale * 13,
    color: Colors.blue2,
    fontWeight: 'bold',
  },
  address: {
    fontSize: fontScale * 14,
    color: Colors.blue1,
  },
});

//TODO:Fonts from design
