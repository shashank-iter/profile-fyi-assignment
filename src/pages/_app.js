import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
const Layout = dynamic(() => import("@/components/Layout/Layout"), {
  ssr: false,
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
