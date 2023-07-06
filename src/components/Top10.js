import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import amzn from '../assets/amzn.png';
import aapl from '../assets/apple.webp';
import msft from '../assets/msft.png';
import google from '../assets/google.png';
import TSLA from '../assets/tsla.png';
import NVDA from '../assets/nvda.png';
import UNH from '../assets/UnitedHealth-Group-Logo-1977.png';
import META from '../assets/meta.png';
import BRK from '../assets/brk.png';
import Visa from '../assets/visa.png';
import { getView, makeView } from '../redux/features/stock/stockSlice';

const Top10 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getView());
  }, []);

  const { Views } = useSelector((state) => state.stock);
  if (Views.length < 1) {
    return (
      <h1 className="loading">Loading ...</h1>
    );
  }
  return (
    <div>
      <h1 className="title">Top10</h1>
      <div className="links">
        <Link to="/AAPL" className="stock" onClick={() => dispatch(makeView('AAPL'))}>
          <p className="views">
            {Views[0].likes}
            views
          </p>
          <img src={aapl} alt="apple" className="stockLogo" />
        </Link>
        <Link to="/MSFT" className="stock" onClick={() => dispatch(makeView('MSFT'))}>
          <p className="views">
            {Views[1].likes}
            views
          </p>
          <img src={msft} alt="Microsoft" className="stockLogo" />
        </Link>
        <Link to="/GOOG" className="stock" onClick={() => dispatch(makeView('GOOG'))}>
          <p className="views">
            {Views[7].likes}
            views
          </p>
          <img src={google} alt="Google" className="stockLogo" />
        </Link>
        <Link to="/AMZN" className="stock" onClick={() => dispatch(makeView('AMZN'))}>
          <p className="views">
            {Views[8].likes}
            views
          </p>
          <img src={amzn} alt="Amazon" className="stockLogo" />
        </Link>
        <Link to="/META" className="stock" onClick={() => dispatch(makeView('META'))}>
          <p className="views">
            {Views[3].likes}
            views
          </p>
          <img src={META} alt="Meta" className="stockLogo" />
        </Link>
        <Link to="/TSLA" className="stock" onClick={() => dispatch(makeView('TSLA'))}>
          <p className="views">
            {Views[4].likes}
            views
          </p>
          <img src={TSLA} alt="Tsla" className="stockLogo" />
        </Link>
        <Link to="/V" className="stock" onClick={() => dispatch(makeView('V'))}>
          <p className="views">
            {Views[6].likes}
            views
          </p>
          <img src={Visa} alt="Visa" className="stockLogo" />
        </Link>
        <Link to="/NVDA" className="stock" onClick={() => dispatch(makeView('NVDA'))}>
          <p className="views">
            {Views[9].likes}
            views
          </p>
          <img src={NVDA} alt="Nvidia" className="stockLogo" />
        </Link>
        <Link to="/UNH" className="stock" onClick={() => dispatch(makeView('UNH'))}>
          <p className="views">
            {Views[2].likes}
            views
          </p>
          <img src={UNH} alt="UNH" className="stockLogo" />
        </Link>
        <Link to="/BRK.A" className="stock" onClick={() => dispatch(makeView('BRK.A'))}>
          <p className="views">
            {Views[5].likes}
            views
          </p>
          <img src={BRK} alt="Berkshire" className="stockLogo" />
        </Link>
        <Link to="/search" className="search">Or search for a stock</Link>
      </div>
    </div>
  );
};

export default Top10;
