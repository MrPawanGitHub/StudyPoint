# 🆕 दूसरा टेस्ट कैसे जोड़ें - Complete Guide
# How to Add Test 2 (or More) - Step by Step

---

## 📋 Overview - संक्षिप्त परिचय

यह गाइड आपको **tests.js** में नई परीक्षा (test2, test3, आदि) जोड़ने का तरीका बताता है।

---

## ⚙️ Step 1: tests.js File खोलें

**File Path:** `c:\Users\pawan\Downloads\Projects\Test\tests.js`

---

## 📝 Step 2: Test 2 Structure - टेस्ट 2 की संरचना

नीचे comment section को देखें (लाइन 163-175):

```javascript
// ============================================================
// TEST 2 - भविष्य में जोड़ने के लिए तैयार (Ready to add more tests)
// ============================================================
/*
test2: {
  id: 'test2',
  name: 'अगली परीक्षा',
  description: 'विवरण',
  emoji: '📘',
  config: { ... },
  questions: [ ... ]
}
*/
```

---

## 🎯 Step 3: Test 2 Add करने के लिए

### **Option A: Simple Method (कम परीक्षा के लिए)**

अगर आपके पास **कुछ ही सवाल हैं**, तो tests.js के अंत में यह कोड paste करें:

```javascript
// ============================================================
// TEST 2: नया परीक्षा (New Test)
// ============================================================
TESTS.test2 = {
  id: 'test2',
  name: 'दूसरी परीक्षा - 02',  // 👈 अपना टेस्ट का नाम दें
  description: 'सामान्य ज्ञान की परीक्षा',  // 👈 विवरण दें
  emoji: '📘',  // 👈 कोई emoji चुनें

  // Test Configuration
  config: {
    TEST_NAME: "दूसरी परीक्षा",
    TOTAL_QUESTIONS: 50,  // 👈 कुल प्रश्न
    TIME_LIMIT_MINUTES: 60,  // 👈 समय (मिनटों में)
    
    SECTIONS: [
      { name: "सामान्य ज्ञान", start: 0, end: 24 },
      { name: "विज्ञान", start: 25, end: 49 }
    ],
    
    MARKS_PER_CORRECT: 2,  // 👈 सही उत्तर के अंक
    MARKS_PER_WRONG: -0.5,  // 👈 गलत उत्तर के अंक (नेगेटिव)
    
    get TOTAL_MARKS() {
      return this.TOTAL_QUESTIONS * this.MARKS_PER_CORRECT;
    }
  },

  // Test Questions
  questions: [
    { id: 1, q: "भारत की राजधानी क्या है?", o: ["दिल्ली", "मुंबई", "कोलकाता", "बेंगलुरु"], a: 0 },
    { id: 2, q: "पृथ्वी का सबसे बड़ा महासागर कौन सा है?", o: ["अटलांटिक", "हिंद महासागर", "शांत महासागर", "आर्कटिक"], a: 2 },
    { id: 3, q: "सबसे बड़ा ग्रह कौन सा है?", o: ["शनि", "बृहस्पति", "यूरेनस", "नेप्च्यून"], a: 1 },
    // ... और अधिक प्रश्न जोड़ें
    { id: 50, q: "आखिरी प्रश्न?", o: ["विकल्प 1", "विकल्प 2", "विकल्प 3", "विकल्प 4"], a: 0 }
  ]
};
```

---

### **Option B: Full Template (सभी विवरण के साथ)**

यदि आप **विस्तृत सेटअप** करना चाहते हैं:

```javascript
// ============================================================
// TEST 2: राज्य सिविल सेवा परीक्षा
// ============================================================
TESTS.test2 = {
  // Test Identity
  id: 'test2',
  name: 'राज्य सिविल सेवा प्रारंभिक परीक्षा - 02',
  description: 'सामान्य ज्ञान, सामान्य विज्ञान और गणित की परीक्षा',
  emoji: '📕',

  // Configuration Section
  config: {
    TEST_NAME: "राज्य सिविल सेवा परीक्षा",
    TOTAL_QUESTIONS: 100,
    TIME_LIMIT_MINUTES: 90,

    SECTIONS: [
      { 
        name: "सामान्य ज्ञान", 
        start: 0, 
        end: 33 
      },
      { 
        name: "सामान्य विज्ञान", 
        start: 34, 
        end: 66 
      },
      { 
        name: "गणित और तर्क", 
        start: 67, 
        end: 99 
      }
    ],

    MARKS_PER_CORRECT: 3,
    MARKS_PER_WRONG: -0.75,

    get TOTAL_MARKS() {
      return this.TOTAL_QUESTIONS * this.MARKS_PER_CORRECT;
    }
  },

  // Questions Section
  questions: [
    // पहला भाग: सामान्य ज्ञान (Q1-Q34)
    { id: 1, q: "भारत के संविधान को कब अपनाया गया?", o: ["1947", "1950", "1952", "1955"], a: 1 },
    { id: 2, q: "भारत के पहले राष्ट्रपति कौन थे?", o: ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "पं. नेहरू", "सरदार पटेल"], a: 0 },
    // ... Q3 से Q34
    { id: 34, q: "प्रश्न 34", o: ["विकल्प", "विकल्प", "विकल्प", "विकल्प"], a: 0 },

    // दूसरा भाग: सामान्य विज्ञान (Q35-Q67)
    { id: 35, q: "पानी का रासायनिक सूत्र क्या है?", o: ["H2O", "O2", "H2O2", "H3O"], a: 0 },
    // ... Q36 से Q67

    // तीसरा भाग: गणित (Q68-Q100)
    { id: 68, q: "2 + 2 = ?", o: ["3", "4", "5", "6"], a: 1 },
    // ... Q69 से Q100
  ]
};
```

---

## ✅ Step 4: प्रश्न जोड़ने का सही तरीका

### **प्रश्न Structure:**
```javascript
{
  id: 1,                    // 👈 अद्वितीय क्रम संख्या (unique)
  q: "प्रश्न यहाँ लिखें",      // 👈 प्रश्न
  o: [                      // 👈 विकल्प (4 होने चाहिए)
    "विकल्प 1",
    "विकल्प 2", 
    "विकल्प 3",
    "विकल्प 4"
  ],
  a: 0                      // 👈 सही विकल्प (0-3, 0=पहला)
}
```

### **उदाहरण:**
```javascript
// सही उत्तर पहला विकल्प है (a: 0)
{ id: 1, q: "भारत की राजधानी?", o: ["दिल्ली", "मुंबई", "कोलकाता", "बेंगलुरु"], a: 0 },

// सही उत्तर दूसरा विकल्प है (a: 1)
{ id: 2, q: "सबसे बड़ा ग्रह?", o: ["शनि", "बृहस्पति", "यूरेनस", "नेप्च्यून"], a: 1 },

// सही उत्तर तीसरा विकल्प है (a: 2)
{ id: 3, q: "सबसे बड़ा महासागर?", o: ["अटलांटिक", "हिंद", "शांत", "आर्कटिक"], a: 2 },
```

---

## 🔄 Step 5: HTML में Test 2 दिखना शुरू हो जाएगा

**कोई और कोड लिखने की जरूरत नहीं!** 

जब आप tests.js में test2 जोड़ते हैं:

✅ Test List Screen में automatically दिखेगा  
✅ User test2 select कर सकेगा  
✅ Dashboard उस test के लिए customize हो जाएगा  
✅ परीक्षा देना शुरू कर सकेंगे  

---

## 🧪 Step 6: Test करें

### **Browser Console में:**
```javascript
// सभी tests देखें
console.log(TESTS);

// test2 की जानकारी देखें
console.log(TESTS.test2);

// test2 के प्रश्न देखें
console.log(TESTS.test2.questions);

// test2 की config देखें
console.log(TESTS.test2.config);
```

### **HTML में:**
1. 🌐 Page reload करें
2. 📱 Login करें
3. 📋 **Test List Screen** पर अब test2 दिखेगा
4. ✅ test2 select करके परीक्षा शुरू करें

---

## 📊 Configuration Options - कॉन्फ़िगरेशन विकल्प

### **TEST_NAME** (परीक्षा का नाम)
```javascript
TEST_NAME: "कोई भी परीक्षा का नाम"
```

### **TOTAL_QUESTIONS** (कुल प्रश्न)
```javascript
TOTAL_QUESTIONS: 50,    // 50 प्रश्न
TOTAL_QUESTIONS: 100,   // 100 प्रश्न
TOTAL_QUESTIONS: 150,   // 150 प्रश्न
```

### **TIME_LIMIT_MINUTES** (समय सीमा)
```javascript
TIME_LIMIT_MINUTES: 30,   // 30 मिनट
TIME_LIMIT_MINUTES: 60,   // 1 घंटा
TIME_LIMIT_MINUTES: 120,  // 2 घंटे
```

### **SECTIONS** (विषय/अनुभाग)
```javascript
// 2 विषय
SECTIONS: [
  { name: "विषय 1", start: 0, end: 49 },
  { name: "विषय 2", start: 50, end: 99 }
],

// 3 विषय
SECTIONS: [
  { name: "विषय 1", start: 0, end: 32 },
  { name: "विषय 2", start: 33, end: 66 },
  { name: "विषय 3", start: 67, end: 99 }
],

// 4 विषय
SECTIONS: [
  { name: "विषय 1", start: 0, end: 24 },
  { name: "विषय 2", start: 25, end: 49 },
  { name: "विषय 3", start: 50, end: 74 },
  { name: "विषय 4", start: 75, end: 99 }
]
```

### **MARKS_PER_CORRECT & MARKS_PER_WRONG** (अंकन योजना)
```javascript
// योजना 1: 4 अंक सही, -1 गलत (UPSC में)
MARKS_PER_CORRECT: 4,
MARKS_PER_WRONG: -1,

// योजना 2: 3 अंक सही, -0.75 गलत (SSC में)
MARKS_PER_CORRECT: 3,
MARKS_PER_WRONG: -0.75,

// योजना 3: 1 अंक सही, 0 गलत (आसान)
MARKS_PER_CORRECT: 1,
MARKS_PER_WRONG: 0,

// योजना 4: 2 अंक सही, -0.5 गलत
MARKS_PER_CORRECT: 2,
MARKS_PER_WRONG: -0.5,
```

---

## 🎨 Emoji विकल्प (Icon चुनने के लिए)

```javascript
emoji: '📚',  // किताब
emoji: '📘',  // नीली किताब
emoji: '📕',  // लाल किताब
emoji: '📗',  // हरी किताब
emoji: '📙',  // नारंगी किताब
emoji: '📓',  // डायरी
emoji: '📔',  // नोटबुक
emoji: '✏️',  // पेंसिल
emoji: '📝',  // कलम
emoji: '🎓',  // टोपी
emoji: '🏆',  // ट्रॉफी
emoji: '⭐',  // तारा
emoji: '🔬',  // प्रयोगशाला
emoji: '🧪',  // केमिस्ट्री
emoji: '📊',  // चार्ट
```

---

## ⚠️ Common Mistakes - सामान्य गलतियाँ

### ❌ गलत:
```javascript
// गलत: id duplicate है
questions: [
  { id: 1, q: "Q1", o: [...], a: 0 },
  { id: 1, q: "Q2", o: [...], a: 1 },  // ❌ यह गलत है
]

// गलत: विकल्प 4 से ज्यादा हैं
{ id: 1, q: "Q?", o: ["1", "2", "3", "4", "5"], a: 0 },  // ❌

// गलत: सही उत्तर का index गलत है
{ id: 1, q: "Q?", o: ["गलत", "गलत", "सही", "गलत"], a: 1 },  // ❌ (a:2 होना चाहिए)

// गलत: sections का range गलत है
SECTIONS: [
  { name: "Sec 1", start: 0, end: 50 },
  { name: "Sec 2", start: 51, end: 100 }  // ❌ 100 है पर TOTAL_QUESTIONS 100 है
]
```

### ✅ सही:
```javascript
// सही: unique ids
questions: [
  { id: 1, q: "Q1", o: [...], a: 0 },
  { id: 2, q: "Q2", o: [...], a: 1 },
]

// सही: exactly 4 विकल्प
{ id: 1, q: "Q?", o: ["1", "2", "3", "4"], a: 0 },

// सही: सही index
{ id: 1, q: "Q?", o: ["गलत", "गलत", "सही", "गलत"], a: 2 },

// सही: range सही है
SECTIONS: [
  { name: "Sec 1", start: 0, end: 50 },  // 51 प्रश्न (0-50)
  { name: "Sec 2", start: 51, end: 99 }  // 49 प्रश्न (51-99) = 100 total
]
```

---

## 📱 Mobile Friendly Notes

✅ सभी configurations **mobile friendly** हैं  
✅ किसी भी screen size पर काम करेगा  
✅ कोई additional CSS की जरूरत नहीं

---

## 🔗 Test 3, Test 4, etc. कैसे जोड़ें?

**बिल्कुल same तरीके से:**

```javascript
// Test 3
TESTS.test3 = {
  id: 'test3',
  name: 'तीसरी परीक्षा',
  // ... बाकी config और questions
};

// Test 4
TESTS.test4 = {
  id: 'test4',
  name: 'चौथी परीक्षा',
  // ... बाकी config और questions
};
```

---

## 🎯 Quick Checklist - जल्दी चेकलिस्ट

Test2 add करने से पहले:

- [ ] `id` unique है (test2)
- [ ] `name` meaningful है
- [ ] `TOTAL_QUESTIONS` सही है
- [ ] `TIME_LIMIT_MINUTES` reasonable है
- [ ] `SECTIONS` ranges सही हैं
- [ ] सभी 100 (या कितने भी) प्रश्न add किए हैं
- [ ] सभी `id` (1-100) unique और sequential हैं
- [ ] सभी प्रश्नों में exactly 4 विकल्प हैं
- [ ] `a` value 0-3 के बीच है
- [ ] Files saved हैं

---

## ❓ Quick Help

**Q: क्या हर बार 100 प्रश्न add/करने हैं?**  
A: नहीं! आप कितने भी चाहें add कर सकते हैं। बस `TOTAL_QUESTIONS` और `SECTIONS` को सही सेट करें।

**Q: क्या मैं sections बदल सकता हूँ?**  
A: हाँ! जितने चाहें sections बना सकते हैं। बस range सही रखें।

**Q: क्या प्रश्न का order matter करता है?**  
A: नहीं। लेकिन `id` unique होना चाहिए।

**Q: क्या negative marks optional हैं?**  
A: हाँ! इसे 0 सेट कर सकते हैं।

---

## 📞 Need Help?

अगर कोई समस्या हो:

1. Browser Console (F12) खोलें
2. देखें कि क्या error आ रहा है
3. JSON syntax check करें (trailing comma, brackets)
4. File को properly save करें

---

**Happy Testing! 🚀**

