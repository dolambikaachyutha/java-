import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { EXAM_QUESTIONS } from '../data/questionsData';

interface PrintViewProps {
  onBack: () => void;
}

export const PrintView: React.FC<PrintViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-8 font-sans">
      {/* Top action bar (hidden on print) */}
      <div className="print:hidden max-w-5xl mx-auto mb-8 p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Interactive Portal</span>
        </button>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-slate-400">Ready to save as PDF or Print</span>
          <button
            onClick={() => window.print()}
            className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm shadow transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Document Container */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Document Header */}
        <div className="text-center border-b-2 border-black pb-4">
          <h1 className="text-2xl font-black uppercase tracking-tight">
            Java Programming — Comprehensive Question Bank
          </h1>
          <h2 className="text-base font-semibold text-gray-700 mt-1">
            II B.Tech II Semester (R19 Regulations) • Units III, IV &amp; V
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            15-Mark Standard Model Solutions (7.5 Marks Part a + 7.5 Marks Part b) with Detailed Theory, Diagrams, Clean Code &amp; Outputs
          </p>
        </div>

        {/* Questions Loop */}
        {EXAM_QUESTIONS.map((q) => (
          <div key={q.id} className="border-b border-gray-300 pb-8 break-after-auto">
            {/* Question Heading */}
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-4">
              <div>
                <span className="text-base font-extrabold text-blue-900 mr-2">
                  QUESTION {q.questionNumber}:
                </span>
                <span className="text-base font-bold text-gray-900">{q.title}</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 border border-gray-300 rounded">
                {q.unit} • [{q.totalMarks} Marks]
              </span>
            </div>

            {/* Part A */}
            <div className="mb-6 pl-2 border-l-2 border-blue-600">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-blue-900">
                  Part ({q.partA.subQuestion}) {q.partA.title}
                </h3>
                <span className="text-xs font-semibold text-gray-600">[{q.partA.marks} Marks]</span>
              </div>
              <p className="text-xs text-gray-800 leading-relaxed mb-2 font-medium">
                {q.partA.simpleExplanation}
              </p>

              {q.partA.detailedTheory && (
                <div className="text-xs text-gray-700 mb-2 bg-gray-50 p-2 rounded border border-gray-200">
                  <span className="font-bold block text-gray-900 mb-1">Detailed Theory &amp; Concepts:</span>
                  <div className="whitespace-pre-line leading-relaxed">{q.partA.detailedTheory}</div>
                </div>
              )}

              <div className="text-xs mb-2">
                <span className="font-bold text-gray-700 block mb-1">Key Points for Exam:</span>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700">
                  {q.partA.keyPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              {q.partA.comparisonTable && (
                <div className="my-2 overflow-x-auto">
                  <table className="w-full text-left text-[11px] border border-gray-300 border-collapse">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-300">
                        {q.partA.comparisonTable.headers.map((h, i) => (
                          <th key={i} className="p-1.5 font-bold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {q.partA.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-gray-200">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-1.5">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {q.partA.syntaxOrDiagram && (
                <div className="my-2">
                  <span className="font-bold text-xs text-gray-700 block mb-1">Syntax / Structural Diagram:</span>
                  <pre className="p-2 bg-gray-50 border border-gray-200 rounded text-[11px] font-mono leading-tight">
                    {q.partA.syntaxOrDiagram}
                  </pre>
                </div>
              )}

              <div className="my-2">
                <span className="font-bold text-xs text-gray-700 block mb-1">Java Program Example:</span>
                <pre className="p-2.5 bg-gray-900 text-gray-100 rounded text-[11px] font-mono leading-snug overflow-x-auto">
                  {q.partA.javaCode}
                </pre>
              </div>

              <div className="my-2">
                <span className="font-bold text-xs text-gray-700 block mb-1">Expected Output:</span>
                <pre className="p-2 bg-gray-100 border border-gray-300 rounded text-[11px] font-mono leading-tight">
                  {q.partA.expectedOutput}
                </pre>
              </div>
            </div>

            {/* Part B */}
            <div className="pl-2 border-l-2 border-emerald-600">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-emerald-900">
                  Part ({q.partB.subQuestion}) {q.partB.title}
                </h3>
                <span className="text-xs font-semibold text-gray-600">[{q.partB.marks} Marks]</span>
              </div>
              <p className="text-xs text-gray-800 leading-relaxed mb-2 font-medium">
                {q.partB.simpleExplanation}
              </p>

              {q.partB.detailedTheory && (
                <div className="text-xs text-gray-700 mb-2 bg-gray-50 p-2 rounded border border-gray-200">
                  <span className="font-bold block text-gray-900 mb-1">Detailed Theory &amp; Concepts:</span>
                  <div className="whitespace-pre-line leading-relaxed">{q.partB.detailedTheory}</div>
                </div>
              )}

              <div className="text-xs mb-2">
                <span className="font-bold text-gray-700 block mb-1">Key Points for Exam:</span>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700">
                  {q.partB.keyPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              {q.partB.comparisonTable && (
                <div className="my-2 overflow-x-auto">
                  <table className="w-full text-left text-[11px] border border-gray-300 border-collapse">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-300">
                        {q.partB.comparisonTable.headers.map((h, i) => (
                          <th key={i} className="p-1.5 font-bold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {q.partB.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-gray-200">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-1.5">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {q.partB.syntaxOrDiagram && (
                <div className="my-2">
                  <span className="font-bold text-xs text-gray-700 block mb-1">Syntax / Structural Diagram:</span>
                  <pre className="p-2 bg-gray-50 border border-gray-200 rounded text-[11px] font-mono leading-tight">
                    {q.partB.syntaxOrDiagram}
                  </pre>
                </div>
              )}

              <div className="my-2">
                <span className="font-bold text-xs text-gray-700 block mb-1">Java Program Example:</span>
                <pre className="p-2.5 bg-gray-900 text-gray-100 rounded text-[11px] font-mono leading-snug overflow-x-auto">
                  {q.partB.javaCode}
                </pre>
              </div>

              <div className="my-2">
                <span className="font-bold text-xs text-gray-700 block mb-1">Expected Output:</span>
                <pre className="p-2 bg-gray-100 border border-gray-300 rounded text-[11px] font-mono leading-tight">
                  {q.partB.expectedOutput}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
