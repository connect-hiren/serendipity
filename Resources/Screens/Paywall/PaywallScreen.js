import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {
  english,
  hindi,
  NavigationHeader,
  PaywallFacilityCard,
  PrimaryButton,
} from '../../Exporter/index';
import {
  fontScale,
  height,
  width,
} from '../../Utils/ScreenDimensions/DimensionCalculator';
import PayWallModal from './PayWallModal';

const PaywallScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(english);

  const renderFacilitiesCard = item => {
    return (
      <PaywallFacilityCard
        notificationText={item.item.notificationSubHeading}
        imgUrl={item.item.imgUrl}
        minsAgo={`45 ${selectedLanguage.paywall.minAgo}`}
        isNotificationCard={item.item.notificationSubHeading ? true : false}
        heading={item.item.heading}
        subHeading={item.item.subHeading}
        iconContainerCard={item.item.isIcon}
      />
    );
  };
  return (
    <View style={styles.container}>
      {/* <PayWallModal /> */}
      <NavigationHeader
        screenName={selectedLanguage.paywall.screenTitle}
        iconLeftName="close"
      />
      <View style={styles.topContainer}>
        <Image source={require('../../Assets/Icons/ribbon.png')} />
        {/* <Icon name={'ribbon-outline'} color={Colors.white} size={width / 5} /> */}
        <FlatList
          style={{flex: 1, width: width / 1.2, height: width / 1.3}}
          data={selectedLanguage.paywall.PaidFacilities}
          renderItem={renderFacilitiesCard}
          keyExtractor={(item, index) => index}
          horizontal={true}
          pagingEnabled
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Text
          style={[
            styles.restoreText,
            {
              fontSize: fontScale * 12,
              alignSelf: 'flex-end',
              marginRight: width / 8,
              marginBottom: 5,
              fontWeight: '700',
            },
          ]}>
          {selectedLanguage.paywall.BV}
        </Text>
        <View style={styles.priceIndicator}>
          <Pressable style={styles.prices}>
            <Text style={styles.priceText}>
              $20/{selectedLanguage.paywall.month}
            </Text>
          </Pressable>
          <Pressable style={styles.prices}>
            <Text style={styles.priceText}>
              $50/{selectedLanguage.paywall.quarter}
            </Text>
          </Pressable>
          <Pressable style={[styles.prices, {backgroundColor: Colors.blue1}]}>
            <Text style={styles.priceText}>
              $289/{selectedLanguage.paywall.year}
            </Text>
          </Pressable>
        </View>
        <Text style={styles.freeTrialText}>
          {selectedLanguage.paywall.sevenDaysTrail}
        </Text>

        <PrimaryButton
          style={styles.PrimaryButton}
          containerStyles={styles.PrimaryButtonContainer}>
          {selectedLanguage.paywall.startFreeTrial}
        </PrimaryButton>
        <Text style={styles.restoreText}>
          {selectedLanguage.paywall.purchaseRestore}
        </Text>
      </View>
    </View>
  );
};

export default PaywallScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 5,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  PrimaryButton: {
    backgroundColor: Colors.pink,
  },
  PrimaryButtonContainer: {
    width: '88%',
  },
  restoreText: {
    color: Colors.blue1,
    fontSize: fontScale * 14,
  },
  freeTrialText: {
    color: Colors.blue1,
    fontSize: fontScale * 12,
    width: '70%',
    textAlign: 'center',
  },
  priceIndicator: {
    backgroundColor: Colors.blue3,
    width: '88%',
    height: height / 15,
    borderRadius: 49,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prices: {
    flex: 1,
    borderRadius: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: fontScale * 12,
  },
});

// Todo:implement indicator for slider
// Todo:Navigation
// Todo:color change and font change according to design
