
import React, { useState } from 'react';
import './App.css';
import Main from './main/components/header/navbar/Main';
import CardItmes from './main/components/body/Cards/CardItmes';
import Description from './main/components/footer/Description';
import Cart from "./main/components/body/Cart"
function App() {
  const [cart, setCart]= useState(false)
  const [cartProducts, setCartProducts]= useState([])

  const HandleCartClick = () =>{
    setCart(!cart)
  }

  console.log(cartProducts,'cartProductscartProductscartProducts');
  return (
    <>
<Main HandleCartClick={HandleCartClick}/>
<CardItmes setCartProducts={setCartProducts} cartProducts={cartProducts}/>
{cart && 
  <div className='backdrop'>
<div className='cart_container'>
<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} cart={cart} onCancelClick={HandleCartClick}/>
 </div>
 </div> 
}
<Description/>
    </>
  );
}

export default App;
