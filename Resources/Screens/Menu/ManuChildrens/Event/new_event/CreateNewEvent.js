import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors} from '../../../../../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  DashedCircle,
  Gradient,
  NavigationHeader,
  PrimaryButton,
  RadioButton,
  TextFeild,
} from '../../../../../Exporter';
import {
  fontScale,
  width,
  height,
} from '../../../../../Utils/ScreenDimensions/DimensionCalculator';

const CreateNewEvent = () => {
  const [checked, setChecked] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log('checked = ', checked);
  return (
    <View style={styles.container}>
      <Gradient gradientForEvent={true}>
        <NavigationHeader
          screenName={'New Event'}
          headerForGroupOrEvent={true}
          iconLeftName="close"
          TextForEventHeader={'Add event cover picture'}
        />
        <View style={styles.formFeildContainer}>
          <TextFeild
            style={{height: height / 18}}
            textInputStyle={{fontSize: fontScale * 20, fontWeight: '500'}}
            without={true}
            placeholder={'Event Name'}
          />
          <TextFeild
            style={{height: height / 18}}
            without={true}
            placeholder={'Set Location'}
            iconRight="location"
            iconSize={fontScale * 25}
          />
          <View style={styles.formSmallFieldsContainer}>
            <TextFeild
              style={{width: '48%', height: height / 18}}
              without={true}
              placeholder={'Start Date'}
              iconSize={fontScale * 25}
            />
            <TextFeild
              style={{width: '48%', height: height / 18}}
              without={true}
              placeholder={'Start Time'}
              iconSize={fontScale * 25}
            />
          </View>
          <View style={styles.formSmallFieldsContainer}>
            <TextFeild
              style={{width: '48%', height: height / 18}}
              without={true}
              placeholder={'End Date'}
              iconSize={fontScale * 25}
            />
            <TextFeild
              style={{width: '48%', height: height / 18}}
              without={true}
              placeholder={'End Time'}
              iconSize={fontScale * 25}
            />
          </View>
          <TextFeild
            style={{height: '20%'}}
            without={true}
            placeholder={'Event description'}
            iconSize={fontScale * 25}
          />
          <View style={styles.radioButtonContainer}>
            <Text style={styles.smallHeading}>Event type</Text>
            <RadioButton
              isWithText={true}
              text={'Public'}
              status={checked === 'Public' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Public')}
            />
            <RadioButton
              isWithText={true}
              text={'Private'}
              status={checked === 'Private' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Private')}
            />
          </View>
          <View
            style={[
              styles.radioButtonContainer,
              {justifyContent: 'flex-start'},
            ]}>
            <Text style={styles.smallHeading}>Event Tracking</Text>
            <ToggleSwitch
              style={{
                paddingVertical: (height / width) * 4,
                paddingHorizontal: (height / width) * 8,
              }}
              circleColor={Colors.blue1}
              isOn={isEnabled}
              onColor={Colors.white}
              offColor="rgba(255,255,255,0.7)"
              size="large"
              onToggle={isOn => toggleSwitch()}
            />
          </View>
          <View
            style={[
              styles.radioButtonContainer,
              {justifyContent: 'flex-start'},
            ]}>
            <Text style={styles.smallHeading}>Invite people</Text>
            <DashedCircle
              style={{
                marginBottom: 0,
                backgroundColor: Colors.blue1,
                width: width / 8,
                height: width / 8,
                marginHorizontal: (height / width) * 15,
                borderWidth: 1.5,
              }}>
              <Icon name={'add'} color={Colors.white} size={width / 11} />
            </DashedCircle>
          </View>
        </View>
        <View style={styles.formButtonContainer}>
          <PrimaryButton
            style={styles.createEventButtonStyle}
            containerStyles={styles.createEventButtonContainer}>
            Create Event
          </PrimaryButton>
        </View>
      </Gradient>
    </View>
  );
};

export default CreateNewEvent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formFeildContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  formButtonContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  formSmallFieldsContainer: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButtonContainer: {
    width: '83%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallHeading: {
    color: Colors.blue1,
    fontSize: fontScale * 15,
    fontWeight: '500',
  },
  createEventButtonStyle: {
    backgroundColor: Colors.blue1,
  },
  createEventButtonContainer: {
    width: '88%',
    alignSelf: 'center',
  },
});
