import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

// import { Container } from './styles';

const { Navigator, Screen } = createBottomTabNavigator()

function studyTabs() {
  return (
    <Navigator
      // estilização das abas
      tabBarOptions={{
        style: {
          // sombras, equivalente a box shadow
          elevation: 0,
          shadowOpacity: 0,
          // Identificando um height diferente para iOS
          height: Platform.OS === 'ios' ? 84 : 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
        // garante que a Bottom Tab Bar não dê nenhum espaçamento da "área de segurança" na parte de baixo do iPhone
        safeAreaInsets: {
          bottom: 0
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
            )
          }
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default studyTabs;