import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './screens/HomePage/HomePage';
import Seller_CategoryAdd from './screens/AdminPages/AddPages/Seller_CategoryAdd';
import Seller_CategoryAll from './screens/AdminPages/AllPages/Seller_CategoryAll';



const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/sellerCategoryAdd' element={<Seller_CategoryAdd />}/>
      <Route path='/sellerCategoryAll' element={<Seller_CategoryAll />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
