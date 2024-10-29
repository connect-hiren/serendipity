import {View, Text, StyleSheet, Pressable} from 'react-native';
const PrimaryButton = ({
  children,
  onPress,
  style,
  allDone,
  fsize,
  containerStyles,
}) => {
  return (
    <View style={[styles.outerContainer, containerStyles]}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.innerContainer, styles.pressed, style]
            : [styles.innerContainer, style]
        }
        onPress={onPress}
        disabled={allDone}>
        <Text style={[styles.buttonText, {fontSize: fsize}]}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 49,
    overflow: 'hidden',
  },
  innerContainer: {
    padding: 17.5,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
});
