/* eslint-disable no-unused-expressions */
/* global describe, test, expect */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import Currency from './components/cryptocurrencies';
import Homepage from './components/homepage';
import Cryptodetails from './components/cryptoDetails';

describe('Cryptocurrencies', () => {
  test('should match currency snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Currency />
      </Provider>,
    );
    expect(tree).toMatchSnapshot;
  });

  test('should match homepage snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot;
  });

  test('should match cryptodetails snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Cryptodetails />
      </Provider>,
    );
    expect(tree).toMatchSnapshot;
  });
});
