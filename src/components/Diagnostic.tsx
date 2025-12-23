import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'Votre type de peau ?',
    options: [
      { value: 'dry', label: 'Sèche', emoji: '🏜️' },
      { value: 'oily', label: 'Grasse', emoji: '💧' },
      { value: 'mixed', label: 'Mixte', emoji: '🌓' },
      { value: 'normal', label: 'Normale', emoji: '✨' }
    ]
  },
  {
    id: 2,
    question: 'Votre préoccupation principale ?',
    options: [
      { value: 'hydration', label: 'Hydratation', emoji: '💦' },
      { value: 'aging', label: 'Anti-âge', emoji: '⏰' },
      { value: 'glow', label: 'Éclat', emoji: '✨' },
      { value: 'protection', label: 'Protection', emoji: '🛡️' }
    ]
  }
];

const recommendations = {
  'dry-hydration': {
    product: 'Lait Corporel + Crème Visage',
    description: 'Votre peau a soif d\'hydratation profonde. Nos produits vont nourrir intensément votre peau.',
    routine: ['Lait Corporel matin et soir', 'Crème Visage quotidienne']
  },
  'dry-aging': {
    product: 'Crème Visage NGUEM\'S',
    description: 'Parfait pour hydrater et lutter contre les signes du temps.',
    routine: ['Crème Visage 2 fois par jour']
  },
  'oily-hydration': {
    product: 'Lait Corporel texture légère',
    description: 'Une hydratation sans effet gras, parfaite pour votre type de peau.',
    routine: ['Application légère après la douche']
  },
  'mixed-glow': {
    product: 'Gamme Complète NGUEM\'S',
    description: 'Pour équilibrer et illuminer votre peau mixte.',
    routine: ['Routine complète matin et soir']
  },
  default: {
    product: 'Gamme NGUEM\'S',
    description: 'Nos experts au stand vous conseilleront personnellement.',
    routine: ['Venez découvrir votre routine sur-mesure']
  }
};

const Diagnostic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const resetDiagnostic = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    const key = `${answers[0]}-${answers[1]}`;
    return recommendations[key as keyof typeof recommendations] || recommendations.default;
  };

  const recommendation = getRecommendation();

  return (
    <section id="diagnostic" className="py-20 px-4" style={{ background: 'linear-gradient(to bottom right, #01A101, rgba(1, 161, 1, 0.8))' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nguems-cream mb-4">
            Votre Diagnostic Beauté
          </h2>
          <div className="inline-block bg-nguems-secondary/20 px-6 py-2 rounded-full mb-4">
            <p className="text-yellow-500 text-5xl font-bold">
              100% GRATUIT
            </p>
          </div>
          <p className="text-nguems-secondary text-lg md:text-xl">
            2 questions pour découvrir les produits faits pour vous
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-nguems-primary font-semibold">
                    Question {currentStep + 1} sur {questions.length}
                  </span>
                  <span className="text-nguems-secondary font-semibold">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-nguems-secondary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-nguems-primary mb-8 text-center">
                  {questions[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="bg-gray-100 hover:bg-yellow-400 border-2 border-transparent hover:border-nguems-secondary rounded-xl p-6 transition-all text-left group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{option.emoji}</span>
                        <div className="flex-1">
                          <span className="text-nguems-primary font-semibold text-lg block">
                            {option.label}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-nguems-primary/50 group-hover:text-nguems-secondary transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Sparkles className="w-16 h-16 text-nguems-secondary mx-auto mb-6" />
              <h3 className="font-playfair text-3xl font-bold text-nguems-primary mb-4">
                Votre Recommandation Personnalisée
              </h3>
              
              <div className="bg-nguems-secondary/10 rounded-2xl p-8 mb-6">
                <p className="text-nguems-secondary font-semibold text-xl mb-2">
                  Nous vous recommandons
                </p>
                <p className="font-playfair text-2xl font-bold text-nguems-primary mb-4">
                  {recommendation.product}
                </p>
                <p className="text-nguems-primary/70 text-lg mb-6">
                  {recommendation.description}
                </p>
                
                <div className="bg-white rounded-xl p-4">
                  <p className="text-nguems-primary font-semibold mb-2">Votre routine :</p>
                  {recommendation.routine.map((step, index) => (
                    <p key={index} className="text-nguems-primary/70">
                      ✓ {step}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-yellow-500 hover:bg-black hover:text-white text-nguems-tertiary py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  Trouver notre stand
                </button>
                <button
                  onClick={resetDiagnostic}
                  className="w-full bg-gray-100 hover:bg-yellow-400 text-nguems-primary py-3 rounded-xl font-semibold transition-colors"
                >
                  Refaire le diagnostic
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-nguems-tertiary/80 mt-8"
        >
          💝 Venez confirmer votre diagnostic GRATUIT avec nos experts au stand
        </motion.p>
      </div>
    </section>
  );
};

export default Diagnostic;
