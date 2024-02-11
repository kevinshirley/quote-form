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
    {
      id: '3',
      order: 3,
      price: 900,
      value: 1,
      type: 'cardRadio',
      options: [
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63ca3',
          value: 'newDevelopment',
          title: 'New Website Development',
          label: '',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'migration',
          title: 'Existing Website Migration',
          label: '',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'other',
          title: 'Other',
          label: '',
          price: 200,
        },
      ],
    },
    {
      id: '4',
      order: 4,
      price: 900,
      value: 1,
      type: 'cardRadio',
      options: [
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63ca3',
          value: 'none',
          title: 'None',
          label: 'Static page with no animations',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'basic',
          title: 'Basic',
          label: 'Basic fade in / fade out animations',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'advanced',
          title: 'Advanced',
          label: 'Very unique and customised animations',
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
