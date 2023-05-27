"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
const Test = () => {
	const [show, setShow]= useState(false)
	const showModal = () => {
		setShow(!show)
	}
	// const pathName = usePathname()
	// console.log(pathName)
	// if(pathName.includes("/dashboard")){
	// 	return null
	// }

	// if(pathName.includes("sign-up")) return null;
	return (
		<nav class='bg-white border-gray-200 dark:bg-gray-900'>
			<div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<Link
					href={"/"}
					class='flex items-center'
				>
					<img
						src='/images/alien.png'
						class='h-8 mr-3'
						alt='Flowbite Logo'
					/>
					<span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Setha
					</span>
				</Link>
				<div class='flex items-center md:order-2'>
				

					<div
						class={show ? ' absolute top-10 w-[90%] right-5 z-50 md:hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600' : "hidden"}
						id='user-dropdown'
					>
						
						<ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li>
								<Link
									class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
									aria-current='page'
									href={"/"}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
									aria-current='page'
									href={"/dashboard"}
								>
									Dashboard
								</Link>
							</li>
							<li>
								<Link
									class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
									aria-current='page'
									href={"/dashboard/setting"}
								>
									Setting
								</Link>
							</li>
							<li>
								<Link
									class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
									aria-current='page'
									href={"/dashboard/analytic"}
								>
									Analytic
								</Link>
							</li>
							<li>
								<Link
									class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
									aria-current='page'
									href={"/about-us"}
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
									aria-current='page'
									href={"/users"}
								>
									All Users
								</Link>
							</li>
						</ul>
					</div>
					<button
					onClick={showModal}
						data-collapse-toggle='mobile-menu-2'
						type='button'
						class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						aria-controls='mobile-menu-2'
						aria-expanded='false'
					>
						<span class='sr-only'>Open main menu</span>
						<svg
							class='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clip-rule='evenodd'
							></path>
						</svg>
					</button>
				</div>
				<div
					class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='mobile-menu-2'
				>
					<ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						<li>
							<Link
								class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
								aria-current='page'
								href={"/"}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								aria-current='page'
								href={"/dashboard"}
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								aria-current='page'
								href={"/dashboard/setting"}
							>
								Setting
							</Link>
						</li>
						<li>
							<Link
								class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								aria-current='page'
								href={"/dashboard/analytic"}
							>
								Analytic
							</Link>
						</li>
						<li>
							<Link
								class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								aria-current='page'
								href={"/about-us"}
							>
								About us
							</Link>
						</li>
						<li>
							<Link
								class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								aria-current='page'
								href={"/users"}
							>
								All Users
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Test
