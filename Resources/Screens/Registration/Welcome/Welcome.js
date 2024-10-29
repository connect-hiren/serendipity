import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../Constants/Colors';
import {PrimaryButton} from '../../../Exporter/index';
import IconForCheckBox from 'react-native-vector-icons/MaterialIcons';
import {template} from '@babel/core';
import {english, hindi} from '../../../Exporter/index';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';
import {ImageAndIconResources} from '../../../Exporter/ImageExporter';

const Welcome = () => {
  const [checkBoxIcon, setCheckBoxIcon] = useState('check-box-outline-blank');
  const [selectedLanguage, setSelectedLanguage] = useState(english);

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="cover"
      source={ImageAndIconResources.WelcomeJPG}>
      <View style={styles.container}>
        <View style={styles.infoIcon}>
          <Icon
            style={{marginLeft: 16}}
            name={'information-circle-outline'}
            color={Colors.white}
            size={fontScale * 30}
          />
        </View>
        <View style={styles.midContiner}>
          <Image source={ImageAndIconResources.logo} />
          <Image
            style={{top: 15}}
            source={ImageAndIconResources.serendipityTextImage}
          />
          {/* <View style={styles.textMidContainer}></View> */}
          {/* //TODO make a black box behind the mid container text */}
          <Text
            style={[
              {fontSize: fontScale * 18},
              {
                width: '60%',
                textAlign: 'center',
                // position: 'relative',
                // top: -80,
                zIndex: +1,
              },
            ]}>
            {selectedLanguage.chancesEncounters}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={styles.primaryButton}
            fsize={20}
            containerStyles={styles.primaryButtonContainer}>
            {selectedLanguage.createAccount}
          </PrimaryButton>
          <PrimaryButton
            style={styles.primaryButton2}
            fsize={20}
            containerStyles={styles.primaryButtonContainer2}>
            {selectedLanguage.Login}
          </PrimaryButton>
          <View style={styles.bottomText}>
            <IconForCheckBox
              onPress={() =>
                setCheckBoxIcon(
                  checkBoxIcon === 'check-box-outline-blank'
                    ? 'check-box'
                    : 'check-box-outline-blank',
                )
              }
              name={checkBoxIcon}
              color={Colors.white}
              size={fontScale * 24}
            />
            <Text style={styles.signUpWithEmailText}>
              {selectedLanguage.checkBoxForWelcome.pleaseCheck}
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {selectedLanguage.checkBoxForWelcome.TOS}
              </Text>{' '}
              {selectedLanguage.checkBoxForWelcome.Mobile}{' '}
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {selectedLanguage.checkBoxForWelcome.PP}
              </Text>{' '}
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {selectedLanguage.checkBoxForWelcome.CP}
              </Text>
              {/* //TODO:Navigate To Signup Screen */}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  infoIcon: {
    alignSelf: 'flex-end',
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  midContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  primaryButton: {
    backgroundColor: Colors.blue3,
  },
  primaryButton2: {
    backgroundColor: Colors.transparent,
  },
  primaryButtonContainer: {
    width: '88%',
    marginTop: width / 10,
  },
  primaryButtonContainer2: {
    width: '88%',
    borderColor: Colors.white,
    borderWidth: 1,
  },
  signUpWithEmailText: {
    width: '81%',
    color: Colors.white,
    fontSize: fontScale * 12,
    marginRight: 15,
  },
  bottomText: {
    marginLeft: 15,
    paddingVertical: 15,
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textMidContainer: {
    backgroundColor: 'red',
    alignSelf: 'center',
    width: '90%',
    height: 50,
  },
});
