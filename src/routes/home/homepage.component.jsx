import CategoryItems from "../../components/category/category.component";
import { Outlet } from "react-router-dom";


function Home() {
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
    return(
        <div>
        <CategoryItems categories={categories}/>
        <Outlet/>
        </div>
    );
  }

  export default Home;