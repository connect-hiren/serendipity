import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Login,
  Menu,
  Signup,
  Welcome,
  Loading,
  PaywallScreen,
  ManageConnectionIMTracking,
  TrackingRequests,
  CreateNewEvent,
  CreateNewGroup,
  AddNewConnections
} from './Resources/Exporter/index';
import TrackingHistory from './Resources/Screens/Tracking/tracking_history/TrackingHistory';
const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AddNewConnections />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,

  },
});
