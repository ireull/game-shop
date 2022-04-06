import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GamePage } from './pages/GamePage/GamePage';
import { GamesPage } from './pages/GamesPage/GamesPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/game/:title' element={<GamePage />} />
          <Route path='/games' element={<GamesPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
