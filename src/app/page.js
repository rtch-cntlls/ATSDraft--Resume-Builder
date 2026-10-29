import Navbar from '../components/layout/navbar';
import Hero from '../components/landing/hero';
import Tips from '../components/landing/tips';
import Pay from '../components/landing/nopay';
import ATS from '../components/landing/ats';
import Feature from '../components/landing/features';
import Footer from '../components/layout/footer';

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light-subtle">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <Pay />
        <ATS />
        <Tips />
        <Feature />
      </main>
      <Footer />
    </div>
  );
}