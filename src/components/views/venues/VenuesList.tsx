import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

import { VenueVM } from 'models/VenueVM'
import { VenueListItem } from 'views/venues/VenueListItem'
import GridView from 'react-native-super-grid';

export interface VenuesListProps {
    data : VenueVM[]
    onPress: (item: VenueVM) => void
}

export const VenuesList = (props: VenuesListProps) => {
    if(!props.data.length) return <Text>No Venues</Text>

    return (
        <GridView 
            itemDimension={130}
            items={props.data} 
            style={styles.gridView}
            renderItem={(item: VenueVM) => renderVenueListItem(item, props.onPress)} 
        />
    );
}

const renderVenueListItem = (item: VenueVM, onPress: (item: VenueVM) => void) => {
    return (<VenueListItem item={item} onPress={onPress} />)
}

const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    }
})