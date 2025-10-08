import React from 'react';
import {Button, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Animated, {FadeOut} from 'react-native-reanimated';

type ModalProps = {
  componentId: string;
};

export default function Modal(props: ModalProps): React.JSX.Element {
  console.log('Modal');
  return (
    <>
      <Text>This is a modal!</Text>
      <Animated.ScrollView exiting={FadeOut} style={{height: 300}}>
        {Array.from({length: 50}, (_, i) => (
          <Text key={i}>Item {i + 1}</Text>
        ))}
      </Animated.ScrollView>

      <Button
        title="Close"
        onPress={() => Navigation.dismissModal(props.componentId)}
      />
    </>
  );
}
