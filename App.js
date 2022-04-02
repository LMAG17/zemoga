import React from 'react'; // eslint-disable-line import/no-unresolved
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { persistor, store } from './src/redux/store';
import SplashScreen from './src/Screens/SplashScreen';
import { PersistGate } from "redux-persist/lib/integration/react"


export default function App() {

  const [appReady, setAppReady] = React.useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          {appReady ? <AppNavigator /> : <SplashScreen setAppReady={setAppReady} />}
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}