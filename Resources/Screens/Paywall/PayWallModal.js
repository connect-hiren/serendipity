import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
// import {Gradient} from '../../Exporter';
import {height, width} from '../../Utils/ScreenDimensions/DimensionCalculator';

const PayWallModal = () => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      // onRequestClose={() => {
      // }}
    >
      <View style={styles.modalView}>
        {/* <Gradient></Gradient> */}
      </View>
    </Modal>
  );
};

export default PayWallModal;
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
