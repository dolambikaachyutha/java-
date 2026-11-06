import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Circle,
  Copy,
  Check,
  Play,
  Lightbulb,
  FileCode2,
  Terminal,
  Layers,
  Award
} from 'lucide-react';
import { ExamQuestion, QuestionPart } from '../types';

interface QuestionCardProps {
  question: ExamQuestion;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onSimulateCode: (title: string, code: string, output: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isExpanded,
  onToggleExpand,
  isCompleted,
  onToggleComplete,
  onSimulateCode
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'a' | 'b'>('both');
  const [copiedPart, setCopiedPart] = useState<'a' | 'b' | null>(null);

  const handleCopy = (part: 'a' | 'b', code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedPart(part);
    setTimeout(() => setCopiedPart(null), 2000);
  };

  const getUnitBadgeColor = (unit: string) => {
    switch (unit) {
      case 'Unit III':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Unit IV':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'Unit V':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  const renderPart = (part: QuestionPart) => (
    <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/80 mb-5 shadow-sm space-y-4">
      {/* Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
            {part.subQuestion}
          </span>
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            {part.title}
          </h3>
        </div>
        <div className="flex items-center space-x-2 self-start sm:self-center">
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-amber-400 font-semibold border border-slate-700">
            {part.marks} Marks
          </span>
          <span className="text-xs text-slate-400 italic hidden md:inline">
            {part.syllabusTopic}
          </span>
        </div>
      </div>

      {/* Simple Explanation */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-1.5 flex items-center gap-1.5">
          <span>1. Concept &amp; Definition (Simple &amp; Clear)</span>
        </h4>
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60">
          {part.simpleExplanation}
        </p>
      </div>

      {/* Detailed Theory if present */}
      {part.detailedTheory && (
        <div className="bg-slate-950/30 p-4 rounded-xl border border-indigo-900/30">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>2. Comprehensive Theoretical Explanation (For 10/10 Marks)</span>
          </h4>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-2">
            {part.detailedTheory}
          </div>
        </div>
      )}

      {/* Key Points */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1.5 flex items-center gap-1.5">
          <span>3. Core Examination Points &amp; Rules</span>
        </h4>
        <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm text-slate-300">
          {part.keyPoints.map((point, idx) => (
            <li key={idx} className="flex items-start bg-slate-800/40 p-2 rounded border border-slate-800/50">
              <span className="text-sky-400 font-bold mr-2 text-xs">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Step by step working if present */}
      {part.stepByStepWorking && part.stepByStepWorking.length > 0 && (
        <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
            <span>4. Step-by-Step Mechanism / Sequence</span>
          </h4>
          <ol className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
            {part.stepByStepWorking.map((step, idx) => (
              <li key={idx} className="bg-slate-900/60 p-2 rounded border border-slate-800/60">
                <span className="text-slate-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Comparison Table if present */}
      {part.comparisonTable && (
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-800/80 text-amber-300 border-b border-slate-700">
                {part.comparisonTable.headers.map((h, i) => (
                  <th key={i} className="p-2.5 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {part.comparisonTable.rows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-slate-800/60 hover:bg-slate-900/40">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 text-slate-300">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Syntax / Architecture Diagram */}
      {part.syntaxOrDiagram && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>5. Syntax, Memory Layout &amp; Flow Diagram</span>
          </h4>
          <pre className="p-3.5 rounded-lg bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto border border-emerald-900/40 leading-relaxed">
            {part.syntaxOrDiagram}
          </pre>
        </div>
      )}

      {/* Java Code Example */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>6. Complete Compileable Java Program</span>
          </h4>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleCopy(part.subQuestion, part.javaCode)}
              className="flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              {copiedPart === part.subQuestion ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
            <button
              onClick={() => onSimulateCode(part.title, part.javaCode, part.expectedOutput)}
              className="flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Simulate Output</span>
            </button>
          </div>
        </div>
        <div className="relative group">
          <pre className="p-4 rounded-lg bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed max-h-96">
            <code>{part.javaCode}</code>
          </pre>
        </div>
      </div>

      {/* Code Walkthrough if present */}
      {part.codeWalkthrough && part.codeWalkthrough.length > 0 && (
        <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800 text-xs">
          <h5 className="font-bold text-indigo-300 mb-1.5">Line-by-Line Code Walkthrough:</h5>
          <ul className="space-y-1 text-slate-300 list-disc list-inside">
            {part.codeWalkthrough.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Expected Console Output */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-slate-400" />
          <span>7. Expected Console Output</span>
        </h4>
        <pre className="p-3.5 rounded-lg bg-black text-amber-300/90 font-mono text-xs overflow-x-auto border border-slate-800">
          {part.expectedOutput}
        </pre>
      </div>

      {/* Exam Tip */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-xs flex items-start space-x-2 text-amber-200">
        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-amber-300">Exam Scoring Tip: </span>
          {part.examTips}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`rounded-2xl transition-all duration-200 border ${
        isCompleted
          ? 'bg-slate-900/90 border-emerald-500/30 shadow-emerald-950/20 shadow-md'
          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md'
      }`}
    >
      {/* Question Card Header */}
      <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          {/* Completion Checkbox */}
          <button
            onClick={onToggleComplete}
            className="mt-1 focus:outline-none"
            title={isCompleted ? 'Mark as pending' : 'Mark as studied'}
          >
            {isCompleted ? (
              <CheckCircle className="w-6 h-6 text-emerald-400 fill-emerald-500/20" />
            ) : (
              <Circle className="w-6 h-6 text-slate-500 hover:text-slate-400" />
            )}
          </button>

          <div>
            <div className="flex items-center flex-wrap gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-500 text-slate-950">
                Q.{question.questionNumber}
              </span>
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getUnitBadgeColor(question.unit)}`}>
                {question.unit}
              </span>
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" /> {question.totalMarks} Marks
              </span>
              {isCompleted && (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Studied ✓
                </span>
              )}
            </div>

            <h2
              onClick={onToggleExpand}
              className="text-lg sm:text-xl font-bold text-white hover:text-amber-400 cursor-pointer transition-colors"
            >
              {question.title}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-400">
              <span>Part a) {question.partA.title}</span>
              <span>•</span>
              <span>Part b) {question.partB.title}</span>
            </div>
          </div>
        </div>

        {/* Toggle Expand Button */}
        <div className="flex items-center space-x-2 self-end md:self-center">
          <button
            onClick={onToggleExpand}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <span>{isExpanded ? 'Hide Solution' : 'View 15-Mark Solution'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Solution Body */}
      {isExpanded && (
        <div className="px-5 pb-5 pt-2 border-t border-slate-800/80">
          {/* Sub-tabs for Part A, Part B, or Both */}
          <div className="flex items-center space-x-2 mb-4 bg-slate-950/60 p-1 rounded-lg border border-slate-800 w-fit">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'both'
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Question (a + b = 15M)
            </button>
            <button
              onClick={() => setActiveTab('a')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'a'
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Part (a) Only (7.5M)
            </button>
            <button
              onClick={() => setActiveTab('b')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'b'
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Part (b) Only (7.5M)
            </button>
          </div>

          {/* Render Active Sub-questions */}
          {(activeTab === 'both' || activeTab === 'a') && renderPart(question.partA)}
          {(activeTab === 'both' || activeTab === 'b') && renderPart(question.partB)}
        </div>
      )}
    </div>
  );
};
