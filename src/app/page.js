import Navbar from '../components/layout/navbar';
import Hero from '../components/landing/hero';
import Formula from '../components/landing/formula';
import Pay from '../components/landing/nopay';

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light-subtle">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <Pay />
        <Formula />
      </main>
    </div>
  );
}