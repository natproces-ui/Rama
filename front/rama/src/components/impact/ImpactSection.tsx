// src/components/rama/impact/ImpactSection.tsx
import { ImpactSectionProps } from '@/types/components';

export default function ImpactSection({ stats }: ImpactSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Grâce à votre soutien, nous avons pu accomplir des progrès significatifs dans la lutte
            contre la fistule obstétricale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.womenHelped}+
            </h3>
            <p className="text-gray-700 font-medium">Femmes soignées</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.communitiesSensitized}+
            </h3>
            <p className="text-gray-700 font-medium">Communautés sensibilisées</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.medicalPartners}+
            </h3>
            <p className="text-gray-700 font-medium">Partenaires médicaux</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.yearsOfExperience}+
            </h3>
            <p className="text-gray-700 font-medium">Années d&apos;expérience</p>
          </div>
        </div>
      </div>
    </section>
  );
}