import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'
import { setLocalNotification } from './utils/helpers'

import reducer from './reducers'

import AddCard from './screens/AddCard'
import AddDeck from './screens/AddDeck'
import Decks from './screens/Decks'
import DeckView from './screens/DeckView'
import Quiz from './screens/Quiz'

import Constants from 'expo-constants'

function FlashcardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialTopTabNavigator()

const TabNav = () => (
  <Tabs.Navigator
    initialRouteName="Decks"
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        switch (route.name) {
          case "Decks": {
            return <Ionicons name="ios-bookmarks" size={size} color={color}/>
          }
          case "Add Deck": {
            return <FontAwesome name="plus-square" size={size} color={color}/>
          }
          default:
            return ""
        }
      }
    })}
    tabBarOptions={{
      header: null,
      activeTintColor: Platform.OS === "ios" ? purple : white,
      showIcon: Platform.OS === "ios",
      style: {
        height: Platform.OS === "ios" ? 80 : 50,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }}
  >
    <Tabs.Screen name="Decks" component={Decks}/>
    <Tabs.Screen name="Add Deck" component={AddDeck}/>
  </Tabs.Navigator>
);



const Stack = createStackNavigator();
const MainNav = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="Home"
      component={TabNav}
      options={{headerShown: false}}/>
    <Stack.Screen
      name="DeckView"
      component={DeckView}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
    }}/>
    <Stack.Screen
      name="Quiz"
      component={Quiz}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
    }}/>
    <Stack.Screen
      name="AddCard"
      component={AddCard}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
    }}/>
  </Stack.Navigator>
);

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <FlashcardsStatusBar style="auto" />
            <MainNav/>
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}