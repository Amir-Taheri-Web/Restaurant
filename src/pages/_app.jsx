import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <div className={nunito.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
