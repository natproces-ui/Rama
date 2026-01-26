import { Heart, Users, Award } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="a-propos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La Fondation Rama lutte activement contre la fistule obstétricale à travers la
            sensibilisation, la prise en charge médicale et la réinsertion sociale des femmes touchées.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sensibilisation</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous informons les communautés sur les causes de la fistule obstétricale et comment la prévenir.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prise en charge</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous facilitons l'accès aux soins médicaux et chirurgicaux pour les femmes atteintes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Réinsertion</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous accompagnons les femmes dans leur réinsertion sociale et économique après leur guérison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}