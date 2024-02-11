import { Radio, RadioChangeEvent } from 'antd'

interface CardRadioGroupItemType {
  value: string | number | boolean;
  eyebrow?: string;
  title: string;
  label: string;
}

interface CardRadioGroupType {
  onChange: (event: RadioChangeEvent) => void;
  items: CardRadioGroupItemType[];
  value: string | number | boolean;
}

export default function Card({
  title,
  text,
  value = null,
}: {
  title: string;
  text: string;
  value?: string | number | null;
}) {
  return (
    <div className='bg-gray-100 border-gray-300 border-2 rounded-md flex justify-center items-center flex-col py-4 px-4 w-full max-w-sm h-48 mb-6 cursor-pointer text-center'>
      <h3 className='font-semibold'>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export const CardRadioGroup: React.FC<CardRadioGroupType> = ({
  onChange,
  items,
  value,
}) => {
  return (
    <>
      {items && (
        <Radio.Group onChange={onChange} value={value} className='w-full flex flex-col items-center'>
          {items.map((item: CardRadioGroupItemType, index: number) => {
            return (
              <label key={index} className='bg-gray-100 border-gray-300 border-2 rounded-md flex justify-center items-center flex-col py-4 px-4 w-full max-w-sm h-48 mb-6 cursor-pointer text-center relative hover:shadow-md'>
                <Radio
                  className='radio absolute right-4 top-4 cursor-pointer h-6 w-6 outline-none transition duration-200 ease-out'
                  value={item.value}
                />
                <span className='plan-details rounded-md cursor-pointer flex flex-col p-4 transition duration-200 ease-out text-center'>
                  {item?.eyebrow && (
                    <span className='plan-type text-green-700 text-xl font-bold'>Basic</span>
                  )}
                  {item?.title && (
                    <span className='text-xl font-bold py-2'>{item.title}</span>
                  )}
                  {item?.label && (
                    <span className='text-base py-2'>{item.label}</span>
                  )}
                </span>
              </label>
            )
          })}
        </Radio.Group>
      )}
    </>
  )
}
