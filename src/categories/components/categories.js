import React from 'react';
import Category from './category';

function Categories(props){
  return(
    <div>
      {
        props.categories.map((item)=>{
          <Category key={item.id} {...item} />
        })
      }
    </div>
  )
}

export default Categories;