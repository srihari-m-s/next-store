import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../../components/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Store',
  description: 'eCommerce Myntra clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='border border-red-600'>
          <Navigation />
        </header>
        <main className='border border-blue-600'>
          {children}
        </main>
      </body>
    </html>
  )
}
