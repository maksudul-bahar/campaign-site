import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Profile from '@/components/Profile';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Introduction from '@/components/Introduction';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Manifesto />
      <Introduction />
      {/* <Profile />
      <Gallery />
      <Footer /> */}
    </main>
  );
}
