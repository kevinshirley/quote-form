'use client'

import { Input } from 'antd'
import FormItem from '@/components/form-item'
import InputWrapper from '@/components/form-flow/contact-information/input-wrapper'

interface ContactInformationType {
  className?: string;
}

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const ContactInformation: React.FC<ContactInformationType> = ({
  className,
}) => {
  return (
    <FormItem title='Fill out the form to discuss more details about your project'>
      <div className={className}>
        <InputWrapper label='First Name' htmlFor='firstName'>
          <Input
            placeholder='John'
            allowClear
            onChange={onChange}
            name='firstName'
            type='text'
          />
        </InputWrapper>
        <InputWrapper label='Last Name' htmlFor='lastName'>
          <Input
            placeholder='Doe'
            allowClear
            onChange={onChange}
            name='lastName'
            type='text'
          />
        </InputWrapper>
        <InputWrapper label='Email' htmlFor='email'>
          <Input
            placeholder='john@doe.com'
            allowClear
            onChange={onChange}
            name='email'
            type='email'
          />
        </InputWrapper>
        <InputWrapper label='Phone Number' htmlFor='phoneNumber'>
          <Input
            placeholder='+12 345 6789'
            allowClear
            onChange={onChange}
            name='phoneNumber'
            type='number'
          />
        </InputWrapper>
        <InputWrapper label='Company Name' htmlFor='companyName'>
          <Input
            placeholder='Softelo Agency'
            allowClear
            onChange={onChange}
            name='companyName'
            type='text'
          />
        </InputWrapper>
        <InputWrapper label='Company Website (optional)' htmlFor='companyWebsite'>
          <Input
            placeholder='softelogroup.com'
            allowClear
            onChange={onChange}
            name='companyWebsite'
            type='url'
          />
        </InputWrapper>
        <InputWrapper label='Message' htmlFor='message'>
          <Input.TextArea
            placeholder='Your Message'
            allowClear
            onChange={onChange}
            name='message'
          />
        </InputWrapper>
      </div>
    </FormItem>
  )
};

export default ContactInformation;
