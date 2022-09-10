import millify from 'millify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Cryptocurrencies from './cryptocurrencies';

import { useGetCryptosQuery } from '../services/cryptoApi';

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return 'Loading ...';
  return (
    <div className="c">
      <div className="row crypto-stats">
        <h4>GLOBAL CRYPTO STATS</h4>
        <div className="col-4 col-sm-4">
          <h4>{globalStats.totalCoins}</h4>
          <p> Total Crypto</p>
          <h4>{millify(globalStats.totalExchanges)}</h4>
          <p> Exchanges</p>
        </div>

        <div className="col-4 col-sm-4">
          <h4>{millify(globalStats.totalMarketCap)}</h4>
          <p> Market Cap</p>
          <h4>{millify(globalStats.total24hVolume)}</h4>
          <p> Total 24 Value</p>
        </div>

        <div className="col-4 col-sm-4">
          <h4>{millify(globalStats.totalMarkets)}</h4>
          <p> Total Markets</p>
        </div>

      </div>

      <div className="row top-10">
        <div className="col-6 col-sm-6">
          <h5> TOP 10</h5>
        </div>
        <div className="col-6 col-sm-6 see-more">
          <Link className="see-more" to="/Cryptocurrencies">
            Show more ...
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Link>
        </div>

      </div>
      <Cryptocurrencies simplified />
    </div>
  );
}

export default Homepage;
