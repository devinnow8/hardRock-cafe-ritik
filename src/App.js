
import React, { useState } from 'react';
import './App.css';
import Main from './main/components/header/navbar/Main';
import CardItmes from './main/components/body/Cards/CardItmes';
import Description from './main/components/footer/Description';
import Cart from "./main/components/body/Cart"
function App() {
  const [cart, setCart]= useState(false)

  const HandleCartClick = () =>{
    setCart(!cart)
  }
  return (
    <>
<Main HandleCartClick={HandleCartClick}/>
<CardItmes/>
{cart && 
  <div className='backdrop'>
<div className='cart_container'>
<Cart/>
 </div>
 </div> 
}
<Description/>
    </>
  );
}

export default App;
