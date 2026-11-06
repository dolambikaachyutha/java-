export type UnitNumber = 'Unit III' | 'Unit IV' | 'Unit V';

export interface QuestionPart {
  subQuestion: 'a' | 'b';
  title: string;
  marks: number;
  syllabusTopic: string;
  simpleExplanation: string;
  detailedTheory?: string;
  keyPoints: string[];
  syntaxOrDiagram?: string;
  stepByStepWorking?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  javaCode: string;
  codeWalkthrough?: string[];
  expectedOutput: string;
  examTips: string;
}

export interface ExamQuestion {
  id: number;
  questionNumber: number;
  unit: UnitNumber;
  title: string;
  partA: QuestionPart;
  partB: QuestionPart;
  totalMarks: number;
}

export interface Flashcard {
  id: string;
  unit: UnitNumber;
  questionNumber: number;
  front: string;
  back: string;
  codeSnippet?: string;
}
