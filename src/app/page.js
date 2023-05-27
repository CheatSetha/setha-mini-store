import Banner from "@/components/Banner";
import CategoryCard from "@/components/CategoryCard"
import Card from "@/components/ProductCard";
import UserCard from "@/components/UserCard";
import {HiPlusCircle} from "react-icons/hi"
import Link from "next/link"
export const metadata = {
	title: "ISTAD - Home",
	description: 'This is my app',
	images: "/images/alien.png",
	
	
	openGraph: {
	  title: 'ISTAD-HOME',
	  description: 'This is my app',
	  url: 'https://setha-mini-store.vercel.app/',
	  images: "https://nypost.com/wp-content/uploads/sites/2/2017/09/feature.jpg?quality=75&strip=all",
	},
	twitter: {
	  title: 'My App',
	  description: 'This is my app',
	  url: 'https://myapp.com',
	  image: 'https://myapp.com/og.png',
	}

	
}

export default async function Home() {
  // call cate
  const categories = await getCategory();
  const users = await getuser()
  const products = await fetchData()
	return (
		<main className="w-[90%] mx-auto">
			<Link
				href={"/product/upload"}
				className=' fixed right-1 bottom-1 z-50 p-5'
			>
        <HiPlusCircle className="text-[40px] md:text-[60px] text-primary"/>
				
			</Link>
      <Banner />
      <h1 className='text-3xl font-bold my-4'> Category list</h1>

      <div className='flex space-x-3 flex-wrap'>
				{categories.map((cate) => (
					<CategoryCard
						key={cate.id}
						thubmnail={cate.image}
						title={cate.name}
						id={cate.id}
					/>
				))}
			</div>
      {/* list product  */}
			<h1 className='font-bold text-2xl my-7'>Our Products {products.length} </h1>
		

    <div > 
      <div className='flex flex-wrap justify-center  mx-auto gap-3 w-full '>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            desc={product.description}
            img={product.images}
            id={product.id}
            price={product.price}
          />
        ))}
      </div>
      <h4 className=' font-bold text-center  my-7 text-3xl'>Top users</h4>

      <div className=' w-full justify-center flex flex-wrap gap-3 mb-3 '>
        
        {users.map((u) => (
          <UserCard
            key={u.id}
            avatar={u.avatar}
            email={u.email}
            name={u.name}
            role={u.role}
          />
        ))}
      </div>
      
    </div>
		</main>
	)
}

// fecth category
export async function getCategory() {
	const res = await fetch("https://api.escuelajs.co/api/v1/categories")
	const data = await res.json()

	return data
}

// end of fetch category

export async function fetchData() {
	const res = await fetch(
		"https://api.escuelajs.co/api/v1/products?limit=20&offset=0",
		{cache: "no-store" }
	)
	const data = await res.json()
	return data
}

export async function getuser() {
	const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=8")
	const data = await res.json()
	return data
}
