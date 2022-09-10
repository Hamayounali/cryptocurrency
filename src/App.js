import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Cryptocurrencies from './components/cryptocurrencies';
import CryptoDetails from './components/cryptoDetails';
import Exchanges from './components/Exchanges';
import News from './components/News';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container-fluid">
      <div>
        <Navbar />
        <section className="section">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="crypto/:coinId" element={<CryptoDetails />} />
            <Route path="news" element={<News />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
