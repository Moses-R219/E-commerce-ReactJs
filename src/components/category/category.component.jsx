import CategoryItem from '../category-item/category-item.component';
import './category.styles.scss'


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