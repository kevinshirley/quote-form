import type { NextApiRequest, NextApiResponse } from 'next'
import { isNil, isEmpty } from 'lodash'
const nodemailer = require("nodemailer")
import { CurrentQuoteFormType, CurrentQuoteFormOptionType, quoteFormType } from '@/context/app-context'

const companyName = 'Softelo'
const companyEmail = 'kevin@softelogroup.com'
const emailSubject = 'Website Development Quote'

const TRANSPORTER_EMAIL = 'info@billmate.io'
const TRANSPORTER_PASSWORD = 'Canada21Pay'
 
type ResponseData = {
  message: string
  success: boolean
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const parsed = JSON.parse(req.body)

    const currentQuoteForm: CurrentQuoteFormType[] = parsed.currentQuoteForm
    const quoteFormPrice: number = parsed.quoteFormPrice

    const nodeMailTransporter = nodemailer.createTransport({
      host: 'smtp.dreamhost.com',
      port: 465,
      secure: true,
      auth: {
        user: TRANSPORTER_EMAIL,
        pass: TRANSPORTER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
    })

    console.log({ 'server currentQuoteForm': currentQuoteForm })

    // Building email template
    let companyHtmlEmail;
    let contactHtmlEmail;
    let detailedAnswersHtmlEmail = '<div style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB; margin: 25px 0;"></div>';
    const contactEmail = currentQuoteForm.find(item => item.name === 'contactEmail')?.answer

    if (!isEmpty(currentQuoteForm) && !isNil(currentQuoteForm)) {
      // quoteFormPrice
      detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li style="font-weight: bolder; margin-bottom: 10px;">' + 'Website Development Estimation' + '</li>';
      detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li>$' + quoteFormPrice + '</li>';
      detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<div style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB; margin: 25px 0;"></div>';

      currentQuoteForm.map(answerItem => {
        if (answerItem.type === 'checkbox') {
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li style="font-weight: bolder; margin-bottom: 10px;">' + answerItem.question + '</li>';

          {(answerItem.answer as CurrentQuoteFormOptionType[])?.map(option => {
            detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li>' + option?.label + '</li>';
          })}
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<div style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB; margin: 25px 0;"></div>';
        } else if (answerItem.type === 'cardRadio') {
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li style="font-weight: bolder; margin-bottom: 10px;">' + answerItem.question + '</li>';
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li>' + (answerItem.answer as CurrentQuoteFormOptionType)?.title + '</li>';
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<div style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB; margin: 25px 0;"></div>';
        } else {
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li style="font-weight: bolder; margin-bottom: 10px;">' + answerItem.question + '</li>';
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<li>' + answerItem?.answer + '</li>';
          detailedAnswersHtmlEmail = detailedAnswersHtmlEmail + '<div style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB; margin: 25px 0;"></div>';
        }
      });
    }

    const logInBillmateHtmlEmail = '<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680"><tbody><tr><td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%"><tr><td style="padding-bottom:40px;padding-left:30px;padding-right:30px;padding-top:40px;"><div style="font-family: sans-serif"><div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21px; color: #2f2f2f; line-height: 1.5;"><p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 21px;"><span style="font-size:14px;"><span style="color:#000000;"><a href="https://billmate.io/login">Log in</a> your Billmate account for more details</span></span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table>';

    let htmlEmail1 = '<!DOCTYPE html><html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/><link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css"/><link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"/><!--<![endif]--><style>* { box-sizing: border-box; } body { margin: 0; padding: 0; } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; } #MessageViewBody a { color: inherit; text-decoration: none; } p { line-height: inherit } @media (max-width:700px) { .icons-inner { text-align: center; } .icons-inner td { margin: 0 auto; } .row-content { width: 100% !important; } .column .border { display: none; } table { table-layout: fixed !important; } .stack .column {width: 100%; display: block;}}</style></head><body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;"><table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #efefef; color: #000000; width: 680px;" width="680"><tbody><tr><td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="empty_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tr><td><div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680"><tbody><tr><td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%"><tr><td style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:50px;"><div style="font-family: sans-serif"><div class="txtTinyMce-wrapper" style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;"><p style="margin: 0; text-align: center; letter-spacing: 1px;"><strong><span style="font-size:18px;">Quote</span></strong></p></div></div></td></tr></table><table border="0" cellpadding="10" cellspacing="0" class="list_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%"><tr><td><ul start="1" style="margin: 0; padding: 0; list-style-position: inside; color: #000000; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; list-style: none;">';

    let htmlEmail2 = '</ul></td></tr></table><table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tr><td><div align="center"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tr></tr></table></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table>';

    let htmlEmail3 = '<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 680px;" width="680"><tbody><tr><td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%"><div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;"></div></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 680px;" width="680"><tbody><tr><td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%"><table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%"><tr><td><div style="font-family: sans-serif"><div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #cfceca; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;"><p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:12px;">Powered by <a href="https://billmate.io" style="color: #fff">Billmate</a></span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>';

    // Email templates
    companyHtmlEmail = htmlEmail1 + detailedAnswersHtmlEmail + htmlEmail2 + logInBillmateHtmlEmail + htmlEmail3;
    contactHtmlEmail = htmlEmail1 + detailedAnswersHtmlEmail + htmlEmail2 + htmlEmail3;

    // Send email to company
    const companyMsg = {
      from: companyName + ' <' + TRANSPORTER_EMAIL + '>',
      to: companyEmail,
      subject: emailSubject,
      text: emailSubject,
      html: companyHtmlEmail,
    }

    await new Promise((resolve, reject) => {
      console.log('sendMailViaNodeMailer')
      nodeMailTransporter.sendMail(companyMsg, function(err: any, data: any) {
        if (err) {
          console.error(err)
          reject(err)
          res.status(400).send({ success: false, message: 'Error: While form submit by email' })
        } else {
          resolve(data)
          console.log('Email Sent Successfully')
        }
      });
    })

    // Send email to contact
    const contactMsg = {
      from: companyName + ' <' + TRANSPORTER_EMAIL + '>',
      to: contactEmail,
      subject: emailSubject,
      text: emailSubject,
      html: contactHtmlEmail,
    }

    await new Promise((resolve, reject) => {
      console.log('sendMailViaNodeMailer')
      nodeMailTransporter.sendMail(contactMsg, function(err: any, data: any) {
        if (err) {
          console.error(err)
          reject(err)
          res.status(400).send({ success: false, message: 'Error: While form submit by email' })
        } else {
          resolve(data)
          console.log('Email Sent Successfully')
        }
      });
    })

    console.log('Sending email')

    res.status(200).send({ success: true, message: 'Form submitted by email' })
  } catch(error) {
    console.log({ error })
    const nodeMailTransporter = nodemailer.createTransport({
      host: 'smtp.dreamhost.com',
      port: 465,
      secure: true,
      auth: {
        user: TRANSPORTER_EMAIL,
        pass: TRANSPORTER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
    })
    
    // send mail via nodemailer
    const sendMailViaNodeMailer = async (mailMsg: any) => {
      console.log('sendMailViaNodeMailer')
      await nodeMailTransporter.sendMail(mailMsg, function(err: any, data: any) {
        if (err) {
          console.log(err);
          res.status(400).send({ success: false, message: 'Error: While form submit by email' })
        } else {
          console.log('Email Sent Successfully');
          res.status(200).send({ success: true, message: 'Form submitted by email' })
        }
      })
    }

    const companyMsg = {
      from: companyName + ' <' + TRANSPORTER_EMAIL + '>',
      to: companyEmail,
      subject: `Form Submitted`,
      text: `Form Submitted`,
      html: 'Error in the Form Quote `submitForm` function',
    }

    await new Promise((resolve, reject) => {
      console.log('sendMailViaNodeMailer')
      nodeMailTransporter.sendMail(companyMsg, function(err: any, data: any) {
        if (err) {
          console.error(err)
          reject(err)
          res.status(400).send({ success: false, message: 'Error: While form submit by email' })
        } else {
          resolve(data)
          console.log('Email Sent Successfully')
        }
      });
    })
  }
}
