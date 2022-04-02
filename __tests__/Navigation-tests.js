/**
 * @format
 */

import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from '../src/navigation/AppNavigator';
import BottomTabsNavigator from '../src/navigation/BottomTabsNavigator';
import { persistor, store } from '../src/redux/store';

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

it("renders AppNavigator correctly ", () => {
    renderer.create(
        <DefaultProvider>
            <AppNavigator />
        </DefaultProvider>
    );
});

it("renders BottomTabsNavigator correctly ", () => {
    renderer.create(
        <DefaultProvider>
            <BottomTabsNavigator />
        </DefaultProvider>
    );
});
