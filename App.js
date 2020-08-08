import 'react-native-gesture-handler'
import React, { Component } from 'react'
import CityWeathersView from './src/Views/CityWeathersView'
import store from './src/Store'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CityView from './src/Views/CityView'

const Stack = createStackNavigator()

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ isReady: true })
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />
        }

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="WeathersView"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen
                            name="WeathersView"
                            component={CityWeathersView}
                        ></Stack.Screen>
                        <Stack.Screen name="CityView" component={CityView}></Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}
