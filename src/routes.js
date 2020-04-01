import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import SelectProvider from '~/pages/New/SelectProvider'; /*
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';
*/
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      {signed === false ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: true,
                title: 'SignUp',
                headerStyle: {backgroundColor: '#7159c1'},
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
            tabBarVisible: false,
          }}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Agendemantos',
              tabBarIcon: ({color}) => (
                <Icon name="event" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="New"
            component={SelectProvider}
            options={{
              tabBarLabel: 'Agendar',
              tabBarIcon: ({color}) => (
                <Icon name="add-circle-outline" color={color} size={20} />
              ),
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu perfil',
              tabBarIcon: ({color}) => (
                <Icon name="person" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
