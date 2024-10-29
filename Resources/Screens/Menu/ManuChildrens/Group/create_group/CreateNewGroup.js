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

const CreateNewGroup = () => {
  const [checked, setChecked] = useState(null);
  const [onOff, setOnOff] = useState(null);
  console.log('checked = ', checked);
  return (
    <View style={styles.container}>
      <Gradient gradientForEvent={true}>
        <NavigationHeader
          screenName={'New Group'}
          headerForGroupOrEvent={true}
          iconLeftName="close"
          TextForEventHeader={'Add group cover picture'}
        />
        <View style={styles.formFeildContainer}>
          <TextFeild
            style={{height: height / 18}}
            textInputStyle={{fontSize: fontScale * 20, fontWeight: '500'}}
            without={true}
            placeholder={'Group Name'}
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
            placeholder={'Group description'}
            iconSize={fontScale * 25}
          />
          <View style={styles.radioButtonContainer}>
            <Text style={styles.smallHeading}>Group type</Text>
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
              {marginVertical: (height / width) * 4},
            ]}>
            <Text style={styles.smallHeading}>Group type</Text>
            <RadioButton
              isWithText={true}
              text={'On      '}
              status={onOff === 'On' ? 'checked' : 'unchecked'}
              onPress={() => setOnOff('On')}
            />
            <RadioButton
              isWithText={true}
              text={'Off       '}
              status={onOff === 'Off' ? 'checked' : 'unchecked'}
              onPress={() => setOnOff('Off')}
            />
          </View>
          <View
            style={[
              styles.radioButtonContainer,
              {justifyContent: 'flex-start'},
            ]}>
            <Text style={styles.smallHeading}>Add members</Text>
            <DashedCircle
              style={{
                marginBottom: 0,
                backgroundColor: Colors.blue1,
                width: width / 6,
                height: width / 6,
                marginHorizontal: (height / width) * 10,
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
            Create Group
          </PrimaryButton>
        </View>
      </Gradient>
    </View>
  );
};

export default CreateNewGroup;
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
