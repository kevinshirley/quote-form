"use client"

import FormItem from '@/components/form-item'
import CheckboxGroup from '@/components/checkbox-group'

const CommonCheckbox: React.FC = () => {
  const additionalServices = [
    { label: 'Google Advertising', value: 'Google Advertising' },
    { label: 'Google Analytics', value: 'Google Analytics' },
    { label: 'Facebook Advertising', value: 'Facebook Advertising' },
    { label: 'Google Tag Manager', value: 'Google Tag Manager' },
    { label: 'Google Maps & Company', value: 'Google Maps & Company' },
    { label: 'Other', value: 'Other' },
  ];

  const onAdditionalServiceChange: any = (e: any) => {
    console.log('onAdditionalServiceChange: ', e)
  }

  return (
    <FormItem title='5. Which additional services should to be used?'>
      <CheckboxGroup
        className='flex flex-col grow common-checkbox'
        options={additionalServices}
        onChange={onAdditionalServiceChange}
      />
    </FormItem>
  )
};

export default CommonCheckbox;
