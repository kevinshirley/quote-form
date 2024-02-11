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
  title?: string;
  label: string;
  price: number;
}

export interface CurrentQuoteFormType {
  id: string;
  question: string;
  order: number;
  price: number;
  value: string | number | boolean;
  type: string;
  name?: string;
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
      question: '1. How many pages your project will have?',
      order: 1,
      price: 900,
      value: 1,
      type: 'slider',
    },
    {
      id: '2',
      question: '2. Which design service your company needs?',
      order: 2,
      price: 900,
      value: 1,
      type: 'radioCard',
      name: 'designService',
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
      question: '3. Which development service your company needs?',
      order: 3,
      price: 900,
      value: 1,
      type: 'cardRadio',
      name: 'developmentService',
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
      question: '4. Would you like to use animations on your website?',
      order: 4,
      price: 900,
      value: 1,
      type: 'cardRadio',
      name: 'animations',
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
    {
      id: '5',
      question: '5. Which additional services should to be used?',
      order: 5,
      price: 900,
      value: 1,
      type: 'checkbox',
      name: 'additionalServices',
      options: [
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63ca3',
          value: 'Google Advertising',
          label: 'Google Advertising',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k8t',
          value: 'Google Analytics',
          label: 'Google Analytics',
          price: 0,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63k3k',
          value: 'Facebook Advertising',
          label: 'Facebook Advertising',
          price: 200,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63p3b',
          value: 'Google Tag Manager',
          label: 'Google Tag Manager',
          price: 200,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63o4v',
          value: 'Google Maps & Company',
          label: 'Google Maps & Company',
          price: 200,
        },
        {
          id: 'a0f45312-0251-43d2-b5de-0809e6a63x89',
          value: 'Other',
          label: 'Other',
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
