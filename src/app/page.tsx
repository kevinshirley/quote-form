import FormFlow from '@/components/form-flow'
import QuotePrice from '@/components/quote-price'

export default function Home() {
  return (
    <main className='relative bg-white min-h-screen py-6'>
      <QuotePrice />
      <FormFlow />
    </main>
  );
}
