/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  return (
         <View style={{ flex: 1 }}>
          <RootNavigator />
        </View>
  );
}
export default App;
