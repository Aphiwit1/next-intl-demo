import React from 'react'
import { getDictionary } from '../dictionaries';
import ContactIntro from './components/ContactIntro';




export default async function page({
    params: { lang },
  }: {
    params: { lang: string };
  }) {

    const dict = await getDictionary(lang);
    
  return (
    <div><ContactIntro dict={dict} /></div>
  )
}


export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "th" }];
  }
  