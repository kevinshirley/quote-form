'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'

import { currentQuoteFormData } from '@/context/data/quote-form'

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
  const [currentQuoteForm, setCurrentQuoteForm] = useState<CurrentQuoteFormType[] | null>(currentQuoteFormData);
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
