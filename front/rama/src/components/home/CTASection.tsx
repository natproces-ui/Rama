export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/api/placeholder/1920/400" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Rejoignez notre combat
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Votre soutien peut transformer des vies. Ensemble, mettons fin à la souffrance causée par 
          la fistule obstétricale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('don')}
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow-lg text-lg"
          >
            Faire un don
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition text-lg"
          >
            Devenir bénévole
          </button>
        </div>
      </div>
    </section>
  );
}