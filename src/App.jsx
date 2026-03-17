import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cases from './components/Cases';
import Process from './components/Process';
import Stack from './components/Stack';
import Faq from './components/Faq';
import Contacts from './components/Contacts'; // Импорт
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen selection:bg-accent selection:text-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Process />
      <Stack />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;