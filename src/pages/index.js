import Head from "next/head";
import Nav from "../components/Nav"
import Header from "../components/Header";
import Features from "../components/Features";
import Download from "../components/Download"

export default function Home() {
  return (
    <div className="container justify-center mx-auto lg:max-w-screen-lg ">
        <Head>
          <title>bOffice</title>
        </Head>
        <Nav/>
        <Header/>
        <Features/>
        <Download/>
      
    </div>
  );
}