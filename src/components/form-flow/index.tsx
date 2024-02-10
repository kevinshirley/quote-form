'use client'

import { Button } from 'antd'
import Slider from '@/components/slider'
import Card from '@/components/card'
import FormItem from '@/components/form-item'
import AdditionalServices from '@/components/form-flow/additional-services'
import ContactInformation from '@/components/form-flow/contact-information'
import { useAppContext } from '@/context/app-context'

export default function FormFlow() {
  const { currentQuoteForm } = useAppContext()
  console.log({ currentQuoteForm })

  return (
    <section className='relative pt-6 pb-16'>
      <FormItem title='1. How many pages your project will have?'>
        <Slider
          min={1}
          max={20}
        />
      </FormItem>
      <FormItem title='2. Which design service your company needs?'>
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
      </FormItem>
      <FormItem title='3. Which development service your company needs?'>
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
      </FormItem>
      <FormItem title='4. Would you like to use animations on your website?'>
        <div className='flex flex-col items-center'>
          <Card
            title='None'
            text='Static page with no animations'
          />
          <Card
            title='Basic'
            text='Basic fade in / fade out animations'
          />
          <Card
            title='Advanced'
            text='Very unique and customised animations'
          />
        </div>
      </FormItem>
      <AdditionalServices />
      <ContactInformation />
      <FormItem>
        <Button
          className='quote-form-submut-btn w-full border-slate-900 border-2 text-slate-900 bg-slate-900 text-white h-14'
          size='large'
        >
          Submit
        </Button>
      </FormItem>
    </section>
  );
}