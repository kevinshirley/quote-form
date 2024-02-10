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
