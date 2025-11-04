import { industries } from '../data';

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Industries We Serve</h2>
          <p className="text-lg text-gray-600 mt-2">Your trusted partner in Research, Implementation, and Training.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={industry.image} alt={industry.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <industry.icon className="w-8 h-8 text-blue-700 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">{industry.name}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}