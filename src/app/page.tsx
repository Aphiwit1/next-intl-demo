import { redirect } from 'next/navigation';
export default async function Home({
    params: { lang },
  }: {
    params: { lang: string };
  }) {
    // redirect('/en');
  }

