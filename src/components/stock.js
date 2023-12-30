import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { fetchStock } from '../redux/features/stock/stockSlice';

const Stock = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [statement, setStatement] = useState('income-statement');
  const { keys, data } = useSelector((state) => state.stock);
  const { loading } = useSelector((state) => state.stock);

  if (loading === true) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1 className="symbol">{id}</h1>
      <select onChange={(e) => setStatement(e.target.value)}>
        <option value="income-statement">income-statement</option>
        <option value="balance-sheet-statement">balance-sheet-statement</option>
        <option value="cash-flow-statement">cash-flow-statement</option>
      </select>
      <button type="button" className="get" onClick={() => dispatch(fetchStock(`${statement}/${id}`))}>Get Data</button>
      <h2 className="current-statement">{statement}</h2>
      <p id="allNumbers">All numbers in USD</p>
      <Link to="/" id="back"><IoIosArrowBack /></Link>
      <div className="incomeStatement">
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
    </div>
  );
};

export default Stock;
