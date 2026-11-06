import React from 'react';
import { BookOpen, Search, Printer, CheckCircle2, Sparkles, Filter, Layers, HelpCircle } from 'lucide-react';
import { UnitNumber } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedUnit: UnitNumber | 'All';
  setSelectedUnit: (unit: UnitNumber | 'All') => void;
  completedCount: number;
  totalCount: number;
  onOpenFlashcards: () => void;
  onPrintNotes: () => void;
  showAllExpanded: boolean;
  setShowAllExpanded: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedUnit,
  setSelectedUnit,
  completedCount,
  totalCount,
  onOpenFlashcards,
  onPrintNotes,
  showAllExpanded,
  setShowAllExpanded
}) => {
  const percentage = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top Banner Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Java Programming Question Bank
                </h1>
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  R19 • 15 Marks Master Guide
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Detailed 15-Mark Exam Answers (7.5M Part a + 7.5M Part b) with In-Depth Theory, Memory Diagrams, Clean Code &amp; Outputs
              </p>
            </div>
          </div>

          {/* Quick Actions & Progress */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
            {/* Revision Progress Pill */}
            <div className="flex items-center bg-slate-800/90 rounded-lg px-3 py-1.5 border border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2" />
              <div className="text-xs">
                <span className="font-semibold text-white">{completedCount}/{totalCount}</span>
                <span className="text-slate-400 ml-1">Prepared ({percentage}%)</span>
              </div>
              <div className="w-16 bg-slate-700 h-1.5 rounded-full ml-2.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* Flashcards Viva Button */}
            <button
              onClick={onOpenFlashcards}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white transition-colors border border-indigo-500 shadow-sm"
              title="Practice viva questions & quick flashcards"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
              <span>Viva Flashcards</span>
            </button>

            {/* Print / Save Notes PDF */}
            <button
              onClick={onPrintNotes}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              title="Print all 18 questions or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span>Print / PDF Notes</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Unit Filters */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-medium text-slate-400 mr-1 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" /> Unit:
            </span>
            {(['All', 'Unit III', 'Unit IV', 'Unit V'] as const).map((unit) => {
              const isActive = selectedUnit === unit;
              return (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {unit === 'All' ? 'All (18 Questions)' : unit}
                </button>
              );
            })}
          </div>

          {/* Search & Collapse Toggle */}
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search keywords, JDBC, Threads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/90 text-sm text-white placeholder-slate-400 rounded-lg pl-9 pr-3 py-1.5 border border-slate-700 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={() => setShowAllExpanded(!showAllExpanded)}
              className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{showAllExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
