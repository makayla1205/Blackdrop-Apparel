'use client'
import { useState } from "react"
import Card from "../components/Card"

interface Category {
    id:number, 
    name:string
}
export default function Products() {
    const categories = [
        {id: 1, name: 'Graphic Tees'},
        {id: 2, name: 'Hoodies'},
        {id: 3, name: 'Sweatshirts'},
        {id: 4, name: "Sweatpants"}
    ]

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

    const [selectedCategory, setSelectedCategory] = useState<Category | undefined>()

    const changeCategory = (category:Category) => {
        if (category.name === "All"){
        setSelectedCategory(undefined)
        return
        } 
        setSelectedCategory(category)
    }
  return (
    <div>
       <div className="split grid grid-cols-4 m-10 gap-10">
            <div className="sidebar col-span-1">
            <h2 className="text-slate-400"> Collections </h2>
            <div className='category'><button className="text-white cursor-pointer text-left p-2" onClick={() => changeCategory({id:0, name:"All"})}>All</button></div>
            {categories.map((obj) => {
                return <div key={obj.id} className='category'><button className="text-white cursor-pointer text-left p-2" onClick={() => changeCategory(obj)}>{obj.name}</button></div>
            })}
            </div>
            <div className="content col-span-3">
                {selectedCategory ? (
                    <>
                    <div className='products-container flex flex-row flex-wrap gap-10'>
                        {products.map((product) => {
                            if(product.category === selectedCategory.id){
                            return <Card product={product}/>
                            }
                        })}
                    </div>
                    </>
                ) : (
                    <>
                    <div className='products-container flex flex-row flex-wrap gap-10'>
                        {products.map((product) => {
                            return <Card key={product.id} product={product}/>
                        })}
                    </div>
                </>
                )}
            </div>
       </div>
    </div>
  );
}