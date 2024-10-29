import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Gradient,
  NavigationHeader,
  TrackingUserCard,
} from '../../../../Exporter';
import {ImageAndIconResources} from '../../../../Exporter/ImageExporter';

const AddNewConnections = () => {
  return (
    <View style={styles.container}>
      <Gradient gradientForEvent={true}>
        <NavigationHeader
          iconLeftName={'close'}
          screenName={'Add new connections already on Serendipity'}
          haveBottomComponent={true}
        />
        <TrackingUserCard
          isAddUserCard
          designation={'hello'}
          name="John Brownsvillie, Jr."
          address="1840,Calvert St.Los Angeles, CA 12345"
          image={ImageAndIconResources.person2}
        />
      </Gradient>
    </View>
  );
};

export default AddNewConnections;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
