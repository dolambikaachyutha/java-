import { ExamQuestion } from '../types';

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // ==================== QUESTION 1 ====================
  {
    id: 1,
    questionNumber: 1,
    unit: 'Unit III',
    title: 'Arrays with Types & Inheritance with Types',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain the Arrays with Types',
      marks: 7.5,
      syllabusTopic: '3.1 Arrays - Declaration, Memory Storage, and Types',
      simpleExplanation:
        'An array in Java is a dynamically allocated collection of homogeneous variables stored contiguously on the Heap. All elements are referenced by a single identifier and accessed using zero-based indexing ([0] to [length - 1]).',
      detailedTheory:
        'In Java, arrays are true first-class objects inheriting from java.lang.Object. Unlike C/C++ where arrays can be created on the runtime stack as raw blocks of memory, Java allocates all array contents dynamically in heap memory through the "new" operator.\n\nKey Architectural Attributes:\n1. Fixed-Length Invariant: Once an array is instantiated on the Heap, its dimension is strictly immutable. The length property (array.length) provides constant-time O(1) query of its capacity.\n2. Automatic Memory Initialization: The JVM initializes newly allocated array slots to zero-equivalents (0 for byte/short/int/long, 0.0 for float/double, false for boolean, and null for objects/references).\n3. Strict Bounds Checking: Access outside [0, length - 1] raises java.lang.ArrayIndexOutOfBoundsException at runtime, enforcing memory security.\n4. Array Types: (a) One-Dimensional (1D) linear arrays, and (b) Multi-Dimensional "Arrays of Arrays", which allow rectangular matrices as well as Jagged (irregular) arrays where each row has a different column capacity.',
      keyPoints: [
        'Homogeneous storage: Every element in the array must match the declared base type.',
        'Dynamic Allocation: Arrays are created on the Heap at runtime using "new".',
        'Zero-based indexing: Indices range from 0 to array.length - 1.',
        'Automatic Default Initialization: 0 for numbers, false for booleans, null for references.',
        'Jagged Arrays: In Java, 2D arrays are arrays of references, allowing rows of unequal sizes.'
      ],
      stepByStepWorking: [
        'Phase 1 (Declaration): "int[] arr;" creates a reference on the stack initialized to null.',
        'Phase 2 (Allocation): "arr = new int[5];" allocates heap memory and sets all cells to default 0.',
        'Phase 3 (Initialization): Values are populated via index assignment "arr[0] = 10;" or array literals {10, 20}.',
        'Phase 4 (Access): Elements are read or modified using subscript index "arr[i]".'
      ],
      comparisonTable: {
        headers: ['Feature', '1D Array', 'Rectangular 2D Array', 'Jagged 2D Array'],
        rows: [
          ['Structure', 'Linear contiguous row', 'Matrix with equal columns per row', 'Rows with unequal column lengths'],
          ['Syntax', 'new int[size]', 'new int[rows][cols]', 'new int[rows][] + allocate each row'],
          ['Memory Storage', 'Single heap object', 'Array of equal-sized sub-arrays', 'Array of distinct-sized sub-arrays'],
          ['Use Case', 'Lists, vectors, scores', 'Tables, grids, pixel maps', 'Sparse matrices, pyramid trees']
        ]
      },
      syntaxOrDiagram: `// Syntax:
type[] varName = new type[size];        // 1D Array
type[][] varName = new type[rows][cols]; // 2D Rectangular
type[][] varName = new type[rows][];     // 2D Jagged

// Stack & Heap Memory Layout:
STACK                      HEAP MEMORY
+----------+              +-------------------------------+
| jagged   | -----------> | [0] ref | [1] ref   | [2] ref |  (Row index array)
+----------+              +----+---------+-----------+----+
                               |         |           |
                               v         v           v
                            [ 0 | 0 ] [ 0 | 0 | 0 ] [ 0 ]
                            (Row 0)    (Row 1)     (Row 2)`,
      javaCode: `// Java Program: 1D and 2D Jagged Arrays (Beginner-Friendly)
class ArrayDemo {
    public static void main(String[] args) {
        // --- 1. One-Dimensional Array ---
        int[] marks = { 85, 92, 78 };
        System.out.println("1D Array Element at index 0: " + marks[0]);
        System.out.println("1D Array Total Length: " + marks.length);

        // --- 2. Two-Dimensional Jagged Array ---
        // 3 rows with differing column sizes
        int[][] jagged = new int[3][];
        jagged[0] = new int[1]; // row 0 has 1 column
        jagged[1] = new int[2]; // row 1 has 2 columns
        jagged[2] = new int[3]; // row 2 has 3 columns

        int count = 1;
        System.out.println("\nJagged 2D Array Matrix:");
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = count++;
                System.out.print(jagged[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
      codeWalkthrough: [
        'Line 5: Declares and initializes a 1D integer array "marks" with 3 elements.',
        'Line 11: Creates a jagged 2D array by specifying only the row size (3 rows).',
        'Lines 12-14: Allocates separate 1D arrays of size 1, 2, and 3 for each row.',
        'Lines 18-24: Uses nested loops to populate and print the irregular array elements.'
      ],
      expectedOutput: `1D Array Element at index 0: 85
1D Array Total Length: 3

Jagged 2D Array Matrix:
1 
2 3 
4 5 6 `,
      examTips:
        'Draw the Stack vs Heap pointer diagram in your exam paper and explain why Java supports Jagged Arrays (arrays of arrays).'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain Inheritance with Types',
      marks: 7.5,
      syllabusTopic: '3.2 Inheritance - Forms, Syntax, and Types',
      simpleExplanation:
        'Inheritance is an OOP mechanism where a new class (subclass/child) inherits variables and methods from an existing class (superclass/parent) using the "extends" keyword. It enables code reusability and runtime polymorphism.',
      detailedTheory:
        'Inheritance allows the creation of hierarchical classifications. When class B extends class A, B acquires all non-private fields and methods of A.\n\nArchitectural Details:\n1. Code Reuse: Common functionality is defined in the base class and inherited by derived classes, preventing duplication.\n2. Constructor Execution Chain: When a subclass object is instantiated, the superclass constructor is invoked first to initialize inherited state before subclass constructor code runs.\n3. The Diamond Problem: Java disallows Multiple Inheritance with classes (class C extends A, B) because if both A and B have a method with the same signature, the compiler cannot determine which method to call. Multiple inheritance is achieved safely using Interfaces in Java.',
      keyPoints: [
        'Base Class (Superclass): The existing class giving its features.',
        'Derived Class (Subclass): The new class receiving features via "extends".',
        'Single Inheritance: One subclass extends one superclass (A -> B).',
        'Multilevel Inheritance: A subclass extends a class that is already a subclass (A -> B -> C).',
        'Hierarchical Inheritance: Multiple subclasses inherit from one superclass (A -> B, A -> C).',
        'Multiple Inheritance: Not allowed with classes in Java to avoid ambiguity; supported via Interfaces.'
      ],
      comparisonTable: {
        headers: ['Inheritance Type', 'Structure', 'Class Support in Java?', 'Interface Support?'],
        rows: [
          ['Single', 'A -> B', 'Yes', 'Yes'],
          ['Multilevel', 'A -> B -> C', 'Yes', 'Yes'],
          ['Hierarchical', 'A -> B and A -> C', 'Yes', 'Yes'],
          ['Multiple', 'A, B -> C', 'No (Diamond Problem)', 'Yes (implements A, B)'],
          ['Hybrid', 'Combination of types', 'No', 'Yes']
        ]
      },
      syntaxOrDiagram: `// Inheritance Flow:
Single:       [A] -> [B]
Multilevel:   [A] -> [B] -> [C]
Hierarchical: [A] -> [B], [A] -> [C]
Multiple:     [A] + [B] -> [C] (Interfaces Only!)`,
      javaCode: `// Java Program: Single and Multilevel Inheritance
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

// Single / Multilevel Step 1
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks: Woof Woof!");
    }
}

// Multilevel Step 2 (Animal -> Dog -> Puppy)
class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps softly.");
    }
}

class TestInheritance {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();  // Inherited from Animal
        p.bark(); // Inherited from Dog
        p.weep(); // Own method of Puppy
    }
}`,
      codeWalkthrough: [
        'Animal defines base behavior eat().',
        'Dog extends Animal, inheriting eat() and adding bark().',
        'Puppy extends Dog, inheriting both eat() and bark(), forming a 3-level Multilevel hierarchy.',
        'In main, Puppy object accesses methods from all 3 levels seamlessly.'
      ],
      expectedOutput: `Animal eats food.
Dog barks: Woof Woof!
Puppy weeps softly.`,
      examTips:
        'Clearly state why Java does NOT support multiple inheritance with classes: method name collision (Diamond Problem).'
    }
  },

  // ==================== QUESTION 2 ====================
  {
    id: 2,
    questionNumber: 2,
    unit: 'Unit III',
    title: 'Interfaces & Static Methods in Interfaces',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Interfaces',
      marks: 7.5,
      syllabusTopic: '3.3 Interface in Java - Declaration and Properties',
      simpleExplanation:
        'An interface in Java is a 100% abstract blueprint of a class containing constants and abstract method declarations. It defines WHAT a class must do, but not HOW. Classes implement interfaces using the "implements" keyword.',
      detailedTheory:
        'An interface establishes a formal contract. By default, every field declared in an interface is "public static final" (constant), and every method without a body is "public abstract".\n\nKey Concepts:\n1. Total Abstraction: Prior to Java 8, interfaces could contain zero concrete methods.\n2. Loose Coupling: Programmers code to interfaces rather than concrete implementations, allowing flexible architecture.\n3. Multiple Inheritance Solution: Because interface methods have no implementation, multiple interfaces can be implemented by a class without diamond ambiguity conflicts.\n4. Polymorphic Reference: An interface reference variable can hold any object of any class that implements that interface.',
      keyPoints: [
        'Defined with keyword "interface"; adopted with "implements".',
        'All fields are implicitly public static final (constants).',
        'All methods without a body are implicitly public abstract.',
        'Cannot be instantiated directly using "new".',
        'A single class can implement multiple interfaces: "class C implements A, B".'
      ],
      comparisonTable: {
        headers: ['Feature', 'Interface', 'Abstract Class'],
        rows: [
          ['Method Types', 'Abstract, Default, Static', 'Abstract and Concrete'],
          ['Variables', 'public static final only', 'Instance, static, final, non-final'],
          ['Multiple Inheritance', 'Yes (implements A, B)', 'No (single inheritance only)'],
          ['Constructors', 'Not allowed', 'Allowed (via super())']
        ]
      },
      syntaxOrDiagram: `interface InterfaceName {
    int CONST_VAL = 100; // public static final
    void methodName();   // public abstract
}

class ClassName implements InterfaceName {
    public void methodName() {
        // Implementation
    }
}`,
      javaCode: `// Java Program: Interface and Multiple Interface Implementation
interface Printable {
    void print();
}

interface Showable {
    void show();
}

// Class implementing multiple interfaces
class Document implements Printable, Showable {
    public void print() {
        System.out.println("Document printed successfully.");
    }

    public void show() {
        System.out.println("Displaying document on screen.");
    }
}

class InterfaceDemo {
    public static void main(String[] args) {
        Document doc = new Document();
        doc.print();
        doc.show();

        // Interface reference variable
        Printable p = doc;
        p.print();
    }
}`,
      codeWalkthrough: [
        'Printable and Showable declare abstract methods print() and show().',
        'Document implements both interfaces, fulfilling multiple inheritance in Java.',
        'All implemented methods in Document are explicitly declared public.',
        'Demonstrates calling methods directly and via an interface reference.'
      ],
      expectedOutput: `Document printed successfully.
Displaying document on screen.
Document printed successfully.`,
      examTips:
        'Always mention that methods implemented from an interface must be declared "public" in the implementing class.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Static Methods in Interfaces',
      marks: 7.5,
      syllabusTopic: '3.3.8 Static Methods in Interfaces (Java 8 Feature)',
      simpleExplanation:
        'Introduced in Java 8, static methods in interfaces allow concrete utility and helper methods to be defined directly inside an interface. They must be invoked using the interface name and cannot be overridden by implementing classes.',
      detailedTheory:
        'Before Java 8, all methods in an interface were abstract. When utility methods were required, programmers had to create separate utility classes (like Collections for Collection).\n\nKey Rules of Interface Static Methods:\n1. Belongs Strictly to Interface: Interface static methods belong to the interface namespace, not to the implementing class or instance.\n2. No Overriding: Implementing classes do not inherit static methods of an interface; they cannot override or hide them.\n3. Calling Rule: They must be invoked exclusively using the Interface Name: "InterfaceName.methodName()". Calling via an object reference or subclass name triggers a compile-time error.',
      keyPoints: [
        'Added in Java 8 to provide built-in utility functions.',
        'Contains full implementation with curly braces {}.',
        'Cannot be overridden by implementing classes.',
        'Must be invoked directly via InterfaceName.methodName().'
      ],
      syntaxOrDiagram: `interface MathUtil {
    static int cube(int x) {
        return x * x * x;
    }
}

// Invocation:
MathUtil.cube(4); // Correct!
new Demo().cube(4); // Error: cannot find symbol`,
      javaCode: `// Java Program: Static Methods in Interfaces
interface Calculator {
    // Abstract method
    int operate(int a, int b);

    // Static utility method inside interface
    static int cube(int x) {
        return x * x * x;
    }

    static int add(int a, int b) {
        return a + b;
    }
}

class StaticMethodDemo {
    public static void main(String[] args) {
        // Called directly using the interface name
        int cubeRes = Calculator.cube(4);
        int sumRes = Calculator.add(20, 30);

        System.out.println("Cube of 4 via Interface: " + cubeRes);
        System.out.println("Sum of 20 and 30: " + sumRes);
    }
}`,
      codeWalkthrough: [
        'Calculator defines static methods cube() and add() with bodies.',
        'In main, Calculator.cube(4) invokes the method directly using the interface name without any implementing object.'
      ],
      expectedOutput: `Cube of 4 via Interface: 64
Sum of 20 and 30: 50`,
      examTips:
        'Distinguish static methods from default methods: default methods can be overridden by implementing classes; static methods cannot.'
    }
  },

  // ==================== QUESTION 3 ====================
  {
    id: 3,
    questionNumber: 3,
    unit: 'Unit IV',
    title: 'Packages & Importing Packages / Exception Handling',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'What is Package? Explain about importing packages',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Packages & Java Library, Importing & Classpath',
      simpleExplanation:
        'A package in Java is a directory/folder mechanism that groups related classes, interfaces, and sub-packages. Packages prevent name conflicts, provide access protection, and structure reusable code libraries.',
      detailedTheory:
        'Packages structure Java software into organized modules.\n\nBenefits:\n1. Namespace Collision Avoidance: Two classes can share the same name if they reside in different packages (e.g. java.util.Date and java.sql.Date).\n2. Access Protection: Package-private (default) access restricts visibility to classes within the same package.\n3. Easy Discovery & Jar Distribution: Classes are bundled into cohesive libraries.\n\nCompilation & Classpath:\n- Compilation with "-d": "javac -d . Addition.java" creates required package folders automatically.\n- PATH vs CLASSPATH: PATH locates binary executables (.exe) like javac for the OS; CLASSPATH tells the Java ClassLoader where to find .class and .jar files.',
      keyPoints: [
        'Package statement must be the first line: "package packagename;".',
        'Two types: Built-in packages (java.lang, java.util, java.io) and User-defined packages.',
        'Three import ways: fully qualified name, specific class import, wildcard import (*).',
        'CLASSPATH environment variable specifies where ClassLoader searches for .class files.'
      ],
      syntaxOrDiagram: `// Package statement:
package com.university.math;

// Import statements:
import java.util.Scanner; // Specific
import java.util.*;       // Wildcard

Directory Structure:
./com/university/math/Addition.class`,
      javaCode: `// Java Program: Package demonstration & Importing
import java.util.Date; // Importing Date class

class PackageDemo {
    public static void main(String[] args) {
        // 1. Using import statement
        Date now = new Date();
        System.out.println("Date from java.util package: " + now);

        // 2. Using fully qualified name without import
        double root = java.lang.Math.sqrt(144);
        System.out.println("Square root via fully qualified name: " + root);
    }
}`,
      codeWalkthrough: [
        'import java.util.Date brings the Date class into scope.',
        'java.lang.Math.sqrt() demonstrates using fully qualified class names without an explicit import.'
      ],
      expectedOutput: `Date from java.util package: Fri Nov 06 05:55:00 PST 2026
Square root via fully qualified name: 12.0`,
      examTips:
        'Examiners look for the compilation command "javac -d . FileName.java" and the difference between PATH and CLASSPATH.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Exception Handling',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Exception Handling Concept & Hierarchy',
      simpleExplanation:
        'Exception handling is a structured mechanism in Java to intercept runtime errors, allowing a program to handle abnormal situations gracefully without terminating abruptly. All exceptions in Java derive from the Throwable class.',
      detailedTheory:
        'An exception is an abnormal condition occurring during program execution. If unhandled, the JVM halts the program and prints a stack trace.\n\nThrowable Hierarchy:\n- java.lang.Object -> java.lang.Throwable -> Error and Exception.\n- Error: Severe system-level failures (e.g. OutOfMemoryError, StackOverflowError) that applications should not catch.\n- Exception: Conditions that a sensible application can catch and recover from.\n- Checked Exceptions: Checked at compile-time (e.g. IOException, SQLException). Must be caught or declared.\n- Unchecked Exceptions: Subclasses of RuntimeException (e.g. ArithmeticException, NullPointerException) that occur at runtime.',
      keyPoints: [
        'Throwable is the root class of all exceptions and errors.',
        'Checked Exceptions: Verified at compile-time; compiler forces handling.',
        'Unchecked Exceptions: Occur at runtime; subclasses of RuntimeException.',
        '5 Keywords: try, catch, finally, throw, throws.'
      ],
      syntaxOrDiagram: `Throwable Class Hierarchy:
              Object
                |
            Throwable
           /         \\
      Exception       Error (Irrecoverable: StackOverflowError)
      /       \\
  Checked    RuntimeException (Unchecked: ArithmeticException)
 Exceptions`,
      javaCode: `// Java Program: Basic Exception Handling Mechanism
class ExceptionIntroDemo {
    public static void main(String[] args) {
        System.out.println("Program starting...");
        try {
            int a = 10;
            int b = 0;
            int c = a / b; // Causes ArithmeticException
            System.out.println("Result: " + c);
        } catch (ArithmeticException e) {
            System.out.println("Caught Exception: Cannot divide by zero!");
            System.out.println("Error Message: " + e.getMessage());
        } finally {
            System.out.println("Finally block: Always executes for clean-up.");
        }
        System.out.println("Program recovered and resumed normal operation.");
    }
}`,
      codeWalkthrough: [
        'try block monitors the division statement a / b.',
        'When division by zero occurs, an ArithmeticException is thrown.',
        'catch block intercepts the exception and prints an error message.',
        'finally block executes unconditionally before continuing.'
      ],
      expectedOutput: `Program starting...
Caught Exception: Cannot divide by zero!
Error Message: / by zero
Finally block: Always executes for clean-up.
Program recovered and resumed normal operation.`,
      examTips:
        'Draw the Throwable hierarchy tree: Object -> Throwable -> (Exception, Error) -> RuntimeException.'
    }
  },

  // ==================== QUESTION 4 ====================
  {
    id: 4,
    questionNumber: 4,
    unit: 'Unit IV',
    title: 'Exception Handling Program & Byte Streams',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Write a JAVA program that describes exception handling mechanism',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Multi-catch, try-catch-finally, and error recovery',
      simpleExplanation:
        'This program demonstrates the complete exception handling mechanism using try, multiple catch blocks (for specific exceptions like ArithmeticException and ArrayIndexOutOfBoundsException), and a finally block.',
      detailedTheory:
        'When code inside a try block generates an exception, the remaining statements in the try block are skipped. The JVM searches the matching catch block from top to bottom. Once a matching catch block executes, control passes to the finally block and then continues with subsequent statements.\n\nRule of Multiple Catch Clauses:\nCatch blocks must be ordered from most specific (subclass) to most general (superclass). Placing catch(Exception e) before catch(ArithmeticException e) produces a compile-time unreachable code error.',
      keyPoints: [
        'Control jumps immediately to catch block when an exception is thrown.',
        'Multiple catch blocks act like switch-case statements.',
        'Subclass exceptions must be caught before superclass exceptions.',
        'finally block executes regardless of whether an exception occurs.'
      ],
      syntaxOrDiagram: `try {
    // Risky code
} catch (ArithmeticException e) {
    // Specific handler
} catch (ArrayIndexOutOfBoundsException e) {
    // Specific handler
} catch (Exception e) {
    // General fallback handler
} finally {
    // Guaranteed cleanup
}`,
      javaCode: `// Java Program: Exception Handling with Multiple Catch and Finally
class ExceptionMechanismProgram {
    public static void main(String[] args) {
        int[] numbers = { 10, 20, 30 };
        int a = 50, b = 0;

        try {
            System.out.println("Inside Try Block");
            // Risky Operation 1: Division by zero
            int result = a / b;
            System.out.println("Result: " + result); // Skipped
        } catch (ArithmeticException ae) {
            System.out.println("Catch 1: Caught ArithmeticException -> " + ae.getMessage());
        } catch (ArrayIndexOutOfBoundsException aiobe) {
            System.out.println("Catch 2: Caught Array Index Exception -> " + aiobe.getMessage());
        } catch (Exception e) {
            System.out.println("Catch 3: General Exception -> " + e);
        } finally {
            System.out.println("Finally Block: Always executed unconditionally.");
        }

        System.out.println("Program finished safely.");
    }
}`,
      codeWalkthrough: [
        'Division by zero triggers ArithmeticException.',
        'Control bypasses subsequent try lines and matches Catch 1.',
        'Finally block executes cleanup code.',
        'Program prints final message without crashing.'
      ],
      expectedOutput: `Inside Try Block
Catch 1: Caught ArithmeticException -> / by zero
Finally Block: Always executed unconditionally.
Program finished safely.`,
      examTips:
        'Explain that statements after the crashing line inside the try block are NEVER executed.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain Byte streams with Example',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Java I/O Streams (Byte Streams vs Character Streams)',
      simpleExplanation:
        'Byte streams in Java process input and output of raw 8-bit bytes. They are ideal for handling binary data such as image files, audio, video, or executing raw file byte copying. All byte stream classes inherit from the abstract superclasses InputStream and OutputStream.',
      detailedTheory:
        'Java handles I/O using streams. Byte streams read/write data 1 byte (8 bits) at a time, handling values from 0 to 255.\n\nAbstract Superclasses in java.io:\n1. InputStream: Defines abstract int read() (returns next byte as 0-255 or -1 on EOF), available(), close().\n2. OutputStream: Defines abstract void write(int b), write(byte[] b), flush(), close().\n\nCommon Implementations:\n- FileInputStream / FileOutputStream: Read/write raw bytes to physical disk files.\n- ByteArrayInputStream / ByteArrayOutputStream: Read/write bytes to in-memory buffers.\n- BufferedInputStream / BufferedOutputStream: Add 8KB internal buffer for fast I/O.',
      keyPoints: [
        '8-Bit Byte Processing: Reads/writes 1 byte at a time.',
        'Superclasses: java.io.InputStream and java.io.OutputStream.',
        'Used for binary files: images, audio, video, compiled bytecode.',
        'read() returns -1 on End Of File (EOF).'
      ],
      comparisonTable: {
        headers: ['Feature', 'Byte Streams', 'Character Streams'],
        rows: [
          ['Unit Size', '8-bit bytes', '16-bit Unicode characters'],
          ['Superclasses', 'InputStream / OutputStream', 'Reader / Writer'],
          ['Best For', 'Binary files (images, audio, video)', 'Text files (.txt, .java, .csv)']
        ]
      },
      syntaxOrDiagram: `Byte Stream Class Hierarchy:
            InputStream                   OutputStream
                 |                              |
         FileInputStream                FileOutputStream
                 |                              |
       BufferedInputStream            BufferedOutputStream`,
      javaCode: `// Java Program: Byte Streams using ByteArrayInputStream & ByteArrayOutputStream
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

class ByteStreamDemo {
    public static void main(String[] args) {
        String msg = "Hello Java Byte Streams";
        byte[] bytes = msg.getBytes();

        try (ByteArrayInputStream in = new ByteArrayInputStream(bytes);
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            int b;
            // read() returns each byte (0-255) or -1 at EOF
            while ((b = in.read()) != -1) {
                // Write byte in uppercase
                out.write(Character.toUpperCase((char) b));
            }

            System.out.println("Processed Byte Output: " + out.toString());
        } catch (IOException e) {
            System.err.println("I/O Error: " + e.getMessage());
        }
    }
}`,
      codeWalkthrough: [
        'msg.getBytes() converts the string into a raw byte array.',
        'ByteArrayInputStream reads bytes one by one.',
        'Character.toUpperCase() modifies each byte.',
        'ByteArrayOutputStream accumulates bytes and converts them back to string.'
      ],
      expectedOutput: `Processed Byte Output: HELLO JAVA BYTE STREAMS`,
      examTips:
        'Contrast Byte Streams (8-bit, InputStream/OutputStream) with Character Streams (16-bit, Reader/Writer).'
    }
  },

  // ==================== QUESTION 5 ====================
  {
    id: 5,
    questionNumber: 5,
    unit: 'Unit V',
    title: 'Thread Class & JDBC Architecture',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Thread Class',
      marks: 7.5,
      syllabusTopic: 'Unit V - Multithreaded Programming: Thread Class and Creation',
      simpleExplanation:
        'The java.lang.Thread class provides constructors and methods to create, manage, and perform operations on independent paths of code execution (threads). Thread extends Object and implements the Runnable interface.',
      detailedTheory:
        'A thread is a lightweight sub-process sharing the same memory space. The Thread class encapsulates execution control in Java.\n\nThread Life Cycle States:\n1. Newborn: Object created via new Thread().\n2. Runnable: start() invoked; waiting in queue for CPU time slicing.\n3. Running: JVM scheduler gives CPU core; run() executes.\n4. Blocked/Waiting: Paused due to sleep(), wait(), or I/O.\n5. Dead/Terminated: run() completes.\n\nTwo Ways to Create Threads:\n1. Extending Thread class and overriding run().\n2. Implementing Runnable interface (preferred for multiple inheritance).',
      keyPoints: [
        'Thread extends Object and implements Runnable.',
        'start() spawns new call stack and executes run().',
        'sleep(ms) pauses execution without releasing locks.',
        'Priority ranges from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY); default is 5 (NORM_PRIORITY).'
      ],
      syntaxOrDiagram: `Thread Life Cycle:
  [Newborn] --- start() ---> [Runnable] <--- yield() --- [Running] --- run() ends ---> [Dead]
                                 ^                            |
                                 |-- sleep ends -- [Blocked] -+ sleep()` ,
      javaCode: `// Java Program: Creating and Managing Threads
class MyThread extends Thread {
    MyThread(String name, int priority) {
        super(name);
        setPriority(priority);
    }

    public void run() {
        System.out.println("Thread running: " + getName() + " [Priority: " + getPriority() + "]");
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " count: " + i);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {}
        }
    }
}

class ThreadClassDemo {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Main Thread: " + Thread.currentThread().getName());

        MyThread t1 = new MyThread("Worker-1", Thread.MAX_PRIORITY);
        MyThread t2 = new MyThread("Worker-2", Thread.NORM_PRIORITY);

        t1.start();
        t2.start();

        t1.join();
        t2.join();
        System.out.println("All threads finished.");
    }
}`,
      codeWalkthrough: [
        'MyThread extends Thread and overrides run().',
        'super(name) sets thread name; setPriority() sets priorities 10 and 5.',
        'start() spawns parallel execution.',
        'join() ensures main thread waits for workers to finish.'
      ],
      expectedOutput: `Main Thread: main
Thread running: Worker-1 [Priority: 10]
Worker-1 count: 1
Thread running: Worker-2 [Priority: 5]
Worker-2 count: 1
Worker-1 count: 2
Worker-2 count: 2
Worker-1 count: 3
Worker-2 count: 3
All threads finished.`,
      examTips:
        'Emphasize that start() spawns a new thread, whereas calling run() directly executes synchronously on the same thread.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about JDBC Architecture',
      marks: 7.5,
      syllabusTopic: 'Unit V - Java Database Connectivity (JDBC) Architecture & Drivers',
      simpleExplanation:
        'JDBC (Java Database Connectivity) is a standard Java API from Sun Microsystems that allows Java applications to connect, execute SQL commands, and interact with relational databases independently of database vendor specifics.',
      detailedTheory:
        'JDBC standardizes database communication across vendors like MySQL, Oracle, and PostgreSQL.\n\nTwo Main Layers:\n1. Application Layer (JDBC API): Interfaces in java.sql (Connection, Statement, PreparedStatement, ResultSet).\n2. Driver Layer: Managed by DriverManager, which loads the specific database driver.\n\nThe 4 Types of JDBC Drivers:\n- Type 1: JDBC-ODBC Bridge (slow, native ODBC dependency, obsolete).\n- Type 2: Native-API Driver (part Java, part native C/C++ DB client).\n- Type 3: Network-Protocol Driver (communicates via middleware server).\n- Type 4: Pure Java Thin Driver (direct socket communication to DB, industry standard).',
      keyPoints: [
        'API in java.sql package.',
        'DriverManager manages drivers and creates Connection.',
        'Type 4 Thin Driver is pure Java and recommended.',
        'Core interfaces: Driver, Connection, Statement, PreparedStatement, ResultSet.'
      ],
      syntaxOrDiagram: `+---------------------------------------+
|           Java Application            |
+---------------------------------------+
                   |
                   v
+---------------------------------------+
|      JDBC API (java.sql package)      |
+---------------------------------------+
                   |
                   v
+---------------------------------------+
|             DriverManager             |
+---------------------------------------+
                   |
                   v
+---------------------------------------+
|    JDBC Driver (Type 4 Thin Driver)   |
+---------------------------------------+
                   |
                   v
+---------------------------------------+
|        Database (MySQL / Oracle)      |
+---------------------------------------+`,
      javaCode: `// Java Program: JDBC Architecture Simulation
class JDBCArchitectureDemo {
    public static void main(String[] args) {
        System.out.println("=== 4 JDBC Architecture Components ===");
        System.out.println("1. Java Application: Initiates database operations.");
        System.out.println("2. JDBC API: java.sql.Connection, Statement, ResultSet.");
        System.out.println("3. DriverManager: Loads vendor driver via Class.forName().");
        System.out.println("4. JDBC Driver: Type 4 Pure Java Thin Driver (e.g. MySQL Connector).");

        System.out.println("\nStandard Workflow:");
        System.out.println("URL: jdbc:mysql://localhost:3306/university_db");
        System.out.println("Executing Query: SELECT id, name FROM students;");
        System.out.println("ResultSet Row 1: [101, 'Vahida']");
        System.out.println("ResultSet Row 2: [102, 'Suresh']");
    }
}`,
      codeWalkthrough: [
        'Outlines the 4 tiers of JDBC architecture.',
        'Simulates connection URL and query execution steps.'
      ],
      expectedOutput: `=== 4 JDBC Architecture Components ===
1. Java Application: Initiates database operations.
2. JDBC API: java.sql.Connection, Statement, ResultSet.
3. DriverManager: Loads vendor driver via Class.forName().
4. JDBC Driver: Type 4 Pure Java Thin Driver (e.g. MySQL Connector).

Standard Workflow:
URL: jdbc:mysql://localhost:3306/university_db
Executing Query: SELECT id, name FROM students;
ResultSet Row 1: [101, 'Vahida']
ResultSet Row 2: [102, 'Suresh']`,
      examTips:
        'Draw the 4-tier diagram and list the 4 driver types with special mention of Type 4 Thin Driver.'
    }
  },

  // ==================== QUESTION 6 ====================
  {
    id: 6,
    questionNumber: 6,
    unit: 'Unit V',
    title: 'Inter-thread Communication & Mouse Events',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain Inter-thread Communication',
      marks: 7.5,
      syllabusTopic: 'Unit V - Inter-thread Communication (wait, notify, notifyAll)',
      simpleExplanation:
        'Inter-thread communication is a mechanism where synchronized threads communicate with each other using wait(), notify(), and notifyAll() methods of the Object class. It avoids CPU polling in producer-consumer scenarios.',
      detailedTheory:
        'When multiple threads access shared resources, they need coordination without busy-waiting. Inter-thread communication solves this using object monitors.\n\nCore Methods (in java.lang.Object):\n1. wait(): Releases the object monitor lock and puts the calling thread in waiting state until notified.\n2. notify(): Wakes up a single thread waiting on this object monitor.\n3. notifyAll(): Wakes up all threads waiting on this object monitor.\n\nCritical Rule: These methods must be called inside a synchronized block or method; calling them outside causes IllegalMonitorStateException.',
      keyPoints: [
        'Methods belong to java.lang.Object because locks are tied to objects, not threads.',
        'Must be called inside a synchronized block or method.',
        'Prevents CPU polling and busy-waiting.',
        'Essential for Producer-Consumer problem.'
      ],
      syntaxOrDiagram: `Producer Thread                    Consumer Thread
       |                                  |
1. Acquires lock                          |
2. Produces data                          |
3. Calls notify()                         |
4. Releases lock                          |
                                  5. Acquires lock
                                  6. Consumes data
                                  7. Calls wait()`,
      javaCode: `// Java Program: Inter-Thread Communication (Producer - Consumer)
class Customer {
    int balance = 1000;

    synchronized void withdraw(int amount) {
        System.out.println("Going to withdraw: " + amount);
        if (balance < amount) {
            System.out.println("Low balance (" + balance + "); waiting for deposit...");
            try { wait(); } catch (Exception e) {}
        }
        balance -= amount;
        System.out.println("Withdraw completed. New Balance: " + balance);
    }

    synchronized void deposit(int amount) {
        System.out.println("Going to deposit: " + amount);
        balance += amount;
        System.out.println("Deposit completed. Notifying waiting thread...");
        notify(); // Wakes up waiting thread
    }
}

class InterThreadTest {
    public static void main(String[] args) {
        Customer c = new Customer();
        new Thread(() -> c.withdraw(1500)).start();
        new Thread(() -> c.deposit(1000)).start();
    }
}`,
      codeWalkthrough: [
        'withdraw() checks if balance is sufficient; if not, it calls wait(), releasing the lock.',
        'deposit() adds funds and calls notify() to wake up the waiting withdraw thread.',
        'withdraw resumes, completes the withdrawal, and prints the updated balance.'
      ],
      expectedOutput: `Going to withdraw: 1500
Low balance (1000); waiting for deposit...
Going to deposit: 1000
Deposit completed. Notifying waiting thread...
Withdraw completed. New Balance: 500`,
      examTips:
        'Explain why wait() and notify() belong to Object class: because locks reside on objects, not on threads.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about mouse events',
      marks: 7.5,
      syllabusTopic: 'Unit V - Event Handling: MouseListener and MouseMotionListener',
      simpleExplanation:
        'Mouse events are generated when the user clicks, presses, releases, enters, exits, or moves the mouse over a GUI component. In Java, mouse events are encapsulated in MouseEvent and handled via MouseListener and MouseMotionListener interfaces.',
      detailedTheory:
        'Mouse events belong to the java.awt.event package.\n\nTwo Main Listener Interfaces:\n1. MouseListener (5 methods):\n   - mouseClicked(MouseEvent e): Press and release on same component.\n   - mousePressed(MouseEvent e): Button pressed.\n   - mouseReleased(MouseEvent e): Button released.\n   - mouseEntered(MouseEvent e): Cursor enters component boundary.\n   - mouseExited(MouseEvent e): Cursor leaves component boundary.\n\n2. MouseMotionListener (2 methods):\n   - mouseMoved(MouseEvent e): Moving mouse without button pressed.\n   - mouseDragged(MouseEvent e): Moving mouse while holding button.\n\nMouseAdapter Class: Provides empty implementations for all 5 methods of MouseListener, allowing programmers to override only the methods they need.',
      keyPoints: [
        'Event class: java.awt.event.MouseEvent.',
        'MouseListener handles clicks, press, release, enter, exit (5 methods).',
        'MouseMotionListener handles move and drag (2 methods).',
        'MouseAdapter simplifies coding by eliminating empty method overrides.',
        'e.getX() and e.getY() return coordinates.'
      ],
      syntaxOrDiagram: `Component (Source)
      |
      | (Click / Move)
      v
MouseEvent Object (contains getX(), getY(), getClickCount())
      |
      +---> MouseListener (5 methods)
      +---> MouseMotionListener (2 methods)`,
      javaCode: `// Java Program: Mouse Event Handling with MouseAdapter
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.Label;

class MouseEventsDemo {
    public static void main(String[] args) {
        // Using MouseAdapter to override only mouseClicked
        MouseAdapter adapter = new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                System.out.println("Mouse Clicked at (" + e.getX() + ", " + e.getY() + ")");
                System.out.println("Click Count: " + e.getClickCount());
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                System.out.println("Mouse Entered Component Region.");
            }
        };

        // Simulating firing of events
        Label comp = new Label();
        MouseEvent enter = new MouseEvent(comp, MouseEvent.MOUSE_ENTERED, 0, 0, 0, 0, 0, false);
        MouseEvent click = new MouseEvent(comp, MouseEvent.MOUSE_CLICKED, 0, 0, 120, 80, 1, false);

        adapter.mouseEntered(enter);
        adapter.mouseClicked(click);
    }
}`,
      codeWalkthrough: [
        'MouseAdapter is subclassed anonymously, overriding only mouseClicked and mouseEntered.',
        'MouseEvent objects encapsulate coordinates (120, 80) and click count (1).',
        'Demonstrates how listener methods receive and process event data.'
      ],
      expectedOutput: `Mouse Entered Component Region.
Mouse Clicked at (120, 80)
Click Count: 1`,
      examTips:
        'Mention the convenience of MouseAdapter: it avoids writing empty bodies for all 5 methods of MouseListener.'
    }
  },

  // ==================== QUESTION 7 ====================
  {
    id: 7,
    questionNumber: 7,
    unit: 'Unit III',
    title: 'Operations of Arrays & Method Overriding',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain operations of Arrays',
      marks: 7.5,
      syllabusTopic: '3.1.5 Operations on Array Elements, Search & Sort',
      simpleExplanation:
        'Arrays support fundamental data processing operations: element traversal, insertion, deletion, assignment/reference copying, searching (Linear vs Binary), and sorting (Bubble, Selection, Quick Sort).',
      detailedTheory:
        'Arrays support several standard operations:\n1. Traversal: Accessing all elements sequentially using standard for or enhanced for-each loop.\n2. Assignment vs Cloning: "b = a" copies only the reference pointer, so both point to the same memory. To create an independent copy, use a.clone() or Arrays.copyOf().\n3. Sorting: Ordering elements in ascending or descending sequence (e.g. Bubble sort or Arrays.sort()).\n4. Searching: Finding the index of an element via Linear Search (O(n)) or Binary Search (O(log n) on sorted arrays).',
      keyPoints: [
        'Traversal: Iteration via loops.',
        'Reference assignment shares heap memory; clone() creates an independent copy.',
        'Searching: Linear Search (unsorted) vs Binary Search (sorted).',
        'Sorting: Arrays.sort() uses Dual-Pivot QuickSort.'
      ],
      syntaxOrDiagram: `// Reference assignment (shares memory):
int[] a = { 10, 20 };
int[] b = a;  // b points to SAME memory
b[0] = 99;    // a[0] also becomes 99!

// Cloning (independent memory):
int[] c = a.clone(); // Separate heap memory`,
      javaCode: `// Java Program: Array Operations (Sort, Search, Clone)
import java.util.Arrays;

class ArrayOperationsDemo {
    public static void main(String[] args) {
        int[] original = { 50, 20, 10, 40, 30 };

        // 1. Sorting
        Arrays.sort(original);
        System.out.println("Sorted Array: " + Arrays.toString(original));

        // 2. Binary Searching (on sorted array)
        int index = Arrays.binarySearch(original, 30);
        System.out.println("Element 30 found at index: " + index);

        // 3. Reference Alias vs True Clone
        int[] alias = original;      // Shares memory
        int[] clone = original.clone(); // Separate memory

        alias[0] = 999;
        System.out.println("original[0] after alias modification: " + original[0]);
        System.out.println("clone[0] remains unchanged: " + clone[0]);
    }
}`,
      codeWalkthrough: [
        'Arrays.sort() sorts the array in-place.',
        'Arrays.binarySearch() locates the index of 30 in O(log n) time.',
        'Demonstrates how modifying alias[0] changes original[0], while clone[0] remains unaffected.'
      ],
      expectedOutput: `Sorted Array: [10, 20, 30, 40, 50]
Element 30 found at index: 2
original[0] after alias modification: 999
clone[0] remains unchanged: 10`,
      examTips:
        'Clearly show the difference between reference copying (b = a) and value copying (clone()) to score full marks.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Method Overriding',
      marks: 7.5,
      syllabusTopic: '3.2.8 Method Overriding & Dynamic Method Dispatch',
      simpleExplanation:
        'Method Overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. It enables runtime polymorphism (Dynamic Method Dispatch) where method calls are resolved at runtime based on the actual object type.',
      detailedTheory:
        'Overriding is runtime polymorphism in Java.\n\nStrict Overriding Rules:\n1. Identical Signature: Same method name, same parameter list, and same or covariant return type.\n2. Access Visibility: Subclass cannot make the method more restrictive (e.g. protected in parent cannot become private in child).\n3. Non-Overridable: static, private, and final methods cannot be overridden.\n4. Dynamic Method Dispatch: When a superclass reference variable refers to a subclass object, the JVM calls the subclass overridden method at runtime.',
      keyPoints: [
        'Enables Runtime Polymorphism (Dynamic Method Dispatch).',
        'Same method name and parameter list in subclass.',
        'Cannot override private, static, or final methods.',
        '@Override annotation helps compiler check signature correctness.'
      ],
      comparisonTable: {
        headers: ['Feature', 'Method Overloading', 'Method Overriding'],
        rows: [
          ['Class Context', 'Same class', 'Superclass & Subclass'],
          ['Method Name', 'Same', 'Same'],
          ['Parameters', 'Must be different', 'Must be identical'],
          ['Return Type', 'Can be different', 'Same or covariant'],
          ['Binding Time', 'Compile-Time (Static)', 'Run-Time (Dynamic)']
        ]
      },
      syntaxOrDiagram: `SuperClass ref = new SubClass();
ref.display(); // Resolves to SubClass.display() at RUNTIME!`,
      javaCode: `// Java Program: Method Overriding and Dynamic Method Dispatch
class Bank {
    double getRate() {
        return 5.0;
    }
}

class SBI extends Bank {
    @Override
    double getRate() {
        return 7.5;
    }
}

class HDFC extends Bank {
    @Override
    double getRate() {
        return 8.2;
    }
}

class OverridingDemo {
    public static void main(String[] args) {
        Bank b; // Superclass reference variable

        b = new SBI();
        System.out.println("SBI Interest Rate: " + b.getRate() + "%");

        b = new HDFC();
        System.out.println("HDFC Interest Rate: " + b.getRate() + "%");
    }
}`,
      codeWalkthrough: [
        'Bank defines base getRate() returning 5.0.',
        'SBI and HDFC override getRate() with their respective rates.',
        'In main, superclass reference Bank b points to SBI and HDFC objects dynamically, invoking the respective overridden methods.'
      ],
      expectedOutput: `SBI Interest Rate: 7.5%
HDFC Interest Rate: 8.2%`,
      examTips:
        'Always include the table comparing Method Overloading vs Method Overriding.'
    }
  },

  // ==================== QUESTION 8 ====================
  {
    id: 8,
    questionNumber: 8,
    unit: 'Unit III',
    title: 'Implementation of Interface & Functional Interfaces',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain Implementation of Interface',
      marks: 7.5,
      syllabusTopic: '3.3.3 Implementing Interfaces & Multiple Interfaces',
      simpleExplanation:
        'To use an interface, a class must implement it using the "implements" keyword. The implementing class must provide concrete method bodies for all abstract methods declared in the interface, using the public access specifier.',
      detailedTheory:
        'Interfaces define contracts that classes fulfill.\n\nKey Implementation Rules:\n1. The "implements" keyword connects a class to one or more interfaces.\n2. Access Specifier Rule: Interface methods are implicitly public. Because Java forbids reducing method visibility when overriding, implementing methods MUST be declared "public".\n3. Incomplete Implementation: If a class implements an interface but does not define all its methods, the class must be declared "abstract".\n4. Multiple Interface Implementation: A single class can implement multiple interfaces separated by commas.',
      keyPoints: [
        'Use "implements" keyword in class definition.',
        'Must declare implemented methods with "public" access.',
        'Enables Multiple Inheritance in Java without diamond conflicts.',
        'Interface reference can point to implementing class instances.'
      ],
      syntaxOrDiagram: `class MyClass implements Interface1, Interface2 {
    public void method1() { ... }
    public void method2() { ... }
}`,
      javaCode: `// Java Program: Implementing Multiple Interfaces
interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Report implements Printable, Showable {
    public void print() {
        System.out.println("Printing annual financial report.");
    }

    public void show() {
        System.out.println("Displaying report charts on screen.");
    }
}

class ImplementInterfaceDemo {
    public static void main(String[] args) {
        Report rep = new Report();
        rep.print();
        rep.show();
    }
}`,
      codeWalkthrough: [
        'Report implements both Printable and Showable.',
        'Provides public bodies for print() and show().',
        'Main instantiates Report and invokes both interface methods.'
      ],
      expectedOutput: `Printing annual financial report.
Displaying report charts on screen.`,
      examTips:
        'Point out that failing to write "public" in front of the implementing method causes a compilation error.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Functional Interfaces',
      marks: 7.5,
      syllabusTopic: '3.3.9 Functional Interfaces & @FunctionalInterface (Java 8)',
      simpleExplanation:
        'A Functional Interface is an interface that contains exactly ONE abstract method (Single Abstract Method - SAM). It can contain any number of default and static methods. It serves as the basis for Lambda Expressions in Java 8+.',
      detailedTheory:
        'Functional interfaces enable functional programming in Java.\n\nKey Concepts:\n1. SAM (Single Abstract Method): Has only one unimplemented method.\n2. @FunctionalInterface Annotation: Directs the compiler to enforce that the interface has exactly one abstract method. If a second abstract method is added, a compile error is raised.\n3. Lambda Target: Lambdas provide inline implementations for the single abstract method.\n4. Standard Built-in Examples: java.lang.Runnable (run()), java.util.Comparator (compare()), java.util.concurrent.Callable (call()).',
      keyPoints: [
        'Contains exactly one abstract method.',
        'Can have any number of default and static methods.',
        '@FunctionalInterface ensures compiler enforces single abstract method rule.',
        'Serves as target type for Lambda Expressions.'
      ],
      syntaxOrDiagram: `@FunctionalInterface
interface Square {
    int calculate(int x); // Only ONE abstract method
}

// Lambda usage:
Square s = (x) -> x * x;`,
      javaCode: `// Java Program: Functional Interface with Lambda Expression
@FunctionalInterface
interface SquareCalculator {
    int calculate(int x); // Single abstract method
}

class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        // Lambda expression implementation
        SquareCalculator sq = (x) -> x * x;
        System.out.println("Square of 6 is: " + sq.calculate(6));

        // Built-in Functional Interface: Runnable
        Runnable r = () -> System.out.println("Runnable executed via Lambda!");
        r.run();
    }
}`,
      codeWalkthrough: [
        '@FunctionalInterface confirms SquareCalculator has only calculate(int x).',
        '(x) -> x * x assigns the lambda expression to the interface reference.',
        'sq.calculate(6) invokes the lambda, outputting 36.'
      ],
      expectedOutput: `Square of 6 is: 36
Runnable executed via Lambda!`,
      examTips:
        'Mention standard built-in functional interfaces: Runnable, Comparable, ActionListener.'
    }
  },

  // ==================== QUESTION 9 ====================
  {
    id: 9,
    questionNumber: 9,
    unit: 'Unit IV',
    title: 'Wrapper Classes & Exception Handling Keywords',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Illustrate Wrapper Classes',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Wrapper Classes, Parsing, and Type Conversion',
      simpleExplanation:
        'Wrapper classes in java.lang encapsulate primitive data types into object representations. This allows primitive values to participate in object-centric operations like Java Collections (ArrayList, HashMap), serialization, and multithreading locks.',
      detailedTheory:
        'Java is not purely object-oriented because of primitive types (int, float, char). Wrapper classes in java.lang bridge this gap.\n\nMapping:\nbyte -> Byte, short -> Short, int -> Integer, long -> Long, float -> Float, double -> Double, char -> Character, boolean -> Boolean.\n\nCore Methods:\n1. valueOf(primitive): Converts primitive to Wrapper object.\n2. typeValue(): Extracts primitive from Wrapper object (intValue(), doubleValue()).\n3. parseType(String): Converts numeric string to primitive (Integer.parseInt("123")).\n4. toString(): Converts number to string representation.',
      keyPoints: [
        'Wraps primitive types into reference objects in java.lang.',
        'Enables primitives to be used in Collections (ArrayList<Integer>).',
        'All wrapper objects are immutable once created.',
        'Provides static parsing methods like parseInt() and parseDouble().'
      ],
      comparisonTable: {
        headers: ['Primitive Type', 'Wrapper Class', 'Converting to Object', 'Extracting Primitive'],
        rows: [
          ['int', 'Integer', 'Integer.valueOf(x)', 'obj.intValue()'],
          ['char', 'Character', 'Character.valueOf(c)', 'obj.charValue()'],
          ['double', 'Double', 'Double.valueOf(d)', 'obj.doubleValue()'],
          ['boolean', 'Boolean', 'Boolean.valueOf(b)', 'obj.booleanValue()']
        ]
      },
      syntaxOrDiagram: `Primitive Data Types                Wrapper Object Types
--------------------                --------------------
int       ======== valueOf() ========>  Integer
double    <======= doubleValue() =====  Double
char      ===========================>  Character
boolean   <===========================  Boolean`,
      javaCode: `// Java Program: Wrapper Class Operations
class WrapperDemo {
    public static void main(String[] args) {
        int primitive = 25;

        // 1. Boxing: Primitive to Wrapper Object
        Integer boxed = Integer.valueOf(primitive);

        // 2. Unboxing: Wrapper Object to Primitive
        int unboxed = boxed.intValue();

        // 3. Parsing String into Primitive
        int parsed = Integer.parseInt("500");

        System.out.println("Boxed Integer Object: " + boxed);
        System.out.println("Extracted Primitive int: " + unboxed);
        System.out.println("Parsed String '500' + 50 = " + (parsed + 50));
        System.out.println("Binary String of 25: " + Integer.toBinaryString(primitive));
    }
}`,
      codeWalkthrough: [
        'Integer.valueOf(primitive) wraps primitive 25 into an Integer object.',
        'boxed.intValue() extracts the primitive value.',
        'Integer.parseInt("500") parses a string into an integer.',
        'Integer.toBinaryString() demonstrates static utility methods.'
      ],
      expectedOutput: `Boxed Integer Object: 25
Extracted Primitive int: 25
Parsed String '500' + 50 = 550
Binary String of 25: 11001`,
      examTips:
        'Draw the 8 primitive-to-wrapper mapping table and show both parseInt() and valueOf() methods.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Keywords throws and throw, try, catch, and finally Blocks',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Exception Handling 5 Keywords',
      simpleExplanation:
        'Java manages runtime errors using five primary keywords: "try" encapsulates risky code; "catch" catches and processes exceptions; "finally" always executes for resource cleanup; "throw" explicitly triggers an exception object; and "throws" declares that a method may propagate exceptions to its caller.',
      detailedTheory:
        'The 5 keywords provide complete control over runtime error propagation:\n1. try: Blocks monitored code prone to exceptions.\n2. catch: Catches matching exception objects and handles errors.\n3. finally: Cleanup block that executes unconditionally (even if try/catch has a return statement).\n4. throw: Used inside method bodies to explicitly throw an exception object: throw new ArithmeticException("error");\n5. throws: Declares checked exceptions in a method signature that the method does not handle itself.',
      keyPoints: [
        'try: Encloses risky statements.',
        'catch: Handles specific exception type.',
        'finally: Always executes for cleanup.',
        'throw: Used inside method body to raise an exception.',
        'throws: Declared in method header to propagate exceptions.'
      ],
      comparisonTable: {
        headers: ['Feature', 'throw', 'throws'],
        rows: [
          ['Location', 'Inside method body', 'In method header signature'],
          ['Syntax', 'throw new ExceptionObject();', 'void method() throws ExceptionName'],
          ['Number of Exceptions', 'Followed by a single instance', 'Can list multiple comma-separated classes'],
          ['Purpose', 'Explicitly triggers an exception', 'Declares potential exceptions to caller']
        ]
      },
      syntaxOrDiagram: `void methodName() throws Exception1 { // throws in signature
    try {
        if (errorCondition) {
            throw new Exception1("Error"); // throw inside body
        }
    } catch (Exception1 e) {
        // catch handles it
    } finally {
        // cleanup always runs
    }
}`,
      javaCode: `// Java Program: Demonstrating try, catch, finally, throw, and throws
class FiveKeywordsDemo {
    // 'throws' declares that this method may propagate an exception
    static void checkEligibility(int age) throws ArithmeticException {
        if (age < 18) {
            // 'throw' explicitly raises an exception object
            throw new ArithmeticException("Age " + age + " is ineligible to vote.");
        } else {
            System.out.println("Age " + age + " is eligible to vote.");
        }
    }

    public static void main(String[] args) {
        try {
            System.out.println("Testing age: 15");
            checkEligibility(15);
        } catch (ArithmeticException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        } finally {
            System.out.println("Finally Block: Audit log completed.");
        }
    }
}`,
      codeWalkthrough: [
        'checkEligibility uses throws ArithmeticException in its header.',
        'If age < 18, it executes throw new ArithmeticException(...).',
        'In main, try-catch handles the exception and finally runs cleanly.'
      ],
      expectedOutput: `Testing age: 15
Caught Exception: Age 15 is ineligible to vote.
Finally Block: Audit log completed.`,
      examTips:
        'Include the comparison table between throw and throws to score full 7.5 marks.'
    }
  },

  // ==================== QUESTION 10 ====================
  {
    id: 10,
    questionNumber: 10,
    unit: 'Unit IV',
    title: 'Standard I/O Streams & Scanner Classes with Files',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain about standard I/O streams',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Standard I/O Streams in java.lang.System',
      simpleExplanation:
        'Java provides three standard predefined stream objects in the java.lang.System class: System.in (standard input), System.out (standard output), and System.err (standard error). They are automatically opened when a program starts.',
      detailedTheory:
        'Standard I/O streams connect Java applications with standard input/output devices.\n\nThree Standard Streams:\n1. System.in: Instance of java.io.InputStream. Reads raw byte data from keyboard.\n2. System.out: Instance of java.io.PrintStream. Writes normal program output to console screen.\n3. System.err: Instance of java.io.PrintStream. Outputs diagnostic errors and warnings to console. Can be redirected separately to an error log file.',
      keyPoints: [
        'Defined in java.lang.System class.',
        'System.in is an InputStream (reads raw bytes).',
        'System.out is a PrintStream (prints normal text).',
        'System.err is a PrintStream (prints error logs).'
      ],
      syntaxOrDiagram: `System.in   --> InputStream  (Reads bytes from keyboard)
System.out  --> PrintStream  (Prints regular output to console)
System.err  --> PrintStream  (Prints error messages to console)`,
      javaCode: `// Java Program: Standard I/O Streams Demonstration
class StandardIODemo {
    public static void main(String[] args) {
        System.out.println("1. Standard Output text using System.out");
        System.err.println("2. Standard Error message using System.err");
    }
}`,
      codeWalkthrough: [
        'System.out.println writes normal text to standard console.',
        'System.err.println writes error text to standard error stream.'
      ],
      expectedOutput: `1. Standard Output text using System.out
2. Standard Error message using System.err`,
      examTips:
        'State clearly that System.in is an InputStream, whereas System.out and System.err are PrintStream objects.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Scanner classes and Files',
      marks: 7.5,
      syllabusTopic: 'Unit IV - java.util.Scanner & java.io.File Integration',
      simpleExplanation:
        'java.util.Scanner is a high-level text parser that breaks input into tokens using regular expression delimiters and parses primitive types directly. When paired with java.io.File, Scanner enables simple file reading.',
      detailedTheory:
        'Scanner simplifies reading formatted input from console, strings, and disk files.\n\nKey Methods:\n- nextInt(), nextDouble(), nextBoolean(), next(), nextLine().\n- hasNext(), hasNextInt(), hasNextLine() (prevents InputMismatchException).\n\nFile Reading:\nScanner sc = new Scanner(new File("data.txt"));\nUses try-with-resources to ensure file handles are closed automatically after reading.',
      keyPoints: [
        'Belongs to java.util.Scanner.',
        'Parses primitive types and strings directly.',
        'Reads from System.in, Strings, and File objects.',
        'Can customize token delimiters using useDelimiter().'
      ],
      syntaxOrDiagram: `try (Scanner sc = new Scanner(new File("data.txt"))) {
    while (sc.hasNextLine()) {
        String line = sc.nextLine();
    }
}`,
      javaCode: `// Java Program: Scanner Class Reading Formatted Data
import java.util.Scanner;

class ScannerDemo {
    public static void main(String[] args) {
        String data = "101 Suresh 92.5\n102 Priya 88.0";
        try (Scanner sc = new Scanner(data)) {
            while (sc.hasNext()) {
                int id = sc.nextInt();
                String name = sc.next();
                double marks = sc.nextDouble();

                System.out.printf("Student ID: %d | Name: %-6s | Marks: %.1f%n", id, name, marks);
            }
        }
    }
}`,
      codeWalkthrough: [
        'Scanner wraps the formatted data string.',
        'sc.hasNext() checks for available tokens.',
        'sc.nextInt(), sc.next(), sc.nextDouble() parse typed fields directly.'
      ],
      expectedOutput: `Student ID: 101 | Name: Suresh | Marks: 92.5
Student ID: 102 | Name: Priya  | Marks: 88.0`,
      examTips:
        'Explain the difference between next() (reads a single token without spaces) and nextLine() (reads the entire line).'
    }
  },

  // ==================== QUESTION 11 ====================
  {
    id: 11,
    questionNumber: 11,
    unit: 'Unit V',
    title: 'Class StringBuffer & Deadlock and Race Situations',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Class String Buffer',
      marks: 7.5,
      syllabusTopic: 'Unit V - Class StringBuffer, Mutability, Capacity, and Methods',
      simpleExplanation:
        'StringBuffer is a peer class of String that represents mutable (modifiable) character sequences. Unlike String, which creates new heap objects on every modification, StringBuffer modifies characters in place and is thread-safe (synchronized).',
      detailedTheory:
        'String objects are immutable in Java. For frequent concatenations and edits, StringBuffer avoids creating temporary objects.\n\nFeatures:\n1. Mutability: Text and length can change dynamically in memory.\n2. Thread Safety: Methods in StringBuffer are synchronized, making it safe for multithreaded environments.\n3. Buffer Capacity: Default initial capacity is 16 characters. Growth formula when exceeded:\nnewCapacity = (oldCapacity * 2) + 2.\n4. Key Methods: append(), insert(), replace(), delete(), reverse(), capacity().',
      keyPoints: [
        'Mutable character sequence (modifies in place).',
        'Thread-safe (all major methods are synchronized).',
        'Default capacity is 16 characters.',
        'Growth formula: (oldCapacity * 2) + 2.'
      ],
      comparisonTable: {
        headers: ['Feature', 'String', 'StringBuffer', 'StringBuilder'],
        rows: [
          ['Mutability', 'Immutable', 'Mutable', 'Mutable'],
          ['Thread Safety', 'Thread-safe (immutable)', 'Thread-safe (synchronized)', 'Not thread-safe'],
          ['Performance', 'Slow on frequent edits', 'Medium speed', 'Fastest'],
          ['Introduction', 'JDK 1.0', 'JDK 1.0', 'JDK 1.5']
        ]
      },
      syntaxOrDiagram: `Capacity Growth:
Initial: 16 chars + text length
Formula: newCapacity = (oldCapacity * 2) + 2`,
      javaCode: `// Java Program: StringBuffer Operations
class StringBufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Java");
        System.out.println("Initial Capacity: " + sb.capacity()); // 16 + 4 = 20

        sb.append(" Programming");
        System.out.println("After append: " + sb);

        sb.replace(0, 4, "Core Java");
        System.out.println("After replace: " + sb);

        sb.reverse();
        System.out.println("After reverse: " + sb);
    }
}`,
      codeWalkthrough: [
        'StringBuffer sb initializes with text "Java" and capacity 20 (16 + 4).',
        'sb.append() appends " Programming" in place without allocating a new object.',
        'sb.replace() substitutes characters at indices 0 to 4.',
        'sb.reverse() reverses the character buffer.'
      ],
      expectedOutput: `Initial Capacity: 20
After append: Java Programming
After replace: Core Java Programming
After reverse: gnimmargorP avaJ eroC`,
      examTips:
        'Always contrast String (immutable), StringBuffer (mutable, synchronized), and StringBuilder (mutable, non-synchronized).'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Deadlock and Race Situations',
      marks: 7.5,
      syllabusTopic: 'Unit V - Multithreading Concurrency Issues: Deadlock and Race Condition',
      simpleExplanation:
        'A Race Condition occurs when multiple threads concurrently read and write shared data without synchronization, causing non-deterministic output. A Deadlock occurs when two or more threads are permanently blocked, each holding a lock that the other needs in a circular dependency.',
      detailedTheory:
        'Concurrency bugs in multithreaded systems:\n\n1. Race Condition: Occurs when multiple threads access and update shared mutable variables simultaneously without synchronization, causing incorrect results.\n\n2. Deadlock: A condition where two or more threads are blocked forever, waiting for each other.\nFour Coffman Conditions for Deadlock:\n- Mutual Exclusion: Only one thread can hold a resource at a time.\n- Hold and Wait: A thread holding a resource waits for another.\n- No Preemption: Resources cannot be forcibly taken from a thread.\n- Circular Wait: Thread A waits for Thread B, which waits for Thread A.\n\nDeadlock Solution: Always acquire locks in the exact same global order across all threads.',
      keyPoints: [
        'Race condition: Concurrent unsynchronized updates cause unpredictable output.',
        'Deadlock: Circular waiting for locked resources.',
        '4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
        'Prevention: Acquire locks in consistent order; use lock timeouts.'
      ],
      syntaxOrDiagram: `Deadlock Circular Wait:
Thread 1 holds [Lock R1] ----> waiting for ----> [Lock R2]
                                                   ^
                                                   |
Thread 2 holds [Lock R2] ----> waiting for ----> [Lock R1]`,
      javaCode: `// Java Program: Deadlock Scenario Demonstration
class DeadlockDemo {
    public static void main(String[] args) {
        String r1 = "Resource1";
        String r2 = "Resource2";

        // Thread 1 locks r1 then wants r2
        new Thread(() -> {
            synchronized (r1) {
                System.out.println("Thread 1: Locked " + r1);
                try { Thread.sleep(50); } catch (Exception e) {}
                synchronized (r2) {
                    System.out.println("Thread 1: Locked " + r2);
                }
            }
        }).start();

        // Thread 2 locks r2 then wants r1 (Opposite order -> Deadlock!)
        new Thread(() -> {
            synchronized (r2) {
                System.out.println("Thread 2: Locked " + r2);
                try { Thread.sleep(50); } catch (Exception e) {}
                synchronized (r1) {
                    System.out.println("Thread 2: Locked " + r1);
                }
            }
        }).start();
    }
}`,
      codeWalkthrough: [
        'Thread 1 acquires lock on Resource1 and sleeps.',
        'Thread 2 acquires lock on Resource2 and sleeps.',
        'Thread 1 tries to acquire Resource2 (held by Thread 2).',
        'Thread 2 tries to acquire Resource1 (held by Thread 1).',
        'Both threads wait forever, causing Deadlock.'
      ],
      expectedOutput: `Thread 1: Locked Resource1
Thread 2: Locked Resource2
(Both threads wait indefinitely on each other — Deadlock!)`,
      examTips:
        'State how to resolve deadlocks: acquire locks in the SAME sequence across all threads.'
    }
  },

  // ==================== QUESTION 12 ====================
  {
    id: 12,
    questionNumber: 12,
    unit: 'Unit V',
    title: 'Event Handling & Establishing JDBC Database Connections',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Event handling',
      marks: 7.5,
      syllabusTopic: 'Unit V - Delegation Event Model, Sources, and Listeners',
      simpleExplanation:
        'Event Handling is a mechanism where GUI components generate event objects upon user interaction (mouse click, keystroke, window resize) and delegate them to registered listener objects for processing.',
      detailedTheory:
        'Java uses the Delegation Event Model.\n\nThree Main Components:\n1. Event Source: The UI component that generates the event (e.g. Button, TextField, Window).\n2. Event Object: Subclass of java.util.EventObject carrying state information (e.g. ActionEvent, MouseEvent, KeyEvent).\n3. Event Listener: An interface with callback methods that the source notifies (e.g. ActionListener with actionPerformed()).\n\nAdapter Classes: Abstract classes providing empty method implementations of multi-method listener interfaces (e.g. MouseAdapter) so developers only override needed methods.',
      keyPoints: [
        'Delegation Event Model: Source -> Event Object -> Listener.',
        'Event Source: UI component (e.g. Button).',
        'Event Object: Encapsulates event data (e.g. ActionEvent).',
        'Event Listener: Callback interface (e.g. ActionListener).'
      ],
      syntaxOrDiagram: `[Event Source: Button] --(User clicks button)--> [Creates ActionEvent Object]
           |
           v
  (Dispatched to)
           |
           v
[Registered Listener: ActionListener] ---> [Calls actionPerformed(ActionEvent e)]`,
      javaCode: `// Java Program: Delegation Event Model Demonstration
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

class EventHandlingDemo {
    public static void main(String[] args) {
        // Listener implementation
        ActionListener listener = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Event Processed: " + e.getActionCommand());
            }
        };

        // Simulating event trigger
        ActionEvent click = new ActionEvent(new Object(), ActionEvent.ACTION_PERFORMED, "SAVE_DATA");
        listener.actionPerformed(click);
    }
}`,
      codeWalkthrough: [
        'Creates an ActionListener implementing actionPerformed().',
        'Simulates an ActionEvent with command "SAVE_DATA".',
        'Invokes the listener callback, processing the event.'
      ],
      expectedOutput: `Event Processed: SAVE_DATA`,
      examTips:
        'Draw the 3-step diagram: Event Source -> Event Object -> Event Listener.'
    },
    partB: {
      subQuestion: 'b',
      title: 'How to Establishing JDBC Database Connections',
      marks: 7.5,
      syllabusTopic: 'Unit V - 5 Steps to Establish JDBC Connection',
      simpleExplanation:
        'Establishing a JDBC connection involves five standardized steps: loading the database driver, defining the database URL, creating a connection via DriverManager, creating statement objects to execute SQL, and closing resources.',
      detailedTheory:
        'The 5 standardized steps to establish a database connection in Java:\n1. Load Driver: Class.forName("com.mysql.cj.jdbc.Driver"); registers the driver class with DriverManager.\n2. Create Connection URL: "jdbc:mysql://localhost:3306/dbname" specifies protocol, sub-protocol, host, port, and database.\n3. Establish Connection: Connection con = DriverManager.getConnection(url, user, password); authenticates and opens a socket session.\n4. Create Statement: Statement stmt = con.createStatement(); creates a statement to execute SQL.\n5. Execute Query & Close: ResultSet rs = stmt.executeQuery("select * from emp"); con.close();',
      keyPoints: [
        'Step 1: Load Driver (Class.forName).',
        'Step 2: Define Connection URL.',
        'Step 3: DriverManager.getConnection().',
        'Step 4: Create Statement (con.createStatement()).',
        'Step 5: Execute SQL and close Connection.'
      ],
      syntaxOrDiagram: `// The 5 Steps:
1. Class.forName("com.mysql.cj.jdbc.Driver");
2. String url = "jdbc:mysql://localhost:3306/db_name";
3. Connection con = DriverManager.getConnection(url, user, pass);
4. Statement stmt = con.createStatement();
5. ResultSet rs = stmt.executeQuery("SELECT * FROM emp");
   con.close();`,
      javaCode: `// Java Program: JDBC Connection Steps Demonstration
class JDBCConnectionStepsDemo {
    public static void main(String[] args) {
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/college_db";
        String user = "root";
        String pass = "root";

        System.out.println("=== 5 STEPS TO ESTABLISH JDBC CONNECTION ===");
        System.out.println("Step 1: Loading driver -> " + driver);
        System.out.println("Step 2: Connecting to URL -> " + url);
        System.out.println("Step 3: Authenticating with user: " + user);
        System.out.println("Step 4: Statement created via con.createStatement()");
        System.out.println("Step 5: Query executed & connection closed safely.");
    }
}`,
      codeWalkthrough: [
        'Outlines the 5 sequential steps to connect to a relational database.',
        'Demonstrates URL structure, driver registration, and resource closing.'
      ],
      expectedOutput: `=== 5 STEPS TO ESTABLISH JDBC CONNECTION ===
Step 1: Loading driver -> com.mysql.cj.jdbc.Driver
Step 2: Connecting to URL -> jdbc:mysql://localhost:3306/college_db
Step 3: Authenticating with user: root
Step 4: Statement created via con.createStatement()
Step 5: Query executed & connection closed safely.`,
      examTips:
        'Clearly list the 5 steps numbered 1 through 5 with exact syntax for DriverManager.getConnection().'
    }
  },

  // ==================== QUESTION 13 ====================
  {
    id: 13,
    questionNumber: 13,
    unit: 'Unit III',
    title: 'Class Arrays & Constructor Method and Inheritance',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Illustrate Class Arrays',
      marks: 7.5,
      syllabusTopic: '3.1.10 Class Arrays (java.util.Arrays)',
      simpleExplanation:
        'The java.util.Arrays class contains various static utility methods for manipulating arrays, including sorting, searching, comparing, filling, and converting arrays to string representations.',
      detailedTheory:
        'java.util.Arrays extends java.lang.Object and contains static methods for all primitive and object array types.\n\nCore Methods:\n1. Arrays.sort(arr): Sorts arrays in ascending order using Dual-Pivot QuickSort.\n2. Arrays.binarySearch(arr, key): Fast search in sorted arrays; returns index or negative value if not found.\n3. Arrays.equals(arr1, arr2): Returns true if both arrays have identical elements in identical positions.\n4. Arrays.fill(arr, val): Fills all elements with a single value.\n5. Arrays.copyOf(arr, newLength): Copies elements to a new array of specified length.\n6. Arrays.toString(arr): Converts array to human-readable string [1, 2, 3].',
      keyPoints: [
        'Belongs to java.util.Arrays.',
        'All methods are static; no instantiation needed.',
        'binarySearch requires pre-sorted array.',
        'Arrays.toString() prints contents directly.'
      ],
      syntaxOrDiagram: `Arrays.sort(arr);
Arrays.binarySearch(arr, key);
Arrays.equals(arr1, arr2);
Arrays.fill(arr, val);
Arrays.toString(arr);`,
      javaCode: `// Java Program: Demonstrating java.util.Arrays Utility Methods
import java.util.Arrays;

class ClassArraysDemo {
    public static void main(String[] args) {
        int[] numbers = { 45, 12, 85, 32 };

        // 1. Arrays.toString()
        System.out.println("Original: " + Arrays.toString(numbers));

        // 2. Arrays.sort()
        Arrays.sort(numbers);
        System.out.println("Sorted:   " + Arrays.toString(numbers));

        // 3. Arrays.binarySearch()
        int index = Arrays.binarySearch(numbers, 45);
        System.out.println("Value 45 found at index: " + index);

        // 4. Arrays.fill()
        int[] filled = new int[4];
        Arrays.fill(filled, 7);
        System.out.println("Filled Array: " + Arrays.toString(filled));
    }
}`,
      codeWalkthrough: [
        'Arrays.sort() sorts the array in-place.',
        'Arrays.binarySearch() returns index 2 for element 45.',
        'Arrays.fill() populates array with 7s.',
        'Arrays.toString() formats arrays as readable strings.'
      ],
      expectedOutput: `Original: [45, 12, 85, 32]
Sorted:   [12, 32, 45, 85]
Value 45 found at index: 2
Filled Array: [7, 7, 7, 7]`,
      examTips:
        'Note that binarySearch requires the array to be sorted first; otherwise the return value is undefined.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain Constructor Method and Inheritance',
      marks: 7.5,
      syllabusTopic: '3.2.7 Constructor Method and Inheritance, super() keyword',
      simpleExplanation:
        'In inheritance, constructors are not inherited by subclasses. When a subclass object is instantiated, the superclass constructor is always invoked first to initialize inherited fields before the subclass constructor executes.',
      detailedTheory:
        'Constructors initialize object state.\n\nKey Rules in Inheritance:\n1. Constructors are NOT inherited.\n2. Execution Order: Parent constructor executes FIRST, followed by Child constructor.\n3. Implicit super(): If child constructor does not write super(), compiler automatically inserts super() to call parent default constructor.\n4. Parameterized super(args): If parent lacks a default constructor, child MUST call super(args) explicitly as the FIRST line in the constructor body.',
      keyPoints: [
        'Constructors are not inherited by subclasses.',
        'Superclass constructor executes before subclass constructor.',
        'super() must be the very first statement in subclass constructor.',
        'super() calls parent constructor; this() chains constructors in same class.'
      ],
      syntaxOrDiagram: `Execution Order:
1. Subclass constructor called
2. super() executes Superclass constructor
3. Superclass fields initialized
4. Subclass constructor body executes`,
      javaCode: `// Java Program: Constructor Execution Order in Inheritance
class Parent {
    Parent() {
        System.out.println("1. Parent Constructor executed.");
    }
}

class Child extends Parent {
    Child() {
        super(); // Must be first statement (automatically added if omitted)
        System.out.println("2. Child Constructor executed.");
    }
}

class ConstructorInheritanceDemo {
    public static void main(String[] args) {
        System.out.println("Creating Child object:");
        new Child();
    }
}`,
      codeWalkthrough: [
        'new Child() begins Child constructor.',
        'super() immediately calls Parent() constructor.',
        'Parent constructor runs first, then control returns to Child constructor.'
      ],
      expectedOutput: `Creating Child object:
1. Parent Constructor executed.
2. Child Constructor executed.`,
      examTips:
        'Emphasize that super() must be the very first statement inside a subclass constructor body.'
    }
  },

  // ==================== QUESTION 14 ====================
  {
    id: 14,
    questionNumber: 14,
    unit: 'Unit III',
    title: 'Abstract Classes & Inheritance of Interfaces',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain Abstract Classes',
      marks: 7.5,
      syllabusTopic: '3.2.10 Abstract Classes and Abstract Methods',
      simpleExplanation:
        'An abstract class is a class declared with the "abstract" keyword that cannot be instantiated directly. It can contain both abstract methods (without body) and concrete methods (with body). It defines a common template for subclasses to extend.',
      detailedTheory:
        'An abstract class represents a generic concept that cannot exist on its own.\n\nKey Properties:\n1. Cannot be instantiated with "new". Must be subclassed.\n2. Abstract Methods: Declared without body (abstract void draw();). Subclasses MUST implement all abstract methods or be declared abstract themselves.\n3. Concrete Methods: Can have fully implemented methods shared across all subclasses.\n4. Constructors: Can have constructors, invoked by subclass constructors via super().',
      keyPoints: [
        'Declared with "abstract" keyword.',
        'Cannot be instantiated directly.',
        'Can contain both abstract and concrete methods.',
        'Subclasses must override abstract methods.'
      ],
      syntaxOrDiagram: `abstract class Shape {
    abstract void draw(); // abstract method
    void display() {      // concrete method
        System.out.println("Shape display");
    }
}`,
      javaCode: `// Java Program: Abstract Class Demonstration
abstract class Shape {
    abstract void draw(); // abstract method

    void display() {      // concrete method
        System.out.println("Displaying Shape:");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a Circle (O)");
    }
}

class AbstractClassDemo {
    public static void main(String[] args) {
        Shape s = new Circle(); // Abstract reference pointing to concrete subclass
        s.display();
        s.draw();
    }
}`,
      codeWalkthrough: [
        'Shape defines abstract draw() and concrete display().',
        'Circle extends Shape and implements draw().',
        'Main demonstrates polymorphic invocation via Shape reference.'
      ],
      expectedOutput: `Displaying Shape:
Drawing a Circle (O)`,
      examTips:
        'Explain that abstract classes can have constructors, whereas interfaces cannot.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Inheritance of Interfaces',
      marks: 7.5,
      syllabusTopic: '3.3.6 Inheritance of Interfaces (extends keyword)',
      simpleExplanation:
        'In Java, one interface can inherit from another interface using the "extends" keyword. Furthermore, unlike classes, an interface can extend multiple interfaces simultaneously ("interface C extends A, B").',
      detailedTheory:
        'Interface inheritance allows building hierarchical contracts.\n\nKey Rules:\n1. Interface extends Interface: Uses the keyword "extends" (not implements).\n2. Multiple Interface Inheritance: An interface can extend multiple parent interfaces: interface C extends A, B.\n3. Obligation of Implementing Class: Any concrete class that implements a child interface must provide implementations for all methods across the entire interface inheritance chain.',
      keyPoints: [
        'One interface inherits another using "extends" keyword.',
        'An interface can extend multiple interfaces simultaneously.',
        'Implementing class must implement all methods from all interfaces in the chain.'
      ],
      syntaxOrDiagram: `interface A { void m1(); }
interface B extends A { void m2(); }

class MyClass implements B {
    // Must implement BOTH m1() and m2()
}`,
      javaCode: `// Java Program: Inheritance of Interfaces
interface ParentInterface {
    void show();
}

interface ChildInterface extends ParentInterface {
    void display();
}

class Demo implements ChildInterface {
    public void show() {
        System.out.println("Show method from ParentInterface.");
    }

    public void display() {
        System.out.println("Display method from ChildInterface.");
    }
}

class InterfaceInheritanceDemo {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show();
        d.display();
    }
}`,
      codeWalkthrough: [
        'ChildInterface extends ParentInterface using "extends".',
        'Demo implements ChildInterface and must implement both show() and display().',
        'Main instantiates Demo and tests both methods.'
      ],
      expectedOutput: `Show method from ParentInterface.
Display method from ChildInterface.`,
      examTips:
        'Remember: a class "implements" an interface, but an interface "extends" another interface.'
    }
  },

  // ==================== QUESTION 15 ====================
  {
    id: 15,
    questionNumber: 15,
    unit: 'Unit IV',
    title: 'Java util Classes and Interfaces & Date/Time Formatting',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Java util Classes and Interfaces',
      marks: 7.5,
      syllabusTopic: 'Unit IV - java.util Package Overview (Collections, Dates, Utilities)',
      simpleExplanation:
        'The java.util package provides the Java Collections Framework, legacy collection classes, date and time facilities, internationalization, random number generators, string tokenizers, and scanning utilities.',
      detailedTheory:
        'java.util is Java\'s comprehensive utility toolkit.\n\nCore Interfaces:\n- Collection<E>: Root interface of collections.\n- List<E>: Ordered, index-based collection (allows duplicates).\n- Set<E>: Collection with unique elements (no duplicates).\n- Map<K,V>: Key-value pair associative storage.\n- Queue<E>: First-in, first-out (FIFO) queue.\n- Iterator<E>: Iterates over collection elements.\n\nCore Classes:\n- ArrayList: Dynamic resizable array implementation of List.\n- HashMap: Hash-table-based key-value implementation of Map.\n- Scanner: High-level text and token parsing utility.\n- Random: Pseudo-random number generator.',
      keyPoints: [
        'Contains Java Collections Framework.',
        'Interfaces: List, Set, Map, Queue, Iterator.',
        'Classes: ArrayList, LinkedList, HashMap, HashSet, Scanner, Random.',
        'Collections utility class provides static sort(), reverse(), shuffle().'
      ],
      comparisonTable: {
        headers: ['Interface', 'Order Preserved?', 'Duplicates Allowed?', 'Key Class'],
        rows: [
          ['List', 'Yes (Index-based)', 'Yes', 'ArrayList, LinkedList'],
          ['Set', 'No (Hash-based)', 'No', 'HashSet, TreeSet'],
          ['Map', 'No (Key-based)', 'Keys: No, Values: Yes', 'HashMap, TreeMap']
        ]
      },
      syntaxOrDiagram: `java.util Hierarchy:
           Collection<E>                   Map<K, V>
          /      |      \\                      |
      List<E>  Set<E>  Queue<E>             HashMap
        |        |        |
    ArrayList HashSet LinkedList`,
      javaCode: `// Java Program: java.util Classes (ArrayList & HashMap)
import java.util.ArrayList;
import java.util.HashMap;

class JavaUtilDemo {
    public static void main(String[] args) {
        // 1. ArrayList demonstration
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");
        System.out.println("ArrayList: " + list);

        // 2. HashMap demonstration
        HashMap<Integer, String> map = new HashMap<>();
        map.put(101, "CSE");
        map.put(102, "ECE");
        System.out.println("HashMap: " + map);
    }
}`,
      codeWalkthrough: [
        'ArrayList stores an ordered sequence of strings.',
        'HashMap stores key-value pairs (101 -> CSE, 102 -> ECE).'
      ],
      expectedOutput: `ArrayList: [Java, Python, C++]
HashMap: {101=CSE, 102=ECE}`,
      examTips:
        'List at least 4 classes (ArrayList, HashMap, Scanner, Random) and 3 interfaces (List, Set, Map) from java.util.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Formatting for Date/Time in Java',
      marks: 7.5,
      syllabusTopic: 'Unit IV - SimpleDateFormat and modern java.time.format.DateTimeFormatter',
      simpleExplanation:
        'Date and time formatting in Java converts temporal objects into human-readable strings and parses formatted strings back into date objects. Java supports legacy SimpleDateFormat (java.text) and modern DateTimeFormatter (java.time.format, Java 8).',
      detailedTheory:
        'Date/time formatting enables localization and standard display.\n\nTwo Approaches:\n1. Legacy SimpleDateFormat (java.text):\n   Uses pattern letters:\n   - dd: Day of month (e.g. 06)\n   - MM: Month number; MMMM: Full month name (November)\n   - yyyy: 4-digit year (2026)\n   - HH: 24-hour; hh: 12-hour; mm: minute; ss: second; a: AM/PM marker\n   *Note: SimpleDateFormat is not thread-safe.*\n\n2. Modern DateTimeFormatter (java.time.format, Java 8+):\n   Thread-safe, immutable, used with LocalDate and LocalDateTime.',
      keyPoints: [
        'SimpleDateFormat in java.text package.',
        'Patterns: dd (day), MM (month), yyyy (year), HH (hour), mm (minute), ss (second).',
        'Java 8 DateTimeFormatter is thread-safe and immutable.'
      ],
      syntaxOrDiagram: `Pattern Syntax:
"dd/MM/yyyy"              --> 06/11/2026
"dd-MMMM-yyyy"           --> 06-November-2026
"E, dd MMM yyyy HH:mm:ss" --> Fri, 06 Nov 2026 05:55:00`,
      javaCode: `// Java Program: Date and Time Formatting
import java.text.SimpleDateFormat;
import java.util.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

class DateFormattingDemo {
    public static void main(String[] args) {
        // 1. Legacy SimpleDateFormat
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        System.out.println("Legacy Format (dd/MM/yyyy): " + sdf.format(now));

        // 2. Modern Java 8 DateTimeFormatter
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd-MMMM-yyyy");
        System.out.println("Modern Format (dd-MMMM-yyyy): " + LocalDateTime.now().format(dtf));
    }
}`,
      codeWalkthrough: [
        'SimpleDateFormat formats java.util.Date using "dd/MM/yyyy".',
        'DateTimeFormatter formats Java 8 LocalDateTime into "dd-MMMM-yyyy".'
      ],
      expectedOutput: `Legacy Format (dd/MM/yyyy): 06/11/2026
Modern Format (dd-MMMM-yyyy): 06-November-2026`,
      examTips:
        'Point out that SimpleDateFormat is not thread-safe, whereas Java 8 DateTimeFormatter is immutable and completely thread-safe.'
    }
  },

  // ==================== QUESTION 16 ====================
  {
    id: 16,
    questionNumber: 16,
    unit: 'Unit IV',
    title: 'Checked vs Unchecked Exceptions & Auto-boxing/Auto-unboxing',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain Unchecked Exceptions, Checked Exceptions',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Checked Exceptions vs Unchecked Exceptions',
      simpleExplanation:
        'Checked Exceptions are evaluated at compile time and must be handled with try-catch or declared with "throws". Unchecked Exceptions occur at runtime (subclasses of RuntimeException and Error) and are not forced by the compiler.',
      detailedTheory:
        'Java divides exceptions into two primary categories based on compiler verification:\n\n1. Checked Exceptions:\n- Subclasses of java.lang.Exception (excluding RuntimeException).\n- Checked by compiler at compile-time. If a method might cause a checked exception, the compiler demands it be handled with try-catch or declared with throws.\n- Examples: IOException, SQLException, ClassNotFoundException.\n\n2. Unchecked Exceptions:\n- Subclasses of java.lang.RuntimeException and Error.\n- Occur at runtime due to programming bugs (e.g. division by zero, null reference, bad array index).\n- Handling is optional; compiler does not force try-catch or throws.\n- Examples: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException.',
      keyPoints: [
        'Checked exceptions checked at compile-time (forced by compiler).',
        'Unchecked exceptions occur at runtime (subclasses of RuntimeException).',
        'Checked: IOException, SQLException.',
        'Unchecked: ArithmeticException, NullPointerException.'
      ],
      comparisonTable: {
        headers: ['Feature', 'Checked Exceptions', 'Unchecked Exceptions'],
        rows: [
          ['Check Time', 'Compile-Time', 'Run-Time'],
          ['Inherits From', 'java.lang.Exception', 'java.lang.RuntimeException'],
          ['Compiler Enforced?', 'Yes (must catch or declare)', 'No (optional)'],
          ['Examples', 'IOException, SQLException', 'ArithmeticException, NullPointerException']
        ]
      },
      syntaxOrDiagram: `Exception Hierarchy:
               Throwable
              /         \\
         Exception       Error
         /       \\
     Checked    RuntimeException (Unchecked)`,
      javaCode: `// Java Program: Checked vs Unchecked Exception Handling
import java.io.FileReader;
import java.io.IOException;

class CheckedUncheckedDemo {
    // Checked Exception must declare 'throws' or catch
    static void testChecked() throws IOException {
        FileReader fr = new FileReader("non_existing.txt");
    }

    public static void main(String[] args) {
        // 1. Handling Checked Exception
        try {
            testChecked();
        } catch (IOException e) {
            System.out.println("Caught Checked Exception: " + e.getClass().getSimpleName());
        }

        // 2. Handling Unchecked Exception
        try {
            int a = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught Unchecked Exception: " + e.getClass().getSimpleName());
        }
    }
}`,
      codeWalkthrough: [
        'testChecked throws IOException (checked exception), so it must declare throws in header.',
        'ArithmeticException happens at runtime without mandatory throws declaration.'
      ],
      expectedOutput: `Caught Checked Exception: FileNotFoundException
Caught Unchecked Exception: ArithmeticException`,
      examTips:
        'Draw the Throwable class hierarchy diagram showing where RuntimeException branches off from Exception.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Difference between auto-boxing and auto-unboxing in java with suitable code',
      marks: 7.5,
      syllabusTopic: 'Unit IV - Auto-boxing and Auto-unboxing (Java 5 Feature)',
      simpleExplanation:
        'Auto-boxing is the automatic conversion of primitive data types into their corresponding wrapper class objects. Auto-unboxing is the reverse process, where a wrapper object is automatically converted into its primitive data type.',
      detailedTheory:
        'Introduced in Java 5, autoboxing and unboxing eliminate manual boilerplate code like new Integer(a) and obj.intValue().\n\nHow Compiler Handles It:\n- Auto-boxing: "Integer obj = 10;" -> Compiler inserts: "Integer.valueOf(10);"\n- Auto-unboxing: "int a = obj;" -> Compiler inserts: "obj.intValue();"\n\nSignificance in Collections:\nJava Collections only store objects, not primitives. Autoboxing allows adding primitives directly: "list.add(10);" where 10 is automatically converted to an Integer object.',
      keyPoints: [
        'Auto-boxing: primitive -> Wrapper Object (int to Integer).',
        'Auto-unboxing: Wrapper Object -> primitive (Integer to int).',
        'Introduced in Java 5 to simplify code.',
        'Seamless integration with Java Collections.'
      ],
      comparisonTable: {
        headers: ['Feature', 'Auto-boxing', 'Auto-unboxing'],
        rows: [
          ['Direction', 'Primitive -> Wrapper Object', 'Wrapper Object -> Primitive'],
          ['Compiler Method', 'Integer.valueOf(primitive)', 'wrapperObj.intValue()'],
          ['Example', 'Integer obj = 100;', 'int num = obj;'],
          ['Introduced in', 'Java 5', 'Java 5']
        ]
      },
      syntaxOrDiagram: `Auto-boxing:
int a = 50;
Integer obj = a;  // Integer.valueOf(a)

Auto-unboxing:
Integer b = 100;
int num = b;      // b.intValue()`,
      javaCode: `// Java Program: Auto-boxing and Auto-unboxing
import java.util.ArrayList;

class BoxingUnboxingDemo {
    public static void main(String[] args) {
        // 1. Auto-boxing (int to Integer object)
        int a = 50;
        Integer boxed = a; 

        // 2. Auto-unboxing (Integer object to int)
        Integer b = 100;
        int unboxed = b;

        System.out.println("Auto-boxed Integer Object: " + boxed);
        System.out.println("Auto-unboxed Primitive int: " + unboxed);

        // 3. Autoboxing in Collections
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10); // Auto-boxing primitive 10 -> Integer
        int val = list.get(0); // Auto-unboxing Integer -> int
        System.out.println("Value from ArrayList via Unboxing: " + val);
    }
}`,
      codeWalkthrough: [
        'Integer boxed = a converts primitive int 50 to Integer object automatically.',
        'int unboxed = b converts Integer object 100 back to primitive int.',
        'list.add(10) demonstrates autoboxing with ArrayList.'
      ],
      expectedOutput: `Auto-boxed Integer Object: 50
Auto-unboxed Primitive int: 100
Value from ArrayList via Unboxing: 10`,
      examTips:
        'Show the explicit methods that the compiler substitutes behind the scenes: Integer.valueOf(a) for boxing, and obj.intValue() for unboxing.'
    }
  },

  // ==================== QUESTION 17 ====================
  {
    id: 17,
    questionNumber: 17,
    unit: 'Unit V',
    title: 'String Handling in Java & Multithreaded Programming',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain the String Handling in Java',
      marks: 7.5,
      syllabusTopic: 'Unit V - String Handling, String Constant Pool, and Methods',
      simpleExplanation:
        'In Java, a String is an object that represents an immutable sequence of characters. Once created, its content cannot be altered in memory. String literals are stored in the specialized String Constant Pool (SCP) in Heap memory to optimize memory utilization.',
      detailedTheory:
        'Strings are fundamental data structures in Java.\n\nKey Concepts:\n1. Immutability: String objects cannot be modified after creation. Operations like concat() or toUpperCase() return brand-new string objects; the original remains unchanged.\n2. String Constant Pool (SCP): Specialized memory area inside the Heap. When string literals are created (String s = "sai"), JVM checks SCP. If the string exists, it reuses the reference instead of creating a duplicate object.\n3. The "new" Keyword: String s = new String("sai") always allocates a new object in general Heap memory outside SCP.\n4. Equality: "==" compares memory addresses; ".equals()" compares character contents.',
      keyPoints: [
        'Strings are immutable (cannot be modified in place).',
        'String Constant Pool (SCP) shares literal objects to save memory.',
        '"==" compares object memory reference addresses.',
        '".equals()" compares actual character contents.'
      ],
      comparisonTable: {
        headers: ['Feature', 'String Literal (String s = "sai")', 'New String (new String("sai"))'],
        rows: [
          ['Storage Area', 'String Constant Pool (SCP)', 'Heap Memory'],
          ['Object Count', '0 or 1 object (reused if exists)', '2 objects (1 in Heap, 1 in SCP)'],
          ['Reference Equality', 's1 == s2 is true for same literal', 's1 == s2 is false (different addresses)']
        ]
      },
      syntaxOrDiagram: `Heap Memory & SCP Layout:
Heap Memory:
  [new String("sai")] -> Address 0x100
  [new String("sai")] -> Address 0x200 (Separate objects!)

String Constant Pool (inside Heap):
  "sai" <--- s1 and s2 both point here!
  s1 == s2 is TRUE for literals, but FALSE for 'new' objects.`,
      javaCode: `// Java Program: String Handling and SCP Demonstration
class StringDemo {
    public static void main(String[] args) {
        String s1 = "sai";
        String s2 = "sai";
        String s3 = new String("sai");

        System.out.println("s1 == s2 (SCP literals):        " + (s1 == s2));      // true
        System.out.println("s1 == s3 ('new' heap object):   " + (s1 == s3));      // false
        System.out.println("s1.equals(s3) (Content check):  " + s1.equals(s3));   // true

        // String manipulation methods
        String college = "  Aditya College  ";
        System.out.println("Trimmed: '" + college.trim() + "'");
        System.out.println("Upper:   " + college.trim().toUpperCase());
    }
}`,
      codeWalkthrough: [
        's1 and s2 share the same literal "sai" in the String Constant Pool (s1 == s2 is true).',
        's3 is created in general Heap memory using new (s1 == s3 is false).',
        's1.equals(s3) returns true because characters match.',
        'trim() and toUpperCase() return new String objects.'
      ],
      expectedOutput: `s1 == s2 (SCP literals):        true
s1 == s3 ('new' heap object):   false
s1.equals(s3) (Content check):  true
Trimmed: 'Aditya College'
Upper:   ADITYA COLLEGE`,
      examTips:
        'Include a drawing of Heap memory and String Constant Pool (SCP) showing reference arrows to secure top marks.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Multiple Threads Multithreaded Programming',
      marks: 7.5,
      syllabusTopic: 'Unit V - Multithreaded Programming for Multi-core Processors',
      simpleExplanation:
        'Multithreading is a programming model that executes two or more concurrent lightweight units of processing (threads) within a single application. It enables true parallel execution on multi-core processors, maximizing CPU efficiency and keeping user interfaces responsive.',
      detailedTheory:
        'Multithreading allows multiple tasks to execute simultaneously within a single program.\n\nMultiprocessing vs Multithreading:\n- Multiprocessing: Process-based multitasking. Each process has its own isolated memory address space (heavyweight, high context-switching cost).\n- Multithreading: Thread-based multitasking. Threads share the same address space and open file handles (lightweight, fast context switching).\n\n5 Thread States:\nNewborn -> Runnable -> Running -> Blocked -> Dead.\n\nThread Synchronization:\nPrevents race conditions when multiple threads access shared resources via synchronized keyword.',
      keyPoints: [
        'Multithreading runs multiple threads concurrently.',
        'Threads share memory address space (lightweight).',
        '5 states: Newborn, Runnable, Running, Blocked, Dead.',
        'Multi-core CPUs execute threads in true hardware parallelism.'
      ],
      comparisonTable: {
        headers: ['Feature', 'Multiprocessing (Process)', 'Multithreading (Thread)'],
        rows: [
          ['Memory', 'Separate address space per process', 'Shared address space across threads'],
          ['Weight', 'Heavyweight', 'Lightweight'],
          ['Context Switch', 'Slow (updates memory maps)', 'Fast (registers and stack only)'],
          ['Communication', 'Costly (IPC, sockets, pipes)', 'Cheap (shared variables, wait/notify)']
        ]
      },
      syntaxOrDiagram: `Thread State Transition:
[Newborn] ---start()---> [Runnable] <---yield()--- [Running] ---run() ends---> [Dead]
                            ^                         |
                            +--- sleep/wait ends ---+ sleep()/wait() -> [Blocked]`,
      javaCode: `// Java Program: Concurrent Multithreaded Execution
class TaskA extends Thread {
    public void run() {
        for (int i = 1; i <= 2; i++) {
            System.out.println("Thread-A running step: " + i);
            try { Thread.sleep(50); } catch (Exception e) {}
        }
    }
}

class TaskB extends Thread {
    public void run() {
        for (int i = 1; i <= 2; i++) {
            System.out.println("Thread-B running step: " + i);
            try { Thread.sleep(50); } catch (Exception e) {}
        }
    }
}

class MultiThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        TaskA t1 = new TaskA();
        TaskB t2 = new TaskB();

        t1.start(); // Runs concurrently
        t2.start();

        t1.join();
        t2.join();
        System.out.println("Both threads completed.");
    }
}`,
      codeWalkthrough: [
        'TaskA and TaskB extend Thread and override run().',
        't1.start() and t2.start() schedule both threads concurrently.',
        'join() guarantees main waits until both finish before printing final line.'
      ],
      expectedOutput: `Thread-A running step: 1
Thread-B running step: 1
Thread-A running step: 2
Thread-B running step: 2
Both threads completed.`,
      examTips:
        'Draw the 5-state lifecycle diagram (New -> Runnable -> Running -> Blocked -> Dead) in your exam script.'
    }
  },

  // ==================== QUESTION 18 ====================
  {
    id: 18,
    questionNumber: 18,
    unit: 'Unit V',
    title: 'Java FX Scene Builder & Java FX App Window Structure',
    totalMarks: 15,
    partA: {
      subQuestion: 'a',
      title: 'Explain Java FX Scene Builder',
      marks: 7.5,
      syllabusTopic: 'Unit V - JavaFX Scene Builder, FXML, and Visual UI Design',
      simpleExplanation:
        'JavaFX Scene Builder is a visual drag-and-drop design tool that enables developers to construct user interfaces without coding. It generates FXML (an XML-based declarative markup language) that separates UI presentation from business logic controllers.',
      detailedTheory:
        'JavaFX is the modern GUI toolkit replacing Swing and AWT. Scene Builder allows visual UI construction.\n\nArchitecture & Benefits:\n1. MVC Separation: Scene Builder generates .fxml markup (View), keeping presentation completely separated from Java Controller classes (Controller) and data models (Model).\n2. CSS Theming: UIs designed in Scene Builder can be styled dynamically using standard CSS stylesheets.\n\nThe 4 Main Panes:\n1. Library Panel: Palette containing UI components (Button, Label, TextField, VBox, Charts).\n2. Hierarchy Panel: Tree structure displaying parent-child relationships of nodes in the Scene Graph.\n3. Content / Canvas View: Live WYSIWYG workspace where controls are positioned.\n4. Inspector Panel: Sets properties, layout coordinates, and controller connections (fx:id and onAction event handlers).',
      keyPoints: [
        'Visual drag-and-drop tool generating FXML.',
        'Enforces MVC pattern (separates UI design from Java code).',
        '4 main panels: Library, Hierarchy, Canvas, Inspector.',
        'Connects to Java controller via @FXML annotation.'
      ],
      syntaxOrDiagram: `Scene Builder Architecture:
+-------------------+----------------------------+--------------------+
|  Library Panel    |     Canvas (Live View)     |  Inspector Panel   |
| (Buttons, Text,   |                            | (Properties,       |
|  Panes, Charts)   |   [Button] [TextField]     |  Layout,           |
|-------------------|                            |  fx:id, onAction)  |
| Hierarchy (Tree)  |                            |                    |
+-------------------+----------------------------+--------------------+
                    | Generates .fxml markup
                    v
            JavaFX Controller (@FXML)` ,
      javaCode: `// Java Program: JavaFX Scene Builder Controller Concept
class HelloController {
    // Simulating event handler mapped in Scene Builder onAction
    public void handleButtonClick() {
        System.out.println("Button clicked in Scene Builder generated UI!");
    }

    public static void main(String[] args) {
        System.out.println("=== JavaFX Scene Builder Integration ===");
        System.out.println("1. FXML File: UI layout defined in XML.");
        System.out.println("2. Controller: Java class handling user actions.");
        System.out.println("3. FXMLLoader: Loads FXML and binds controller.");

        new HelloController().handleButtonClick();
    }
}`,
      codeWalkthrough: [
        'handleButtonClick() simulates the method triggered when user clicks a button designed in Scene Builder.',
        'Main demonstrates the FXML, Controller, and FXMLLoader integration.'
      ],
      expectedOutput: `=== JavaFX Scene Builder Integration ===
1. FXML File: UI layout defined in XML.
2. Controller: Java class handling user actions.
3. FXMLLoader: Loads FXML and binds controller.
Button clicked in Scene Builder generated UI!`,
      examTips:
        'Explain the role of the 4 panels: Library panel, Hierarchy panel, Content canvas, and Inspector panel.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Illustrate Java FX App Window Structure',
      marks: 7.5,
      syllabusTopic: 'Unit V - JavaFX Window Structure: Stage, Scene, and Scene Graph',
      simpleExplanation:
        'The JavaFX application window architecture is modeled after a physical theater: the Stage represents the primary window (frame), the Scene represents the content canvas inside the window, and the Scene Graph is a hierarchical tree of nodes (controls, containers) displayed in the scene.',
      detailedTheory:
        'JavaFX applications follow the Theater Metaphor:\n\n1. Stage (Top-Level Container):\n   - Represents the physical OS native window (outer frame with title bar, minimize, maximize, and close buttons).\n   - Provided automatically by the JavaFX runtime as primaryStage to start(Stage primaryStage).\n\n2. Scene (Container for Visual Content):\n   - The canvas surface mounted on the Stage. A Stage can host only one Scene at a time, but scenes can be swapped.\n\n3. Scene Graph (Tree of Nodes):\n   - Hierarchical tree structure containing all visual elements (Nodes).\n   - Root Node: The root layout container (e.g. VBox, HBox, BorderPane, GridPane).\n   - Branch Nodes: Sub-containers nested within the layout.\n   - Leaf Nodes: Interactive controls (Button, Label, TextField, Canvas).\n\n4. Application Lifecycle:\n   launch(args) -> init() -> start(Stage primaryStage) -> stop().',
      keyPoints: [
        'Theater metaphor: Stage = Window, Scene = Canvas, Nodes = Controls.',
        'Application extends javafx.application.Application and overrides start(Stage).',
        'Scene Graph is a tree with Root Node, Branch Nodes, and Leaf Nodes.',
        'Lifecycle: launch() -> init() -> start() -> stop().'
      ],
      syntaxOrDiagram: `+-------------------------------------------------------+
|  STAGE (The Native Window / Frame)                    |
|  +-------------------------------------------------+  |
|  |  SCENE (The Container for Scene Graph)         |  |
|  |  +-------------------------------------------+  |  |
|  |  |  ROOT NODE (Layout Pane, e.g., VBox)      |  |  |
|  |  |    |-- Label (Leaf Node)                  |  |  |
|  |  |    |-- TextField (Leaf Node)              |  |  |
|  |  |    +-- Button (Leaf Node)                 |  |  |
|  |  +-------------------------------------------+  |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+`,
      javaCode: `// Java Program: JavaFX App Window Structure Concept
class JavaFXStructureConcept {
    public static void main(String[] args) {
        System.out.println("=== JavaFX Window Theater Model ===");
        System.out.println("1. Stage  -> The outer native OS window (primaryStage)");
        System.out.println("2. Scene  -> The surface container mounted on the Stage");
        System.out.println("3. Root   -> The layout container (VBox, HBox, BorderPane)");
        System.out.println("4. Nodes  -> Visual elements (Buttons, Labels, Charts)");
        System.out.println("\nLifecycle Sequence: launch() -> init() -> start(Stage) -> stop()");
    }
}`,
      codeWalkthrough: [
        'Outlines the 4 levels of JavaFX window structure using the theater metaphor.',
        'Summarizes the 4 application lifecycle methods.'
      ],
      expectedOutput: `=== JavaFX Window Theater Model ===
1. Stage  -> The outer native OS window (primaryStage)
2. Scene  -> The surface container mounted on the Stage
3. Root   -> The layout container (VBox, HBox, BorderPane)
4. Nodes  -> Visual elements (Buttons, Labels, Charts)

Lifecycle Sequence: launch() -> init() -> start(Stage) -> stop()`,
      examTips:
        'Use the theater analogy (Stage = Stage, Scene = Canvas/Backdrop, Nodes = Actors) — evaluators look for this explanation!'
    }
  }
];

export const UNIT_CONFIG = [
  {
    unit: 'Unit III' as const,
    name: 'Unit III: Arrays, Inheritance & Interfaces',
    topics: 'Arrays, Jagged Arrays, Class Arrays, Inheritance types, super, Abstract Classes, Interfaces, Default/Static methods, Functional Interfaces',
    questionIds: [1, 2, 7, 8, 13, 14],
    color: 'emerald'
  },
  {
    unit: 'Unit IV' as const,
    name: 'Unit IV: Packages, Wrapper Classes & Exception Handling',
    topics: 'Packages, CLASSPATH, Wrapper Classes, Autoboxing, java.util, Date/Time formatting, Exception Hierarchy, 5 keywords, Checked/Unchecked, try-with-resources, Streams',
    questionIds: [3, 4, 9, 10, 15, 16],
    color: 'indigo'
  },
  {
    unit: 'Unit V' as const,
    name: 'Unit V: Strings, Multithreading, JDBC & JavaFX',
    topics: 'String handling, StringBuffer, Multithreading, Thread class, Synchronization, Inter-thread communication, Deadlock, JDBC architecture & connection, Mouse Events, JavaFX',
    questionIds: [5, 6, 11, 12, 17, 18],
    color: 'amber'
  }
];

export const HIGH_FREQUENCY_VIVA_FLASHCARDS = [
  {
    id: 'f1',
    unit: 'Unit III' as const,
    questionNumber: 1,
    front: 'Why are arrays dynamically allocated in Java, and what is a Jagged Array?',
    back: 'Java arrays are objects created on the Heap at runtime using "new". A jagged array is a multidimensional array whose inner rows have varying lengths (e.g. jagged[0]=new int[2], jagged[1]=new int[5]).'
  },
  {
    id: 'f2',
    unit: 'Unit III' as const,
    questionNumber: 2,
    front: 'Why does Java disallow Multiple Inheritance with classes, and how is it resolved?',
    back: 'To prevent the Diamond Problem (ambiguity when two parents provide identical method signatures). It is resolved cleanly using Interfaces where methods are abstract or conflict-free.'
  },
  {
    id: 'f3',
    unit: 'Unit III' as const,
    questionNumber: 8,
    front: 'What is a Functional Interface in Java 8?',
    back: 'An interface with exactly ONE abstract method (Single Abstract Method - SAM). It can have multiple default or static methods, and serves as the target type for Lambda Expressions.'
  },
  {
    id: 'f4',
    unit: 'Unit IV' as const,
    questionNumber: 3,
    front: 'What is the key difference between PATH and CLASSPATH?',
    back: 'PATH is used by the operating system to find executable binary files (.exe like javac, java). CLASSPATH is used by Java ClassLoader to find user and library .class / .jar files.'
  },
  {
    id: 'f5',
    unit: 'Unit IV' as const,
    questionNumber: 16,
    front: 'What distinguishes Checked Exceptions from Unchecked Exceptions?',
    back: 'Checked exceptions (e.g. IOException) are checked at compile-time and MUST be caught or declared with "throws". Unchecked exceptions (subclasses of RuntimeException like ArithmeticException) occur at runtime.'
  },
  {
    id: 'f6',
    unit: 'Unit V' as const,
    questionNumber: 17,
    front: 'Explain the difference between == and .equals() in Java String handling.',
    back: '"==" checks reference equality (whether both references point to the same memory address in Heap/SCP). ".equals()" compares actual sequence of characters.'
  },
  {
    id: 'f7',
    unit: 'Unit V' as const,
    questionNumber: 11,
    front: 'What is the primary difference between StringBuffer and StringBuilder?',
    back: 'StringBuffer is synchronized (thread-safe, slightly slower). StringBuilder is non-synchronized (not thread-safe, significantly faster for single-threaded tasks).'
  },
  {
    id: 'f8',
    unit: 'Unit V' as const,
    questionNumber: 12,
    front: 'What are the 5 standard steps to establish a JDBC connection?',
    back: '1. Load Driver (Class.forName)\\n2. Define DB URL\\n3. DriverManager.getConnection(url, user, pass)\\n4. Create Statement (con.createStatement())\\n5. Execute Query & close connection.'
  },
  {
    id: 'f9',
    unit: 'Unit V' as const,
    questionNumber: 18,
    front: 'Describe the theater metaphor for JavaFX App Window Structure.',
    back: 'Stage = The window frame; Scene = The visible backdrop container set upon the Stage; Scene Graph / Nodes = The controls (buttons, labels, layouts) acting within the Scene.'
  }
];
