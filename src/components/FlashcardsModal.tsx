import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, RotateCw, Sparkles, BookOpen } from 'lucide-react';
import { HIGH_FREQUENCY_VIVA_FLASHCARDS } from '../data/questionsData';

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isOpen) return null;

  const currentCard = HIGH_FREQUENCY_VIVA_FLASHCARDS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % HIGH_FREQUENCY_VIVA_FLASHCARDS.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? HIGH_FREQUENCY_VIVA_FLASHCARDS.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 flex items-center justify-center border border-indigo-500/40">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Viva &amp; Quick Revision Flashcards</h3>
              <p className="text-xs text-slate-400">Card {currentIndex + 1} of {HIGH_FREQUENCY_VIVA_FLASHCARDS.length}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Flashcard Body */}
        <div className="p-8 flex flex-col items-center justify-center min-h-[320px]">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full min-h-[220px] rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
              isFlipped
                ? 'bg-gradient-to-br from-indigo-950/80 to-slate-900 border-indigo-500/50 shadow-indigo-500/10 shadow-lg'
                : 'bg-slate-950/90 border-slate-800 hover:border-slate-700 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-semibold border border-slate-700">
                {currentCard.unit} • Q.{currentCard.questionNumber}
              </span>
              <span className="flex items-center gap-1 text-slate-500 hover:text-slate-300">
                <RotateCw className="w-3.5 h-3.5" /> Click anywhere to flip
              </span>
            </div>

            <div className="my-auto text-center px-4">
              {isFlipped ? (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                    Exact Viva Answer:
                  </span>
                  <p className="text-base text-slate-100 font-medium leading-relaxed whitespace-pre-wrap">
                    {currentCard.back}
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                    Question:
                  </span>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {currentCard.front}
                  </h4>
                </div>
              )}
            </div>

            <div className="text-center pt-4">
              <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
                {isFlipped ? 'Answer Revealed' : 'Tap to reveal answer'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="px-4 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-semibold border border-indigo-500/40"
          >
            Flip Card
          </button>

          <button
            onClick={handleNext}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
