import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStock } from '../redux/features/stock/stockSlice';

const Search = () => {
  const [statement, setStatement] = useState('income-statement');
  const [ticker, setTicker] = useState('AAPL');
  const dispatch = useDispatch();
  const { keys, data } = useSelector((state) => state.stock);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ticker !== '' && ticker !== 'U' && ticker !== 'E'
      && ticker !== 'P' && ticker !== '"' && ticker !== 'S'
      && ticker !== ';' && ticker !== '[' && ticker !== ']'
    ) {
      dispatch(fetchStock(`${statement}/${ticker}`));
    }
    setTicker('');
  };
  return (
    <div>
      <Link to="/" className="back"><IoIosArrowBack /></Link>
      <h1 id="searchTitle">Search</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className="ticker" placeholder="symbol" value={ticker} onChange={(e) => setTicker((e.target.value).toUpperCase())} />
        <select className="search-select" onChange={(e) => setStatement(e.target.value)}>
          <option value="income-statement">income-statement</option>
          <option value="balance-sheet-statement">balance-sheet-statement</option>
          <option value="cash-flow-statement">cash-flow-statement</option>
        </select>
        <button type="submit" className="submit">Submit</button>
      </form>
      {data.length < 1 ? (<></>) : (
        <div className="incomeStatement" id="searchStatement">
          <div className="breakdown">
            {keys.map((item) => (
              <>
                <div className="item">{item}</div>
              </>
            ))}
          </div>
          <div className="data">
            {data.map((item) => (
              <div className="year" key={item[5]}>
                {item.map((value) => (
                  <div className="item" key={value[5]}>
                    {value}
                  </div>
                ))}

              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Search;
