import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
export default function Home({params: {locale}}:any) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
  }

  const locales = ['en', 'th'];
  export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  } 