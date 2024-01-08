import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

export default function page({params: {locale}}:any) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('Contact');
  return (
    
    <div>{t('hello')}</div>
  )
}

const locales = ['en', 'th'];
export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  } 