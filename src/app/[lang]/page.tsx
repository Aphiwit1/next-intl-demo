import Image from "next/image";
import styles from "../page.module.css";
import { getDictionary } from "./dictionaries";
import Hero from "../components/Hero";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return <Hero dict={dict} />;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "th" }];
}

const englishMetadata = {
  title: "Hello Enlish Man",
};
const portugueseMetadata = {
  title: "Hello Thai Man",
};

export async function generateMetadata({ params }: any) {
  return params.lang === "en" ? englishMetadata : portugueseMetadata;
}