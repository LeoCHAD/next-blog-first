import { Loading } from "../components/Loading";
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
