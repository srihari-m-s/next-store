import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../../components/navigation/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Store',
  description: 'eCommerce Myntra clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <header className=''>
          <Navigation />
        </header>
        <main className='border border-rose-500 flex-grow flex justify-center items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
