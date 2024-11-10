import React from 'react'
import Map from './Map'
import { useTranslation } from 'react-i18next';
import SendEmailForm from './SendEmailForm';


export default function Contact() {

  const { t } = useTranslation();
  return (
    <div className="my-20 md:my-40" id="Contact">
      {/* Section for Contact Information */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
        {/* Address */}
        <div className="bg-slate w-full md:w-80 h-auto p-6 text-center md:text-left">
          <h1 className="text-yellow text-xl md:font-main">{t("contact.address")}</h1>
          <div className="flex gap-4 mt-3 justify-center md:justify-start items-center">
            <img className="w-5 h-5" src="https://www.svgrepo.com/show/532539/location-pin.svg" alt="Location icon" />
            <h2>{t("contact.addressDetail")}</h2>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-slate w-full md:w-80 h-auto p-6 text-center md:text-left">
          <h1 className="text-yellow text-xl md:font-main">{t("contact.phone")}</h1>
          <div className="flex gap-4 mt-3 justify-center md:justify-start items-center">
            <img className="w-5 h-5" src="https://www.svgrepo.com/show/535565/phone.svg" alt="Phone icon" />
            <h2>{t("contact.phoneNumber")}</h2>
          </div>
        </div>

        {/* Email */}
        <div className="bg-slate w-full md:w-80 h-auto p-6 text-center md:text-left">
          <h1 className="text-yellow text-xl md:font-main">{t("contact.email")}</h1>
          <div className="flex gap-4 mt-3 justify-center md:justify-start items-center">
            <img className="w-5 h-5" src="https://www.svgrepo.com/show/435312/email.svg" alt="Email icon" />
            <h2>{t("contact.emailAddress")}</h2>
          </div>
        </div>
      </section>

      {/* Section for Map and Email Form */}
      <section className="w-full md:w-2/3 gap-10 mx-auto flex flex-col md:flex-row items-center my-10 md:my-20">
        {/* Map */}
        <div className="w-full md:w-2/3 mb-10 md:mb-0">
          <Map />
        </div>
        {/* Email Form */}
        <div className="w-2/3 md:w-1/3">
          <SendEmailForm />
        </div>
      </section>
    </div>

  )
}
