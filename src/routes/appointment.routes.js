import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();

export default function ApoointmentRoutes({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SelectProvider">
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Select a provider',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Select a schedule',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Appointment Confirm',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectDateTime');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

ApoointmentRoutes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
