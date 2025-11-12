'use client'

import { useEffect, useState } from "react";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import { ShoppingCart } from 'lucide-react';
import { useCart } from "../contexts/CartContext";

type CartItem  = {
    id: string
    productid: number,
    name: string,
    slug: string,
    price: number,
    size: string,
    quantity: number,
    image: string
}

export default function Navbar() {
  const { items, isOpen, setIsOpen } = useCart();
  const [numItems, setNumItems] = useState(() => {
      let c = 0
      items.forEach((i) => {
        c = c + i.quantity
      });
      return c
  })

  useEffect(() => {
    let c = 0
    items.forEach((i) => {
      c = c + i.quantity
    });
    setNumItems(c)
  }, [items])

  const toggleCart = () => {
    setIsOpen(!isOpen)
  };

  
  return (
     <div className='navbar relative flex flex-col md:flex-row gap-10 items-center justify-between'>
        <h1 className="text-2xl"><a href="/">Blackdrop Apparel</a></h1>
        <div>
            <ul className="flex flex-row gap-5">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
            </ul>
        </div>
        <Searchbar/>
        <button onClick={toggleCart} className='cart-icon border border-slate-600 p-2 rounded-md relative'>
          <ShoppingCart size={20} className="cursor-pointer"/>
          <div className={`cart-count ${numItems > 0 ? "": "hidden"} absolute -top-3 -right-2 text-xs bg-red-400 rounded-sm p-1`}>
          {numItems}
          </div>
        </button>
        {isOpen && (
          <Cart/>
        )}
    </div>
  )
}
