import NavbarResponsive from "@/components/NavbarResponsive";
import Store from "@/redux/Store";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { useId } from "react";
import { Provider } from "react-redux";
const iranSansLocalFont = localFont({ src: "../font/IranianSans.ttf" });
export default function App({ Component, pageProps }) {
  const navbarId = useId()
  return (
    <>
      <main className={`${iranSansLocalFont.className} divmain`}>
        <Provider store={Store}>
      <NavbarResponsive key={navbarId} />
        <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}
