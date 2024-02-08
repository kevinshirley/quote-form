import Slider from '@/components/slider'

export default function Home() {
  return (
    <main className='relative bg-gray-200 min-h-screen py-6'>
      <div className='py-2 px-6 mb-12'>
        <div className='mb-12'>
          <h2>1. How many pages your project will have?</h2>
        </div>
        <Slider min={0} max={20} />
      </div>
      <div className='py-2 px-6 mb-12'>
        <div className='mb-12'>
          <h2>2. Which design service your company needs?</h2>
        </div>
        <Slider min={0} max={20} />
      </div>
    </main>
  );
}
