'use client'

import { Dispatch, SetStateAction } from 'react'
import { Input } from 'antd'
import DOMPurify from 'dompurify'
import FormItem from '@/components/form-item'
import InputWrapper from '@/components/form-flow/contact-information/input-wrapper'
import { CurrentQuoteFormType, useAppContext } from '@/context/app-context'

interface ContactInformationType {
  className?: string;
  firstNameItem?: CurrentQuoteFormType | null;
  lastNameItem?: CurrentQuoteFormType | null;
  emailItem?: CurrentQuoteFormType | null;
  phoneNumberItem?: CurrentQuoteFormType | null;
  companyNameItem?: CurrentQuoteFormType | null;
  companyWebsiteItem?: CurrentQuoteFormType | null;
  messageItem?: CurrentQuoteFormType | null;
}

const updateQuoteFormInputAnswer = ({
  id,
  value,
  currentQuoteForm,
  setCurrentQuoteForm,
}: {
  id: string;
  value: string;
  currentQuoteForm: CurrentQuoteFormType[] | null;
  setCurrentQuoteForm: Dispatch<SetStateAction<CurrentQuoteFormType[] | null>>;
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
        answer: value,
      },
    ].sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order)))
  }
}

const ContactInformation: React.FC<ContactInformationType> = ({
  className,
  firstNameItem,
  lastNameItem,
  emailItem,
  phoneNumberItem,
  companyNameItem,
  companyWebsiteItem,
  messageItem,
}) => {
  const { currentQuoteForm, setCurrentQuoteForm } = useAppContext()

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateQuoteFormInputAnswer({
      currentQuoteForm,
      setCurrentQuoteForm,
      value: DOMPurify.sanitize(event.target.value).trim(),
      id: event.target.id,
    })
  }

  return (
    <FormItem title='Fill out the form to discuss more details about your project'>
      <div className={className}>
        <InputWrapper label={firstNameItem?.question || ''} htmlFor={firstNameItem?.name || ''}>
          <Input
            placeholder='John'
            allowClear
            onChange={onChange}
            name={firstNameItem?.name || ''}
            type='text'
            id={firstNameItem?.id || ''}
          />
        </InputWrapper>
        <InputWrapper label={lastNameItem?.question || ''} htmlFor='lastName'>
          <Input
            placeholder='Doe'
            allowClear
            onChange={onChange}
            name={lastNameItem?.name || ''}
            type='text'
            id={lastNameItem?.id || ''}
          />
        </InputWrapper>
        <InputWrapper label={emailItem?.question || ''} htmlFor='email'>
          <Input
            placeholder='john@doe.com'
            allowClear
            onChange={onChange}
            name={emailItem?.name || ''}
            type='email'
            id={emailItem?.id || ''}
          />
        </InputWrapper>
        <InputWrapper label={phoneNumberItem?.question || ''} htmlFor='phoneNumber'>
          <Input
            placeholder='+12 345 6789'
            allowClear
            onChange={onChange}
            name={phoneNumberItem?.name || ''}
            type='number'
            id={phoneNumberItem?.id || ''}
          />
        </InputWrapper>
        <InputWrapper label={companyNameItem?.question || ''} htmlFor='companyName'>
          <Input
            placeholder='Softelo Agency'
            allowClear
            onChange={onChange}
            name={companyNameItem?.name || ''}
            type='text'
            id={companyNameItem?.id || ''}
          />
        </InputWrapper>
        <InputWrapper label={companyWebsiteItem?.question || ''} htmlFor='companyWebsite'>
          <Input
            placeholder='softelogroup.com'
            allowClear
            onChange={onChange}
            name={companyWebsiteItem?.name || ''}
            type='url'
            id={companyWebsiteItem?.id || ''}
          />
        </InputWrapper>
        <InputWrapper label={messageItem?.question || ''} htmlFor='message'>
          <Input.TextArea
            placeholder='Your Message'
            allowClear
            onChange={onChange}
            name={messageItem?.name || ''}
            id={messageItem?.id || ''}
          />
        </InputWrapper>
      </div>
    </FormItem>
  )
};

export default ContactInformation;
