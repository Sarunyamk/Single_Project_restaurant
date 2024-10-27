import React from "react";

import { useTranslation } from 'react-i18next';


export default function ScrollText() {

  const { t } = useTranslation();

  const textItems = t('scrollText', { returnObjects: true });

  return (
    <section className="relative bg-yellow py-4 overflow-hidden">
      <div className="whitespace-nowrap flex">
        <div className=" text-scroll-left inline-block">

          {textItems.concat(textItems).map((text, index) => (
            <div key={index} className="text-gray-900 font-main inline-block mx-10">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
