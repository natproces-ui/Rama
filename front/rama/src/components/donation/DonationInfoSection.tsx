import { Copy, CheckCircle, CreditCard, Smartphone, Building } from 'lucide-react';
import { useState } from 'react';

type Account = 
  | { label: string; number: string; name: string }
  | { label: string; value: string; field: string };

type PaymentMethod = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  color: string;
  accounts: Account[];
};

export default function DonationInfoSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'momo',
      icon: Smartphone,
      title: 'Mobile Money',
      color: 'from-yellow-500 to-orange-500',
      accounts: [
        { label: 'Orange Money', number: '+221 77 123 45 67', name: 'Fondation Rama' },
        { label: 'Wave', number: '+221 78 987 65 43', name: 'Fondation Rama' }
      ]
    },
    {
      id: 'bank',
      icon: Building,
      title: 'Virement Bancaire',
      color: 'from-blue-500 to-indigo-500',
      accounts: [
        { label: 'Banque', value: 'CBAO', field: 'bank' },
        { label: 'IBAN', value: 'SN12 3456 7890 1234 5678 90', field: 'iban' },
        { label: 'BIC/SWIFT', value: 'CBAOSNDA', field: 'swift' },
        { label: 'Titulaire', value: 'Fondation Rama', field: 'holder' }
      ]
    },
    {
      id: 'card',
      icon: CreditCard,
      title: 'Carte Bancaire',
      color: 'from-purple-500 to-pink-500',
      accounts: [
        { label: 'Numéro de carte', value: '4532 **** **** 1234', field: 'card' },
        { label: 'Nom', value: 'FONDATION RAMA', field: 'cardname' }
      ]
    }
  ];

  return (
    <section id="don" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Faire un don
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Votre générosité change des vies. Choisissez le moyen de paiement qui vous convient.
          </p>
        </div>

        {/* Montants suggérés */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Montants suggérés</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { amount: 5000, display: '5 000' },
              { amount: 10000, display: '10 000' },
              { amount: 25000, display: '25 000' },
              { amount: 50000, display: '50 000' }
            ].map(({ amount, display }) => (
              <button
                key={amount}
                className="border-2 border-purple-200 hover:border-purple-600 hover:bg-purple-50 rounded-lg p-4 text-center transition"
              >
                <div className="text-lg md:text-2xl font-bold text-purple-600 truncate">{display}</div>
                <div className="text-sm text-gray-600">FCFA</div>
              </button>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm">
            💜 Avec 10,000 FCFA, vous aidez une femme à retrouver sa dignité
          </p>
        </div>

        {/* Moyens de paiement */}
        <div className="grid md:grid-cols-3 gap-8">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className={`bg-gradient-to-r ${method.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-3" />
                  <h3 className="text-2xl font-bold">{method.title}</h3>
                </div>
                
                <div className="p-6 space-y-4">
                  {method.accounts.map((account, index) => {
                    const displayValue: string = 'number' in account ? account.number : account.value;
                    const copyField: string = 'field' in account ? account.field : account.label;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">{account.label}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                          <code className="flex-1 text-sm font-mono text-gray-900">
                            {displayValue}
                          </code>
                          <button
                            onClick={() => copyToClipboard(displayValue, copyField)}
                            className="text-purple-600 hover:text-purple-700 transition flex-shrink-0"
                            title="Copier"
                          >
                            {copiedField === copyField ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                        {'name' in account && account.name && (
                          <p className="text-xs text-gray-500">Nom: {account.name}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Message important */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Important</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Après avoir effectué votre don, veuillez nous envoyer une capture d'écran de la transaction 
                par WhatsApp au <strong>+221 77 123 45 67</strong> ou par email à <strong>dons@fondationrama.org</strong> 
                avec votre nom complet pour recevoir un reçu fiscal.
              </p>
            </div>
          </div>
        </div>

        {/* Remerciements */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 font-medium mb-4">
            🙏 Merci pour votre générosité !
          </p>
          <p className="text-gray-600">
            Chaque don compte et transforme des vies.
          </p>
        </div>
      </div>
    </section>
  );
}