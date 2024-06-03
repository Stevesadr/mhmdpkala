import NavbarResponsive from "@/components/NavbarResponsive";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { useId } from "react";
const iranSansLocalFont = localFont({ src: "../font/IranianSans.ttf" });
export default function App({ Component, pageProps }) {
  const navbarId = useId()
  return (
    <>
      <main className={`${iranSansLocalFont.className} divmain`}>
      <NavbarResponsive key={navbarId} />
        <Component {...pageProps} />
      </main>
    </>
  );
}
