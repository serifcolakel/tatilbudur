import Head from "next/head";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Tour from "./components/Tour";
import Reservation from "./components/Reservation";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Article from "./components/Article";
import DiscountContact from "./components/DiscountContact";
import MobileApp from "./components/MobileApp";
import Popular from "./components/Popular";
export default function Home() {
  return (
    <div className="main w-full mx-auto md:flex md:flex-col md:items-center md:justify-center md:w-[1140px] md:mx-auto">
      <Head>
        <title>
          TatilBudur ile %50'ye Varan İndirimli Tatil Fırsatlarını Kaçırmayın!
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1113366786186141696/cGFEf_Py_400x400.png"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <Reservation />
      <div className="md:w-[1360px] w-full flex flex-col items-center gap-y-6">
        <Cards />
        <Tour />
        <Popular />
        <DiscountContact />
        <MobileApp />
        <Support />
        <Article />
        <Footer />
      </div>
    </div>
  );
}
