'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';
import { isNil, sum } from 'lodash';
import { currentQuoteFormData } from '@/context/data/quote-form';
import { UserType } from '@/interfaces/User';
import { useRouter } from 'next/navigation';

export const quoteFormType = {
  cardRadio: 'cardRadio',
  checkbox: 'checkbox',
  slider: 'slider',
  title: 'title',
  contactFirstName: 'contactFirstName',
  contactLastName: 'contactLastName',
  contactEmail: 'contactEmail',
  contactPhoneNumber: 'contactPhoneNumber',
  contactCompanyName: 'contactCompanyName',
  contactCompanyWebsite: 'contactCompanyWebsite',
  contactMessage: 'contactMessage',
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
  loggedInUser: UserType | null;
}

export const AppContext = createContext<AppContextProviderType | null>(null);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [currentQuoteForm, setCurrentQuoteForm] = useState<CurrentQuoteFormType[] | null>(currentQuoteFormData);
  const [quoteFormPrice, setQuoteFormPrice] = useState<number | null>(0);
  const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);

  useEffect(() => {
    if (currentQuoteForm) {
      const data = currentQuoteForm.map((item: CurrentQuoteFormType) => {
        if (item.type === quoteFormType.slider && item.answer) {
          // The price becomes 300 on the 4th page and beyond
          if ((item.answer as number) >= 4) {
            let reduced = ((item.answer as number) - 3) * 300;
            let actual = 3 * item.price;
            return reduced + actual;
          } else {
            return (item.answer as number) * item.price;
          }
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

  useEffect(() => {
    const storedUserSignedin = localStorage.getItem('user');
    const userSignedin = storedUserSignedin ? JSON.parse(storedUserSignedin) : null;

    if (userSignedin) {
      setLoggedInUser(userSignedin);
    } else {
      router.push('/');
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        currentQuoteForm,
        setCurrentQuoteForm,
        quoteFormPrice,
        setQuoteFormPrice,
        loggedInUser,
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
