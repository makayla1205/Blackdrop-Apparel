interface Product {
    id:number, 
    name: string, 
    slug:string, 
    category: number, 
    price:number, 
    score: number,
    sizes: {name:string, quantity:number}[], 
    img: string
}