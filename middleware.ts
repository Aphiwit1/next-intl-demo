import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["th", "en"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: any) {
    const acceptLanguage = request.headers.get("accept-language") ?? "undefined" 
  let headers = { "accept-language": acceptLanguage };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: any) {
    console.log('middleware work!')
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  console.log('locale: ', locale)
  console.log('pathname: ', pathname)
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
   
    // '/'
  ],
};