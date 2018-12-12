import * as React from 'react';
import { } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';

interface NavState {
    active? : string
}

export interface NavTab {
    key: string
    icon: string
    label: string
    onPress: Function
    active: boolean
}

export interface NavProps {
    hidden: boolean
    tabs:  NavTab[]
}

export class BottomNavBar extends React.Component<NavProps, NavState> {

    constructor(props: NavProps) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        var activeAction = this.props.tabs.filter(a => a.active)[0] ||  this.props.tabs[0];
        this.setState({ active: activeAction.key });
    }

    render() {
        return (
            <BottomNavigation active={this.state.active} hidden={this.props.hidden} >
                {this.props.tabs.map(a => this.renderAction(a))}                
            </BottomNavigation>
        )
    }

    private renderAction(action: NavTab) {
        let onPress = () => {
            this.setState({ active: action.key });
            action.onPress();
        } 
        return (
            <BottomNavigation.Action
                key={action.key}
                icon={action.icon}
                label={action.label}
                active={action.active}
                onPress={onPress}
            />
        )
    }
}