import { isNil } from 'lodash'
import { CurrentQuoteFormType } from '@/context/app-context'

const quoteFormName = {
  pageNumber: 'pageNumber',
  designService: 'designService',
  developmentService: 'developmentService',
  animations: 'animations',
  contactFirstName: 'contactFirstName',
  contactLastName: 'contactLastName',
  contactEmail: 'contactEmail',
  contactPhoneNumber: 'contactPhoneNumber',
  contactCompanyName: 'contactCompanyName',
  contactCompanyWebsite: 'contactCompanyWebsite',
  contactMessage: 'contactMessage',
}

export const onValidateFormFlow = (currentQuoteForm: CurrentQuoteFormType[]) => {
  if (!currentQuoteForm) {
    return {
      success: false,
      message: 'Please answer a question',
    }
  } else {
    const included = [
      quoteFormName.pageNumber,
      quoteFormName.designService,
      quoteFormName.developmentService,
      quoteFormName.animations,
      quoteFormName.contactFirstName,
      quoteFormName.contactLastName,
      quoteFormName.contactEmail,
      quoteFormName.contactPhoneNumber,
      quoteFormName.contactCompanyName,
    ]

    const error: CurrentQuoteFormType | undefined = currentQuoteForm.find(formItem => included.includes(formItem.name || '') && !formItem.answer)

    if (!isNil(error)) {
      switch(error.name) {
        case quoteFormName.pageNumber:
          return {
            success: false,
            message: 'Please specify a number of page',
          }
        case quoteFormName.designService:
          return {
            success: false,
            message: 'Please select a design service',
          }
        case quoteFormName.developmentService:
          return {
            success: false,
            message: 'Please select a development service',
          }
        case quoteFormName.animations:
          return {
            success: false,
            message: 'Please specify an animation option',
          }
        case quoteFormName.contactFirstName:
          return {
            success: false,
            message: 'Please enter your first name',
          }
        case quoteFormName.contactLastName:
          return {
            success: false,
            message: 'Please enter your last name',
          }
        case quoteFormName.contactEmail:
          return {
            success: false,
            message: 'Please enter your email',
          }
        case quoteFormName.contactPhoneNumber:
          return {
            success: false,
            message: 'Please enter your phone number',
          }
        case quoteFormName.contactCompanyName:
          return {
            success: false,
            message: 'Please enter your company name',
          }
      }
    } else {
      return {
        success: true,
        message: 'Is Valid',
      }
    }
  }
}
