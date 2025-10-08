/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

function App(): React.JSX.Element {

  console.log('App');
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hello, this is a sample React Native application!</Text>

        <Button onPress={showModal} title='show modal' />


      </ScrollView>
    </SafeAreaView>
  );
}

function showModal() {
  console.log('show modal');
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'modal',
            options: {
              topBar: {
                title: {
                  text: 'Modal',
                },
              },
            },
          },
        },
      ],
    },
  });
}

export default App;
