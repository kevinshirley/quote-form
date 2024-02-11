import { Checkbox } from 'antd';

interface CommonCheckboxOptionType {
  label: string;
  value: string | number | boolean;
}

interface CommonCheckboxType {
  onChange: (event: any) => void;
  options: CommonCheckboxOptionType[] | null;
  className: string;
  name: string | null;
}

const CommonCheckbox: React.FC<CommonCheckboxType> = ({
  onChange,
  options,
  className,
  name,
}) => {
  return (
    <>
      {options && (
        <Checkbox.Group
          className={className}
          options={options}
          onChange={onChange}
          name={name || ''}
        />
      )}
    </>
  )
};

export default CommonCheckbox;
