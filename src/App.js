
import './App.css';

import CategoryItems from './components/category/category.component';



function App() {
  const categories=[
    {
      id:1,
      title:'Hat',
      imageUrl:'https://i.ibb.co/cvpntL1/hats.png'
    }, 
    {
      id:2,
      title:'Jacket',
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id:3,
      title:'Men',
      imageUrl:'https://i.ibb.co/R70vBrQ/men.png'
    },
    {
      id:4,
      title:'Women',
      imageUrl:'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id:5,
      title:'Sneaker',
      imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
  ];
  return (

      <CategoryItems categories={categories}/>

  );
}

export default App;
