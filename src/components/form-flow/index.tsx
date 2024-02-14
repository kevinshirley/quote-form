'use client'

import { useState, Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { Button, RadioChangeEvent } from 'antd'
import { useFormStatus } from 'react-dom'
import { redirect, useRouter } from 'next/navigation'
import Slider from '@/components/slider'
import FormItem from '@/components/form-item'
import AdditionalServices from '@/components/form-flow/additional-services'
import ContactInformation from '@/components/form-flow/contact-information'
import { useAppContext, CurrentQuoteFormType, CurrentQuoteFormOptionType } from '@/context/app-context'
import { CardRadioGroup } from '@/components/radio'
import { submitForm } from '@/app/actions'

const updateQuoteFormOptionAnswer = ({
  currentQuoteForm,
  id,
  setCurrentQuoteForm,
  event,
}: {
  currentQuoteForm: CurrentQuoteFormType[];
  id: string;
  setCurrentQuoteForm: Dispatch<SetStateAction<CurrentQuoteFormType[] | null>>;
  event: RadioChangeEvent;
}) => {
  if (currentQuoteForm) {
    const index = currentQuoteForm.findIndex((item: any) => item.id === id);
    const updatedCurrentQuoteForm = [
      ...currentQuoteForm.slice(0, index),
      ...currentQuoteForm.slice(index + 1)
    ];

    setCurrentQuoteForm([
      ...updatedCurrentQuoteForm,
      {
        ...currentQuoteForm[index],
        answer: currentQuoteForm[index].options?.find(option => option.value === event.target.value),
      },
    ].sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order)))
  }
}

const updateQuoteFormCheckboxAnswer = ({
  currentQuoteForm,
  id,
  setCurrentQuoteForm,
  checkboxAnswers,
}: {
  currentQuoteForm: CurrentQuoteFormType[];
  id: string;
  setCurrentQuoteForm: Dispatch<SetStateAction<CurrentQuoteFormType[] | null>>;
  checkboxAnswers: CurrentQuoteFormOptionType[];
}) => {
  if (currentQuoteForm) {
    const index = currentQuoteForm.findIndex((item: any) => item.id === id);
    const updatedCurrentQuoteForm = [
      ...currentQuoteForm.slice(0, index),
      ...currentQuoteForm.slice(index + 1)
    ];

    setCurrentQuoteForm([
      ...updatedCurrentQuoteForm,
      {
        ...currentQuoteForm[index],
        answer: checkboxAnswers,
      },
    ].sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order)))
  }
}

export default function FormFlow() {
  const {
    currentQuoteForm,
    setCurrentQuoteForm,
    quoteFormPrice,
  } = useAppContext()
  console.log({ currentQuoteForm })

  const [designServiceValue, setDesignServiceValue] = useState('')
  const [developmentServiceValue, setDevelopmentServiceValue] = useState('')
  const [animationsValue, setAnimationsValue] = useState('')
  const [sliderValue, setSliderValue] = useState(0)
  const [formResult, setFormResult] = useState<boolean|null>(false)
  const { pending } = useFormStatus()
  const ref = useRef<HTMLFormElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (formResult) {
      router.push('success')
    }
  }, [formResult])

  const onOptionsChange = (event: RadioChangeEvent) => {
    if (currentQuoteForm) {
      switch(event.target.name) {
        case currentQuoteForm[1].name:
          setDesignServiceValue(event.target.value)

          updateQuoteFormOptionAnswer({
            currentQuoteForm,
            setCurrentQuoteForm,
            event,
            id: '2',
          })
          break;
        case currentQuoteForm[2].name:
          setDevelopmentServiceValue(event.target.value)

          updateQuoteFormOptionAnswer({
            currentQuoteForm,
            setCurrentQuoteForm,
            event,
            id: '3',
          })
          break;
        case currentQuoteForm[3].name:
          setAnimationsValue(event.target.value)

          updateQuoteFormOptionAnswer({
            currentQuoteForm,
            setCurrentQuoteForm,
            event,
            id: '4',
          })
          break;
      }
    }
  }

  const onCheckboxChange = (selections: string[]) => {
    if (currentQuoteForm) {
      const filtered = currentQuoteForm[4].options?.filter((item: CurrentQuoteFormOptionType) => selections.includes((item.value as string)))

      if (filtered) {
        updateQuoteFormCheckboxAnswer({
          currentQuoteForm,
          setCurrentQuoteForm,
          id: '5',
          checkboxAnswers: filtered,
        })
      }
    }
  }

  return (
    <form
      ref={ref}
      className='relative pt-6 pb-16'
      action={async (formData) => {
        const result = await submitForm(formData)
        console.log({ result })
        if (result) {
          setFormResult(result.success)
        }
      }}
    >
      <FormItem title={currentQuoteForm && currentQuoteForm[0].question || ''}>
        <Slider
          min={1}
          max={20}
          sliderItem={currentQuoteForm && currentQuoteForm[0]}
          setSliderValue={setSliderValue}
          sliderValue={sliderValue}
        />
      </FormItem>
      <FormItem title={currentQuoteForm && currentQuoteForm[1].question || ''}>
        <div className='flex flex-col items-center'>
          <CardRadioGroup
            name={currentQuoteForm && currentQuoteForm[1].name || ''}
            items={currentQuoteForm && currentQuoteForm[1].options || []}
            onChange={onOptionsChange}
            value={designServiceValue}
          />
        </div>
      </FormItem>
      <FormItem title={currentQuoteForm && currentQuoteForm[2].question || ''}>
        <div className='flex flex-col items-center'>
          <CardRadioGroup
            name={currentQuoteForm && currentQuoteForm[2].name || ''}
            items={currentQuoteForm && currentQuoteForm[2].options || []}
            onChange={onOptionsChange}
            value={developmentServiceValue}
          />
        </div>
      </FormItem>
      <FormItem title={currentQuoteForm && currentQuoteForm[3].question}>
        <div className='flex flex-col items-center'>
          <CardRadioGroup
            name={currentQuoteForm && currentQuoteForm[3].name || ''}
            items={currentQuoteForm && currentQuoteForm[3].options || []}
            onChange={onOptionsChange}
            value={animationsValue}
          />
        </div>
      </FormItem>
      <AdditionalServices
        quoteFormItem={currentQuoteForm && currentQuoteForm[4]}
        onChange={onCheckboxChange}
      />
      <ContactInformation
        firstNameItem={currentQuoteForm && currentQuoteForm[6]}
        lastNameItem={currentQuoteForm && currentQuoteForm[7]}
        emailItem={currentQuoteForm && currentQuoteForm[8]}
        phoneNumberItem={currentQuoteForm && currentQuoteForm[9]}
        companyNameItem={currentQuoteForm && currentQuoteForm[10]}
        companyWebsiteItem={currentQuoteForm && currentQuoteForm[11]}
        messageItem={currentQuoteForm && currentQuoteForm[12]}
      />
      <input type='hidden' name='currentQuoteForm' value={JSON.stringify(currentQuoteForm)} />
      <input type='hidden' name='quoteFormPrice' value={JSON.stringify(quoteFormPrice)} />
      <FormItem>
        <Button
          className='quote-form-submut-btn w-full border-slate-900 border-2 text-slate-900 bg-slate-900 text-white h-14'
          size='large'
          htmlType='submit'
          aria-disabled={pending}
        >
          Submit
        </Button>
      </FormItem>
    </form>
  );
}
