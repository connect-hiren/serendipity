import React, {useState} from 'react';
import {Colors} from '../../../Constants/Colors';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Gradient,
  PrimaryButton,
  Signup,
  TextFeild,
} from '../../../Exporter/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {english, hindi} from '../../../Exporter/index';
import {
  fontScale,
  height,
  width,
} from '../../../Utils/ScreenDimensions/DimensionCalculator';
import {logo} from '../../../Exporter/ImageExporter';

const Login = () => {
  const {fontScale, width, height} = useWindowDimensions();
  const [selectedLanguage, setSelectedLanguage] = useState(english);
  return (
    // TODO:Keyboard avoiding view
    <View style={styles.container}>
      <Gradient>
        <View style={[styles.screenTitle]}>
          {/* //TODO:align center properly */}
          <Text style={[styles.titleText, {fontSize: fontScale * 22}]}>
            {'      '}
          </Text>
          <Text style={[styles.titleText, {fontSize: fontScale * 22}]}>
            {selectedLanguage.Login}
          </Text>
          <Icon
            style={{marginLeft: 16}}
            name={'information-circle-outline'}
            color={Colors.white}
            size={fontScale * 25}
          />
        </View>
        <View style={styles.screenLogo}>
          <Image source={logo} />
        </View>
        <View style={styles.screenForm}>
          <TextFeild
            iconName={'globe-outline'}
            placeholder={selectedLanguage.Country}
          />
          <TextFeild
            placeholder={selectedLanguage.Mobile}
            iconName={'phone-portrait-outline'}
            keyboardType="Number-pad"
          />
          <TextFeild
            secureTextEntry={true}
            placeholder={selectedLanguage.Password}
            iconName={'lock-closed-outline'}
          />
          <PrimaryButton
            style={styles.PrimaryButton}
            fsize={20}
            containerStyles={styles.PrimaryButtonContainer}>
            {selectedLanguage.Login}
          </PrimaryButton>
          {/* //TODO:Validations //TODO: Send Data to Server */}
          <Text style={styles.forgotPassword}>{selectedLanguage.Forgot}</Text>
        </View>
        {/* <View style={styles.screenButton}></View> */}
        <View style={styles.bottomText}>
          <Text style={styles.Signupwithemail}>
            {selectedLanguage.dontHaveAccount}{' '}
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              {selectedLanguage.signupWithEmail}
            </Text>
            {/* //TODO:Navigate To Signup Screen */}
          </Text>
        </View>
      </Gradient>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
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
  screenForm: {
    flex: 3,
    alignItems: 'center',
  },
  PrimaryButton: {
    backgroundColor: Colors.blue1,
  },
  PrimaryButtonContainer: {
    width: '88%',
    marginTop: width / 10,
  },
  forgotPassword: {
    fontSize: fontScale * 12,
    color: Colors.white,
    alignSelf: 'flex-start',
    marginLeft: width / 11,
    marginVertical: width / 22,
  },
  Signupwithemail: {
    color: Colors.white,
    fontSize: fontScale * 12,
  },
  screenButton: {},
  bottomText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
