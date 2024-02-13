'use client'

import FormItem from '@/components/form-item'
import CheckboxGroup from '@/components/checkbox-group'
import { CurrentQuoteFormType } from '@/context/app-context'

interface AdditionalServicesType {
  quoteFormItem: CurrentQuoteFormType | null;
  onChange: (selections: string[]) => void;
}

const AdditionalServices: React.FC<AdditionalServicesType> = ({
  quoteFormItem,
  onChange,
}) => {
  return (
    <FormItem title={quoteFormItem?.question || ''}>
      <CheckboxGroup
        className='flex flex-col grow common-checkbox'
        options={quoteFormItem && quoteFormItem?.options || []}
        onChange={onChange}
        name={quoteFormItem?.name || ''}
      />
    </FormItem>
  )
}

export default AdditionalServices
