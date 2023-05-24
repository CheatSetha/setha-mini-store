import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loading from './loading'
import Test from '@/components/Test'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Setha mini store',
  description: 'Generated by bros smos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Test />
        {/* <NavBar /> */}
        <Suspense fallback= {<Loading />}>
        {children}
        </Suspense>
        <Footer />
        </body>
    </html>
  )
}
