import * as React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { Card, COLOR } from 'react-native-material-ui';
import { Rating } from 'react-native-elements';
import { SharedElement } from 'react-native-motion';
import { VenueVM } from 'models/VenueVM'

export interface VenueListItemProps {
    item : VenueVM
    onPress: (item: VenueVM) => void
}

export const VenueListItem = (props: VenueListItemProps) => {
    return (
        <TouchableHighlight onPress={() => props.onPress(props.item)} underlayColor="white">

            <View style={[styles.itemContainer]}>
                <SharedElement id="venue-image">
                    <Image source={{ uri: props.item.imageUrl }} style={styles.photo} />
                </SharedElement>
                <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{props.item.name}</Text>
                    <Rating
                        showRating={false}
                        type="star"
                        fractions={1}
                        startingValue={3.6}
                        readonly
                        imageSize={10}
                        onFinishRating={() => {}}
                    />
                </View>
            </View>
            {/* <ImageBackground source={{ uri: props.item.imageUrl }} style={{width: '100%', height: '100%'}}>
                <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Centered text</Text>
                </View>
            </ImageBackground> */}
            {/* <View style={[styles.itemContainer]}>
                <SharedElement id="venue-image">
                    <Image source={{ uri: props.item.imageUrl }} style={styles.photo} />
                </SharedElement>
                <Text style={styles.itemName}>{props.item.name}</Text>
                    
            </View> */}
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      height: 200,
      borderWidth: 0.5,
      borderColor: '#778899'
    },
    textContainer: {
        //position: 'absolute', 
        width: '100%',
        backgroundColor: '#fff', 
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10
    },
    itemName: {
      fontSize: 16,
      color: '#000',
      fontWeight: '500',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
    photo: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
  });