'use client'

import FormItem from '@/components/form-item'
import CheckboxGroup from '@/components/checkbox-group'
import { CurrentQuoteFormType } from '@/context/app-context'

interface AdditionalServicesType {
  quoteFormItem: CurrentQuoteFormType | null;
}

const AdditionalServices: React.FC<AdditionalServicesType> = ({ quoteFormItem }) => {
  const onAdditionalServiceChange: any = (e: any) => {
    console.log('onAdditionalServiceChange: ', e)
  }

  return (
    <FormItem title={quoteFormItem?.question || ''}>
      <CheckboxGroup
        className='flex flex-col grow common-checkbox'
        options={quoteFormItem && quoteFormItem?.options || []}
        onChange={onAdditionalServiceChange}
        name={quoteFormItem?.name || ''}
      />
    </FormItem>
  )
}

export default AdditionalServices
