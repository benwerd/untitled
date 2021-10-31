import '../styles/globals.css'
import Layout from "../components/Layout";

function Untitled({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default Untitled
