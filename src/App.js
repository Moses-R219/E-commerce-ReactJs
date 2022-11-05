<<<<<<< HEAD

import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/signIn/sign-in.component';
const Shop=()=>
{
  return(
    <h2>Shop</h2>
  );
};
const  App=()=> {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
     );
};
=======
import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/homepage.component';

import Navigation from './routes/navigation/navigation.component';
import SignIN from './routes/sign-in/sign-in.component';

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
        <Route path='sign-in' element={<SignIN/>} />
      </Route>
    </Routes>

  )
}
>>>>>>> 95c4e9b18f4b2a467654cc52220cd01bb2f21dbe

export default App;
