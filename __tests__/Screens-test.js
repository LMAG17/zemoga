/**
 * @format
 */

import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { PersistGate } from 'redux-persist/integration/react';
import App from '../App';
import { persistor, store } from '../src/redux/store';
import DetailScreen from '../src/Screens/DetailScreen';
import FavoritesScreen from '../src/Screens/FavoritesScreen';
import HomeScreen from '../src/Screens/HomeScreen';
import SplashScreen from '../src/Screens/SplashScreen';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

const DefaultProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

it("renders App correctly ", () => {
  renderer.create(
    <DefaultProvider>
      <App />
    </DefaultProvider>
  );
});

it("renders Home correctly ", () => {
  renderer.create(
    <DefaultProvider>
      <HomeScreen />
    </DefaultProvider>
  );
});

it("renders Detail correctly ", () => {
  renderer.create(
    <DefaultProvider>
      <DetailScreen />
    </DefaultProvider>
  );
});

it("renders Favorites correctly ", () => {
  renderer.create(
    <DefaultProvider>
      <FavoritesScreen />
    </DefaultProvider>
  );
});

it("renders Splash correctly ", () => {
  renderer.create(
    <DefaultProvider>
      <SplashScreen />
    </DefaultProvider>
  );
});


