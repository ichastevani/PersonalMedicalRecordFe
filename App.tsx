// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from './src/components/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WelcomeScreen />
    </SafeAreaView>
  );
};

export default App;
