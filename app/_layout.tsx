import { nowPLayingAction } from '@/core/actions/movies/now-playing.actions';
import React from 'react';
import { View, Text } from 'react-native';

const RootLayout = () => {

  nowPLayingAction()
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default RootLayout;