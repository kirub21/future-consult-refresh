import { thematicAreas } from '../data';
import { CheckCircle } from 'lucide-react';

export default function ThematicAreas() {
  return (
    <section id="thematic-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Thematic Areas</h2>
          <p className="text-lg text-gray-600 mt-2">We focus on a range of interconnected areas to deliver comprehensive solutions.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {thematicAreas.map((area) => (
              <div key={area} className="flex items-center bg-gray-100 rounded-full px-6 py-3 text-gray-700 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}