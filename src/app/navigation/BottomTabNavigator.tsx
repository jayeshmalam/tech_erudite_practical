import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import EventScreen from '@features/events/screens/EventScreen';
import ProfileScreen from '@features/profile/screens/ProfileScreen';

import SearchIcon from '@assets/icons/search.svg';
import EventIcon from '@assets/icons/calendar.svg';
import FavouriteIcon from '@assets/icons/heart.svg';
import ProfileIcon from '@assets/icons/profile.svg';

import TabIcon from '@components/TabIcon';
import FavouriteScreen from '@features/favourites/screens/FavouriteScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Search"
        component={EventScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              Icon={SearchIcon}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              Icon={EventIcon}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              Icon={FavouriteIcon}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              Icon={ProfileIcon}
              color={color}
              size={45}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;