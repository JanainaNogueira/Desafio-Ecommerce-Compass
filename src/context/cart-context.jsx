/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
 items: [],
 totalPrice: 0,
 itemsQuantity: 0,
 addToCart: ()=>{},
 incrementQuantity: ()=>{},
 decrementQuantity: ()=>{},
 removeFromCart: ()=>{}
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartPrice, setCartPrice] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);
  
  const addToCart = (item)=>{
    const cartItem = cartItems.find((cartItems)=>(cartItems.id === item.id))
    setCartPrice(cartPrice + item.price)
    setCartQuantity(cartQuantity + 1)
    if(cartItem){
        const updatedCart = cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
        cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem // otherwise, return the cart item
        )

        return setCartItems(updatedCart)
    }else{
        return setCartItems((prevItems)=>([prevItems,{...item, quantity: 1}]))
    }
  }

  const incrementQuantity = (itemId)=>{
    const cartItem = cartItems.find((cartItems)=>(cartItems.id === itemId))
    const updatedCart = cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
        cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem // otherwise, return the cart item
        )
    setCartPrice(cartPrice + cartItem.price)
    setCartQuantity(cartQuantity + 1)
    setCartItems(updatedCart)
  }

  const decrementQuantity = (itemId)=>{
    const cartItem = cartItems.find((cartItems)=>(cartItems.id === itemId))
    const updatedCart = cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
        cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem // otherwise, return the cart item
        )
    setCartPrice(cartPrice - cartItem.price)
    setCartQuantity(cartQuantity - 1)
    setCartItems(updatedCart)
  }

  const removeFromCart = (itemId)=>{
    setCartPrice(cartPrice + item.price)
    setCartQuantity(cartQuantity + 1)

    const removingItem = cartItems.find((item)=>(item.id === itemId)) 
    const updatedCart = cartItems.filter((item)=>(item.id != itemId))

    setCartPrice(cartPrice - removingItem.price)
    setCartQuantity(cartQuantity - removingItem.quantity)

    return setCartItems(updatedCart)
  }

  return (<CartContext.Provider value={{cartItems,cartPrice,cartQuantity,addToCart,incrementQuantity,decrementQuantity,removeFromCart}}>{children}</CartContext.Provider>)

};

export default CartContextProvider;
