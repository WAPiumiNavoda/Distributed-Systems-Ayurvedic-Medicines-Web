import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './screens/HomePage/HomePage';
import Seller_CategoryAdd from './screens/AdminPages/AddPages/Seller_CategoryAdd';
import Seller_CategoryAll from './screens/AdminPages/AllPages/Seller_CategoryAll';
import UserLogin from './screens/UserLogin/UserLogin';
import RegisterUser from './screens/RegisterUsers/RegisterUser';


const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/sellerCategoryAdd' element={<Seller_CategoryAdd />}/>
      <Route path='/sellerCategoryAll' element={<Seller_CategoryAll />}/>
       <Route path='/userlogin' element={<UserLogin />}/>
       <Route path='/userregister' element={<RegisterUser />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
