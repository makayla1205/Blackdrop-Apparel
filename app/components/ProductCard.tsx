'use client'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext';
import { SetStateAction, useEffect, useState } from 'react';
import Cart from './Cart';

interface ProductProps {
    product: Product
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const { addItem, setIsOpen } = useCart();
    const [selectedSize, setSelectedSize] = useState<string>("")

    const handleSelectSize = (size:string) => {
        setSelectedSize(size)
    }

    const showNotificaation = () => {
        addItem({productid:product.id, slug:product?.slug, name: product?.name, image: product.img, price: product.price, size: selectedSize, id:"", quantity:0})
        setIsOpen(true)
    }

  return (
    <div className="flex flex-row flex-wrap p-10 gap-10 bg-slate-950 w-7/8 rounded-md border border-slate-600 mt-5 justify-center">
        <div>
            <div className="relative w-100 h-100">
                <Image
                src={`/images/${product?.img}`}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={product?.name || ""}
                priority={true}
                className="object-cover rounded-lg"
                />
            </div>  
        </div>
        
        <div className="w-1/2">
            <h2 className="text-5xl">{product?.name}</h2>
            <p className="text-2xl mt-3">${product?.price.toFixed(2)}</p>
            <div className="flex flex-row gap-5 mt-3 items-center">
                <p>Size:</p>
                {product?.sizes.map(size => {
                    return <button key={size.name} onClick={() => handleSelectSize(size.name)} className={`p-1 pl-5 pr-5 rounded-md cursor-pointer ${selectedSize===size.name ? "bg-gray-600": "bg-gray-400"}`}>{size.name}</button>
                })}
            </div>
            <button disabled={(selectedSize === "")} className={`text-2xl mt-5 text-black p-1 pl-5 pr-5 rounded-md w-full ${selectedSize === "" ? "bg-gray-700 ": "bg-blue-600 cursor-pointer"}`} onClick={() => showNotificaation()}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard;