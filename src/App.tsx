import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import ThematicAreas from './components/ThematicAreas';
import TrainingSubscription from './components/TrainingSubscription';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Toaster richColors />
      <Header />
      <main>
        <Hero />
        <Industries />
        <ThematicAreas />
        <TrainingSubscription />
      </main>
      <Footer />
    </div>
  );
}