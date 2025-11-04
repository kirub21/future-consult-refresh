export default function Hero() {
  return (
    <section id="home" className="relative pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/1eab3262-66c9-44c8-980a-696d453f45e0/hero-background-bi1gtvz-1762242173808.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
          Working Together for a Sustainable Future
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          At SEEF Consult, we’re dedicated to fostering the sustainable use of our precious environmental and natural resources for the benefit of both current and future generations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#about" className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-300 transform hover:scale-105">
            Learn More
          </a>
          <a href="#contact" className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}