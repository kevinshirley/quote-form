import { ReactNode } from 'react'

interface InputWrapperType {
  children: ReactNode;
  label: string;
  htmlFor: string;
}

const InputWrapper: React.FC<InputWrapperType> = ({
  children,
  label,
  htmlFor,
}) => {
  return (
    <div className='mb-5'>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  )
};

export default InputWrapper;
