import * as React from 'react'
import { View } from 'react-native'
import { Toolbar, ToolbarProps, ThemeContext, getTheme, Icon, COLOR } from 'react-native-material-ui'
import uiTheme from 'styles/uiTheme'
import Container from 'widgets/Container'
import { NavigationProps } from 'code/baseComponents'
import { FloatingAction } from 'react-native-floating-action'
import { SharedElementRenderer } from 'react-native-motion'

interface LayoutState {
}

export interface LayoutProps extends NavigationProps { 
    toolbarProps? : ToolbarProps,
    //actionButtonProps: ActionButtonProps 
}

class Layout extends React.Component<LayoutProps, LayoutState>
{
    render() {
        let toolbarProps = this.props.toolbarProps || {} 

        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <SharedElementRenderer>
                    <Container>
                        <Toolbar {...this.getToolbarProps(this.props.toolbarProps)} />
                        {this.props.children}
                            <FloatingAction 
                                color={COLOR.blue500} 
                                floatingIcon={<Icon iconSet='MaterialCommunityIcons' color={COLOR.white} name='qrcode-scan'/>}
                                onPressMain={() => this.props.navigation.navigate("Scan")} />
                    </Container>
                </SharedElementRenderer>
            </ThemeContext.Provider>
        );
    }

    
    private getToolbarProps = (props?: ToolbarProps) : ToolbarProps => {
        let defaultProps = {
            leftElement: "arrow-back",
            onLeftElementPress: this.props.navigation.goBack
        }

        return { ...defaultProps, ...props }
    }
}

export default Layout