"use client";


import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { lazy } from "react";

export default function Hero({ dict }: any) {
  const router = useRouter()
  const pathName = usePathname()
  const currentLang = pathName.split('/')[1]; 

  const switchLang = (lang: string) => {

    const newPathname = pathName.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPathname);
  }
  return (
    <main className="hero-container">
      <div>
        <button onClick={() => switchLang('th')}>TH</button> <button onClick={() => switchLang('en')}>EN</button>
      </div>
      <br></br>
    

      <div>
        {dict.hello.greeting}</div>

      <nav>  <Link href={`/${currentLang}/hello`}>Contact Page</Link></nav>
      <nav>  <Link href={`/${currentLang}/`}>Home Page</Link></nav>
    </main>
  );
}
