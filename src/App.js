import { Routes, Route } from 'react-router-dom';
import Top10 from './components/Top10';
import Search from './components/Search';
import Stock from './components/stock';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top10 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
