export default function HistorySection() {
  const timeline = [
    { year: '2015', event: 'Création de la Fondation Rama', description: 'Début de notre combat contre la fistule obstétricale' },
    { year: '2017', event: 'Première campagne majeure', description: '50 femmes soignées dans 10 villages' },
    { year: '2019', event: 'Expansion régionale', description: 'Ouverture de 3 centres de soins' },
    { year: '2021', event: 'Partenariats internationaux', description: 'Collaboration avec l\'OMS et l\'UNFPA' },
    { year: '2025', event: 'Plus de 500 femmes aidées', description: 'Un impact grandissant chaque année' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre histoire
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plus de 10 ans d'engagement au service des femmes
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block"></div>

          {timeline.map((item, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.event}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}