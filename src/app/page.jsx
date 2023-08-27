import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className=" flex flex-col gap-10 text-center transition-all">
      <h1 className='text-5xl'>Welcome to Myntra Clone Home</h1>
      <Link href='..' className='px-4 py-2 border border-red-500 bg-red-500 text-white text-xl w-fit rounded-xl mx-auto hover:bg-white hover:text-rose-500 active:shadow-inner '>Click here to go to Shirts Page</Link>
    </section>
  )
}
