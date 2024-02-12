'use client'

import { useAppContext } from '@/context/app-context'

export default function QuotePrice() {
  const { quoteFormPrice } = useAppContext()

  return (
    <div className='fixed top-auto bottom-[1.5rem] left-auto right-[1.5rem] z-50 bg-neutral-950/[.01] backdrop-blur-xl py-6 px-10 rounded-md border-gray-300 border-2 h-36 flex justify-center items-center'>
      <div className='flex flex-col items-center'>
        <span className='text-xs mb-2'>Approximate price is</span>
        <span className='text-4xl font-bold'>${quoteFormPrice}</span>
      </div>
    </div>
  );
}
