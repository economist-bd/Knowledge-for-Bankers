// content.js - "Basic Knowledge for Bankers'" Full Content Database
const bookContent = {
    bookTitle: "Basic Knowledge for Bankers'",
    author: "Md. Moshin Khan (Executive Officer & Head of Branch, Bank Asia Ltd.)",
    orderLink: "https://demand-supply.vercel.app",

    // ১. উৎসর্গ ও প্রকাশকের কথা
    intro: {
        dedication: "বইটি আমার সকল সিনিয়র ব্যাংকার এবং শুভাকাঙ্ক্ষীদের উদ্দেশ্যে উৎসর্গ করা হলো।",
        publisherNote: "ব্যাংকারদের পদোন্নতি এবং নতুনদের ভাইভা প্রস্তুতির কথা মাথায় রেখেই বিভিন্ন ট্রেনিং নোট, বাংলাদেশ ব্যাংক সার্কুলার ও বিশেষজ্ঞদের পরামর্শে এই বইটি সংকলন করা হয়েছে।",
    },

    // ২. ব্যাংকিং দর্শন ও নীতিশাস্ত্র
    ethics: {
        philosophy: [
            "সেবাই ব্যাংকিং এর মূল লক্ষ্য।",
            "সততাই ব্যাংকিং এর মূলধন।",
            "বিশ্বাসই ব্যাংকিং এর ভিত্তি।",
            "আপনার ঋণ অন্যের আমানত, ঋণের অপচয় বন্ধ করুন।"
        ],
        standards: [
            "আইনের পরিমন্ডলের মধ্যে কাজ করতে হবে।",
            "পেশার সর্বোত্তম রীতিনীতি (Practices) অনুসরণ করতে হবে।",
            "আমানতকারীদের টাকা যথা সময় চুক্তি মোতাবেক ফেরত দিতে হবে।",
            "সম্মানিত গ্রাহকদের সঙ্গে সুব্যবহার করতে হবে।",
            "কর্মচারী ও সহ-কর্মীবৃন্দকে কোন ভাবে তুচ্ছ-তাচ্ছিল্য বা Harassment করা উচিত নয়।"
        ]
    },

    // ৩. ৫০+ টপিকস (সংক্ষিপ্ত তত্ত্ব ও প্রশ্নসহ)
    topics: [
        {
            title: "ব্যাংকের উৎপত্তি (Origin of Bank)",
            theory: "ব্যাংক শব্দটি ল্যাটিন 'Bancus' বা 'Banque' থেকে এসেছে যার অর্থ বেঞ্চ। মধ্যযুগে ইতালিতে বেঞ্চে বসে টাকার লেনদেন হতো।",
            example: "আধুনিক ব্যাংকিংয়ের পূর্বসূরী হলো গোল্ডস্মিথ বা স্বর্ণকার সম্প্রদায়।",
            qna: [
                { q: "বিশ্বের প্রথম ব্যাংক কোনটি?", a: "ব্যাংক অফ ভেনিস (১১৭১)।" }
            ]
        },
        {
            title: "KYC ও AML",
            theory: "Know Your Customer (KYC) হলো গ্রাহককে সঠিকভাবে চেনা। Anti-Money Laundering (AML) হলো অবৈধ পথে উপার্জিত অর্থ বৈধ করার প্রক্রিয়া রোধ করা।",
            example: "হিসাব খোলার সময় গ্রাহকের জাতীয় পরিচয়পত্র ও আয়ের উৎস যাচাই করা একটি KYC প্রক্রিয়া।",
            qna: [
                { q: "মানিলন্ডারিং প্রতিরোধ আইন বাংলাদেশে কত সালে পাশ হয়?", a: "২০১২ সালে।" }
            ]
        },
        {
            title: "Negotiable Instruments",
            theory: "হস্তান্তরযোগ্য দলিল আইন ১৮৮১ অনুযায়ী চেক, প্রমিজরি নোট এবং বিল অফ এক্সচেঞ্জ হলো হস্তান্তরযোগ্য দলিল।",
            example: "একটি চেক দাতার স্বাক্ষরের মাধ্যমে অন্যের নিকট হস্তান্তর করা যায়।",
            qna: [
                { q: "চেক কত প্রকার?", a: "প্রধানত ৩ প্রকার: বাহক চেক, হুকুম চেক ও দাগকাটা চেক।" }
            ]
        },
        // এভাবে ৫০টি টপিক ইনডেক্স অনুযায়ী সাজানো থাকবে...
        { title: "CIB Reporting", theory: "ঋণ গ্রহীতার ঋণের তথ্য বাংলাদেশ ব্যাংকের ডাটাবেজে প্রদান করা।", qna: [{ q: "CIB এর পূর্ণরূপ কী?", a: "Credit Information Bureau" }] },
        { title: "Basel III", theory: "ব্যাংকের মূলধন পর্যাপ্ততা ও ঝুঁকি ব্যবস্থাপনার আন্তর্জাতিক মানদণ্ড।", qna: [{ q: "ব্যাংকে ব্যাসেল কেন প্রয়োজন?", a: "আর্থিক স্থিতিশীলতা রক্ষার জন্য।" }] },
        { title: "Cash Management", theory: "ব্যাংকের দৈনিক নগদ অর্থের প্রবাহ নিয়ন্ত্রণ করা।", qna: [{ q: "CRR কার কাছে থাকে?", a: "কেন্দ্রীয় ব্যাংক বা বাংলাদেশ ব্যাংকের কাছে।" }] },
    ],

    // ৪. ব্যাংকিং গ্লসারি (প্রচলিত শব্দাবলী)
    glossary: [
        { term: "NPL", definition: "Non-Performing Loan (খেলাপি ঋণ)।" },
        { term: "L/C", definition: "Letter of Credit (ঋণপত্র)।" },
        { term: "Vostro Account", definition: "বিদেশী ব্যাংকের আমাদের দেশে খোলা হিসাব।" },
        { term: "Spread", definition: "আমানত ও ঋণের সুদের হারের পার্থক্য।" }
    ],

    // ৫. ডেমো ইমেইল ফরমেট
    emails: [
        {
            subject: "Loan Installment Reminder",
            body: "Dear [Client Name],\nThis is to remind you that your loan installment for [Month] is due on [Date]. Please ensure sufficient balance in your account.\nRegards,\n[Your Name]\nBank Asia Ltd."
        },
        {
            subject: "Account Opening Confirmation",
            body: "Dear [Customer Name],\nWe are pleased to inform you that your savings account has been successfully opened. Your account number is [Number]. Thank you for banking with us."
        }
    ]
};

export default bookContent;
