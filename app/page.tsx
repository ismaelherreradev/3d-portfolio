import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import { About, Contact, Feedbacks, Works } from '@/components/sections';

export default function Home() {
  return (
    <main>
      <div className='bg-primary relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Hero />
          <Navbar />
        </div>
        <About />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </main>
  );
}
