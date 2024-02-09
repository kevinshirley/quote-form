import { Checkbox } from 'antd';

interface CommonCheckboxOptionType {
  label: string;
  value: string;
}

interface CommonCheckboxType {
  onChange: (event: any) => void;
  options: CommonCheckboxOptionType[];
  className: string;
}

const CommonCheckbox: React.FC<CommonCheckboxType> = ({
  onChange,
  options,
  className,
}) => {
  return (
    <Checkbox.Group
      className={className}
      options={options}
      onChange={onChange}
    />
  )
};

export default CommonCheckbox;
