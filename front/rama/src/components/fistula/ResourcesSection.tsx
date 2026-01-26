// src/components/rama/fistula/ResourcesSection.tsx
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';

export default function ResourcesSection() {
  const resources = [
    {
      title: 'Guide de prévention',
      description: 'Document complet sur la prévention de la fistule obstétricale',
      type: 'PDF',
      size: '2.5 MB',
      icon: FileText
    },
    {
      title: 'Brochure d\'information',
      description: 'Information pour les communautés et les familles',
      type: 'PDF',
      size: '1.8 MB',
      icon: BookOpen
    },
    {
      title: 'Rapport annuel 2024',
      description: 'Bilan de nos activités et impact',
      type: 'PDF',
      size: '3.2 MB',
      icon: FileText
    }
  ];

  const externalLinks = [
    { title: 'Organisation Mondiale de la Santé (OMS)', url: 'https://www.who.int/fr' },
    { title: 'UNFPA - Campagne contre la fistule', url: 'https://www.unfpa.org' },
    { title: 'Fistula Foundation', url: 'https://fistulafoundation.org' },
    { title: 'EngenderHealth', url: 'https://www.engenderhealth.org' }
  ];

  const handleDownload = (resourceTitle: string) => {
    // TODO: Implémenter le téléchargement réel depuis Firebase Storage
    alert(`Téléchargement de "${resourceTitle}" - À implémenter avec Firebase Storage`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ressources et documentation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accédez à nos documents et liens utiles pour en savoir plus
          </p>
        </div>

        {/* Documents téléchargeables */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Documents téléchargeables</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{resource.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDownload(resource.title)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Liens externes */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Liens utiles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  {link.title}
                </span>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition" />
              </a>
            ))}
          </div>
        </div>

        {/* Section informative supplémentaire */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'informations supplémentaires ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est disponible pour répondre à vos questions et vous fournir 
              des ressources adaptées à vos besoins.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              Nous contacter
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}