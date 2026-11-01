# DIY Engineering - Open Curriculum Guide

A classic, documentation-style open engineering and computer science curriculum modeled after the **CS-DIY Wiki** methodology. Built strictly with standard **HTML, CSS, and Vanilla JavaScript** with zero external framework bloat, fast load times, and clean typography.

---

## Key Features

1. **Classic Documentation Aesthetics**:
   - Clean, academic wiki design inspired by classic documentation sites and CS-DIY.
   - Clean typography, high contrast, crisp 1px borders, and readable tables.
   - **Zero unnecessary emojis** throughout headings and navigation.
   - Full **Dark Mode** and **Light Mode** support (persisted in `localStorage`).

2. **3-Column Navigation System**:
   - **Column 1 (Leftmost)**: Primary Disciplines navigation (`Pre-Engineering`, `CSE`, `EE`, `Mechanical`, `Robotics`, `AI`, `Cybersecurity`, `Civil & Environmental`).
   - **Column 2 (Sub-menu)**: Groups courses by topic within the active discipline (e.g. for CSE: `Programming & Foundations`, `Data Structures & Algorithms`, `Systems & Architecture`, `Operating Systems`, `Networking`, `Databases`, `Compilers`, `Distributed Systems`).
   - **Column 3 (Main Content Area)**: The **CS-DIY Course Technique**:
     - Direct Links Grid (Official Homepage, Video Lectures, Syllabus, Textbook, Problem Sets/Labs, Autograders, Exams).
     - Academic Specifications Table (Prerequisites with direct clickable cross-links).
     - Course Overview & Motivation ("Why Take This Course").
     - Syllabus & Weekly Modules.
     - Hands-on Laboratory Projects & Autograder test suites.
     - Recommended Textbooks and open-access materials.
     - Self-Study Practical Guide & Common Pitfalls.
     - Comparable & Alternative University Offerings.

3. **Global Search & Filter**:
   - Instant search across all courses, topics, codes, and descriptions.
   - Quick keyboard shortcut: Press `/` anywhere to focus search, `Esc` to clear.
   - Institution filter: Filter courses by **MIT OCW**, **CMU**, **Stanford**, **UC Berkeley**, **Georgia Tech**, **OST2**, **pwn.college**, or **NPTEL**.

4. **Self-Study Tracker**:
   - "Save to Study Plan" (Bookmarks) stored locally in the browser.
   - "Mark as Completed" to track learning progress.
   - Direct URL hash routing (e.g., `#cse/cmu-15-213`) for direct bookmarking and sharing.

---

## Directory Structure

```text
diyengineering/
├── index.html         # Main semantic HTML structure & 3-column layout
├── css/
│   └── style.css      # Classic wiki styling & light/dark color variables
├── js/
│   └── app.js         # Modular UI controller, hash router, search & state
├── data/
│   └── courses.js     # Curated course dataset & CatalogService queries
└── README.md          # Project documentation & modification guide
```

---

## How to Add or Modify Courses

All courses are stored cleanly in [`data/courses.js`](file:///home/carry_to_1/Desktop/Programming/diyengineering/data/courses.js). 

To add a new course, append a clean JavaScript object to the `COURSES` array:

```javascript
{
  id: "course-unique-id",
  discipline: "cse",                       // pre-eng, cse, ee, mech, robotics, ai, cyber, civil
  topic: "Computer Systems & Architecture",// Sub-menu grouping topic
  code: "CMU 15-213",                      // University course code
  title: "Introduction to Computer Systems",
  institution: "CMU",                      // Short institution tag
  institutionFullName: "Carnegie Mellon University",
  level: "Core Undergraduate",             // Introductory, Core, Advanced, Graduate
  difficulty: "Advanced",
  estimatedHours: "150-180 hours",
  language: "English",
  prerequisites: ["Intro to C"],
  prerequisiteIds: ["ucb-cs61a"],          // Optional IDs for clickable links
  links: {
    website: "https://www.cs.cmu.edu/~213/",
    lectures: "https://www.youtube.com/playlist?list=...",
    syllabus: "https://www.cs.cmu.edu/~213/schedule.html",
    textbook: "http://csapp.cs.cmu.edu/",
    assignments: "http://csapp.cs.cmu.edu/3e/labs.html",
    autograder: "http://csapp.cs.cmu.edu/3e/students.html"
  },
  overview: "Detailed overview of the course content...",
  whyRecommended: "Why this course is considered essential...",
  textbookInfo: {
    title: "Computer Systems: A Programmer's Perspective",
    authors: "Randal E. Bryant and David R. O'Hallaron",
    notes: "Known as CS:APP."
  },
  syllabusModules: [
    { week: "Weeks 1-2", title: "Bits & Bytes", desc: "Two's complement and bitwise logic." }
  ],
  labs: [
    { name: "Data Lab", desc: "Bit manipulation puzzles." },
    { name: "Bomb Lab", desc: "Reverse engineering binary with GDB." }
  ],
  selfStudyTips: "Set up Ubuntu 22.04 LTS and run the driver scripts locally.",
  alternatives: ["MIT 6.004", "UC Berkeley CS61C"]
}
```

---

## Running Locally

Because this project uses vanilla HTML, CSS, and JS without build tools, you can run it with any static web server:

```bash
# Using Python 3:
python3 -m http.server 8000

# Using Node.js npx:
npx serve .
```

Then open your browser to `http://localhost:8000`.
