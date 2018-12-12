import * as React from 'react'
import { NavigationProps } from 'code/baseComponents'
import QRCodeScanner from 'react-native-qrcode-scanner';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { NavigationProp } from 'react-navigation';

export interface ScanScreenProps extends NavigationProps{

}

export default class ScanScreen extends React.Component<ScanScreenProps> {
  onSuccess(e: any) {
    this.props.navigation.navigate("Venues");
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});