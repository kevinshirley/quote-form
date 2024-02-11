'use client'

import { useState } from 'react'
import { Button, RadioChangeEvent } from 'antd'
import Slider from '@/components/slider'
import FormItem from '@/components/form-item'
import AdditionalServices from '@/components/form-flow/additional-services'
import ContactInformation from '@/components/form-flow/contact-information'
import { useAppContext } from '@/context/app-context'
import { CardRadioGroup } from '@/components/radio'

export default function FormFlow() {
  const { currentQuoteForm } = useAppContext()
  console.log({ currentQuoteForm })

  const [cardRadioGroupValue, setCardRadioGroupValue] = useState(1)

  const onCardRadioGroupChange = (event: RadioChangeEvent) => {
    console.log({ 'onCardRadioGroupChange event': event })
    setCardRadioGroupValue(event.target.value)
  }

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
          <CardRadioGroup
            items={currentQuoteForm && currentQuoteForm[1].options || []}
            onChange={onCardRadioGroupChange}
            value={cardRadioGroupValue}
          />
        </div>
      </FormItem>
      <FormItem title='3. Which development service your company needs?'>
        <div className='flex flex-col items-center'>
          <CardRadioGroup
            items={currentQuoteForm && currentQuoteForm[2].options || []}
            onChange={onCardRadioGroupChange}
            value={cardRadioGroupValue}
          />
        </div>
      </FormItem>
      <FormItem title='4. Would you like to use animations on your website?'>
        <div className='flex flex-col items-center'>
          <CardRadioGroup
            items={currentQuoteForm && currentQuoteForm[3].options || []}
            onChange={onCardRadioGroupChange}
            value={cardRadioGroupValue}
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
