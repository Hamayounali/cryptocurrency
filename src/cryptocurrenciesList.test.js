/* eslint-disable no-unused-vars */
/* global describe, it */
import { render } from '@testing-library/react';
import { useGetCryptosQuery } from './services/cryptoApi';

describe('Cryptocurrencies List Component', () => {
  it('Sould render cryptocurrencies name when api respons', async () => {
    render(<useGetCryptosQuery />);
  });
});
