import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertAp = () =>{
  const [categories, setCategories] = useState([ 'One Punch']);
  
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    //categories.push(newCategory)
    //  setCategories(cat => [...cat, 'hola  m nudo']);
    console.log(newCategory);  
    setCategories([...categories, newCategory]);
  }
  return (
    <>
    {/*titulo*/}
      <h1>GifExpertApp</h1>
    {/*input*/}
    {/*<AddCategory setCategories={setCategories}/> */}
    <AddCategory onNewCategory={event=>onAddCategory(event)}/>    
    {/*Listado de gif*/}
    {/*      <button onClick={onAddCategory}>Agregar</button>*/}
    { 
      categories.map( categories =>
          <GifGrid key={categories} categories={categories}/>
      )
    }
    {/*gif item*/}
    </>
  )
}