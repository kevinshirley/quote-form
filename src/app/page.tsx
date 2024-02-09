import Slider from '@/components/slider'
import Card from '@/components/card'

export default function Home() {
  return (
    <main className='relative bg-gray-200 min-h-screen py-6'>
      <div className='py-2 px-6 mb-20'>
        <div className='mb-12'>
          <h2 className='font-semibold text-xl'>1. How many pages your project will have?</h2>
        </div>
        <Slider min={1} max={20} />
      </div>
      <div className='py-2 px-6 mb-20'>
        <div className='mb-12'>
          <h2 className='font-semibold text-xl'>2. Which design service your company needs?</h2>
        </div>
        <div className='flex flex-col items-center'>
          <Card
            title='None'
            text='I already have a design'
          />
          <Card
            title='New Design'
            text='Custom design with style guide'
          />
          <Card
            title='Template'
            text='I want to use an existing template'
          />
        </div>
      </div>
      <div className='py-2 px-6 mb-20'>
        <div className='mb-12'>
          <h2 className='font-semibold text-xl'>3. Which development service your company needs?</h2>
        </div>
        <div className='flex flex-col items-center'>
          <Card
            title='New Website Development'
            text=''
          />
          <Card
            title='Existing Website Migration'
            text=''
          />
          <Card
            title='Other'
            text=''
          />
        </div>
      </div>
    </main>
  );
}
