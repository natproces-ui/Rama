export default function TeamSection() {
  const team = [
    { name: 'Dr. Aminata Diallo', role: 'Directrice Médicale', image: '/api/placeholder/150/150' },
    { name: 'Fatou Sow', role: 'Coordinatrice des Programmes', image: '/api/placeholder/150/150' },
    { name: 'Ibrahim Keita', role: 'Responsable Partenariats', image: '/api/placeholder/150/150' },
    { name: 'Aissatou Ba', role: 'Chef de Projet Sensibilisation', image: '/api/placeholder/150/150' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des professionnels dévoués au service de la cause
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-purple-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}