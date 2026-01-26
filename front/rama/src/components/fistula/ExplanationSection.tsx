import { AlertCircle, Heart, Users, FileText } from 'lucide-react';

export default function ExplanationSection() {
  return (
    <section id="fistule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qu'est-ce que la fistule obstétricale ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une condition médicale évitable qui affecte des milliers de femmes chaque année
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Information médicale"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Définition</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La fistule obstétricale est une lésion qui se forme entre le vagin et la vessie ou le rectum 
              lors d'un accouchement prolongé et difficile sans intervention médicale appropriée. Elle entraîne 
              une incontinence chronique et a des conséquences dévastatrices sur la vie des femmes affectées.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Causes principales</h4>
                  <p className="text-gray-600 text-sm">
                    Travail prolongé, accès limité aux soins obstétriques d'urgence, mariages précoces
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Impact social</h4>
                  <p className="text-gray-600 text-sm">
                    Isolement, rejet social, dépression, perte d'emploi et stigmatisation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Traitement</h4>
                  <p className="text-gray-600 text-sm">
                    Chirurgie réparatrice avec un taux de succès de 90% et réadaptation complète
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Chiffres clés</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2 millions</div>
              <p className="text-gray-600">Femmes affectées dans le monde</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
              <p className="text-gray-600">Nouveaux cas chaque année</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">Évitable avec des soins appropriés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}