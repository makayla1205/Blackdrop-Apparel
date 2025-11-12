'use client'

import { createContext, useContext, useState, useEffect, useId, SetStateAction, Dispatch } from "react"
import { v4 as uuidv4 } from 'uuid';

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

type CartContextType = {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity, productid'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({children}: { children: React.ReactNode}) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('cart')
        if (saved) {
            setItems(JSON.parse(saved))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addItem = (item: Omit<CartItem, 'quantity, id'>) => {
    setItems(current => {
        const existing = current.find(i => i.productid === item.productid && i.size === item.size);
        if (existing) {
            return current.map(i =>
            i.productid === item.productid && i.size === item.size ? { ...i, quantity: i.quantity + 1 } : i
            );
        }
        return [...current, { ...item, quantity: 1, id: uuidv4() }];
        });
    };

    const removeItem = (id: string) => {
       setItems(current => current.filter(i => (i.id !== id)));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
        removeItem(id);
        return;
        }
        setItems(current =>
        current.map(i => (i.id === id ? { ...i, quantity } : i))
        );
    };

    const clearCart = () => setItems([]);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount, isOpen, setIsOpen }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
