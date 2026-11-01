/**
 * DIY Engineering - Curated Academic Engineering & CS Catalog
 * Standardized after the CS-DIY Wiki methodology.
 * High-quality English open-courseware, official labs, syllabi, and lecture materials.
 */

const DISCIPLINES = [
  {
    id: "welcome",
    name: "Welcome & Guide",
    shortName: "Home",
    desc: "Self-Study Methodology, Roadmap & Resource Hub"
  },
  {
    id: "pre-eng",
    name: "Pre-Engineering",
    shortName: "Pre-Eng",
    desc: "Calculus, Linear Algebra, Physics, Chemistry & Computing"
  },
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    desc: "Systems, Algorithms, Networks, OS, Databases & Compilers"
  },
  {
    id: "ee",
    name: "Electrical Engineering",
    shortName: "EE",
    desc: "Circuits, Signals, Microelectronics, Embedded & Controls"
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    desc: "Statics, Dynamics, Thermodynamics, Fluids & Design"
  },
  {
    id: "robotics",
    name: "Robotics Engineering",
    shortName: "Robotics",
    desc: "Kinematics, ROS 2, Vision, SLAM & Motion Planning"
  },
  {
    id: "ai",
    name: "AI Engineering",
    shortName: "AI & ML",
    desc: "Machine Learning, Deep Learning, Vision, NLP & MLOps"
  },
  {
    id: "cyber",
    name: "Cybersecurity Engineering",
    shortName: "Cybersecurity",
    desc: "Systems Security, Assembly, Binary Exploitation & Crypto"
  },
  {
    id: "civil",
    name: "Civil & Environmental Engineering",
    shortName: "Civil & Env",
    desc: "Structures, Geotechnical, Fluid Hydrology & Water Systems"
  }
];

const INSTITUTIONS = [
  { id: "all", name: "All Institutions" },
  { id: "MIT", name: "MIT OCW", fullName: "Massachusetts Institute of Technology" },
  { id: "CMU", name: "CMU", fullName: "Carnegie Mellon University" },
  { id: "Stanford", name: "Stanford", fullName: "Stanford University" },
  { id: "UC Berkeley", name: "UC Berkeley", fullName: "University of California, Berkeley" },
  { id: "Georgia Tech", name: "Georgia Tech", fullName: "Georgia Institute of Technology" },
  { id: "OST2", name: "OST2", fullName: "OpenSecurityTraining2" },
  { id: "pwn.college", name: "pwn.college", fullName: "Arizona State University / pwn.college" },
  { id: "NPTEL", name: "NPTEL", fullName: "National Programme on Technology Enhanced Learning (IITs & IISc)" }
];

const COURSES = [
  // ==========================================
  // PRE-ENGINEERING
  // ==========================================
  {
    id: "mit-18-01",
    discipline: "pre-eng",
    topic: "Mathematics: Calculus",
    code: "MIT 18.01SC",
    title: "Single Variable Calculus",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Foundational Undergraduate",
    difficulty: "Moderate",
    estimatedHours: "100-120 hours",
    language: "English",
    prerequisites: ["High School Algebra", "Trigonometry"],
    prerequisiteIds: [],
    links: {
      website: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
      lectures: "https://www.youtube.com/playlist?list=PL590FCC292703BC2B",
      syllabus: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/",
      textbook: "https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf",
      assignments: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/",
      exams: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/final-exam/"
    },
    overview: "Covers differentiation and integration of functions of one variable, with broad applications across engineering mechanics, circuits, and kinematics. Taught by Prof. David Jerison with complete problem sets, solution videos, and exam archives.",
    whyRecommended: "Single variable calculus is the universal mathematical bedrock of every engineering discipline. MIT's Scholar version provides complete worked-out video recitations for every problem.",
    textbookInfo: {
      title: "Calculus (Open Access Edition)",
      authors: "Gilbert Strang",
      notes: "Free textbook published by Wellesley-Cambridge Press, downloadable directly on MIT OCW."
    },
    syllabusModules: [
      { week: "Part I", title: "Differentiation", desc: "Limits, continuity, derivative definitions, product/quotient/chain rules, implicit differentiation." },
      { week: "Part II", title: "Applications of Differentiation", desc: "Linear approximation, curve sketching, optimization, Newton's method, mean value theorem." },
      { week: "Part III", title: "Integration", desc: "Definite integrals, fundamental theorem of calculus, Riemann sums, substitution, areas and volumes." },
      { week: "Part IV", title: "Integration Techniques & Applications", desc: "Integration by parts, partial fractions, trigonometric integrals, arc length, work." },
      { week: "Part V", title: "Infinite Series", desc: "Taylor series, power series, convergence tests, error bounds." }
    ],
    labs: [
      { name: "Diagnostic Pre-Test", desc: "Evaluate algebraic and trigonometric readiness before calculus." },
      { name: "Problem Set Series 1-8", desc: "Curated MIT problem sets with complete step-by-step written solutions." },
      { name: "Final Exam Archive", desc: "Self-timed 3-hour comprehensive final examination with solution rubric." }
    ],
    selfStudyTips: "Work every problem set completely on paper before looking at the solution video. Prof. Jerison's whiteboard derivations are exceptionally clear.",
    alternatives: ["NPTEL: Mathematics I (IIT Kharagpur)", "Khan Academy AP Calculus BC"]
  },
  {
    id: "mit-18-02",
    discipline: "pre-eng",
    topic: "Mathematics: Calculus",
    code: "MIT 18.02SC",
    title: "Multivariable Calculus",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Foundational Undergraduate",
    difficulty: "Intermediate",
    estimatedHours: "110-130 hours",
    language: "English",
    prerequisites: ["Single Variable Calculus"],
    prerequisiteIds: ["mit-18-01"],
    links: {
      website: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/",
      lectures: "https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38",
      syllabus: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/",
      textbook: "https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf",
      assignments: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/1.-vectors-and-matrices/",
      exams: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/final-exam/"
    },
    overview: "Extends calculus to vector-valued functions and multiple dimensions: partial derivatives, gradient vectors, double and triple integrals, vector fields, Green's theorem, Stokes' theorem, and the Divergence theorem. Taught by Prof. Denis Auroux.",
    whyRecommended: "Essential for electromagnetism, fluid mechanics, structural stress tensors, robotics kinematics, and multivariable optimization in machine learning.",
    textbookInfo: {
      title: "Multivariable Calculus",
      authors: "Gilbert Strang",
      notes: "Chapters 12-15 of Strang's open Calculus book cover vectors, partial derivatives, and multiple integrals."
    },
    syllabusModules: [
      { week: "Unit 1", title: "Vectors and Matrices", desc: "Dot and cross products, planes, equations of lines, determinant, linear systems." },
      { week: "Unit 2", title: "Partial Derivatives", desc: "Level curves, partial derivatives, tangent planes, chain rule, directional derivatives, gradient, Lagrange multipliers." },
      { week: "Unit 3", title: "Double Integrals & Surface Integrals", desc: "Double integrals in rectangular and polar coordinates, applications to center of mass and moment of inertia." },
      { week: "Unit 4", title: "Triple Integrals & Vector Fields", desc: "Cylindrical and spherical coordinates, vector fields, work, flux, Green's theorem in the plane." },
      { week: "Unit 5", title: "Stokes' & Divergence Theorems", desc: "Line integrals in 3D, surface integrals, curl and divergence, Stokes' theorem, Gauss' divergence theorem." }
    ],
    labs: [
      { name: "Vector Visualization Worksheets", desc: "Plotting 3D gradients and vector field flow lines." },
      { name: "Problem Sets 1-12", desc: "Full problem sets with step-by-step solutions." },
      { name: "Comprehensive Midterm & Final Archive", desc: "Standard MIT exams with complete solutions." }
    ],
    selfStudyTips: "Focus intensely on physical intuition: envision flux through a surface and circulation along a curve. Denis Auroux is widely regarded as one of MIT's greatest teachers.",
    alternatives: ["Stanford Math 51", "NPTEL: Mathematics II (IIT Bombay)"]
  },
  {
    id: "mit-18-06",
    discipline: "pre-eng",
    topic: "Mathematics: Linear Algebra",
    code: "MIT 18.06SC",
    title: "Linear Algebra",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Moderate",
    estimatedHours: "100-120 hours",
    language: "English",
    prerequisites: ["Single Variable Calculus"],
    prerequisiteIds: ["mit-18-01"],
    links: {
      website: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/",
      lectures: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8",
      syllabus: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/syllabus/",
      textbook: "https://math.mit.edu/~gs/linearalgebra/",
      assignments: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/",
      exams: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/final-exam/"
    },
    overview: "The world's most famous mathematics lecture series by Prof. Gilbert Strang. Covers Ax = b, the Four Fundamental Subspaces, orthogonality, projection matrices, eigenvalues and eigenvectors, positive definite matrices, and Singular Value Decomposition (SVD).",
    whyRecommended: "Linear algebra is the unifying language of all modern engineering: finite element analysis, robotics transformations, control systems state space, computer graphics, and neural network weight matrices.",
    textbookInfo: {
      title: "Introduction to Linear Algebra (5th Edition)",
      authors: "Gilbert Strang",
      notes: "Wellesley-Cambridge Press. Companion website includes chapter summaries and selected solutions."
    },
    syllabusModules: [
      { week: "Part 1", title: "Ax = b and the Four Subspaces", desc: "Gaussian elimination, matrix multiplication, vector spaces, column space, nullspace, rank." },
      { week: "Part 2", title: "Least Squares, Determinants & Orthogonality", desc: "Orthogonal vectors and subspaces, Gram-Schmidt orthogonalization, QR factorization, projection matrices, least squares." },
      { week: "Part 3", title: "Eigenvalues, Eigenvectors & Diagonalization", desc: "Characteristic equation, diagonalizing a matrix, applications to differential equations, symmetric matrices." },
      { week: "Part 4", title: "Positive Definite Matrices & SVD", desc: "Minima, saddle points, test for positive definiteness, Singular Value Decomposition (SVD), principal component analysis." }
    ],
    labs: [
      { name: "Strang MATLAB/Python Exercises", desc: "Matrix operations, solving linear systems, projecting onto subspaces." },
      { name: "Problem Sets 1-10", desc: "Rigorous problem sets covering proof-based and numerical linear algebra." },
      { name: "SVD Image Compression Project", desc: "Hands-on project using low-rank matrix approximation to compress bitmap images." }
    ],
    selfStudyTips: "Watch every lecture from Gilbert Strang. His concept of 'The Big Picture of Linear Algebra' (the 4 fundamental subspaces) will stay with you for your entire engineering career.",
    alternatives: ["Stanford ENGR 108: Introduction to Applied Linear Equations", "NPTEL: Linear Algebra (IIT Madras)"]
  },
  {
    id: "mit-8-01",
    discipline: "pre-eng",
    topic: "Physics: Mechanics",
    code: "MIT 8.01SC",
    title: "Classical Mechanics",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Foundational Undergraduate",
    difficulty: "Intermediate",
    estimatedHours: "120-140 hours",
    language: "English",
    prerequisites: ["Single Variable Calculus"],
    prerequisiteIds: ["mit-18-01"],
    links: {
      website: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
      lectures: "https://www.youtube.com/playlist?list=PLyQSN7X0g3316EPq62zPC8P455j_i_82D",
      syllabus: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/",
      exams: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/final-exam/"
    },
    overview: "Calculus-based introduction to Newtonian mechanics, fluid statics and dynamics, gravitation, harmonic motion, momentum, rotational kinematics, angular momentum, and conservation laws.",
    whyRecommended: "The cornerstone of mechanical, aerospace, civil, and robotics engineering. Features complete video derivations and experimental demonstrations.",
    textbookInfo: {
      title: "University Physics with Modern Physics",
      authors: "Young and Freedman (or MIT Classical Mechanics Online Text)",
      notes: "MIT provides open digital textbook notes for each week of instruction."
    },
    syllabusModules: [
      { week: "Weeks 1-3", title: "Kinematics in 1D and 2D", desc: "Vectors, velocity, acceleration, projectile motion, circular motion." },
      { week: "Weeks 4-6", title: "Newton's Laws & Friction", desc: "Free body diagrams, static and kinetic friction, circular dynamics, drag forces." },
      { week: "Weeks 7-8", title: "Work, Energy & Momentum", desc: "Kinetic and potential energy, conservation of mechanical energy, impulse, collisions." },
      { week: "Weeks 9-11", title: "Rotational Motion & Angular Momentum", desc: "Torque, moment of inertia, rolling motion, cross products, conservation of angular momentum." },
      { week: "Weeks 12-14", title: "Harmonic Oscillations & Gravity", desc: "Simple harmonic oscillators, damped and driven oscillations, resonance, Kepler's laws." }
    ],
    labs: [
      { name: "Mechanics Modeling Problem Sets", desc: "Rigorous analytical problem sets on rigid body dynamics and conservation laws." },
      { name: "Experimental Data Analysis", desc: "Analyzing real-world pendulum, collision, and projectile trajectory datasets." }
    ],
    selfStudyTips: "Always draw a free body diagram first with coordinate axes clearly designated before writing any equations.",
    alternatives: ["Walter Lewin 8.01 Lectures Archive", "NPTEL: Engineering Mechanics (IIT Madras)"]
  },
  {
    id: "mit-8-02",
    discipline: "pre-eng",
    topic: "Physics: Electromagnetism",
    code: "MIT 8.02SC",
    title: "Electricity and Magnetism",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Foundational Undergraduate",
    difficulty: "Intermediate",
    estimatedHours: "120-140 hours",
    language: "English",
    prerequisites: ["Calculus", "Multivariable Calculus", "Classical Mechanics"],
    prerequisiteIds: ["mit-18-01", "mit-18-02", "mit-8-01"],
    links: {
      website: "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/",
      lectures: "https://www.youtube.com/playlist?list=PLyQSN7X0g333TaV+Q2flWiC0S_W9OCx1B",
      syllabus: "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/pages/electric-fields/",
      exams: "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/pages/final-exam/"
    },
    overview: "Covers electric and magnetic fields, Coulomb's law, Gauss's law, electric potential, capacitance, DC and AC circuits, magnetic forces, Ampere's law, Faraday's law of induction, Maxwell's equations, and electromagnetic waves.",
    whyRecommended: "The physical foundation for all of Electrical Engineering, semiconductors, antenna design, power generation, and electro-mechanical actuators in robotics.",
    textbookInfo: {
      title: "Electricity and Magnetism (Berkeley Physics Course, Vol. 2)",
      authors: "Edward M. Purcell and David J. Morin",
      notes: "A masterpiece of undergraduate physics emphasizing relativistic field connections."
    },
    syllabusModules: [
      { week: "Unit 1", title: "Electrostatics", desc: "Coulomb's law, electric field, continuous charge distributions, Gauss's law, electric potential." },
      { week: "Unit 2", title: "Capacitance & DC Circuits", desc: "Conductors, capacitance, dielectrics, electric energy, current, Ohm's law, Kirchhoff's loop and junction rules." },
      { week: "Unit 3", title: "Magnetism & Ampere's Law", desc: "Magnetic force on moving charges and currents, Biot-Savart law, Ampere's law, magnetic dipoles." },
      { week: "Unit 4", title: "Faraday's Law & AC Circuits", desc: "Motional EMF, Faraday's law, Lenz's law, inductance, RL, RC, and RLC circuits, resonance." },
      { week: "Unit 5", title: "Maxwell's Equations & EM Waves", desc: "Displacement current, Maxwell's 4 equations in integral and differential forms, electromagnetic wave equation." }
    ],
    labs: [
      { name: "Field Mapping Exercises", desc: "Calculating and visualizing electrostatic equipotential surfaces." },
      { name: "Circuit Analysis Problem Sets", desc: "Solving transient RC and underdamped RLC circuits." },
      { name: "Maxwell's Equations Derivation Suite", desc: "Proving wave speed c from permeability and permittivity." }
    ],
    selfStudyTips: "Understand Gauss's Law and Faraday's Law through symmetry surfaces. Connect multivariable line and surface integrals directly to physical charges and fluxes.",
    alternatives: ["NPTEL: Electromagnetic Theory (IIT Kharagpur)", "Stanford Physics 43"]
  },
  {
    id: "mit-3-091",
    discipline: "pre-eng",
    topic: "Engineering Chemistry",
    code: "MIT 3.091",
    title: "Introduction to Solid-State Chemistry",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Foundational Undergraduate",
    difficulty: "Moderate",
    estimatedHours: "80-100 hours",
    language: "English",
    prerequisites: ["High School Chemistry", "Basic Algebra"],
    prerequisiteIds: [],
    links: {
      website: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63-KDgoUWZS-0U44pyVbgUd",
      syllabus: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/atomic-structure/",
      exams: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/final-exam/"
    },
    overview: "Taught by legendary MIT Prof. Donald Sadoway. Connects chemistry, atomic structure, and chemical bonding directly to modern materials science, semiconductors, polymers, batteries, and metallurgy.",
    whyRecommended: "Instead of rote chemistry, this course teaches engineers how electron arrangements dictate crystal lattices, semiconductor doping, steel phase diagrams, and clean energy battery chemistry.",
    textbookInfo: {
      title: "Chemistry: Principles, Patterns, and Applications",
      authors: "Averill and Eldredge (or Donald Sadoway's Lecture Notes)",
      notes: "MIT OCW provides complete self-contained lecture handouts and crystallography guides."
    },
    syllabusModules: [
      { week: "Module 1", title: "Atomic Structure & Quantum Mechanics", desc: "Bohr atom, quantum numbers, electron configuration, periodic trends." },
      { week: "Module 2", title: "Chemical Bonding", desc: "Ionic, covalent, and metallic bonding, electronegativity, Lewis structures, molecular geometry." },
      { week: "Module 3", title: "Crystallography", desc: "Bravais lattices, unit cells, cubic structures (SC, BCC, FCC), Miller indices, X-ray diffraction (Bragg's law)." },
      { week: "Module 4", title: "Semiconductors & Defects", desc: "Band theory of solids, intrinsic and extrinsic semiconductors, p-n junctions, point defects." },
      { week: "Module 5", title: "Phase Diagrams & Glasses", desc: "Binary phase diagrams, eutectic systems, lever rule, iron-carbon steel metallurgy, polymers and glasses." }
    ],
    labs: [
      { name: "Crystallography & Miller Indices Practice", desc: "Calculating planar densities and identifying crystal slip systems." },
      { name: "Binary Phase Diagram Problem Set", desc: "Determining phase fractions and microstructure transitions for lead-tin and steel alloys." }
    ],
    selfStudyTips: "Prof. Sadoway's lectures are filled with engineering history, poetry, and real-world industrial context. A must-watch for materials, civil, and mechanical engineers.",
    alternatives: ["NPTEL: Chemistry of Materials (IIT Bombay)"]
  },

  // ==========================================
  // COMPUTER SCIENCE & ENGINEERING (CSE)
  // ==========================================
  {
    id: "ucb-cs61a",
    discipline: "cse",
    topic: "Programming & Foundations",
    code: "UCB CS61A",
    title: "Structure and Interpretation of Computer Programs",
    institution: "UC Berkeley",
    institutionFullName: "University of California, Berkeley",
    level: "Introductory / Core",
    difficulty: "Challenging",
    estimatedHours: "140-160 hours",
    language: "English",
    prerequisites: ["Comfort with basic algebraic reasoning"],
    prerequisiteIds: [],
    links: {
      website: "https://cs61a.org/",
      lectures: "https://www.youtube.com/playlist?list=PL6BsET-8jgYVErO49x_7ZpZ_HwZ_eJ2kE",
      syllabus: "https://cs61a.org/articles/about/",
      textbook: "https://www.composingprograms.com/",
      assignments: "https://cs61a.org/#homework",
      autograder: "https://okpy.org/"
    },
    overview: "Berkeley's crown jewel introductory course taught by Prof. John DeNero. Covers functional programming, higher-order functions, recursion, tree processing, object-oriented programming, interpreters, and declarative programming (SQL and Scheme).",
    whyRecommended: "One of the best introductory computer science courses ever designed. Teaches abstraction and how to decompose complex problems cleanly rather than just teaching syntax.",
    textbookInfo: {
      title: "Composing Programs",
      authors: "John DeNero (based on SICP by Abelson & Sussman)",
      notes: "Free interactive online textbook with runnable Python examples and exercises."
    },
    syllabusModules: [
      { week: "Weeks 1-4", title: "Functions & Abstraction", desc: "Call expressions, environments, higher-order functions, lambda expressions, recursion, tree recursion." },
      { week: "Weeks 5-8", title: "Data & Objects", desc: "Data abstraction, trees, mutability, generators, OOP, representation strings, inheritance." },
      { week: "Weeks 9-11", title: "Interpretation & Scheme", desc: "Functional programming in Scheme, quote, eval and apply, building a Scheme interpreter." },
      { week: "Weeks 12-14", title: "Declarative Programming", desc: "SQL queries, joins, aggregation, recursive SQL, tables, BNF grammars." }
    ],
    labs: [
      { name: "Hog Project", desc: "A simulator and optimal strategy calculator for a dice game (higher-order functions)." },
      { name: "Cats Project", desc: "A typing test simulator that measures typing speed, corrects errors, and uses autocorrect algorithms." },
      { name: "Ants vs. Some-Bees Project", desc: "A tower defense game modeled after Plants vs. Zombies implemented with object-oriented design." },
      { name: "Scheme Interpreter Project", desc: "Write an entire working Scheme interpreter in Python supporting eval/apply loops, macros, and tail-call optimization." }
    ],
    selfStudyTips: "Run the command line autograder `python3 ok --local` to test all your solutions locally without needing a Berkeley student account.",
    alternatives: ["MIT 6.0001: Intro to CS and Python", "Harvard CS50x"]
  },
  {
    id: "ucb-cs61b",
    discipline: "cse",
    topic: "Data Structures & Algorithms",
    code: "UCB CS61B",
    title: "Data Structures and Algorithms",
    institution: "UC Berkeley",
    institutionFullName: "University of California, Berkeley",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "160-180 hours",
    language: "English",
    prerequisites: ["Introductory Programming (CS61A or equivalent)"],
    prerequisiteIds: ["ucb-cs61a"],
    links: {
      website: "https://fa20.datastructur.es/",
      lectures: "https://www.youtube.com/playlist?list=PL8FaHk7qbOD4wIgh9V8t-Xz6b_O0l-q3e",
      syllabus: "https://fa20.datastructur.es/about.html",
      textbook: "https://joshhug.gitbooks.io/hug61b/",
      assignments: "https://fa20.datastructur.es/#assignments",
      autograder: "https://github.com/Berkeley-CS61B"
    },
    overview: "Taught by Prof. Josh Hug in Java. In-depth mastery of fundamental data structures: linked lists, array lists, binary search trees, balanced 2-3 trees, red-black trees, hash maps, heaps/priority queues, graphs, sorting algorithms, and asymptotic complexity.",
    whyRecommended: "Unmatched hands-on rigor. You don't just study data structures conceptually; you implement full production-grade Java classes, memory profiling, and complete playable software projects from scratch.",
    textbookInfo: {
      title: "Algorithms (4th Edition)",
      authors: "Robert Sedgewick and Kevin Wayne",
      notes: "Addison-Wesley. Accompanied by Josh Hug's free online lecture notes."
    },
    syllabusModules: [
      { week: "Weeks 1-4", title: "Java & Linked Data Structures", desc: "Java syntax, object orientation, memory models, SLList, DLList, ALList, testing with JUnit." },
      { week: "Weeks 5-8", title: "Asymptotics & Balanced Trees", desc: "Big-O, Big-Theta, Big-Omega, Disjoint Sets (Union-Find), BSTs, B-Trees (2-3 Trees), Left-Leaning Red-Black Trees." },
      { week: "Weeks 9-11", title: "Hashing & Priority Queues", desc: "Hash functions, collision resolution, loads and resizing, Heaps, Priority Queues, Prefix Trees (Tries)." },
      { week: "Weeks 12-14", title: "Graphs, Shortest Paths & Sorting", desc: "Graph representations, DFS, BFS, Dijkstra's algorithm, A* search, Kruskal's, Prim's, Quicksort, Mergesort, Radix sorts." }
    ],
    labs: [
      { name: "Project 0: NBody Simulation", desc: "Simulate planetary physics and gravitational interaction in 2D space with standard draw." },
      { name: "Project 1: Deque (LinkedList & Array)", desc: "Build circular array and linked-list double-ended queues from scratch with unit tests." },
      { name: "Project 2: Gitlet", desc: "Implement a version control system mimicking Git (commits, blobs, trees, branches, merges, checkout) in pure Java." },
      { name: "Project 3: BYOW (Build Your Own World)", desc: "Generate random tile-based dungeon worlds with room interconnectivity, persistence, and interactive avatars." }
    ],
    selfStudyTips: "The Gitlet project is legendary among CS undergraduates worldwide. Completing Gitlet proves you understand file serialization, SHA-1 hashing, and directed acyclic graphs.",
    alternatives: ["Princeton Algorithms I & II (Coursera / Sedgewick)", "MIT 6.006: Introduction to Algorithms"]
  },
  {
    id: "mit-6-006",
    discipline: "cse",
    topic: "Data Structures & Algorithms",
    code: "MIT 6.006",
    title: "Introduction to Algorithms",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["Introductory Python", "Discrete Mathematics"],
    prerequisiteIds: ["ucb-cs61a"],
    links: {
      website: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp",
      syllabus: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/",
      textbook: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
      assignments: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/exams/"
    },
    overview: "Taught by Prof. Erik Demaine and Prof. Srini Devadas. Covers algorithmic thinking, computational complexity, data structures (sequences, sets), sorting, searching, graph traversal, shortest paths, and dynamic programming.",
    whyRecommended: "Focuses deeply on proof of correctness, recurrence relations, and the 5-step dynamic programming framework that demystifies algorithm design.",
    textbookInfo: {
      title: "Introduction to Algorithms (CLRS, 4th Edition)",
      authors: "Cormen, Leiserson, Rivest, and Stein",
      notes: "The universal reference book on computer algorithms worldwide."
    },
    syllabusModules: [
      { week: "Module 1", title: "Introduction & Data Structures", desc: "Computational models, data structures as interfaces, static and dynamic arrays, linked lists." },
      { week: "Module 2", title: "Sorting & Searching", desc: "Insertion sort, merge sort, in-place heap sort, binary search trees, AVL balanced trees." },
      { week: "Module 3", title: "Hashing", desc: "Direct access arrays, hash tables, universal hashing, open addressing, probing." },
      { week: "Module 4", title: "Graph Algorithms", desc: "Breadth-first search, depth-first search, topological sort, Dijkstra, Bellman-Ford, DAG relaxation." },
      { week: "Module 5", title: "Dynamic Programming", desc: "Subproblem definitions, memoization, bottom-up tabulation, text justification, edit distance, knapsack." }
    ],
    labs: [
      { name: "Problem Sets 1-8", desc: "Rigorous theoretical proofs and Python implementations with automatic test suites." },
      { name: "Dynamic Programming Project", desc: "Solve sequence alignment, 2D grid pathing, and zero-one knapsack problems." }
    ],
    selfStudyTips: "Master the 5-step DP approach: 1. Subproblem definition, 2. Relate subproblems, 3. Base cases, 4. Order of evaluation, 5. Original problem solution.",
    alternatives: ["Stanford CS161: Design and Analysis of Algorithms", "NPTEL: Design and Analysis of Algorithms (IIT Madras)"]
  },
  {
    id: "cmu-15-213",
    discipline: "cse",
    topic: "Computer Systems & Architecture",
    code: "CMU 15-213 / 18-213",
    title: "Introduction to Computer Systems (CS:APP)",
    institution: "CMU",
    institutionFullName: "Carnegie Mellon University",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "160-200 hours",
    language: "English",
    prerequisites: ["C programming proficiency", "Basic computer literacy"],
    prerequisiteIds: ["ucb-cs61a", "stanford-cs106b"],
    links: {
      website: "https://www.cs.cmu.edu/~213/",
      lectures: "https://www.youtube.com/playlist?list=PLbY-ERXuZ04U_t03U4ZndZq0P_n655m3u",
      syllabus: "https://www.cs.cmu.edu/~213/schedule.html",
      textbook: "http://csapp.cs.cmu.edu/",
      assignments: "http://csapp.cs.cmu.edu/3e/labs.html",
      autograder: "http://csapp.cs.cmu.edu/3e/students.html"
    },
    overview: "The legendary computer systems course created by Prof. Randal Bryant and Prof. David O'Hallaron. Bridges the gap between high-level programs and CPU hardware: assembly language, processor architecture, cache memory hierarchies, virtual memory, linking, exceptional control flow, and network programming.",
    whyRecommended: "Universally acknowledged as the single most transformative course in computer science. Every programmer should take CS:APP to truly understand what happens when code executes on silicon.",
    textbookInfo: {
      title: "Computer Systems: A Programmer's Perspective (3rd Edition)",
      authors: "Randal E. Bryant and David R. O'Hallaron",
      notes: "Known as CS:APP, the definitive systems textbook adopted by over 300 universities worldwide."
    },
    syllabusModules: [
      { week: "Weeks 1-3", title: "Bits, Integers & Floating Point", desc: "Two's complement, integer overflow, IEEE 754 floating point representation, bitwise operations." },
      { week: "Weeks 4-6", title: "x86-64 Machine-Level Programming", desc: "Registers, assembly instructions, stack frames, calling conventions, pointers, buffer overflow vulnerabilities." },
      { week: "Weeks 7-9", title: "Memory Hierarchy & Caches", desc: "SRAM, DRAM, locality of reference, cache organization (direct mapped, set associative), cache-friendly programming." },
      { week: "Weeks 10-12", title: "Linking & Virtual Memory", desc: "Static and dynamic linking, ELF format, address translation, page tables, TLBs, dynamic memory allocation." },
      { week: "Weeks 13-15", title: "System-Level I/O & Concurrency", desc: "Unix I/O, process control, signals, network sockets, thread concurrency, synchronization, race conditions." }
    ],
    labs: [
      { name: "Data Lab", desc: "Implement integer and floating point bit manipulation using a restricted subset of C operators." },
      { name: "Bomb Lab", desc: "Reverse engineer a compiled binary with GDB disassembly to defuse a six-phase ticking bomb." },
      { name: "Attack Lab", desc: "Execute code-injection and Return-Oriented Programming (ROP) buffer overflow attacks against x86-64 binaries." },
      { name: "Cache Lab", desc: "Write a C cache simulator and optimize matrix transposition to minimize cache miss penalties." },
      { name: "Shell Lab", desc: "Build a functional Unix command shell with job control, background processes, and signal handling." },
      { name: "Malloc Lab", desc: "Design and implement your own `malloc`, `free`, and `realloc` memory allocator with explicit free lists." },
      { name: "Proxy Lab", desc: "Construct a concurrent HTTP caching web proxy from scratch using POSIX sockets and threads." }
    ],
    selfStudyTips: "Use a clean Linux environment (Ubuntu 20.04/22.04 LTS or WSL2). Download the self-study lab archives directly from the CS:APP author website with full grading scripts included.",
    alternatives: ["UC Berkeley CS61C: Machine Structures", "MIT 6.004: Computation Structures"]
  },
  {
    id: "mit-6-s081",
    discipline: "cse",
    topic: "Operating Systems",
    code: "MIT 6.S081 / 6.1810",
    title: "Operating System Engineering",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Advanced Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "160-190 hours",
    language: "English",
    prerequisites: ["C Programming", "Computer Systems / Architecture (CS:APP or 6.004)"],
    prerequisiteIds: ["cmu-15-213"],
    links: {
      website: "https://pdos.csail.mit.edu/6.828/2021/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf",
      syllabus: "https://pdos.csail.mit.edu/6.828/2021/schedule.html",
      textbook: "https://pdos.csail.mit.edu/6.828/2021/xv6/book-riscv-rev2.pdf",
      assignments: "https://pdos.csail.mit.edu/6.828/2021/labs/util.html",
      autograder: "https://github.com/mit-pdos/xv6-riscv"
    },
    overview: "Taught by Turing Award winner Robert Morris and Frans Kaashoek at MIT CSAIL. Students read, modify, and extend xv6, a clean re-implementation of Unix V6 for modern multi-core RISC-V processors.",
    whyRecommended: "Unlike theoretical OS classes where you only read slides, in 6.S081 you implement actual kernel subsystems: page tables, system calls, trap handlers, copy-on-write, lock contention reduction, and crash-resilient file systems.",
    textbookInfo: {
      title: "xv6: a simple, Unix-like teaching operating system",
      authors: "Russ Cox, Frans Kaashoek, and Robert Morris",
      notes: "Free open commentary text walking through the exact C and RISC-V assembly source code line by line."
    },
    syllabusModules: [
      { week: "Module 1", title: "OS Architecture & System Calls", desc: "User/kernel mode isolation, page tables, RISC-V assembly, xv6 kernel startup." },
      { week: "Module 2", title: "Page Tables & Virtual Memory", desc: "RISC-V Sv39 paging, address translation, kernel vs user page tables, copy-on-write fork." },
      { week: "Module 3", title: "Traps & Interrupts", desc: "Kernel traps, user traps, device drivers, timer interrupts, PLIC, UART." },
      { week: "Module 4", title: "Multiprocessing & Locking", desc: "Spinlocks, sleep locks, race conditions, memory barriers, lock ordering and deadlocks." },
      { week: "Module 5", title: "File Systems & Crash Consistency", desc: "Disk layer, buffer cache, logging, inodes, directory structures, crash safety." }
    ],
    labs: [
      { name: "Lab 1: Unix Utilities", desc: "Write `sleep`, `pingpong`, `primes` pipeline, `find`, and `xargs` on xv6." },
      { name: "Lab 2: System Calls", desc: "Implement `trace` and `sysinfo` kernel system calls." },
      { name: "Lab 3: Page Tables", desc: "Inspect and modify RISC-V Sv39 page tables to print page mappings and accelerate system calls." },
      { name: "Lab 4: Traps", desc: "Implement user-level alarm system call that periodically interrupts program execution." },
      { name: "Lab 5: Copy-on-Write (COW)", desc: "Modify xv6 fork to share physical pages read-only and allocate new pages only upon write faults." },
      { name: "Lab 6: Multithreading & Locks", desc: "Implement user-level thread switching and design fine-grained locking for the buffer cache and memory allocator." },
      { name: "Lab 7: Lock-free Buffer Cache", desc: "Redesign the kernel buffer cache with per-bucket hash table locks to eliminate spinlock contention." },
      { name: "Lab 8: File System", desc: "Add large file support (double indirect blocks) and symbolic links to the xv6 file system." }
    ],
    selfStudyTips: "Set up QEMU for RISC-V on your machine. Every lab comes with a python test script (`make grade`) that runs full test suites against your kernel.",
    alternatives: ["UC Berkeley CS162: Operating Systems (Pintos)", "Georgia Tech CS6200: Intro to Operating Systems"]
  },
  {
    id: "stanford-cs144",
    discipline: "cse",
    topic: "Computer Networking",
    code: "Stanford CS144",
    title: "Introduction to Computer Networking",
    institution: "Stanford",
    institutionFullName: "Stanford University",
    level: "Advanced Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["C++ Programming", "Systems Programming (CS107/15-213)"],
    prerequisiteIds: ["cmu-15-213"],
    links: {
      website: "https://cs144.github.io/",
      lectures: "https://www.youtube.com/playlist?list=PL6RpkC85SLQDX36iMOuUp5e8xnmwT3N3A",
      syllabus: "https://cs144.github.io/syllabus.html",
      textbook: "https://kurose.cfa.harvard.edu/",
      assignments: "https://cs144.github.io/lab_checkoffs.html",
      autograder: "https://github.com/CS144/minnow"
    },
    overview: "Taught by Prof. Nick McKeown and Prof. Philip Levis. Students study the four-layer Internet architecture and build a complete, reliable, standards-compliant TCP/IP protocol stack (Minnow) from scratch in modern C++20.",
    whyRecommended: "Instead of just learning TCP state diagrams abstractly, in CS144 you write the ByteStream, the TCPReceiver, the TCPSender, the NetworkInterface (ARP), and connect your code to real Linux TUN network devices to browse live websites.",
    textbookInfo: {
      title: "Computer Networking: A Top-Down Approach (8th Edition)",
      authors: "Jim Kurose and Keith Ross",
      notes: "The leading networking textbook worldwide, paired with Stanford's custom lab specification guides."
    },
    syllabusModules: [
      { week: "Module 1", title: "Packet Switching & Layering", desc: "Store-and-forward, delays, throughput, 4-layer Internet model, encapsulation." },
      { week: "Module 2", title: "Transport Layer & Reliable Delivery", desc: "Stop-and-wait, sliding window, Go-Back-N, Selective Repeat, sequence numbers, flow control." },
      { week: "Module 3", title: "TCP State Machine & Congestion Control", desc: "TCP 3-way handshake, teardown, AIMD, slow start, congestion avoidance, fast retransmit, BBR." },
      { week: "Module 4", title: "Network Layer & Routing Protocols", desc: "IP packet forwarding, longest prefix match, Bellman-Ford, Dijkstra, OSPF, BGP inter-domain routing." },
      { week: "Module 5", title: "Link Layer & Ethernet", desc: "MAC addresses, ARP resolution, CSMA/CD, switches, VLANs, wireless WiFi protocols." }
    ],
    labs: [
      { name: "Check 0: Networking Warmup & Webget", desc: "Fetch web pages using Linux sockets and write an in-memory thread-safe ByteStream." },
      { name: "Check 1: Stitching Substrings into a ByteStream", desc: "Implement a StreamReassembler that accepts out-of-order bytes and reconstructs sequential data." },
      { name: "Check 2: The TCP Receiver", desc: "Convert 64-bit absolute stream indices to 32-bit sequence numbers and build the TCP Receiver." },
      { name: "Check 3: The TCP Sender", desc: "Implement segment generation, retransmission timers, exponential backoff, and flow control tracking." },
      { name: "Check 4: The Network Interface", desc: "Implement ARP request/reply handling and Ethernet frame encapsulation for IP datagrams." },
      { name: "Check 5: The IP Router", desc: "Implement an Internet router with longest prefix match route table lookup and TTL decrements." }
    ],
    selfStudyTips: "The starter code repository `minnow` has 100% automated test coverage. Run `ctest` to verify every component of your TCP stack.",
    alternatives: ["Princeton COS 461: Computer Networks", "MIT 6.033: Computer Systems Engineering"]
  },
  {
    id: "cmu-15-445",
    discipline: "cse",
    topic: "Database Systems",
    code: "CMU 15-445 / 645",
    title: "Database Systems",
    institution: "CMU",
    institutionFullName: "Carnegie Mellon University",
    level: "Advanced Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "160-190 hours",
    language: "English",
    prerequisites: ["C++ Programming", "Computer Systems (CS:APP 15-213)"],
    prerequisiteIds: ["cmu-15-213"],
    links: {
      website: "https://15445.courses.cs.cmu.edu/fall2023/",
      lectures: "https://www.youtube.com/playlist?list=PLSE8ODhjZXjaKScG3l0nuOiDTT3602ptc",
      syllabus: "https://15445.courses.cs.cmu.edu/fall2023/schedule.html",
      textbook: "https://www.db-book.com/",
      assignments: "https://15445.courses.cs.cmu.edu/fall2023/project1/",
      autograder: "https://github.com/cmu-db/bustub"
    },
    overview: "Taught by world-famous database researcher Prof. Andy Pavlo. Focuses on the internal architecture of relational database management systems (RDBMS): storage managers, buffer pools, B+ tree indexing, query execution engines, concurrency control, and logging/recovery.",
    whyRecommended: "Widely regarded as the best database systems course in the world. You build a complete, runnable C++ database engine (BusTub) from the disk storage layer all the way up to SQL query execution.",
    textbookInfo: {
      title: "Database System Concepts (7th Edition)",
      authors: "Silberschatz, Korth, and Sudarshan",
      notes: "Known as the 'Sailboat Book'. Complemented by Andy Pavlo's lecture slides and database research papers."
    },
    syllabusModules: [
      { week: "Lectures 1-4", title: "Relational Model & Storage", desc: "Relational algebra, page layout, slotted page architecture, tuple storage, log-structured storage." },
      { week: "Lectures 5-8", title: "Buffer Pools & Hash Tables", desc: "Buffer pool management, LRU/LRU-K replacement policies, linear hashing, extendible hashing." },
      { week: "Lectures 9-12", title: "Tree Indexes", desc: "B+ Tree index structure, search, insert, split, delete, merge, concurrent index access with lock crabbing." },
      { week: "Lectures 13-16", title: "Query Execution & Optimizers", desc: "Volcano iterator model, nested loop joins, hash joins, sorting, rule-based and cost-based query optimization." },
      { week: "Lectures 17-22", title: "Concurrency & Recovery", desc: "ACID properties, Two-Phase Locking (2PL), deadlock detection, Multi-Version Concurrency Control (MVCC), ARIES logging and recovery." }
    ],
    labs: [
      { name: "Project 0: C++ Primer", desc: "Implement a copy-on-write trie in modern C++17 to get familiar with the BusTub codebase." },
      { name: "Project 1: Buffer Pool Manager", desc: "Implement LRU-K replacer, disk scheduler, and thread-safe buffer pool manager." },
      { name: "Project 2: B+ Tree Index", desc: "Build a thread-safe B+ Tree index with support for concurrent reading, insertion, and deletion via latch crabbing." },
      { name: "Project 3: Query Execution", desc: "Implement Volcano query plan executors: SeqScan, Insert, Update, Delete, IndexScan, Aggregation, and HashJoin." },
      { name: "Project 4: Concurrency Control (MVCC)", desc: "Build multi-version concurrency control with snapshot isolation and transaction commit/abort rollbacks." }
    ],
    selfStudyTips: "Andy Pavlo uploads full 4K lecture recordings to YouTube every semester. Follow the public BusTub repository on GitHub and use Gradescope autograder keys provided on the public course schedule.",
    alternatives: ["UC Berkeley CS186: Introduction to Database Systems", "Stanford CS145: Data Management and Data Systems"]
  },
  {
    id: "mit-6-824",
    discipline: "cse",
    topic: "Distributed Systems",
    code: "MIT 6.824 / 6.5840",
    title: "Distributed Systems",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Graduate / Advanced",
    difficulty: "Advanced",
    estimatedHours: "160-200 hours",
    language: "English",
    prerequisites: ["Systems Programming", "Concurrency & Multi-threading", "Go Programming"],
    prerequisiteIds: ["mit-6-s081"],
    links: {
      website: "https://pdos.csail.mit.edu/6.824/",
      lectures: "https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB",
      syllabus: "https://pdos.csail.mit.edu/6.824/schedule.html",
      textbook: "https://pdos.csail.mit.edu/6.824/papers.html",
      assignments: "https://pdos.csail.mit.edu/6.824/labs/lab-mr.html",
      autograder: "https://github.com/mit-pdos/6.5840-golabs-2024"
    },
    overview: "Taught by Prof. Robert Morris at MIT CSAIL. Students read classic distributed systems papers (MapReduce, GFS, Raft, Spanner, ZooKeeper, Dynamo) and implement fault-tolerant, replicated key-value storage using the Raft consensus algorithm in Go.",
    whyRecommended: "The gold standard distributed systems curriculum in industry and academia. Mastering the Raft lab is the definitive milestone for any backend or cloud infrastructure engineer.",
    textbookInfo: {
      title: "Designing Data-Intensive Applications (DDIA)",
      authors: "Martin Kleppmann",
      notes: "O'Reilly. Plus MIT's reading list of 24 landmark distributed systems papers."
    },
    syllabusModules: [
      { week: "Module 1", title: "MapReduce & Remote Procedure Calls", desc: "RPCs, network failures, idempotent operations, MapReduce master and worker fault handling." },
      { week: "Module 2", title: "Fault Tolerance via Primary-Backup Replication", desc: "Split-brain problem, state machine replication, deterministic execution, Viewstamped Replication." },
      { week: "Module 3", title: "Raft Consensus Algorithm", desc: "Leader election, randomized election timers, log replication, safety invariants, log compaction & snapshots." },
      { week: "Module 4", title: "Linearizability & Consistency Models", desc: "Linearizability definitions, event orderings, eventual consistency, causal consistency, CAP theorem." },
      { week: "Module 5", title: "Distributed Transactions & Sharding", desc: "Two-Phase Commit (2PC), Paxos/Raft backed transactions, Spanner TrueTime, optimistic concurrency control." }
    ],
    labs: [
      { name: "Lab 1: MapReduce", desc: "Build a distributed MapReduce framework in Go with master coordinator and worker failure recovery." },
      { name: "Lab 2: Raft Consensus (Part 2A, 2B, 2C, 2D)", desc: "Build complete Raft: leader election, log replication, persistence to disk, and log compaction snapshots." },
      { name: "Lab 3: Replicated Key-Value Service", desc: "Construct a fault-tolerant KV storage service on top of your Raft library with duplicate client request detection." },
      { name: "Lab 4: Sharded Key-Value Service", desc: "Build a horizontally partitioned distributed key/value service with multi-raft groups and dynamic shard rebalancing." }
    ],
    selfStudyTips: "The Raft lab is notoriously tricky due to subtle race conditions. Run your Go tests hundreds of times in a loop with `-race` enabled to catch heisenbugs.",
    alternatives: ["Stanford CS244B: Distributed Systems", "UW CSE 452: Distributed Systems"]
  },
  {
    id: "stanford-cs143",
    discipline: "cse",
    topic: "Compilers & Languages",
    code: "Stanford CS143",
    title: "Compilers",
    institution: "Stanford",
    institutionFullName: "Stanford University",
    level: "Advanced Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "150-180 hours",
    language: "English",
    prerequisites: ["C++ Programming", "Data Structures & Assembly Language"],
    prerequisiteIds: ["ucb-cs61b", "cmu-15-213"],
    links: {
      website: "https://web.stanford.edu/class/cs143/",
      lectures: "https://www.youtube.com/playlist?list=PLqM7alHXFySG7ndYflk_7h4n41gK-hYj2",
      syllabus: "https://web.stanford.edu/class/cs143/syllabus.html",
      textbook: "https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools",
      assignments: "https://web.stanford.edu/class/cs143/assignments.html",
      autograder: "https://web.stanford.edu/class/cs143/project.html"
    },
    overview: "Taught by Prof. Alex Aiken. Students construct a full end-to-end optimizing compiler for Cool (Classroom Object-Oriented Language) translating high-level source code into target assembly language.",
    whyRecommended: "Demystifies programming language execution, lexing, parsing, semantic type checking, runtime environments, and register allocation.",
    textbookInfo: {
      title: "Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition)",
      authors: "Aho, Lam, Sethi, and Ullman",
      notes: "The foundational compiler textbook, supplemented by Stanford's Cool language manual."
    },
    syllabusModules: [
      { week: "Unit 1", title: "Lexical Analysis", desc: "Regular expressions, deterministic finite automata (DFA), Flex/Lex, maximal munch token matching." },
      { week: "Unit 2", title: "Syntax Analysis & Parsing", desc: "Context-free grammars, ambiguity, top-down LL(k) parsing, bottom-up LR(1) and LALR parsing, Bison/Yacc." },
      { week: "Unit 3", title: "Semantic Analysis & Type Checking", desc: "Abstract Syntax Trees (ASTs), symbol tables, scope resolution, static type checking, type inference." },
      { week: "Unit 4", title: "Runtime Systems & Code Generation", desc: "Memory layouts, object dispatch tables (vtables), activation records, calling conventions, MIPS assembly generation." },
      { week: "Unit 5", title: "Code Optimization", desc: "Control flow graphs, basic blocks, dataflow analysis, constant folding, dead code elimination, register allocation." }
    ],
    labs: [
      { name: "PA1: Cool Programming", desc: "Write complex algorithms (reverse, list sorting) in the Cool language." },
      { name: "PA2: Lexer", desc: "Write a complete lexical analyzer using Flex to convert Cool source into tokens." },
      { name: "PA3: Parser", desc: "Write a Bison LALR grammar that constructs an Abstract Syntax Tree with syntax error recovery." },
      { name: "PA4: Semantic Analyzer", desc: "Perform type checking, check inheritance cycles, and enforce Cool type invariants." },
      { name: "PA5: Code Generator", desc: "Emit functional MIPS assembly from the typed AST and execute compiled binaries on the SPIM simulator." }
    ],
    selfStudyTips: "Stanford provides an official Docker container and VM image preconfigured with SPIM, Flex, and Bison for instant zero-hassle setup.",
    alternatives: ["Georgia Tech CS8803: Compilers: Theory and Practice", "Cornell CS 4120: Introduction to Compilers"]
  },

  // ==========================================
  // ELECTRICAL ENGINEERING (EE)
  // ==========================================
  {
    id: "mit-6-002",
    discipline: "ee",
    topic: "Circuits & Electronics",
    code: "MIT 6.002",
    title: "Circuits and Electronics",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Moderate",
    estimatedHours: "120-140 hours",
    language: "English",
    prerequisites: ["Calculus", "Differential Equations", "Electricity and Magnetism"],
    prerequisiteIds: ["mit-18-01", "mit-8-02"],
    links: {
      website: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/",
      lectures: "https://www.youtube.com/playlist?list=PL36BF1B8F4E8D7D14",
      syllabus: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/pages/syllabus/",
      textbook: "https://www.sciencedirect.com/book/9781558607354/foundations-of-analog-and-digital-electronic-circuits",
      assignments: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/pages/exams/"
    },
    overview: "Taught by Prof. Anant Agarwal. Bridges physical circuits with digital computation: lumped circuit abstraction, KVL/KCL, Thevenin/Norton equivalents, MOSFET switches and amplifiers, RC/RL circuits, RLC resonance, and operational amplifiers.",
    whyRecommended: "The definitive introductory circuits class for electrical engineers. Connects continuous analog electronics seamlessly to digital logic gates.",
    textbookInfo: {
      title: "Foundations of Analog and Digital Electronic Circuits",
      authors: "Anant Agarwal and Jeffrey Lang",
      notes: "Morgan Kaufmann. The flagship MIT textbook explaining the lumped matter discipline."
    },
    syllabusModules: [
      { week: "Unit 1", title: "Circuit Abstraction & Resistive Networks", desc: "Lumped circuit discipline, KVL, KCL, node method, superposition, Thevenin & Norton equivalence." },
      { week: "Unit 2", title: "Nonlinear Analysis & MOSFETs", desc: "Nonlinear elements, piecewise linear models, small-signal analysis, MOSFET switch model, static discipline." },
      { week: "Unit 3", title: "Energy Storage & Transients", desc: "Capacitors, inductors, first-order RC/RL circuits, zero-input response, step response, propagation delay." },
      { week: "Unit 4", title: "Second-Order RLC Circuits", desc: "Series and parallel RLC, overdamped, critically damped, and underdamped transient responses, Q factor." },
      { week: "Unit 5", title: "Frequency Domain & Operational Amplifiers", desc: "Impedance method, sinusoidal steady state, filters, Bode plots, op-amp golden rules, negative feedback." }
    ],
    labs: [
      { name: "MOSFET Inverter Lab", desc: "Simulate and measure noise margins and VTC curves of CMOS logic inverters." },
      { name: "Audio Equalizer Design", desc: "Design active op-amp low-pass, band-pass, and high-pass audio frequency filter circuits." },
      { name: "RLC Transient Simulation", desc: "Model resonant ringing and damping using SPICE/LTspice simulation software." }
    ],
    selfStudyTips: "Use LTspice (free) alongside the course problem sets to simulate every schematic and verify voltages and transient plots.",
    alternatives: ["NPTEL: Basic Electrical Circuits (IIT Madras)", "Stanford EE 101A: Circuits I"]
  },
  {
    id: "mit-6-003",
    discipline: "ee",
    topic: "Signals & Systems",
    code: "MIT 6.003",
    title: "Signals and Systems",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["Calculus", "Differential Equations", "Linear Algebra"],
    prerequisiteIds: ["mit-18-02", "mit-18-06"],
    links: {
      website: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/",
      lectures: "https://www.youtube.com/playlist?list=PLB24BC7956EE040CD",
      syllabus: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/pages/syllabus/",
      textbook: "https://www.pearson.com/en-us/subject-catalog/p/signals-and-systems/P200000003264",
      assignments: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/pages/exams/"
    },
    overview: "Covers continuous-time and discrete-time signals and Linear Time-Invariant (LTI) systems, convolution, Fourier Series, Continuous-Time Fourier Transform (CTFT), Discrete-Time Fourier Transform (DTFT), Laplace transform, Z-transform, and sampling theory (Nyquist).",
    whyRecommended: "Signals & Systems is the core mathematical language for communications, audio processing, radar, medical imaging (MRI/CT), and feedback control.",
    textbookInfo: {
      title: "Signals and Systems (2nd Edition)",
      authors: "Alan V. Oppenheim, Alan S. Willsky, and S. Hamid Nawab",
      notes: "Prentice Hall. The undisputed global standard text for signal processing."
    },
    syllabusModules: [
      { week: "Unit 1", title: "Signals, Systems & Convolution", desc: "Linearity, time-invariance, impulse response, continuous and discrete convolution sums/integrals." },
      { week: "Unit 2", title: "Fourier Series", desc: "Eigenfunctions of LTI systems, harmonic analysis of periodic signals, convergence, frequency spectrum." },
      { week: "Unit 3", title: "Fourier Transforms (CTFT & DTFT)", desc: "Aperiodic signals, frequency response, filtering, duality, modulation, time-frequency trade-offs." },
      { week: "Unit 4", title: "Sampling Theorem", desc: "Nyquist-Shannon sampling theorem, anti-aliasing filters, reconstruction from samples, impulse-train sampling." },
      { week: "Unit 5", title: "Laplace & Z-Transforms", desc: "Region of convergence (ROC), poles and zeros, transfer functions, stability, feedback systems." }
    ],
    labs: [
      { name: "Audio Filtering in Python", desc: "Implement low-pass Butterworth and notch filters to eliminate noise from corrupted audio clips." },
      { name: "Image 2D Fourier Processing", desc: "Perform 2D DFT transforms to remove periodic moiré artifacts from optical photos." },
      { name: "Nyquist Sampling & Aliasing Studio", desc: "Synthesize aliased audio tones to witness frequency fold-over firsthand." }
    ],
    selfStudyTips: "Work through Alan Oppenheim's classic lecture videos. His explanation of pole-zero plots and phase margins is timeless.",
    alternatives: ["Georgia Tech ECE 2026: Intro to Signal Processing", "NPTEL: Signals and Systems (IIT Kharagpur)"]
  },
  {
    id: "nptel-control-systems",
    discipline: "ee",
    topic: "Control Theory",
    code: "NPTEL EE-Ctrl",
    title: "Control Engineering & Classical Feedback Systems",
    institution: "NPTEL",
    institutionFullName: "Indian Institute of Technology Bombay / NPTEL",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "120-140 hours",
    language: "English",
    prerequisites: ["Signals and Systems", "Differential Equations", "Linear Algebra"],
    prerequisiteIds: ["mit-6-003", "mit-18-06"],
    links: {
      website: "https://nptel.ac.in/courses/108101037",
      lectures: "https://www.youtube.com/playlist?list=PLbRMhDVUMngfc0w2AopGkM_yOHf67Fj_t",
      syllabus: "https://archive.nptel.ac.in/courses/108/101/108101037/",
      textbook: "https://www.wiley.com/en-us/Control+Systems+Engineering%2C+8th+Edition-p-9781119474227",
      assignments: "https://nptel.ac.in/courses/108101037",
      exams: "https://nptel.ac.in/courses/108101037"
    },
    overview: "Taught by leading IIT Bombay faculty. Covers open-loop vs closed-loop transfer functions, block diagram reduction, signal flow graphs, Routh-Hurwitz stability criterion, root locus design, Bode plots, Nyquist stability plots, lead-lag compensator design, and PID controller tuning.",
    whyRecommended: "NPTEL's engineering lecture series is famous for rigorous, step-by-step mathematical problem solving. Essential for robotics actuators, quadcopter autopilots, and industrial automation.",
    textbookInfo: {
      title: "Control Systems Engineering (8th Edition)",
      authors: "Norman S. Nise",
      notes: "John Wiley & Sons. Complete with MATLAB/Simulink problem sets."
    },
    syllabusModules: [
      { week: "Module 1", title: "System Modeling", desc: "Transfer functions of electrical, mechanical, and electromechanical systems (DC motors)." },
      { week: "Module 2", title: "Time Response Analysis", desc: "First-order and second-order systems, rise time, settling time, percent overshoot, steady-state error." },
      { week: "Module 3", title: "Stability & Root Locus", desc: "Routh-Hurwitz stability criterion, root locus sketch rules, gain margin, transient response design." },
      { week: "Module 4", title: "Frequency Response Analysis", desc: "Bode plots, Nyquist diagram, Cauchy's argument principle, gain and phase margins." },
      { week: "Module 5", title: "Controller Design", desc: "Lead, lag, and lead-lag compensation, PID tuning using Ziegler-Nichols methods, state space basics." }
    ],
    labs: [
      { name: "DC Motor Speed Controller", desc: "Model a permanent magnet DC motor and design a feedback controller to eliminate load droop." },
      { name: "Bode Plot Compensation Exercise", desc: "Synthesize a phase-lead network to increase phase margin from 20° to 60°." },
      { name: "Inverted Pendulum Balancer", desc: "Simulate linearized cart-pendulum balancing using state feedback." }
    ],
    selfStudyTips: "Use Python Control Systems Library (`pip install control`) or MATLAB to plot root locus and Bode diagrams for all assignment problems.",
    alternatives: ["MIT 2.04A: Systems and Controls", "Stanford ENGR 105: Feedback Control Design"]
  },

  // ==========================================
  // MECHANICAL ENGINEERING
  // ==========================================
  {
    id: "mit-2-001",
    discipline: "mech",
    topic: "Solid Mechanics & Materials",
    code: "MIT 2.001",
    title: "Mechanics and Materials I",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["Calculus", "Classical Mechanics"],
    prerequisiteIds: ["mit-18-01", "mit-8-01"],
    links: {
      website: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP62QZq_r0s3j-3x5f22i5e8x",
      syllabus: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/exams/"
    },
    overview: "Covers the mechanics of deformable bodies: stress and strain tensors, Hooke's law, axial loading, torsion of circular shafts, pure bending of beams, shear forces and bending moments, Mohr's circle, beam deflections, and buckling of columns.",
    whyRecommended: "The absolute foundation of mechanical and civil structural design. Teaches engineers how to calculate whether a beam, shaft, or bracket will bend safely or fracture under load.",
    textbookInfo: {
      title: "An Introduction to the Mechanics of Solids",
      authors: "Crandall, Dahl, and Lardner",
      notes: "McGraw-Hill. The classic MIT solid mechanics textbook."
    },
    syllabusModules: [
      { week: "Unit 1", title: "Stress and Strain State", desc: "Forces, moments, traction, normal and shear stresses, 3D stress tensor, strain definitions, Hooke's constitutive law." },
      { week: "Unit 2", title: "Axial Force & Torsion", desc: "Statically determinate and indeterminate trusses, circular shafts, angle of twist, torque diagrams, polar moment of inertia." },
      { week: "Unit 3", title: "Bending of Beams", desc: "Shear force and bending moment diagrams (V and M), flexure formula, section modulus, composite beams." },
      { week: "Unit 4", title: "Stress Transformations & Mohr's Circle", desc: "Principal stresses, maximum in-plane shear, 2D and 3D Mohr's circle, yield criteria (von Mises and Tresca)." },
      { week: "Unit 5", title: "Deflection & Column Buckling", desc: "Differential equation of deflection curves, superposition method, Euler buckling load, critical stress." }
    ],
    labs: [
      { name: "Tensile Stress-Strain Lab", desc: "Analyze raw universal testing machine (UTM) data for aluminum 6061 and mild steel to calculate yield point and modulus." },
      { name: "Beam Shear & Moment Analyzer", desc: "Write a script to compute and plot V(x) and M(x) diagrams for arbitrary distributed beam loads." },
      { name: "Pressure Vessel Hoop Stress", desc: "Calculate thin-walled cylindrical pressure vessel stresses and safety factors." }
    ],
    selfStudyTips: "Draw the free body diagram and coordinate system every single time. Master Mohr's circle until you can visualize principal planes instantly.",
    alternatives: ["NPTEL: Strength of Materials (IIT Madras)", "Stanford ENGR 14: Applied Mechanics"]
  },
  {
    id: "mit-2-005",
    discipline: "mech",
    topic: "Thermodynamics & Fluids",
    code: "MIT 2.005",
    title: "Thermal-Fluids Engineering I",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "140-160 hours",
    language: "English",
    prerequisites: ["Multivariable Calculus", "Classical Mechanics", "Solid-State Chemistry"],
    prerequisiteIds: ["mit-18-02", "mit-8-01", "mit-3-091"],
    links: {
      website: "https://ocw.mit.edu/courses/2-005-thermal-fluids-engineering-i-fall-2008/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP62b7Yj5-mHkE_s6gP9hF6L_",
      syllabus: "https://ocw.mit.edu/courses/2-005-thermal-fluids-engineering-i-fall-2008/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/2-005-thermal-fluids-engineering-i-fall-2008/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/2-005-thermal-fluids-engineering-i-fall-2008/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/2-005-thermal-fluids-engineering-i-fall-2008/pages/exams/"
    },
    overview: "Integrates classical thermodynamics and fluid mechanics: First and Second Laws of Thermodynamics, control volume energy equations, entropy, Carnot efficiency, vapor and gas power cycles (Rankine, Brayton, Otto, Diesel), fluid statics, Bernoulli equation, and Navier-Stokes momentum equations.",
    whyRecommended: "Essential for aerospace propulsion, automotive engines, heat pumps, air conditioning, power plants, and thermal management of modern computer chips.",
    textbookInfo: {
      title: "Fundamentals of Engineering Thermodynamics",
      authors: "Moran, Shapiro, Boettner, and Bailey",
      notes: "Wiley. Accompanied by MIT's custom unified course lecture notes."
    },
    syllabusModules: [
      { week: "Module 1", title: "First Law of Thermodynamics", desc: "Closed and open systems, state postulate, pure substances, property tables (steam tables), work and heat transfer." },
      { week: "Module 2", title: "Control Volume Energy Analysis", desc: "Conservation of mass, steady-flow devices (nozzles, diffusers, turbines, compressors, throttling valves, heat exchangers)." },
      { week: "Module 3", title: "Second Law & Entropy", desc: "Clausius and Kelvin-Planck statements, Carnot cycle, reversible and irreversible processes, entropy balance, isentropic efficiencies." },
      { week: "Module 4", title: "Gas & Vapor Power Cycles", desc: "Rankine cycle with reheat and regeneration, air-standard Otto and Diesel cycles, Brayton gas turbine cycle." },
      { week: "Module 5", title: "Fluid Statics & Bernoulli Flow", desc: "Pressure field, manometry, hydrostatic forces on submerged planes, streamlining, Bernoulli equation, pipe head losses." }
    ],
    labs: [
      { name: "Steam Power Plant Cycle Simulation", desc: "Calculate thermal efficiency, net power output, and condenser heat rejection of a multi-stage reheat steam cycle." },
      { name: "Wind Tunnel Bernoulli Experiment", desc: "Compute velocity distribution and lift on an airfoil using static and stagnation pressure measurements." }
    ],
    selfStudyTips: "Become intimately familiar with T-s (Temperature-Entropy) and P-v (Pressure-Volume) diagrams. Tracing cycles on these diagrams makes thermodynamics visual and intuitive.",
    alternatives: ["NPTEL: Basic Thermodynamics (IIT Kharagpur)", "Stanford ME 30: Thermodynamics"]
  },
  {
    id: "nptel-fluid-mechanics",
    discipline: "mech",
    topic: "Fluid Mechanics",
    code: "NPTEL ME-Fluid",
    title: "Advanced Fluid Mechanics & Transport",
    institution: "NPTEL",
    institutionFullName: "Indian Institute of Technology Kanpur / NPTEL",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["Multivariable Calculus", "Differential Equations", "Statics"],
    prerequisiteIds: ["mit-18-02", "mit-8-01"],
    links: {
      website: "https://nptel.ac.in/courses/112105171",
      lectures: "https://www.youtube.com/playlist?list=PLbRMhDVUMngf4iY3qF-m5W_hGZ_sP8XzC",
      syllabus: "https://archive.nptel.ac.in/courses/112/105/112105171/",
      textbook: "https://www.mheducation.com/highered/product/fluid-mechanics-white/M9781260258318.html",
      assignments: "https://nptel.ac.in/courses/112105171",
      exams: "https://nptel.ac.in/courses/112105171"
    },
    overview: "Taught by Prof. Gautam Biswas and Prof. S. Chakraborty. Detailed treatment of continuum fluid dynamics, Reynolds Transport Theorem, Navier-Stokes equations, boundary layer theory, laminar and turbulent pipe flow, Moody friction factor, and potential flow theory.",
    whyRecommended: "IIT Kanpur is globally celebrated for fluid dynamics research. This lecture series provides the exact mathematical derivations needed for computational fluid dynamics (CFD) and aerodynamic engineering.",
    textbookInfo: {
      title: "Fluid Mechanics (9th Edition)",
      authors: "Frank M. White and Henry Xue",
      notes: "McGraw-Hill. The standard reference text with extensive engineering problem sets."
    },
    syllabusModules: [
      { week: "Week 1-3", title: "Kinematics & Conservation Laws", desc: "Eulerian vs Lagrangian flow descriptions, stream functions, vorticity, Reynolds Transport Theorem." },
      { week: "Week 4-6", title: "Differential Analysis of Fluid Flow", desc: "Continuity equation, Cauchy equation of motion, derivation of Navier-Stokes equations in cylindrical and cartesian coordinates." },
      { week: "Week 7-9", title: "Exact Solutions of Navier-Stokes", desc: "Couette flow, Poiseuille flow in pipes, Stokes flow around a sphere, pulsatile flow." },
      { week: "Week 10-12", title: "Boundary Layer Theory & Turbulence", desc: "Prandtl boundary layer equations, Blasius boundary layer solution, momentum integral equation, boundary layer separation, turbulent shear stress." }
    ],
    labs: [
      { name: "Piping Network Loss Calculator", desc: "Calculate major Darcy friction losses and minor valve losses across a multi-branch closed water circuit." },
      { name: "Blasius Equation Python Solver", desc: "Numerically solve the nonlinear Blasius ODE for laminar flow over a flat plate." }
    ],
    selfStudyTips: "Pay close attention to dimensional analysis (Buckingham Pi theorem) and dimensionless groups (Reynolds number, Mach number, Froude number).",
    alternatives: ["MIT 2.06: Fluid Dynamics", "Stanford ME 70"]
  },

  // ==========================================
  // ROBOTICS ENGINEERING
  // ==========================================
  {
    id: "stanford-cs223a",
    discipline: "robotics",
    topic: "Robot Mechanics & Control",
    code: "Stanford CS223A",
    title: "Introduction to Robotics: Mechanics and Control",
    institution: "Stanford",
    institutionFullName: "Stanford University",
    level: "Core Undergraduate / Graduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["Linear Algebra", "Classical Mechanics", "Differential Equations"],
    prerequisiteIds: ["mit-18-06", "mit-8-01"],
    links: {
      website: "https://web.stanford.edu/class/cs223a/",
      lectures: "https://www.youtube.com/playlist?list=PL656DADE342BDE114",
      syllabus: "https://web.stanford.edu/class/cs223a/syllabus.html",
      textbook: "https://www.pearson.com/en-us/subject-catalog/p/introduction-to-robotics-mechanics-and-control/P200000003290",
      assignments: "https://web.stanford.edu/class/cs223a/homeworks.html",
      exams: "https://web.stanford.edu/class/cs223a/exams.html"
    },
    overview: "Taught by world-renowned roboticist Prof. Oussama Khatib. Covers spatial descriptions and transformations, Denavit-Hartenberg (D-H) parameters, forward kinematics, inverse kinematics, Jacobians (velocities and static forces), manipulator dynamics (Euler-Lagrange equations), and trajectory generation.",
    whyRecommended: "The definitive robotics manipulation course on Earth. Almost every industrial robot arm in factories today is controlled using the mathematics taught in this course.",
    textbookInfo: {
      title: "Introduction to Robotics: Mechanics and Control (4th Edition)",
      authors: "John J. Craig",
      notes: "Pearson. The foundational textbook used in robotics programs worldwide."
    },
    syllabusModules: [
      { week: "Module 1", title: "Spatial Descriptions & Transforms", desc: "Rotation matrices, Euler angles, roll-pitch-yaw, homogeneous transform matrices, coordinate frames." },
      { week: "Module 2", title: "Manipulator Kinematics", desc: "Link description, D-H parameter convention, forward kinematic arm equation derivation for 6-DOF arms." },
      { week: "Module 3", title: "Inverse Kinematics", desc: "Solvability, algebraic and geometric solutions, workspace boundaries, pieper's solution for arms with spherical wrists." },
      { week: "Module 4", title: "Jacobians: Velocities and Static Forces", desc: "Linear and angular velocities of links, Jacobian matrix, kinematic singularities, force relations." },
      { week: "Module 5", title: "Dynamics & Trajectory Planning", desc: "Newton-Euler formulation, Euler-Lagrange equations of motion, inertia matrix, Coriolis forces, cubic and quintic polynomial trajectories." }
    ],
    labs: [
      { name: "PUMA 560 Robot Forward Kinematics", desc: "Derive the D-H parameters and homogeneous transforms for the 6-DOF PUMA 560 arm in Python/MATLAB." },
      { name: "Inverse Kinematic Solver", desc: "Implement closed-form inverse kinematics to position the robot end-effector at target Cartesian coordinates." },
      { name: "Singularity & Ellipsoid Visualizer", desc: "Compute manipulability ellipsoids from the Jacobian to identify singular wrist and elbow configurations." }
    ],
    selfStudyTips: "Oussama Khatib's physical demonstrations with robot arms in class make complex coordinate transformations crystal clear. Work through Craig's problem sets by hand.",
    alternatives: ["CMU 16-311: Introduction to Robotics", "NPTEL: Robotics (IIT Madras)"]
  },
  {
    id: "cmu-16-385",
    discipline: "robotics",
    topic: "Computer Vision for Robotics",
    code: "CMU 16-385",
    title: "Computer Vision",
    institution: "CMU",
    institutionFullName: "Carnegie Mellon University",
    level: "Advanced Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "150-180 hours",
    language: "English",
    prerequisites: ["Linear Algebra", "Multivariable Calculus", "Python / NumPy"],
    prerequisiteIds: ["mit-18-06", "mit-18-02"],
    links: {
      website: "http://16385.courses.cs.cmu.edu/",
      lectures: "https://www.youtube.com/playlist?list=PL2zRqk164ULblPZtQYmQf2dYr4p8GZzQn",
      syllabus: "http://16385.courses.cs.cmu.edu/schedule.html",
      textbook: "http://szeliski.org/Book/",
      assignments: "http://16385.courses.cs.cmu.edu/assignments.html",
      autograder: "https://github.com/16385"
    },
    overview: "Taught by Prof. Srinivasa Narasimhan and Prof. Matthew O'Toole at the CMU Robotics Institute. Covers image formation, camera calibration, pinhole models, edge detection, feature extraction (SIFT/ORB), homographies, Lucas-Kanade optical flow, stereo vision, and 3D Structure from Motion (SfM).",
    whyRecommended: "Essential for self-driving cars, drone navigation, and mobile robots. Teaches the geometric vision algorithms that allow robots to perceive and navigate physical 3D space.",
    textbookInfo: {
      title: "Computer Vision: Algorithms and Applications (2nd Edition)",
      authors: "Richard Szeliski",
      notes: "Free digital edition available on the author's website. Springer."
    },
    syllabusModules: [
      { week: "Module 1", title: "Image Processing & Filtering", desc: "Pinhole camera model, perspective projection, convolution, Gaussian filters, Sobel, Canny edge detection." },
      { week: "Module 2", title: "Feature Detection & Matching", desc: "Harris corner detector, scale invariance, SIFT, RANSAC for robust model fitting." },
      { week: "Module 3", title: "Image Warping & Homographies", desc: "Projective transformations, 2D homographies, panoramic image stitching." },
      { week: "Module 4", title: "Stereo Vision & Epipolar Geometry", desc: "Epipolar plane, essential matrix, fundamental matrix, disparity maps, triangulation, depth estimation." },
      { week: "Module 5", title: "Structure from Motion & Optical Flow", desc: "Lucas-Kanade tracking, affine motion models, bundle adjustment, 3D point cloud reconstruction." }
    ],
    labs: [
      { name: "Project 1: Image Filtering & Hybrid Images", desc: "Implement 2D cross-correlation and create frequency-blended hybrid images." },
      { name: "Project 2: Feature Matching & Panorama Stitching", desc: "Detect corners, match descriptors, compute homographies with RANSAC, and stitch seamless panoramas." },
      { name: "Project 3: Lucas-Kanade Tracking", desc: "Build an optical flow object tracker that tracks moving vehicles in video sequences." },
      { name: "Project 4: 3D Reconstruction via Stereo", desc: "Compute the fundamental matrix, rectify stereo image pairs, and generate dense 3D point clouds." }
    ],
    selfStudyTips: "Work through the homework assignments using Python and NumPy. Understanding epipolar geometry will give you a superpower when working with stereo cameras or LiDAR.",
    alternatives: ["Stanford CS231A: Computer Vision, From 3D Reconstruction to Recognition", "University of Freiburg SLAM Course"]
  },
  {
    id: "mit-6-832",
    discipline: "robotics",
    topic: "Autonomous Systems & Control",
    code: "MIT 6.832",
    title: "Underactuated Robotics",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Graduate / Advanced",
    difficulty: "Advanced",
    estimatedHours: "150-180 hours",
    language: "English",
    prerequisites: ["Linear Algebra", "Classical Dynamics", "Control Theory", "Python"],
    prerequisiteIds: ["mit-18-06", "nptel-control-systems"],
    links: {
      website: "https://underactuated.csail.mit.edu/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP61-q8T1u5pcr5wL_7k3_V_G",
      syllabus: "https://underactuated.csail.mit.edu/Spring2023/",
      textbook: "https://underactuated.csail.mit.edu/underactuated.html",
      assignments: "https://underactuated.csail.mit.edu/Spring2023/assignments.html",
      autograder: "https://github.com/RussTedrake/underactuated"
    },
    overview: "Taught by Prof. Russ Tedrake at MIT CSAIL. Focuses on nonlinear dynamics and optimal control for robots that have fewer actuators than degrees of freedom: walking bipedal humanoids, running quadrupeds (Boston Dynamics style), swimming fish, and acrobatic fliers.",
    whyRecommended: "Traditional robotics assumes fully-actuated factory arms. Real-world mobile humanoids, quadrupeds, and drones are underactuated systems governed by nonlinear physics and contact forces.",
    textbookInfo: {
      title: "Underactuated Robotics: Algorithms for Walking, Running, Swimming, Flying, and Manipulation",
      authors: "Russ Tedrake",
      notes: "Free comprehensive interactive textbook featuring executable Drake simulation notebooks."
    },
    syllabusModules: [
      { week: "Part 1", title: "Nonlinear Dynamics of Simple Systems", desc: "Inverted pendulum, phase portraits, limit cycles, double pendulum chaos, energy shaping control." },
      { week: "Part 2", title: "Linear Quadratic Regulators (LQR)", desc: "Continuous and discrete LQR, Riccati equation, local stabilization of nonlinear trajectories, time-varying LQR." },
      { week: "Part 3", title: "Trajectory Optimization", desc: "Direct collocation, shooting methods, Pontryagin's maximum principle, contact dynamics, walking gaits." },
      { week: "Part 4", title: "Model Predictive Control (MPC)", desc: "Receding horizon control, convex optimization, quadratic programming, robust gait stabilization." },
      { week: "Part 5", title: "Reinforcement Learning & Policy Search", desc: "Actor-critic methods, trajectory optimization as a supervisor, Sim-to-Real transfer." }
    ],
    labs: [
      { name: "Acrobot & Pendubot Swing-Up", desc: "Design energy-shaping controllers to swing up an underactuated two-link robot arm and catch it with LQR." },
      { name: "Passive Dynamic Walker", desc: "Simulate a two-legged mechanism that walks stably down an incline purely using gravitational limit cycles." },
      { name: "Direct Collocation Trajectory Optimizer", desc: "Optimize joint torque trajectories for a planar quadrotor flying through narrow obstacle gates." }
    ],
    selfStudyTips: "Use the open-source Drake robotics simulator created by Russ Tedrake's team at MIT and Toyota Research Institute.",
    alternatives: ["CMU 16-745: Dynamic Optimization", "ETH Zurich Robot Dynamics"]
  },

  // ==========================================
  // AI & MACHINE LEARNING ENGINEERING
  // ==========================================
  {
    id: "stanford-cs229",
    discipline: "ai",
    topic: "Foundations of AI & ML",
    code: "Stanford CS229",
    title: "Machine Learning",
    institution: "Stanford",
    institutionFullName: "Stanford University",
    level: "Core Undergraduate / Graduate",
    difficulty: "Advanced",
    estimatedHours: "150-180 hours",
    language: "English",
    prerequisites: ["Multivariable Calculus", "Linear Algebra", "Basic Probability"],
    prerequisiteIds: ["mit-18-02", "mit-18-06"],
    links: {
      website: "https://cs229.stanford.edu/",
      lectures: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
      syllabus: "https://cs229.stanford.edu/syllabus-autumn2022.html",
      textbook: "https://cs229.stanford.edu/notes2022fall/",
      assignments: "https://cs229.stanford.edu/materials.html",
      exams: "https://cs229.stanford.edu/past-exams.html"
    },
    overview: "The most famous machine learning course in history, created by Prof. Andrew Ng. Rigorous mathematical foundations of supervised learning (linear regression, logistic regression, GLMs, SVMs, kernels), unsupervised learning (k-means, PCA, EM algorithm, Gaussian mixture models), learning theory, and reinforcement learning.",
    whyRecommended: "Teaches you the true mathematical derivations behind machine learning rather than just treating ML libraries as black boxes. You derive gradients, Hessians, and dual optimization problems by hand.",
    textbookInfo: {
      title: "The Elements of Statistical Learning (2nd Edition)",
      authors: "Hastie, Tibshirani, and Friedman",
      notes: "Free open PDF provided by Stanford University, complemented by Andrew Ng's lecture notes."
    },
    syllabusModules: [
      { week: "Weeks 1-3", title: "Supervised Learning & GLMs", desc: "LMS algorithm, normal equations, logistic regression, Newton-Raphson method, Exponential Family, Generalized Linear Models." },
      { week: "Weeks 4-6", title: "Generative Models & SVMs", desc: "Gaussian Discriminant Analysis (GDA), Naive Bayes, Laplace smoothing, Support Vector Machines, Karush-Kuhn-Tucker (KKT) conditions, Mercer kernels." },
      { week: "Weeks 7-8", title: "Learning Theory & Regularization", desc: "Bias-variance tradeoff, union and Chernoff bounds, VC dimension, empirical risk minimization, L1 and L2 regularization." },
      { week: "Weeks 9-10", title: "Unsupervised Learning & EM Algorithm", desc: "K-means clustering, Gaussian Mixture Models, Expectation-Maximization (EM) derivation, Factor Analysis, Principal Component Analysis (PCA), ICA." },
      { week: "Weeks 11-12", title: "Reinforcement Learning", desc: "Markov Decision Processes (MDPs), Bellman equations, value iteration, policy iteration, Q-learning." }
    ],
    labs: [
      { name: "Problem Set 1: GLMs & Poisson Regression", desc: "Derive gradients and implement iterative Newton-Raphson solvers for generalized linear models in NumPy." },
      { name: "Problem Set 2: Kernel SVM & Spam Classifier", desc: "Implement Platt's Sequential Minimal Optimization (SMO) algorithm to train a support vector machine." },
      { name: "Problem Set 3: EM Algorithm & Image Segmentation", desc: "Implement the EM algorithm to fit a mixture of Gaussians for unsupervised color image clustering." },
      { name: "Problem Set 4: Autonomous Helicopter Flight via RL", desc: "Implement value iteration and model-based RL to navigate an unstable dynamical system." }
    ],
    selfStudyTips: "Do not skip the math derivations in Andrew Ng's lecture notes. Derive the Normal Equations and the EM lower bound on blank paper until you can do them from memory.",
    alternatives: ["UC Berkeley CS189: Introduction to Machine Learning", "Georgia Tech CS7641: Machine Learning"]
  },
  {
    id: "stanford-cs231n",
    discipline: "ai",
    topic: "Deep Learning & Neural Networks",
    code: "Stanford CS231n",
    title: "Deep Learning for Computer Vision",
    institution: "Stanford",
    institutionFullName: "Stanford University",
    level: "Advanced Undergraduate / Graduate",
    difficulty: "Advanced",
    estimatedHours: "160-190 hours",
    language: "English",
    prerequisites: ["Python / NumPy", "Linear Algebra", "Calculus (Chain Rule)"],
    prerequisiteIds: ["mit-18-06", "mit-18-01"],
    links: {
      website: "http://cs231n.stanford.edu/",
      lectures: "https://www.youtube.com/playlist?list=PL3FW7PR477UufDD_Ppxp_P3QyPBVfX637",
      syllabus: "http://cs231n.stanford.edu/schedule.html",
      textbook: "https://www.deeplearningbook.org/",
      assignments: "http://cs231n.stanford.edu/assignments.html",
      autograder: "https://github.com/cs231n"
    },
    overview: "Taught by Prof. Fei-Fei Li and Justin Johnson. Complete deep dive into neural network architectures: backpropagation from scratch, convolutional layers, spatial pooling, batch normalization, residual connections (ResNet), object detection (YOLO/Faster R-CNN), image segmentation, RNNs, and Transformers.",
    whyRecommended: "Widely considered the best deep learning course ever created. In Assignment 1 & 2 you write every single forward and backward pass (gradient calculation) for layers, activations, and optimizers purely in raw NumPy.",
    textbookInfo: {
      title: "Deep Learning",
      authors: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
      notes: "MIT Press. Free online book accompanied by Stanford's extensive visual module notes."
    },
    syllabusModules: [
      { week: "Module 1", title: "Image Classification & Loss Functions", desc: "Nearest neighbor, linear classifiers, multi-class SVM loss, Softmax cross-entropy, analytic gradients." },
      { week: "Module 2", title: "Optimization & Backpropagation", desc: "Computational graphs, chain rule, vector-valued backpropagation, SGD, Momentum, RMSProp, Adam optimizer." },
      { week: "Module 3", title: "Convolutional Networks", desc: "Convolution layer, stride, padding, receptive field, AlexNet, VGG, GoogLeNet, ResNet architectures." },
      { week: "Module 4", title: "Training Neural Networks", desc: "Xavier and He weight initialization, batch normalization, layer normalization, dropout, data augmentation." },
      { week: "Module 5", title: "Detection, Segmentation & Transformers", desc: "Anchor boxes, Faster R-CNN, Mask R-CNN, attention mechanism, Vision Transformers (ViT), Generative Diffusion Models." }
    ],
    labs: [
      { name: "Assignment 1: Raw NumPy Foundations", desc: "Write k-NN, SVM, Softmax classifiers, and a Two-Layer Neural Network using manual vector calculus backprop." },
      { name: "Assignment 2: Deep Modular Networks", desc: "Implement fully connected nets, Batch Normalization, Dropout, and Convolutional layers from scratch in NumPy, then build ResNets in PyTorch." },
      { name: "Assignment 3: Vision Transformers & Generative Models", desc: "Build Image Captioning with Transformers, Network Visualization (Saliency maps, DeepDream), and Generative Adversarial Networks (GANs)." }
    ],
    selfStudyTips: "Completing Assignment 2's manual backprop through Batch Normalization will permanently eradicate any confusion you have about gradient flow in deep neural networks.",
    alternatives: ["Fast.ai: Practical Deep Learning for Coders", "MIT 6.S191: Introduction to Deep Learning"]
  },
  {
    id: "stanford-cs224n",
    discipline: "ai",
    topic: "Natural Language Processing & LLMs",
    code: "Stanford CS224n",
    title: "Natural Language Processing with Deep Learning",
    institution: "Stanford",
    institutionFullName: "Stanford University",
    level: "Advanced Undergraduate / Graduate",
    difficulty: "Advanced",
    estimatedHours: "150-180 hours",
    language: "English",
    prerequisites: ["Python", "Linear Algebra", "Calculus", "Basic Deep Learning"],
    prerequisiteIds: ["stanford-cs231n", "mit-18-06"],
    links: {
      website: "https://web.stanford.edu/class/cs224n/",
      lectures: "https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ",
      syllabus: "https://web.stanford.edu/class/cs224n/index.html#schedule",
      textbook: "https://web.stanford.edu/~jurafsky/slp3/",
      assignments: "https://web.stanford.edu/class/cs224n/index.html#assignments",
      autograder: "https://github.com/stanfordnlp/cs224n"
    },
    overview: "Taught by Prof. Christopher Manning. Covers word embeddings (word2vec, GloVe), recurrent neural networks, sequence-to-sequence models with attention, the Transformer architecture (self-attention, multi-head attention), pre-trained Large Language Models (BERT, GPT series, LLaMA), prompt engineering, and fine-tuning (LoRA).",
    whyRecommended: "The definitive NLP and Large Language Model course in academia. Christopher Manning is one of the founding fathers of modern natural language processing.",
    textbookInfo: {
      title: "Speech and Language Processing (3rd Edition Draft)",
      authors: "Dan Jurafsky and James H. Martin",
      notes: "Free open draft textbook updated continuously with modern LLM chapters."
    },
    syllabusModules: [
      { week: "Module 1", title: "Word Vectors & Semantic Spaces", desc: "Distributional semantics, Word2Vec, skip-gram, continuous bag of words (CBOW), GloVe, negative sampling." },
      { week: "Module 2", title: "Language Models & RNNs", desc: "N-gram language models, RNNs, vanishing and exploding gradients, LSTMs, GRUs, dependency parsing." },
      { week: "Module 3", title: "Seq2Seq & Attention Mechanism", desc: "Machine translation, encoder-decoder architecture, Bahdanau additive attention, Luong multiplicative attention." },
      { week: "Module 4", title: "Transformers & Pretraining", desc: "Self-attention equations, scaled dot-product attention, multi-head attention, positional encodings, BERT vs GPT." },
      { week: "Module 5", title: "Large Language Models & Alignment", desc: "Scaling laws, Instruction Tuning, RLHF (Reinforcement Learning from Human Feedback), Direct Preference Optimization (DPO), parameter-efficient fine-tuning (LoRA)." }
    ],
    labs: [
      { name: "Assignment 1: Word2Vec Exploration", desc: "Implement word2vec loss and analytic gradient derivations with negative sampling in NumPy." },
      { name: "Assignment 2: Dependency Parsing", desc: "Build a transition-based neural dependency parser using PyTorch." },
      { name: "Assignment 3: Neural Machine Translation", desc: "Train a sequence-to-sequence model with bidirectional LSTM and attention on English-Spanish pairs." },
      { name: "Assignment 4: MinBERT & Pretraining", desc: "Implement a full working Transformer encoder (BERT) from scratch in PyTorch with multi-head attention." }
    ],
    selfStudyTips: "Assignment 4 walks you through implementing every single linear projection, attention mask, and feed-forward block of the Transformer architecture from scratch.",
    alternatives: ["Andrej Karpathy: Neural Networks Zero to Hero", "Hugging Face NLP Course"]
  },

  // ==========================================
  // CYBERSECURITY ENGINEERING
  // ==========================================
  {
    id: "ost2-arch1001",
    discipline: "cyber",
    topic: "Assembly & Hardware Architecture",
    code: "OST2 Arch1001",
    title: "Architecture 1001: x86-64 Assembly",
    institution: "OST2",
    institutionFullName: "OpenSecurityTraining2",
    level: "Introductory / Core",
    difficulty: "Moderate",
    estimatedHours: "40-50 hours",
    language: "English",
    prerequisites: ["Basic C or Python knowledge"],
    prerequisiteIds: [],
    links: {
      website: "https://open-security-training.info/",
      lectures: "https://www.youtube.com/playlist?list=PLMB3ddm5Yvh3gf_kev7zsVP_KkWGOJcMA",
      syllabus: "https://github.com/OpenSecurityTraining/Arch1001_x86-64_Asm",
      textbook: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html",
      assignments: "https://github.com/OpenSecurityTraining/Arch1001_x86-64_Asm",
      autograder: "https://ost2.fyi/"
    },
    overview: "Created by Xeno Kovah. Complete practical mastery of the x86-64 instruction set architecture from a security analyst and reverse engineer's perspective: general purpose registers, instruction encoding, arithmetic/logical operations, conditional jumps, stack operations, and calling conventions.",
    whyRecommended: "OpenSecurityTraining2 is the premier free training provider for hardware and low-level software security. You cannot analyze malware, audit firmware, or exploit memory corruptions without fluency in assembly.",
    textbookInfo: {
      title: "Intel 64 and IA-32 Architectures Software Developer's Manual",
      authors: "Intel Corporation",
      notes: "The official silicon reference manuals provided free by Intel."
    },
    syllabusModules: [
      { week: "Module 1", title: "Architecture & Registers", desc: "RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15, sub-register aliasing (EAX, AX, AL)." },
      { week: "Module 2", title: "Memory Addressing & Basic Math", desc: "Displacement, base, index, scale addressing `[base + index*scale + disp]`, ADD, SUB, LEA, IMUL, DIV." },
      { week: "Module 3", title: "Control Flow & Flags Register", desc: "RFLAGS (ZF, CF, SF, OF), CMP, TEST, conditional jumps (JZ, JNZ, JLE, JGE), unconditional loops." },
      { week: "Module 4", title: "The Stack & Function Calls", desc: "PUSH, POP, CALL, RET, stack frames, System V AMD64 calling convention vs Microsoft x64 calling convention." },
      { week: "Module 5", title: "GDB Disassembly & Inspection", desc: "Inspecting registers, stepping through instructions (`si`, `ni`), examining memory layouts in binary executables." }
    ],
    labs: [
      { name: "Register Tracking Drills", desc: "Step through compiled C functions instruction by instruction to predict register and stack values." },
      { name: "Reverse Assembly Puzzles", desc: "Translate raw disassembled assembly snippets back into clean C source code." }
    ],
    selfStudyTips: "Open Godbolt Compiler Explorer (`godbolt.org`) side-by-side with your code to watch how GCC turns simple C loops and switch statements into assembly.",
    alternatives: ["OST2 Arch2001: Intermediate x86-64", "pwn.college: Assembly Crash Course"]
  },
  {
    id: "pwn-college-cse365",
    discipline: "cyber",
    topic: "Systems Security & Binary Exploitation",
    code: "pwn.college CSE 365",
    title: "Introduction to Cybersecurity & Systems Exploitation",
    institution: "pwn.college",
    institutionFullName: "Arizona State University / pwn.college",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "160-200 hours",
    language: "English",
    prerequisites: ["Linux command line proficiency", "C programming", "x86-64 assembly basics"],
    prerequisiteIds: ["ost2-arch1001", "cmu-15-213"],
    links: {
      website: "https://pwn.college/",
      lectures: "https://www.youtube.com/playlist?list=PL-ymxv0nOtqptnLz_nOflmrmv_GZ_v1-2",
      syllabus: "https://pwn.college/cse365-f2023/",
      textbook: "https://github.com/pwncollege",
      assignments: "https://pwn.college/challenges",
      autograder: "https://dojo.pwn.college/"
    },
    overview: "Created by Prof. Yan Shoshitaishvili and Connor Nelson at ASU and the Order of the Overflow DEF CON CTF team. A 100% hands-on hacking dojo teaching reverse engineering, Linux privilege escalation, binary interception, shellcoding, and memory corruption exploits.",
    whyRecommended: "pwn.college is currently the highest-rated hands-on cybersecurity training platform in the world. Instead of reading slides, you get direct access to hundreds of real vulnerable Linux challenge binaries in individual cloud container instances.",
    textbookInfo: {
      title: "The Art of Software Security Assessment",
      authors: "Dowd, McDonald, and Schuh",
      notes: "Addison-Wesley. Known as the bible of vulnerability analysis."
    },
    syllabusModules: [
      { week: "Module 1", title: "Linux Privileges & Permissions", desc: "User IDs, Group IDs, SUID binaries, environment variables, PATH hijacking, sudo mechanics." },
      { week: "Module 2", title: "Reverse Engineering", desc: "Static and dynamic analysis, GDB, IDA Pro/Ghidra decompilation, patching binaries, cracking authorization checks." },
      { week: "Module 3", title: "Shellcoding", desc: "Writing raw position-independent machine code, avoiding null bytes, triggering syscalls, executing arbitrary payloads." },
      { week: "Module 4", title: "Memory Corruption & Stack Overflows", desc: "Stack buffer overflows, clobbering instruction pointers, control flow hijacking, shellcode injection." },
      { week: "Module 5", title: "Modern Mitigations & Bypass", desc: "Non-Executable Stack (NX/DEP), Stack Canaries, Address Space Layout Randomization (ASLR), Return-to-libc." }
    ],
    labs: [
      { name: "Talking Web Dojo", desc: "Crafting raw HTTP requests, understanding cookies, sessions, and protocol-level vulnerabilities." },
      { name: "Reverse Engineering Dojo (Levels 1-20)", desc: "Reverse engineer proprietary password-checking algorithms using Ghidra and GDB." },
      { name: "Shellcode Injection Dojo (Levels 1-14)", desc: "Craft raw x86-64 shellcode to read `/flag` under strict architectural constraints (no null bytes, restricted syscalls)." },
      { name: "BabyROP Dojo", desc: "Build Return-Oriented Programming chains to bypass NX protections and pop a root shell." }
    ],
    selfStudyTips: "Register for a free account at `pwn.college`. You get an integrated browser-based VSCode terminal connected to your own Linux virtual machine with instant challenge validation.",
    alternatives: ["OpenSecurityTraining2: Vulnerabilities 1001", "MIT 6.858: Computer Systems Security"]
  },
  {
    id: "mit-6-858",
    discipline: "cyber",
    topic: "Computer Systems Security",
    code: "MIT 6.858",
    title: "Computer Systems Security",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Advanced Undergraduate / Graduate",
    difficulty: "Advanced",
    estimatedHours: "140-160 hours",
    language: "English",
    prerequisites: ["Operating Systems Engineering (6.S081/CS162)", "C Programming"],
    prerequisiteIds: ["mit-6-s081", "cmu-15-213"],
    links: {
      website: "https://css.csail.mit.edu/6.858/2022/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnnh",
      syllabus: "https://css.csail.mit.edu/6.858/2022/schedule.html",
      textbook: "https://css.csail.mit.edu/6.858/2022/papers.html",
      assignments: "https://css.csail.mit.edu/6.858/2022/labs/lab1.html",
      autograder: "https://github.com/mit-pdos/6.858-labs"
    },
    overview: "Taught by Prof. Nickolai Zeldovich at MIT CSAIL. Rigorous exploration of computer system vulnerabilities and defenses: buffer overflows, privilege separation, capabilities, sandboxing, side-channel attacks (Spectre/Meltdown), web security, and formal verification.",
    whyRecommended: "Teaches you how to build inherently secure systems from an architectural perspective rather than merely patching security bugs after the fact.",
    textbookInfo: {
      title: "Security Engineering (3rd Edition)",
      authors: "Ross Anderson",
      notes: "Free open access online book provided by Cambridge University."
    },
    syllabusModules: [
      { week: "Module 1", title: "Control Hijacking & Buffer Overflows", desc: "Stack layouts, function pointers, off-by-one errors, return-oriented programming, mitigation techniques." },
      { week: "Module 2", title: "Privilege Separation & Sandboxing", desc: "Principle of least privilege, OKWS web server architecture, Unix chroot, seccomp-bpf, Linux namespaces, containers." },
      { week: "Module 3", title: "Hardware Attacks & Side Channels", desc: "Cache timing attacks, branch predictor poisoning, transient execution attacks (Spectre and Meltdown)." },
      { week: "Module 4", title: "Web Application Security", desc: "Same-origin policy, cross-site scripting (XSS), cross-site request forgery (CSRF), SQL injection, cookie security." },
      { week: "Module 5", title: "Symbolic Execution & Formal Verification", desc: "Automated vulnerability finding with angr and KLEE, formal proofs of correctness with Coq/Dafny." }
    ],
    labs: [
      { name: "Lab 1: Exploiting Buffer Overflows", desc: "Perform code injection and return-to-libc attacks against a vulnerable web server binary." },
      { name: "Lab 2: Privilege Separation in Zoobar", desc: "Decompose a monolithic Python web application into sandboxed, least-privilege daemon services." },
      { name: "Lab 3: Symbolic Execution with KLEE", desc: "Use symbolic execution engines to automatically discover hidden inputs that crash C applications." },
      { name: "Lab 4: Side-Channel Timing Attack", desc: "Extract an AES cryptographic key by measuring CPU cache access latency fluctuations." }
    ],
    selfStudyTips: "The Zoobar labs provide a rare, realistic view of re-architecting an entire production web service to be resilient against compromises.",
    alternatives: ["Stanford CS155: Computer and Network Security", "Stanford CS255: Introduction to Cryptography"]
  },

  // ==========================================
  // CIVIL & ENVIRONMENTAL ENGINEERING
  // ==========================================
  {
    id: "mit-1-050",
    discipline: "civil",
    topic: "Structural Mechanics & Analysis",
    code: "MIT 1.050",
    title: "Solid Mechanics & Structural Analysis",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "120-140 hours",
    language: "English",
    prerequisites: ["Classical Mechanics", "Multivariable Calculus"],
    prerequisiteIds: ["mit-8-01", "mit-18-02"],
    links: {
      website: "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP61V_i98K_x_d2Z9wP8s8E4B",
      syllabus: "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/pages/exams/"
    },
    overview: "Covers the mechanics of structures and continuum solids: stress equilibrium, strain compatibility, isotropic linear elasticity, plane stress/plane strain, energy methods, virtual work, truss and frame analysis, and plastic collapse limit analysis.",
    whyRecommended: "Essential for civil and structural engineers responsible for bridges, buildings, tunnels, and infrastructure resilience under gravity, wind, and seismic loads.",
    textbookInfo: {
      title: "Structural Analysis (10th Edition)",
      authors: "R. C. Hibbeler",
      notes: "Pearson. Accompanied by MIT's structural continuum mechanics notes."
    },
    syllabusModules: [
      { week: "Module 1", title: "Equilibrium & Statically Determinate Structures", desc: "Free body diagrams, internal forces, method of joints and sections for trusses, shear and moment curves." },
      { week: "Module 2", title: "Continuum Elasticity & Constitutive Laws", desc: "Stress tensor, strain tensor, Generalized Hooke's Law, Lame constants, bulk and shear moduli." },
      { week: "Module 3", title: "Energy Methods & Virtual Work", desc: "Strain energy, Castigliano's theorems, principle of virtual work, calculating deflections in beams and frames." },
      { week: "Module 4", title: "Indeterminate Structural Analysis", desc: "Force method (flexibility method), displacement method (stiffness method), moment distribution." },
      { week: "Module 5", title: "Limit Analysis & Plastic Design", desc: "Plastic hinge formation, collapse mechanisms, upper and lower bound theorems of plastic collapse." }
    ],
    labs: [
      { name: "Bridge Truss Deflection Calculator", desc: "Compute nodal displacements and internal axial forces for a Pratt truss bridge under moving vehicular load." },
      { name: "Finite Element 2D Frame Simulator", desc: "Implement direct stiffness matrix assembly in Python to solve statically indeterminate multi-story frames." }
    ],
    selfStudyTips: "Castigliano's theorem simplifies calculating deflections in complex indeterminate frames. Master the difference between force and displacement methods.",
    alternatives: ["NPTEL: Structural Analysis (IIT Kharagpur)", "Stanford CEE 101A: Mechanics of Materials"]
  },
  {
    id: "mit-1-060",
    discipline: "civil",
    topic: "Hydrology & Environmental Fluids",
    code: "MIT 1.060",
    title: "Fluid Mechanics & Environmental Transport",
    institution: "MIT",
    institutionFullName: "Massachusetts Institute of Technology",
    level: "Core Undergraduate",
    difficulty: "Intermediate",
    estimatedHours: "110-130 hours",
    language: "English",
    prerequisites: ["Calculus", "Classical Mechanics"],
    prerequisiteIds: ["mit-18-02", "mit-8-01"],
    links: {
      website: "https://ocw.mit.edu/courses/1-060-fluid-mechanics-spring-2006/",
      lectures: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63G-98E8o2T_zC4-N1p6j2E",
      syllabus: "https://ocw.mit.edu/courses/1-060-fluid-mechanics-spring-2006/pages/syllabus/",
      textbook: "https://ocw.mit.edu/courses/1-060-fluid-mechanics-spring-2006/pages/readings/",
      assignments: "https://ocw.mit.edu/courses/1-060-fluid-mechanics-spring-2006/pages/assignments/",
      exams: "https://ocw.mit.edu/courses/1-060-fluid-mechanics-spring-2006/pages/exams/"
    },
    overview: "Fluid mechanics with direct applications to environmental and civil engineering: hydrostatics on dams, open-channel flow (rivers and canals), hydraulic jumps, Manning's equation, groundwater flow (Darcy's Law), pollutant dispersion, and sediment transport.",
    whyRecommended: "Civil engineers must master open-channel flows and hydrology to design flood control systems, stormwater networks, water treatment facilities, and coastal defenses.",
    textbookInfo: {
      title: "Open Channel Hydraulics",
      authors: "Terry W. Sturm",
      notes: "McGraw-Hill. The standard reference for civil fluid mechanics."
    },
    syllabusModules: [
      { week: "Module 1", title: "Fluid Statics & Dam Forces", desc: "Pressure distribution, center of pressure on submerged dam gates, buoyancy and metacentric height." },
      { week: "Module 2", title: "Conservation Laws in Civil Hydrology", desc: "Continuity equation, momentum equation for open channels, energy equation, specific energy curves." },
      { week: "Module 3", title: "Open-Channel Hydraulics", desc: "Subcritical and supercritical flows, Froude number, hydraulic jumps, energy dissipation, Manning's roughness." },
      { week: "Module 4", title: "Pipe Networks & Pumps", desc: "Hardy Cross method for municipal pipe distribution networks, pump characteristic curves and operating points." },
      { week: "Module 5", title: "Groundwater & Contaminant Transport", desc: "Darcy's law, aquifer permeability, flow nets, advection-dispersion equation, pollutant plume tracking." }
    ],
    labs: [
      { name: "Hydraulic Jump & Flume Simulation", desc: "Calculate conjugate depths and energy dissipation across a standing hydraulic jump." },
      { name: "Municipal Pipe Network Flow Distribution", desc: "Implement the Hardy Cross iterative loop algorithm to determine pipe flow rates and nodal pressures." }
    ],
    selfStudyTips: "Understand the Froude number analog to the Mach number in compressible flow. Supercritical flow (Fr > 1) behaves like supersonic flow.",
    alternatives: ["NPTEL: Fluid Mechanics in Civil Engineering (IIT Kharagpur)", "Stanford CEE 166A: Watersheds and Rivers"]
  },
  {
    id: "nptel-geotechnical",
    discipline: "civil",
    topic: "Geotechnical Engineering",
    code: "NPTEL CE-Geo",
    title: "Soil Mechanics & Geotechnical Engineering",
    institution: "NPTEL",
    institutionFullName: "Indian Institute of Technology Bombay / NPTEL",
    level: "Core Undergraduate",
    difficulty: "Advanced",
    estimatedHours: "130-150 hours",
    language: "English",
    prerequisites: ["Solid Mechanics", "Fluid Mechanics"],
    prerequisiteIds: ["mit-1-050", "mit-1-060"],
    links: {
      website: "https://nptel.ac.in/courses/105101084",
      lectures: "https://www.youtube.com/playlist?list=PLbRMhDVUMngcf7hD9S_p9r_v2bL5X9p7x",
      syllabus: "https://archive.nptel.ac.in/courses/105/101/105101084/",
      textbook: "https://www.wiley.com/en-us/Soil+Mechanics+and+Foundations%2C+3rd+Edition-p-9780471646822",
      assignments: "https://nptel.ac.in/courses/105101084",
      exams: "https://nptel.ac.in/courses/105101084"
    },
    overview: "Taught by Prof. D.N. Singh at IIT Bombay. Covers physical and index properties of soils, soil classification (USCS), compaction, permeability and seepage (Laplace equation, flow nets), Terzaghi's effective stress principle, consolidation settlement, shear strength of soils (Mohr-Coulomb criterion), lateral earth pressures (Rankine and Coulomb), and bearing capacity of shallow and deep foundations.",
    whyRecommended: "Every single structure sits on soil or rock. Understanding effective stress and consolidation settlement is non-negotiable for structural stability and preventing foundation failure.",
    textbookInfo: {
      title: "Principles of Geotechnical Engineering (9th Edition)",
      authors: "Braja M. Das and Khaled Sobhan",
      notes: "Cengage Learning. The most widely referenced geotechnical textbook in engineering."
    },
    syllabusModules: [
      { week: "Module 1", title: "Soil Properties & Classification", desc: "Phase relationships (void ratio, porosity, moisture content), sieve analysis, Atterberg limits, USCS classification." },
      { week: "Module 2", title: "Permeability & Seepage", desc: "Hydraulic conductivity, constant and falling head tests, 2D Laplace seepage equation, flow nets, piping and boiling." },
      { week: "Module 3", title: "Effective Stress & Consolidation", desc: "Terzaghi's effective stress equation `sigma' = sigma - u`, pore water pressure, 1D Terzaghi consolidation theory, settlement rate." },
      { week: "Module 4", title: "Shear Strength of Soil", desc: "Direct shear test, triaxial compression tests (UU, CU, CD), pore pressure parameters, critical state soil mechanics." },
      { week: "Module 5", title: "Earth Pressure & Bearing Capacity", desc: "Active and passive Rankine earth pressures, retaining wall stability, Terzaghi bearing capacity equation for shallow footings." }
    ],
    labs: [
      { name: "Flow Net Dam Seepage Calculation", desc: "Construct flow nets under a concrete gravity dam to compute total uplift pressure and seepage discharge." },
      { name: "Consolidation Settlement Predictor", desc: "Calculate time-dependent primary consolidation settlement for a multi-layered clay stratum under building foundation loads." },
      { name: "Retaining Wall Stability Check", desc: "Perform overturning, sliding, and bearing capacity safety factor checks for a cantilever reinforced concrete retaining wall." }
    ],
    selfStudyTips: "Always remember Terzaghi's golden rule: total stress minus pore water pressure equals effective stress. Soil shear strength depends strictly on effective stress.",
    alternatives: ["MIT 1.361: Advanced Soil Mechanics", "NPTEL: Foundation Engineering (IIT Kharagpur)"]
  }
];

// Provide helper queries
const CatalogService = {
  getAllDisciplines() {
    return DISCIPLINES;
  },
  getDisciplineById(id) {
    return DISCIPLINES.find(d => d.id === id);
  },
  getAllCourses() {
    return COURSES;
  },
  getCoursesByDiscipline(disciplineId) {
    if (disciplineId === "welcome") return [];
    return COURSES.filter(c => c.discipline === disciplineId);
  },
  getCourseById(id) {
    return COURSES.find(c => c.id === id);
  },
  getAllInstitutions() {
    return INSTITUTIONS;
  },
  search(query, institutionFilter = "all") {
    const q = query.toLowerCase().trim();
    return COURSES.filter(course => {
      const matchesInst = institutionFilter === "all" || course.institution === institutionFilter;
      if (!matchesInst) return false;
      if (!q) return true;

      const searchableText = [
        course.code,
        course.title,
        course.topic,
        course.institution,
        course.institutionFullName,
        course.overview,
        course.whyRecommended,
        (course.prerequisites || []).join(" "),
        (course.labs || []).map(l => l.name + " " + l.desc).join(" ")
      ].join(" ").toLowerCase();

      return searchableText.includes(q);
    });
  }
};
