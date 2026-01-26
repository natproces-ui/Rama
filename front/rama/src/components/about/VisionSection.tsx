import { Target, Eye, Lightbulb } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un monde où aucune femme ne souffre de fistule obstétricale et où toutes ont accès 
            à des soins de qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Prévention</h3>
            <p className="text-gray-600">
              Réduire drastiquement les cas de fistule obstétricale par la sensibilisation et l'éducation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Soins accessibles</h3>
            <p className="text-gray-600">
              Garantir un accès équitable aux soins chirurgicaux pour toutes les femmes affectées.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomisation</h3>
            <p className="text-gray-600">
              Permettre aux femmes guéries de retrouver leur dignité et leur indépendance économique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}