import * as React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { SharedElement } from 'react-native-motion'
import { Rating } from 'react-native-elements';
import { VenueVM } from 'models/VenueVM';


export const VenueHeader = (props: VenueVM) => {
    return (
        <View>
            <SharedElement sourceId="venue-image">
                <Image source={{ uri: props.imageUrl }} style={styles.photo} />
            </SharedElement>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <Rating
                    showRating={false}
                    type="star"
                    fractions={1}
                    startingValue={3.6}
                    readonly
                    imageSize={15}
                    style={{ paddingVertical: 10 }}
                    onFinishRating={() => {}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:10,
        marginRight:10,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 32,
        color: '#000',
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 200,
    },
});
