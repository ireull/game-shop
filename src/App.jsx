import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { GamesPage } from './pages/GamesPage/GamesPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/games' element={<GamesPage />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
