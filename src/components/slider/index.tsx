'use client'

import React, { Dispatch, SetStateAction } from 'react';
import { Slider } from 'antd';
import { useAppContext } from '@/context/app-context'

interface CommonSliderProps {
  max: number;
  min: number;
  sliderItem: any;
  setSliderValue: Dispatch<SetStateAction<number>>;
  sliderValue: number;
}

const CommonSlider: React.FC<CommonSliderProps> = ({
  min,
  max,
  sliderItem,
  setSliderValue,
  sliderValue,
}) => {
  const {
    setCurrentQuoteForm,
    currentQuoteForm,
  } = useAppContext()

  const onChange = (value: any) => {
    setSliderValue(value)

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
          answer: value,
        },
      ].sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order)))
    }
  }

  return (
    <Slider
      defaultValue={1}
      onChange={onChange}
      value={sliderValue}
      min={min}
      max={max}
    />
  );
}

export default CommonSlider;
