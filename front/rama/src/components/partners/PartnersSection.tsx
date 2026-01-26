export default function PartnersSection() {
  const partners = [
    { id: '1', name: 'Partenaire 1', logoUrl: '/api/placeholder/120/60' },
    { id: '2', name: 'Partenaire 2', logoUrl: '/api/placeholder/120/60' },
    { id: '3', name: 'Partenaire 3', logoUrl: '/api/placeholder/120/60' },
    { id: '4', name: 'Partenaire 4', logoUrl: '/api/placeholder/120/60' },
    { id: '5', name: 'Partenaire 5', logoUrl: '/api/placeholder/120/60' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec des organisations partageant notre vision pour maximiser notre impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[120px] shadow-sm hover:shadow-md transition group"
            >
              <img 
                src={partner.logoUrl} 
                alt={partner.name}
                className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}