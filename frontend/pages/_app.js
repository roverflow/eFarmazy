import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
