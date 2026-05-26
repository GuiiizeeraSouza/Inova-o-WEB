import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import Steps from "@/components/Steps";
import Fleet from "@/components/Fleet";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Fleet />
        <Benefits />
        <Testimonials />
        <SearchForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
