import * as React from 'react'
import { StyleSheet } from 'react-native'
import Spinner, { SpinnerProps } from 'react-native-loading-spinner-overlay'

export default class App extends React.Component<SpinnerProps> {
    state = {
      spinner: false
    };
  
    componentDidMount() {
      setInterval(() => {
        this.setState({
          spinner: !this.state.spinner
        });
      }, 3000);
    }
  
    render() {
      return (
          <Spinner
            visible={true}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
      );
    }
  }

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    }
})