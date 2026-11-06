/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { ConsoleModal } from './components/ConsoleModal';
import { FlashcardsModal } from './components/FlashcardsModal';
import { PrintView } from './components/PrintView';
import { EXAM_QUESTIONS, UNIT_CONFIG } from './data/questionsData';
import { UnitNumber } from './types';
import {
  GraduationCap,
  Sparkles,
  Layers,
  Award,
  BookOpen,
  SearchX,
  CheckCircle2,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<UnitNumber | 'All'>('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({ 1: true });
  const [completedQuestions, setCompletedQuestions] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('java_qb_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [consoleData, setConsoleData] = useState<{
    isOpen: boolean;
    title: string;
    code: string;
    expectedOutput: string;
  }>({
    isOpen: false,
    title: '',
    code: '',
    expectedOutput: ''
  });

  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);

  // Sync completed questions to local storage
  useEffect(() => {
    try {
      localStorage.setItem('java_qb_completed', JSON.stringify(completedQuestions));
    } catch (e) {
      console.error(e);
    }
  }, [completedQuestions]);

  const toggleComplete = (id: number) => {
    setCompletedQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const setAllExpanded = (expand: boolean) => {
    const updated: Record<number, boolean> = {};
    EXAM_QUESTIONS.forEach((q) => {
      updated[q.id] = expand;
    });
    setExpandedQuestions(updated);
  };

  const areAllExpanded = useMemo(() => {
    return EXAM_QUESTIONS.every((q) => expandedQuestions[q.id]);
  }, [expandedQuestions]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return EXAM_QUESTIONS.filter((q) => {
      const matchesUnit = selectedUnit === 'All' || q.unit === selectedUnit;
      if (!matchesUnit) return false;

      if (!searchQuery.trim()) return true;

      const qText = `${q.title} ${q.partA.title} ${q.partB.title} ${q.partA.simpleExplanation} ${q.partB.simpleExplanation} ${q.partA.javaCode} ${q.partB.javaCode} ${q.unit}`.toLowerCase();
      return qText.includes(searchQuery.toLowerCase());
    });
  }, [selectedUnit, searchQuery]);

  const handleSimulateCode = (title: string, code: string, output: string) => {
    setConsoleData({
      isOpen: true,
      title,
      code,
      expectedOutput: output
    });
  };

  if (isPrintMode) {
    return <PrintView onBack={() => setIsPrintMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        completedCount={completedQuestions.length}
        totalCount={EXAM_QUESTIONS.length}
        onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        onPrintNotes={() => setIsPrintMode(true)}
        showAllExpanded={areAllExpanded}
        setShowAllExpanded={setAllExpanded}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Exam Overview Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-900/40 p-6 shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-400 text-slate-950">
                  JNTU R19 / Autonomous Regulation
                </span>
                <span className="text-xs text-slate-400">
                  CSE &amp; IT • II B.Tech II Semester
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                All 18 Long-Answer Questions (15 Marks Each)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every question is structured for university 15-mark answers (7.5M Part a + 7.5M Part b) with comprehensive theory, comparison tables, ASCII memory diagrams, beginner-friendly Java code, and exact outputs.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold text-amber-400">18</div>
                <div className="text-[11px] text-slate-400 font-medium">Questions</div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold text-sky-400">36</div>
                <div className="text-[11px] text-slate-400 font-medium">Sub-Parts (a/b)</div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold text-emerald-400">270 M</div>
                <div className="text-[11px] text-slate-400 font-medium">Marks Bank</div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold text-indigo-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Code &amp; Output</div>
              </div>
            </div>
          </div>

          {/* Decorative glowing gradient backdrop */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -top-20 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        </div>

        {/* Unit Summary Pills if a unit is picked */}
        {selectedUnit !== 'All' && (
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Active Filter
              </span>
              <h3 className="text-base font-semibold text-white">
                {UNIT_CONFIG.find((u) => u.unit === selectedUnit)?.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {UNIT_CONFIG.find((u) => u.unit === selectedUnit)?.topics}
              </p>
            </div>
            <button
              onClick={() => setSelectedUnit('All')}
              className="text-xs text-slate-400 hover:text-white underline self-start sm:self-center"
            >
              Reset to All Units
            </button>
          </div>
        )}

        {/* Questions List */}
        {filteredQuestions.length > 0 ? (
          <div className="space-y-5">
            {filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                isExpanded={!!expandedQuestions[question.id]}
                onToggleExpand={() => toggleExpand(question.id)}
                isCompleted={completedQuestions.includes(question.id)}
                onToggleComplete={() => toggleComplete(question.id)}
                onSimulateCode={handleSimulateCode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800/80 p-8 space-y-3">
            <SearchX className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">No questions matched your search</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Try searching for concepts like "Arrays", "Deadlock", "JDBC", or "Exception".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedUnit('All');
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-slate-400 font-medium">
            Java Programming (II B.Tech II Semester R19 Regulations) • Academic Question Bank Master Key
          </p>
          <p>
            Based on the standard syllabus for Units III, IV &amp; V (Kallam Haranadhareddy Institute of Technology &amp; JNTU Standards).
          </p>
        </div>
      </footer>

      {/* Code Simulation Modal */}
      <ConsoleModal
        isOpen={consoleData.isOpen}
        onClose={() => setConsoleData((prev) => ({ ...prev, isOpen: false }))}
        title={consoleData.title}
        code={consoleData.code}
        expectedOutput={consoleData.expectedOutput}
      />

      {/* Viva Flashcards Modal */}
      <FlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
      />
    </div>
  );
}
