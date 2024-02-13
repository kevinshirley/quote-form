'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react'

import { isNil, sum } from 'lodash'

import { currentQuoteFormData } from '@/context/data/quote-form'

const quoteFormType = {
  cardRadio: 'cardRadio',
  slider: 'slider',
  checkbox: 'checkbox',
}

export interface CurrentQuoteFormOptionType {
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
  answer?: string | number | CurrentQuoteFormOptionType | CurrentQuoteFormOptionType[];
}

interface AppContextProviderType {
  currentQuoteForm: CurrentQuoteFormType[] | null;
  setCurrentQuoteForm: Dispatch<SetStateAction<CurrentQuoteFormType[] | null>>;
  setQuoteFormPrice: Dispatch<SetStateAction<number | null>>;
  quoteFormPrice: number | null;
}

export const AppContext = createContext<AppContextProviderType | null>(null);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentQuoteForm, setCurrentQuoteForm] = useState<CurrentQuoteFormType[] | null>(currentQuoteFormData);
  const [quoteFormPrice, setQuoteFormPrice] = useState<number | null>(0);

  useEffect(() => {
    if (currentQuoteForm) {
      const data = currentQuoteForm && currentQuoteForm.map((item: CurrentQuoteFormType) => {
        if (item.type === quoteFormType.slider && item.answer) {
          return (item.answer as number) * item.price;
        } else if (item.type === quoteFormType.cardRadio && item.answer && currentQuoteForm[0].answer) {
          return (item.answer as CurrentQuoteFormOptionType).price * (currentQuoteForm[0].answer as number);
        } else if (item.type === quoteFormType.checkbox && item.answer) {
          const filteredCheckboxAnswers = (item.answer as CurrentQuoteFormOptionType[]).map((checkboxItem: CurrentQuoteFormOptionType) => checkboxItem.price);
          return sum(filteredCheckboxAnswers);
        }
      }).filter((item: any) => !isNil(item))

      setQuoteFormPrice(sum(data))
    }
  }, [currentQuoteForm])

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
