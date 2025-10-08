/**
 * @format
 */

import App from './App';
import {Navigation} from 'react-native-navigation';
import Modal from './Modal';

console.log('index.js loaded');

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('modal', () => Modal);
Navigation.events().registerAppLaunchedListener(() => {
  console.log('app loaded');
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
