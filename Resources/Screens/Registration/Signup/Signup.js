import React, {useState} from 'react';
import {Colors} from '../../../Constants/Colors';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {Gradient, PrimaryButton, TextFeild} from '../../../Exporter/index';
import Icon from 'react-native-vector-icons/Ionicons';
import IconForCheckBox from 'react-native-vector-icons/MaterialIcons';
import {english, hindi} from '../../../Exporter/index';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';


const Signup = () => {
  const [checkBoxIcon, setCheckBoxIcon] = useState('check-box-outline-blank');
  const [selectedLanguage, setSelectedLanguage] = useState(english);

  return (
    <ScrollView
      style={styles.container}
      persistentScrollbar={false}
      showsVerticalScrollIndicator={false}>
      <Gradient>
        <View style={[styles.screenTitle]}>
          {/* //TODO:align center properly */}
          <Text style={[styles.titleText, {fontSize: fontScale * 22}]}>
            {'     '}
          </Text>
          <Text style={[styles.titleText, {fontSize: fontScale * 22}]}>
            {selectedLanguage.signUP}
          </Text>
          <Text style={[styles.titleText, {fontSize: fontScale * 15}]}>
            {selectedLanguage.next}
          </Text>
        </View>
        <View style={styles.screenLogo}>
          <Pressable style={styles.dashedCircle}>
            <Icon name={'add'} color={Colors.white} size={width / 8} />
          </Pressable>
          <Text style={{fontWeight: 'bold'}}>
            {selectedLanguage.AddYourProfilePicture}
          </Text>
          <Text style={styles.upperText}>{selectedLanguage.makeITEasy}</Text>
        </View>
        <View style={styles.screenForm}>
          <TextFeild
            iconName={'globe-outline'}
            placeholder={selectedLanguage.fname}
            without={true}
          />
          <TextFeild
            placeholder={selectedLanguage.lname}
            without={true}
            style={{marginBottom: 20}}
          />
          <TextFeild
            iconName={'globe-outline'}
            placeholder={selectedLanguage.sCountry}
          />
          <TextFeild
            placeholder={selectedLanguage.sGender}
            iconName={'male-female-outline'}
          />
          <TextFeild
            placeholder={selectedLanguage.sAge}
            iconName={'calendar-outline'}
            keyboardType="number-pad"
          />
          <TextFeild
            placeholder={selectedLanguage.email}
            iconName={'mail-outline'}
            keyboardType="email-address"
          />
          <TextFeild
            placeholder={selectedLanguage.cEamil}
            iconName={'mail-outline'}
            keyboardType="email-address"
          />
          <TextFeild
            secureTextEntry={true}
            placeholder={selectedLanguage.createPasword}
            iconName={'lock-closed-outline'}
          />

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
              {selectedLanguage.checkBoxForSignup.pleaseCheck}
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {selectedLanguage.checkBoxForSignup.TOS},
              </Text>{' '}
              {selectedLanguage.checkBoxForSignup.Mobile}{' '}
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {selectedLanguage.checkBoxForSignup.PP}
              </Text>
              {/* //TODO:Navigate To Signup Screen */}
            </Text>
          </View>

          <PrimaryButton
            style={styles.primaryButton}
            fsize={20}
            containerStyles={styles.primaryButtonContainer}>
            {selectedLanguage.next}
          </PrimaryButton>
          {/* //TODO:Validations //TODO: Send Data to Server */}
        </View>
      </Gradient>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  screenTitle: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  titleText: {
    color: Colors.white,
    textAlign: 'center',
  },
  screenLogo: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  upperText: {
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  screenForm: {
    flex: 3,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.blue1,
  },
  primaryButtonContainer: {
    width: '88%',
    marginTop: width / 15,
    marginBottom: 50,
  },
  forgotPassword: {
    fontSize: fontScale * 12,
    color: Colors.white,
    alignSelf: 'flex-start',
    marginLeft: width / 11,
    marginVertical: width / 22,
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
  dashedCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'white',
    width: width / 5,
    height: width / 5,
    borderRadius: 150 / 2,
    marginBottom: width / 15,
  },
});
