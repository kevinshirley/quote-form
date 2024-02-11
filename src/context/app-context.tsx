'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'

interface CurrentQuoteFormOptionType {
  id: string;
  value: string | number | boolean;
  title: string;
  label: string;
  price: number;
}

interface CurrentQuoteFormType {
  id: string;
  order: number;
  price: number;
  value: string | number | boolean;
  type: string;
  options?: CurrentQuoteFormOptionType[];
}

interface AppContextProviderType {
  currentQuoteForm: CurrentQuoteFormType[] | null;
  setCurrentQuoteForm: Dispatch<SetStateAction<CurrentQuoteFormType[] | null>>;
  setQuoteFormPrice: Dispatch<SetStateAction<number | null>>;
  quoteFormPrice: number | null;
}

export const AppContext = createContext<AppContextProviderType | null>(null);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentQuoteForm, setCurrentQuoteForm] = useState<CurrentQuoteFormType[] | null>([
    {
      id: '1',
      order: 1,
      price: 900,
      value: 1,
      type: 'slider',
    },
    {
      id: '2',
      order: 2,
      price: 900,
      value: 1,
      type: 'radioCard',
      options: [
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63ca3',
          value: 'design',
          title: 'None',
          label: 'I already have a design',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'template',
          title: 'Template',
          label: 'I want to use an existing template',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'custom',
          title: 'Custom',
          label: 'Custom design with style guide',
          price: 200,
        },
      ],
    },
  ]);

  const [quoteFormPrice, setQuoteFormPrice] = useState<number | null>(0);

  return (
    <AppContext.Provider
      value={{
        currentQuoteForm,
        setCurrentQuoteForm,
        quoteFormPrice,
        setQuoteFormPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within the AppContextProvider')
  }
  return context;
}
