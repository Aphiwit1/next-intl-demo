"use client";


import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { lazy } from "react";

export default function ContactIntro({ dict }: any) {
  const router = useRouter()
  const pathName = usePathname()
  const currentLang = pathName.split('/')[1]; 
  const switchLang = (lang: string) => {
    console.log('log time: 05/01/2023')
 
    const newPathname = pathName.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPathname);
  }

  return (
    <main className="contact-container">
      <div>
        <button onClick={() => switchLang('th')}>TH</button> <button onClick={() => switchLang('en')}>EN</button>
      </div>
      <br></br>

      <div>{dict.contact.greeting}</div>

      <nav>  <Link href={`/${currentLang}/hello`}>Contact Page</Link></nav>
      <nav>  <Link href={`/${currentLang}/`}>Home Page</Link></nav>
    </main>
  );
}
