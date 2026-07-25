import About from "@/components/About";
import Approach from "@/components/Approach";
import Closing from "@/components/Closing";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Services />
      <Sectors />
      <Approach />
      <Closing />
      <Footer />
    </>
  );
}