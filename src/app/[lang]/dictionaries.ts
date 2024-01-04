import 'server-only'
 
const dictionaries:any = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  th: () => import('./dictionaries/th.json').then((module) => module.default),
}
 
export const getDictionary = async (locale:any) => dictionaries[locale]()