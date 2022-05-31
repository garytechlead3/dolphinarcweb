import Head from "next/head";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
// import Main from '../components/Main/Main'
import Roadmap from "../components/Roadmap/Roadmap";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/Main/Main"));
const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dolphin Arc NFT." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <title>Dolphin Arc NFT</title>
      </Head>
      <Main/>
      <About />
      <Roadmap />
      <Footer />
    </>
  );
};

export default Home;
