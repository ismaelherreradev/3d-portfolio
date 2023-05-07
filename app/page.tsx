import Hero from '@/components/hero';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main>
      <div className='relative z-0 bg-primary'>
        <div>
          <Hero />
          <Navbar />
        </div>
      </div>
    </main>
  );
}
