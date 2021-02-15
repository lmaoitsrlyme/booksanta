import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { appTabNavigator } from './appTabNavigator'
import customSidebarMenu  from './customSidebarMenu';

export const appDrawerNavigator = createDrawerNavigator({

    Home : {
        screen : appTabNavigator
        },
      },
      {
        contentComponent:customSideBarMenu
      },
      {
        initialRouteName : 'Home'
      })

