import React from 'react'
import Map from './Map'
import { useTranslation } from 'react-i18next';
import SendEmailForm from './SendEmailForm';


export default function Contact() {

  const { t } = useTranslation();
  return (
    <div className='my-40' id='Contact'>
      <section className='flex gap-16 justify-center items-center'>
        <div className='bg-slate w-80 h-32 p-6'>
          <h1 className='text-yellow font-main'>{t('contact.address')}</h1>
          <div className='flex gap-4 mt-3'>
            <img className='w-5 h-5' src="https://www.svgrepo.com/show/532539/location-pin.svg" alt="" />
            <h2>{t('contact.addressDetail')}</h2>
          </div>
        </div>
        <div className='bg-slate w-80 h-32 p-6'>
          <h1 className='text-yellow font-main'>{t('contact.phone')}</h1>
          <div className='flex gap-4 mt-3'>
            <img className='w-5 h-5' src="https://www.svgrepo.com/show/535565/phone.svg" alt="" />
            <h2>{t('contact.phoneNumber')}</h2>
          </div>
        </div>
        <div className='bg-slate w-80 h-32 p-6'>
          <h1 className='text-yellow font-main'>{t('contact.email')}</h1>
          <div className='flex gap-4 mt-3'>
            <img className='w-5 h-5' src="https://www.svgrepo.com/show/435312/email.svg" alt="" />
            <h2>{t('contact.emailAddress')}</h2>
          </div>
        </div>
      </section>

      <section className='w-2/3 gap-10 mx-auto flex my-20 '>
        <div className='w-2/3 '>
          <Map />
        </div>
        <div className='w-1/3'>
          <SendEmailForm />
        </div>
      </section>
    </div>
  )
}
