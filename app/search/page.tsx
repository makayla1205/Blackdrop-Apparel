'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Card from "../components/Card";


export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q')
    const [filtered, setfiltered] = useState<Product[]>([])
    const products = [
        {id:1, name: 'Blackdrop Tee', slug:'blackdrop-tee', category: 1, price:30.00, score: 7, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'tee-flat.png'},
        {id:2, name: 'Graffiti Tee', slug:'graffiti-tee', category: 1, price:30.00, score: 1, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ],  img: 'graffiti-tee-flat.png'},
        {id:3, name: 'Blackdrop Hoodie', slug:'blackdrop-hoodie', category: 2, price:70.00, score: 4, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'hoodie-flat.png'},
        {id:4, name: 'Graffiti Hoodie', slug:'graffiti-hoodie', category: 2, price:70.00, score: 2, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'graffiti-hoodie-flat.png'},
        {id:5, name: 'Blackdrop Sweatshirt', slug:'blackdrop-sweatshirt', category: 3, price:45.00, score: 5, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'sweatshirt-flat.png'},
        {id:6, name: 'Grafitti Sweatshirt', slug:'graffiti-sweatshirt', category: 3, price:45.00, score: 3, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'graffiti-sweatshirt-flat.png'},
        {id:7, name: 'Blackdrop Sweatpant', slug:'blackdrop-sweatpant', category: 4, price:60.00, score: 6, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'sweatpants-flat.png'},
        {id:8, name: 'Grafitti Sweatpant', slug:'graffiti-sweatpant', category: 4, price:60.00, score: 8, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'graffiti-sweatpants-flat.png'},
    ]

    useEffect(() => {
        if(query){
            let x = products.filter(i => (i.name.toLowerCase().includes(query.toLowerCase())))
            setfiltered(x)
            console.log(x)
        }
    }, [])

    return (
        <div className="min-h-screen">
            <div className="p-5">
            <h1 className="text-center text-4xl">Search Results For "{query?.toLowerCase()}"</h1>
            <div className='products-container flex flex-row flex-wrap gap-10 justify-center mt-10'>
                {filtered.map((product) => {
                    return <Card key={product.id} product={product}/>
                })}
            </div>
            </div>
        </div>
        
        
    )
}
