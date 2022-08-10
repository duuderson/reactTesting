import { useState } from "react";

export const secA = () => {
  
  const [category, setCategory] = useState(['aaa']);

  const onAddCategory = (newCategory) =>{
    if(category.includes(newCategory)) return;
    setCategory([...category,newCategory])
  }
  return (
     <>
     <h1>test</h1>
     {/*Extra call components*/}
     </>
  )
}
