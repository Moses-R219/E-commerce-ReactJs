import CategoryItem from '../category-item/category-item.component';
<<<<<<< HEAD

import './category.styles.scss'
=======
import '../category/category.styles.scss';


>>>>>>> 95c4e9b18f4b2a467654cc52220cd01bb2f21dbe

const CategoryItems=({categories})=>
{
    
    return(
        <div className="categories-container">
        {categories.map((category)=>(
          <CategoryItem key={category.id} category={category}/>
        
          ))} 
      </div>
    )
}

export default CategoryItems;