import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {
  english,
  hindi,
  NavigationHeader,
  TrackingUserCard,
} from '../../../Exporter';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';
import {ImageAndIconResources} from '../../../Exporter/ImageExporter';

const ManageConnectionIMTracking = () => {
  const today = new Date().toISOString();
  const [selectedLanguage, setSelectedLanguage] = useState(english);

  const renderFacilitiesCard = item => {
    return (
      <TrackingUserCard
        image={item.item.image}
        name={item.item.name}
        designation={item.item.designation}
        address={item.item.address}
        Notifications={
          selectedLanguage.trackingScreens.manage_connections_im_tracking
            .notifications
        }
        view90DaysRoute={
          selectedLanguage.trackingScreens.manage_connections_im_tracking
            .view90Days
        }
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.blue3}}>
      <NavigationHeader
        screenName={
          selectedLanguage.trackingScreens.manage_connections_im_tracking
            .screenTitle
        }
        icon={true}
        iconLeftName="close"
        iconRightName={'add-outline'}
      />
      <FlatList
        style={{flex: 1}}
        data={
          selectedLanguage.trackingScreens.manage_connections_im_tracking.data
        }
        renderItem={renderFacilitiesCard}
        keyExtractor={(item, index) => index}
      />
      {/* <TrackingUserCard
        image={ImageAndIconResources.person2}
        name={'Loreena Sandeman'}
        designation={'Designer'}
        address={'123 Bedford Ave Woodbury, CO'}
        trackHistoryCard={true}
        date={today}
        days={20}
      /> */}
    </View>
  );
};

export default ManageConnectionIMTracking;

//TODO: implement flatlist when needed
//TODO: onpress for card buttons
//TODO:Fonts from design
