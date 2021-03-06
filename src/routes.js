import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import ApoointmentRoutes from '~/routes/appointment.routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router(isLoggedIn = false) {
  isLoggedIn = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          initialRouteName="Dashboard"
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: '#8d41a8',
              height: 70,
              paddingBottom: 10,
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Appointments',
              tabBarIcon: ({ color }) => (
                <Icon name="event" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="New"
            component={ApoointmentRoutes}
            options={{
              unmountOnBlur: true,
              tabBarLabel: 'Appointment',
              tabBarIcon: ({ color }) => (
                <Icon name="add-circle-outline" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'My profile',
              tabBarIcon: ({ color }) => (
                <Icon name="person" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            options={{ headerShown: false }}
            component={SignIn}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUp}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

Router.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Router;
