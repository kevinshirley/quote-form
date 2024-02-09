'use client'

import React, { useState } from 'react';
import { Slider } from 'antd';

interface CommonSliderProps {
  max: number;
  min: number;
}

const CommonSlider: React.FC<CommonSliderProps> = (props) => {
  const [value, setValue] = useState(0);

  return (
    <Slider
      defaultValue={1}
      onChange={setValue}
      value={value}
      {...props}
    />
  );
}

export default CommonSlider;
