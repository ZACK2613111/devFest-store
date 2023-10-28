import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Cart from '../views/Cart';
import Profile from '../views/Profile';
import { Colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Make sure to install this package

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.blue,
        labelStyle: {
          fontSize: 10, // Set the font size to 10px
          fontFamily: 'Product Sans', // Use the 'Product Sans' font
          fontWeight: '400',
          lineHeight: 12,
          letterSpacing: 0,
          textAlign: 'center',
        },
        style: {
          backgroundColor: Colors.black,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
