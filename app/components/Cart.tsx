'use client'

import { useEffect } from "react";
import { useCart } from "../contexts/CartContext"
import { SquareX, X } from "lucide-react"
import Image from 'next/image'

interface CartProps {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = () => {
    const { items, removeItem, updateQuantity, total, clearCart, isOpen, setIsOpen } = useCart();

    const closeCart = () => {
        setIsOpen(false)
    };


    if (items.length === 0) {
        return <div className="cart absolute right-10 top-20 bg-white text-black p-5 rounded-md w-100 min-h-46">
            <div className="flex flex-row flex-wrap justify-between">
                <h2 className="text-lg font-bold">My Cart</h2>
                <button onClick={closeCart} className="cursor-pointer"><X/></button>
            </div>
        <p>Your Cart is empty.</p>
        </div>;
    }

    return (
        <div className="cart absolute right-10 top-20 bg-white text-black p-5 rounded-md w-100">
        <div className="flex flex-row flex-wrap justify-between">
             <h2 className="text-lg font-bold">My Cart</h2>
            <button onClick={closeCart} className="cursor-pointer"><X/></button>
        </div>
       
        {items.map(item => (
            <div key={item.id} className="cart-item border-b border-gray-400 p-3 mb-3 text-md">
                <div className="flex flex-row gap-5">
                    <div>
                        <div className="relative w-20 h-20">
                                    <Image
                                    src={`/images/${item.image}`}
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt={item.name || ""}
                                    priority={true}
                                    className="object-cover rounded-md"
                                    />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-row justify-between">
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                
                        <p>Size: {item.size}</p>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                               <label>Quantity: </label>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                                    min="0"
                                    max="100"
                                    className="border w-15"
                                /> 
                            </div>
                            <button onClick={() => removeItem(item.id)}><SquareX size={30} className="text-red-500 cursor-pointer"/></button>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        ))}
        <div className="flex flex-row justify-between border-b border-slate-300 pt-2">
            <p>Taxes</p>
            <strong>$0.00</strong>
        </div>
        <div className="flex flex-row justify-between border-b border-slate-300 pt-2">
            <p>Shipping</p>
            <p>Calculated at checkout</p>
        </div>
        <div className="flex flex-row justify-between border-b border-slate-300 pt-2">
            <p>Total</p>
            <strong>${total.toFixed(2)}</strong>
        </div>
        <button className="bg-blue-500 p-1 rounded-2xl w-full mt-3 mb-3 text-lg text-white cursor-pointer">Proceed to Checkout</button>
        </div>
    );
}

export default Cart;
