import * as React from 'react';
import { View } from 'react-native';

import { VenueVM } from 'models/VenueVM';
import services from 'services/serviceFactory';
import Layout from 'components/Layout';
import { NavigationProps } from 'code/baseComponents'
import { VenueHeader } from 'views/venues/VenueHeader';


interface VenueScreenState {
    venue: VenueVM
    isReady: boolean
}

export interface VenueScreenProps extends NavigationProps {

}

export class VenueScreen extends React.Component<VenueScreenProps, VenueScreenState> {
    
    constructor(props: VenueScreenProps) {
        super(props);

        this.state = {
            venue: {} as VenueVM,
            isReady: false
        }
    }

    componentWillMount(){ 
        let venueId = this.props.navigation.getParam("id");
        services.venues.getVenue(venueId)
            .then((data) => this.updateVenue(data))
    }

    render() {
        if(!this.state.isReady) return null;

        return(
            <Layout {...this.props}> 
                <VenueHeader {...this.state.venue} />
            </Layout>
        );
    }

    private updateVenue(data: VenueVM) {
        this.setState({
            venue: data,
            isReady: true
        })
    }
}

