import Head from "next/head";
import Nav from "../components/Nav"
import Section1 from "../components/Section1";

export default function Home() {
  return (
    <div>
        <Head>
          <title>bOffice</title>
        </Head>
        <Nav/>
        <Section1/>
      
    </div>
  );
}