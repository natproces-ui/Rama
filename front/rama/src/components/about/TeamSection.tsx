export default function TeamSection() {
  const team = [
    { name: 'Dr. Aminata Diallo', role: 'Directrice Médicale', image: '/images/teams/photo_dm.jpg' },
    { name: 'Fatou Sow', role: 'Coordinatrice des Programmes', image: '/images/teams/photo_coor.jpg' },
    { name: 'Ibrahim Keita', role: 'Responsable Partenariats', image: '/images/teams/photo_respo.jpg' },
    { name: 'Aissatou Ba', role: 'Chef de Projet Sensibilisation', image: '/images/teams/photo_chef.jpg' }
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

        {/* CORRECTION: Ajout de items-start sur la grille */}
        <div className="grid md:grid-cols-4 gap-8 justify-items-center items-start">
          {team.map((member, index) => (
            <div key={index} className="text-center group w-full">
              {/* CORRECTION: Ajout d'une hauteur fixe sur le conteneur de l'image */}
              <div className="relative mb-4 overflow-hidden rounded-xl h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
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