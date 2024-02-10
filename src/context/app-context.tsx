"use client"

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'

interface CurrentQuoteFormType {
  
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
