import Image from "next/image";

interface CardProps {
  product: {id:number, name:string, slug: string, category:number, price:number, score:number, sizes:{ name: string; quantity: number; }[], img:string}
}

export default function Card({product}: CardProps) {
    const image = `/images/${product.img}`
  return (
    <div className='card flex flex-col text-slate-950 text-slate-100'>
        <div className='card-image'><a href={`products/${product.slug}`}>
            <Image
            src={image}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={product.name}
            priority={true}
            className="object-cover rounded-xl"/></a>
        </div>
        <div className='card-info flex flex-row justify-between p-3 text-slate-100'>
            <p><a href={`products/${product.slug}`}>{product.name}</a></p>
            <p>${product.price.toFixed(2)}</p>
        </div>
        
    </div>
  )
}
