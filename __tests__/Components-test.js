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
import { persistor, store } from '../src/redux/store';
import ListPost from '../src/components/ListPost';

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
                <AppNavigator>
                    {children}
                </AppNavigator>
            </PersistGate>
        </Provider>
    )
}

it("ListPost ", () => {
    renderer.create(
        <DefaultProvider>
            <ListPost />
        </DefaultProvider>
    );
});
