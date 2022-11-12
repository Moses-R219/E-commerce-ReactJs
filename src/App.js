
import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/homepage.component';
import Navigation from './../src/routes/navigation/navigation.component';
import Sign from './../src/routes/sign-in/sign-in.component';
const Shop=()=>
{
  return (
    <h2>Shopping </h2>
  )
};
const App=()=>
{
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/> 
        <Route path='shop' element={<Shop/>} />
        <Route path='sign' element={<Sign/>} />
      </Route>
    </Routes>

  )
  }
export default App;
