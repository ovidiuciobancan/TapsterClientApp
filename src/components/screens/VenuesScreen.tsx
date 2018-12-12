import * as React from 'react'
import { Text } from 'react-native'
import services from 'services/serviceFactory'
import { VenueVM } from 'models/VenueVM'
import { VenuesList } from 'views/venues/VenuesList'
import { NavigationProps } from 'code/baseComponents'
import Layout from 'components/Layout'
import { ToolbarProps } from 'react-native-material-ui'
import SplashScreen from 'react-native-splash-screen'

interface VenuesState { 
    venues: VenueVM[]
    isReady: boolean
}

export interface VenuesProps extends NavigationProps {
    loadingMessage: string
 }

export default class VenuesScreen extends React.Component<VenuesProps, VenuesState> {

    constructor(props: VenuesProps) {
       super(props); 

       this.state = {
           venues : [],
           isReady: false
       } as VenuesState

    }

    componentWillMount() {
        SplashScreen.show();
        services.venues.getVenues()
            .then(data => this.updateVenues(data));
    }

    componentDidMount() {
        
    }

    render() {
        if(!this.state.isReady) return <Text>{this.props.loadingMessage}</Text>

        return (
            <Layout {...this.props} toolbarProps={this.toolbarProps}>
                <VenuesList 
                    data={this.state.venues} 
                    onPress={this.onVenueItemPress}
                />
            </Layout>
        )
    }

    private toolbarProps : ToolbarProps = {
        centerElement: "Search venues",
        searchable: {
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: this.onSearch
        }
    }

    private onSearch(text: string) {

    }

    private updateVenues(data: VenueVM[]) {
        this.setState({
            ...this.state, 
            ...{ 
                venues: data,
                isReady: true
            }})

        setTimeout(() => SplashScreen.hide(), 2000);
    }

    private onVenueItemPress = (item: VenueVM) => {
        this.props.navigation.navigate('Venue', { id: item.id });
    }
    
}
