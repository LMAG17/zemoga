import React from 'react'; // eslint-disable-line import/no-unresolved
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { persistor, store } from './src/redux/store';
import SplashScreen from './src/Screens/SplashScreen';
import { PersistGate } from "redux-persist/lib/integration/react"
import NetInfo from "@react-native-community/netinfo";
import { Text, View } from 'react-native';


export default function App() {

  const [appReady, setAppReady] = React.useState(false);

  const [isConnected, setIsConnected] = React.useState(true)

  NetInfo.addEventListener(state => {
    if (isConnected != state.isConnected) setIsConnected(state.isConnected);
  })

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {
          !isConnected &&
          <Text style={{ backgroundColor: 'red', color: '#fff', textAlign: 'center' }}>Offline mode ON</Text>
        }
        <SafeAreaProvider>
          {appReady ? <AppNavigator /> : <SplashScreen setAppReady={setAppReady} />}
        </SafeAreaProvider>
      </PersistGate>
    </Provider >
  );
}