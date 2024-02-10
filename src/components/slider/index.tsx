'use client'

import React, { useState } from 'react';
import { Slider } from 'antd';
import { useAppContext } from '@/context/app-context'

interface CommonSliderProps {
  max: number;
  min: number;
}

const CommonSlider: React.FC<CommonSliderProps> = (props) => {
  const [value, setValue] = useState(0);

  const {
    setCurrentQuoteForm,
    currentQuoteForm,
  } = useAppContext()

  const onChange = (value: any) => {
    setValue(value)

    if (currentQuoteForm) {
      const index = currentQuoteForm.findIndex((item: any) => item.id === '1');
      const updatedCurrentQuoteForm = [
        ...currentQuoteForm.slice(0, index),
        ...currentQuoteForm.slice(index + 1)
      ];

      setCurrentQuoteForm([
        ...updatedCurrentQuoteForm,
        {
          id: '1',
          order: 1,
          price: 900 * value,
          value: value,
          type: 'slider',
        },
      ].sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order)))
    }
  }

  return (
    <Slider
      defaultValue={1}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
}

export default CommonSlider;
