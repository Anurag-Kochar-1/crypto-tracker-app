import './App.css';
import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';




function App() {



  return (
    <BrowserRouter>
      <div className='w-full h-screen bg-[#F1F1F1] flex flex-col justify-start items-center'>

        <Header/>



        <Routes>
          <Route path='/' element={<HomePage />} exact/>
          <Route path='/coins/:id' element={<CoinPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
