import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { COLOR } from 'react-native-material-ui';

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});



export default Container;