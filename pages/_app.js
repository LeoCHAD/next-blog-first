import { Loading } from "../components/loading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Loading />
    </>
  );
}

export default MyApp;
