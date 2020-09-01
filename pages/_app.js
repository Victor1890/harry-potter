import "../styles/globals.css";
import { Fragment } from "react";
import Head from "../components/head";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Fragment>
      <Head />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
