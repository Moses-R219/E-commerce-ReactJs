
import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/homepage.component';
import Navigation from './../src/routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component'
import Orders from './routes/orders/orders';
const App=()=>
{
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/> 
        <Route path='shop' element={<Shop/>} />
        <Route path='auth' element={<Authentication/>} />
        <Route path='orders' element={<Orders/>} />
      </Route>
    </Routes>

  )
  }
export default App;
