import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useGetCryptosQuery } from '../services/cryptoApi';

function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return 'loading ..';

  return (
    <>
      {!simplified && (
        <div className="row searchRow">
          <Link className="back-home" to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <div className="container-fluid allCryptoHead">
            <h3> All Cryptocurrencies</h3>
          </div>

          <input
            type="text"
            className="form-control searchInput"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <div className="row">
        {cryptos?.map((currency) => (
          <div className="col-6 col-sm-6 curriences" key={currency.uuid}>
            <Link className="card-link currencyFontColor" key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <div className="row">
                <div className="container-fluid arrow-right">
                  <span className="arrow-right"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                </div>
                <div className="col-sm-5 image-container">
                  <img className="crypto-image card-image" src={currency.iconUrl} alt="Currencies" />
                </div>

                <div className="col-sm-7 currency-details">
                  <h4>
                    {`${currency.name}`}
                  </h4>

                  <h6>
                    Price :
                    <b>
                      {' '}
                      {millify(currency.price)}
                      {' '}
                    </b>
                  </h6>
                  <h6>
                    Market:
                    <b>
                      {' '}
                      {millify(currency.marketCap)}
                      {' '}
                    </b>
                  </h6>
                  <h6>
                    Change :
                    <b>
                      {' '}
                      {currency.change}
                      {' '}
                      %
                      {' '}
                    </b>

                  </h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cryptocurrencies;
