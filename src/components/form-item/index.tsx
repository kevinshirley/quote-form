"use client"

import { ReactNode } from 'react'

interface FormItemProps {
  title?: string;
  children: ReactNode;
}

const FormItem: React.FC<FormItemProps> = ({
  title,
  children,
}) => {
  return (
    <div className='quote-form-item py-2 px-6 mb-20'>
      {title && (
        <div className='mb-12'>
          <h2 className='font-semibold text-xl'>{title}</h2>
        </div>
      )}
      {children}
    </div>
  )
}

export default FormItem
