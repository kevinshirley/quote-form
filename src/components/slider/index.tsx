'use client'

import React, { useState } from 'react';
import { Slider } from 'antd';
import { useAppContext } from '@/context/app-context'

interface CommonSliderProps {
  max: number;
  min: number;
  sliderItem: any;
}

const CommonSlider: React.FC<CommonSliderProps> = ({
  min,
  max,
  sliderItem,
}) => {
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
          ...sliderItem,
          value: value,
        },
      ].sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order)))
    }
  }

  return (
    <Slider
      defaultValue={1}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
    />
  );
}

export default CommonSlider;
