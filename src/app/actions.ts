'use server'

import { CurrentQuoteFormType } from '@/context/app-context'

export async function submitForm(formData: FormData) {
  const form: any = Object.fromEntries(formData)

  const currentQuoteForm: CurrentQuoteFormType[] = JSON.parse(form.currentQuoteForm)

  console.log({ currentQuoteForm })

  // mutate data
  // revalidate cache

  
}
