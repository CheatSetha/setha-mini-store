import { useParams } from "next/navigation"
import React from "react"

export async function getProductDetails(id) {
	const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
	const data = await res.json()
	return data
}

export async function generateMetadata({ params }) {
	// read route params
	const id = params.id

	// fetch data
	const product = await getProductDetails(id)

	return {
		title: product.title,
		description: product.description,
		image: product.images,
		openGraph: {
			type: "website",
			
			
			url: `https://escuelajs.co/product/${id}`,
			title: product.title,
			description: product.description,
			images: [
				{
					url: product.images,
					width: 800,
					height: 600,
				},
			],
		},
	}
}

const page = async ({ params }) => {

	const { id } = params

	const product = await getProductDetails(id)

	return (
		<div className='card lg:card-side bg-base-100 shadow-xl w-[90%] mx-auto my-10'>
			<figure>
				<img
					src={product.images ? product.images : "/images/1.webp"}
					alt='Album'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					{product.title ? product.title : "Loading..."}
				</h2>
				<p>{product.description}.</p>
			</div>
		</div>
	)
}

export default page
