import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {
  hindi,
  english,
  TrackingUserCard,
  NavigationHeader,
} from '../../../Exporter';
import {ImageAndIconResources} from '../../../Exporter/ImageExporter';

const TrackingHistory = () => {
  const today = new Date().toISOString();
  const [selectedLanguage, setSelectedLanguage] = useState(english);

  const renderCard = item => {
    return (
      <TrackingUserCard
        image={item.item.image}
        name={item.item.name}
        address={item.item.address}
        trackHistoryCard={true}
        date={today}
        days={item.item.daysAgo}
        view90DaysRoute={
          selectedLanguage.trackingScreens.Tracking_History.view90Days
        }
      />

      // <TrackingUserCard
      //   image={item.item.image}
      //   name={item.item.name}
      //   designation={item.item.designation}
      //   address={item.item.address}
      //   Notifications={
      //     selectedLanguage.trackingScreens.manage_connections_im_tracking
      //       .notifications
      //   }
      //   view90DaysRoute={
      //     selectedLanguage.trackingScreens.manage_connections_im_tracking
      //       .view90Days
      //   }
      // />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.blue3}}>
      <NavigationHeader
        screenName={
          selectedLanguage.trackingScreens.Tracking_History.screenTitle
        }
        icon={true}
        iconName={'add-outline'}
      />
      <FlatList
        style={{flex: 1}}
        data={selectedLanguage.trackingScreens.Tracking_History.data}
        renderItem={renderCard}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default TrackingHistory;
