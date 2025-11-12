import Image from "next/image";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  const featured = [
    {id:2, name: 'Graffiti Tee', slug:'graffiti-tee', category: 1, price:30.00, score: 1, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ],  img: 'graffiti-tee-flat.png'},
    {id:6, name: 'Grafitti Sweatshirt', slug:'graffiti-sweatshirt', category: 3, price:45.00, score: 3, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'graffiti-sweatshirt-flat.png'},
    {id:4, name: 'Graffiti Hoodie', slug:'graffiti-hoodie', category: 2, price:70.00, score: 2, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'graffiti-hoodie-flat.png'},
    {id:8, name: 'Grafitti Sweatpant', slug:'graffiti-sweatpant', category: 4, price:60.00, score: 8, sizes: [{name:"Small", quantity: 5}, {name:"Medium", quantity: 5},{name:"Large", quantity: 5}, ], img: 'graffiti-sweatpants-flat.png'},
  ]
  return (
    <div className="flex flex-col gap-20 items-center mt-5">
      <div className="cover w-7/8 h-150 rounded-md border border-slate-100 relative">
      <div className="overlay"></div>
        <Image
          src={'/images/featured.png'}
          fill={true}
          alt={"Graffiti Collection"}
          priority={true}
          className="object-cover"/>
          <div className="absolute top-1/3 overlay-text text-center w-full">
            <p className="text-6xl">Shop Our Latest Drop</p>
            <p className="text-5xl mt-3">The Graffiti Collection</p>
          </div>
          
      </div>
      <div className="featured text-center mb-20">
        <h1 className="text-4xl text-center mb-10">Just Dropped</h1>
          <div className='products-container flex flex-row flex-wrap gap-10 mt-5 justify-center'>
              {featured.map((product) => {
                  return <Card key={product.id} product={product}/>
              })}
          </div>
        <button className="rounded-md bg-blue-600 p-2 text-white text-lg mt-10 pl-4 pr-4 cursor-pointer"><a href="/products">More Products</a></button>
      </div>
    </div>
  );
}
