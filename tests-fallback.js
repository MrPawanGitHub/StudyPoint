/* ============================================================
 * 📚 परीक्षा प्रबंधन प्रणाली (Exam Management System) - FALLBACK
 * ============================================================
 * अगर main tests.js लोड नहीं हो रही तो यह वर्जन काम करेगा
 * ============================================================ */

console.log('🚀 Fallback tests.js initializing...');

// Minimal TESTS structure जो हमेशा काम करे
const TESTS = {};

// ============================================================
// TEST 1: Minimal Demo
// ============================================================
TESTS.test1 = {
  id: 'test1',
  name: 'DEMO TEST',
  description: 'Demo परीक्षा - 100 प्रश्न',
  emoji: '🎯',
  scheduledTime: null,
  config: {
    TEST_NAME: "DEMO TEST",
    TOTAL_QUESTIONS: 100,
    TIME_LIMIT_MINUTES: 120,
    SECTIONS: [
      { name: "Section 1", start: 0, end: 33 },
      { name: "Section 2", start: 34, end: 66 },
      { name: "Section 3", start: 67, end: 99 }
    ],
    MARKS_PER_CORRECT: 4,
    MARKS_PER_WRONG: -1,
    get TOTAL_MARKS() { return this.TOTAL_QUESTIONS * this.MARKS_PER_CORRECT; }
  },
  questions: [
    { id: 1, q: "Sample Question 1", o: ["A", "B", "C", "D"], a: 0 },
    { id: 2, q: "Sample Question 2", o: ["A", "B", "C", "D"], a: 1 }
  ]
};

// ============================================================
// TEST 2: Another Demo
// ============================================================
TESTS.test2 = {
  id: 'test2',
  name: 'BPSC PRE - 01',
  description: 'BPSC परीक्षा - 150 प्रश्न',
  emoji: '📚',
  scheduledTime: null,
  config: {
    TEST_NAME: "BPSC PRE - 01",
    TOTAL_QUESTIONS: 150,
    TIME_LIMIT_MINUTES: 180,
    SECTIONS: [
      { name: "Reasoning", start: 0, end: 49 },
      { name: "General Study", start: 50, end: 99 },
      { name: "Science", start: 100, end: 124 },
      { name: "Math", start: 125, end: 149 }
    ],
    MARKS_PER_CORRECT: 4,
    MARKS_PER_WRONG: -1,
    get TOTAL_MARKS() { return this.TOTAL_QUESTIONS * this.MARKS_PER_CORRECT; }
  },
  questions: [
    { id: 1, q: "Question 1", o: ["A", "B", "C", "D"], a: 0 },
    { id: 2, q: "Question 2", o: ["A", "B", "C", "D"], a: 1 }
  ]
};

// Helper functions
function getAllTests() {
  return Object.keys(TESTS).map(key => ({
    id: TESTS[key].id,
    name: TESTS[key].name,
    description: TESTS[key].description,
    emoji: TESTS[key].emoji,
    totalQuestions: TESTS[key].questions.length,
    duration: TESTS[key].config.TIME_LIMIT_MINUTES
  }));
}

function getTestConfig(testId = 'test1') {
  if (TESTS[testId]) return TESTS[testId].config;
  return TESTS.test1.config;
}

function getTestQuestions(testId = 'test1') {
  if (TESTS[testId]) return TESTS[testId].questions;
  return TESTS.test1.questions;
}

function getTest(testId = 'test1') {
  if (TESTS[testId]) return TESTS[testId];
  return TESTS.test1;
}

function switchTest(testId) {
  if (!TESTS[testId]) return false;
  CONFIG = TESTS[testId].config;
  quizData = TESTS[testId].questions;
  TEST_NAME = TESTS[testId].config.TEST_NAME;

  if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.quizData = quizData;
    window.TEST_NAME = TEST_NAME;
    window.selectedTestId = testId;
    window.selectedTestName = TESTS[testId].name;
  }
  return true;
}

function isTestScheduled(testId) {
  if (!TESTS[testId]) return false;
  return !!TESTS[testId].scheduledTime;
}

function getScheduledTimeText(testId) {
  if (!TESTS[testId] || !TESTS[testId].scheduledTime) return '';
  return TESTS[testId].scheduledTime;
}

// Initialize default values
CONFIG = TESTS.test1.config;
quizData = TESTS.test1.questions;
TEST_NAME = TESTS.test1.config.TEST_NAME;

if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
  window.quizData = quizData;
  window.TEST_NAME = TEST_NAME;
  window.selectedTestId = 'test1';
  window.selectedTestName = TESTS.test1.name;
  window.TESTS = TESTS;

  window.getAllTests = getAllTests;
  window.getTestConfig = getTestConfig;
  window.getTestQuestions = getTestQuestions;
  window.getTest = getTest;
  window.switchTest = switchTest;
  window.isTestScheduled = isTestScheduled;
  window.getScheduledTimeText = getScheduledTimeText;

  console.log('✅ Fallback TESTS loaded with:', Object.keys(TESTS).join(', '));
}
