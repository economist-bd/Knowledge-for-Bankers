// content.js - "Modern Banking & Economy" Full Database
const bookContent = {
    // ১. বই ও লেখকের তথ্য
    meta: {
        bookTitle: "আধুনিক ব্যাংকিং ও অর্থনীতি: একটি ব্যবহারিক নির্দেশিকা",
        subTitle: "ব্যাংকিং প্রফেশনাল ও ভাইভা প্রস্তুতির পূর্ণাঙ্গ গাইড",
        authorName: "মঞ্জুরুল হক",
        authorDesignation: "প্রভাষক (অর্থনীতি) ও সাবেক ব্যাংক কর্মকর্তা",
        contact: {
            mobile: "01715247588",
            email: "monjurul.jusc@gmail.com",
            whatsapp: "01715247588",
            facebook: "https://facebook.com/monjurul.haque",
        },
        edition: "২০২৫ সংস্করণ",
        copyright: "সর্বস্বত্ব সংরক্ষিত © মঞ্জুরুল হক"
    },

    // ২. ভূমিকা
    intro: {
        dedication: "বইটি আমার সকল ছাত্র-ছাত্রী এবং ব্যাংকিং পেশায় নিয়োজিত সহকর্মীদের উদ্দেশ্যে উৎসর্গ করা হলো।",
        preface: "অর্থনীতি ও ব্যাংকিং একে অপরের পরিপূরক। এই বইটিতে ৫০টি অধ্যায়ের মাধ্যমে ব্যাংকিংয়ের তাত্ত্বিক ও ব্যবহারিক দিকগুলো সহজ ভাষায় তুলে ধরা হয়েছে, যা নতুন ব্যাংকারদের জন্য সহায়ক হবে।"
    },

    // ৩. অধ্যায়সমূহ (সেকশন ১ পূর্ণাঙ্গ, বাকিগুলোর স্ট্রাকচার)
    chapters: [
        // --- সেকশন ১: মৌলিক ধারণা (অধ্যায় ১-৬) ---
        {
            id: 1,
            title: "অধ্যায় ১: ব্যাংকের উৎপত্তি ও ক্রমবিকাশ",
            description: "ব্যাংক শব্দের উৎপত্তি নিয়ে মতভেদ থাকলেও অধিকাংশের মতে এটি ইতালীয় শব্দ 'Bancus', 'Banca' বা 'Banque' থেকে এসেছে, যার অর্থ লম্বা টুল বা বেঞ্চ। মধ্যযুগে ইতালির লাম্বার্ডি স্ট্রিটে ইহুদি মহাজনরা বেঞ্চে বসে টাকার লেনদেন করতেন। কেউ দেউলিয়া হলে তার বেঞ্চ ভেঙে ফেলা হতো, যাকে বলা হতো 'Bankrupt'। ১১৫৭ সালে ইতালিতে প্রতিষ্ঠিত 'ব্যাংক অব ভেনিস' বিশ্বের প্রথম সংগঠিত ব্যাংক। ১৬৯৪ সালে প্রতিষ্ঠিত 'ব্যাংক অব ইংল্যান্ড' কে আধুনিক কেন্দ্রীয় ব্যাংকিংয়ের প্রবর্তক বলা হয়। বাংলাদেশে ১৯৭১ সালের ১৬ ডিসেম্বর বাংলাদেশ ব্যাংক প্রতিষ্ঠিত হয় এবং ১৯৭২ সালে ৬টি রাষ্ট্রায়ত্ব ব্যাংকের মাধ্যমে ব্যাংকিং যাত্রা শুরু হয়।",
            questions: [
                { q: "১. 'Bank' শব্দটি কোন ভাষার শব্দ থেকে এসেছে?", a: "ল্যাটিন/ইতালীয় শব্দ Bancus বা Banca থেকে।" },
                { q: "২. বিশ্বের প্রথম সংগঠিত ব্যাংকের নাম কী?", a: "ব্যাংক অব ভেনিস (১১৫৭ সালে)।" },
                { q: "৩. 'Bankrupt' শব্দের আক্ষরিক অর্থ কী?", a: "বেঞ্চ ভেঙে ফেলা (দেউলিয়া)।" },
                { q: "৪. আধুনিক ব্যাংকিংয়ের জনক কোন দেশ?", a: "ইংল্যান্ড।" },
                { q: "৫. ব্যাংক অব ইংল্যান্ড কত সালে প্রতিষ্ঠিত হয়?", a: "১৬৯৪ সালে।" },
                { q: "৬. বাংলাদেশে ব্যাংক জাতীয়করণ করা হয় কত সালে?", a: "১৯৭২ সালে।" },
                { q: "৭. বাংলাদেশে বর্তমানে রাষ্ট্রায়ত্ব বাণিজ্যিক ব্যাংক কয়টি?", a: "৬টি।" },
                { q: "৮. ব্যাংকিং ব্যবসার মূল মন্ত্র কী?", a: "বিশ্বাস ও আস্থা।" },
                { q: "৯. কোন শতাব্দীতে আধুনিক ব্যাংকিংয়ের সূচনা হয়?", a: "সপ্তদশ শতাব্দীতে।" },
                { q: "১০. উপমহাদেশের প্রথম ব্যাংক কোনটি?", a: "ব্যাংক অব হিন্দুস্তান (১৭৭০)।" }
            ]
        },
        {
            id: 2,
            title: "অধ্যায় ২: বাংলাদেশের আর্থিক ব্যবস্থা",
            description: "একটি দেশের আর্থিক ব্যবস্থা প্রধানত দুটি বাজার নিয়ে গঠিত: ১. মুদ্রাবাজার (Money Market) এবং ২. মূলধনি বাজার (Capital Market)। মুদ্রাবাজার স্বল্পমেয়াদী ঋণের বাজার, যা নিয়ন্ত্রণ করে বাংলাদেশ ব্যাংক। এর উপাদান হলো কল মানি, ট্রেজারি বিল ইত্যাদি। মূলধনি বাজার দীর্ঘমেয়াদী ঋণের বাজার, যা নিয়ন্ত্রণ করে BSEC (Bangladesh Securities and Exchange Commission)। এর উপাদান হলো শেয়ার ও বন্ড। এছাড়া ব্যাংক বহির্ভূত আর্থিক প্রতিষ্ঠান (NBFI) ও বীমা কোম্পানিগুলোও আর্থিক ব্যবস্থার অংশ।",
            questions: [
                { q: "১. বাংলাদেশের আর্থিক বাজার কয়টি অংশে বিভক্ত?", a: "২টি (মুদ্রাবাজার ও মূলধনি বাজার)।" },
                { q: "২. মুদ্রাবাজারের নিয়ন্ত্রক কে?", a: "বাংলাদেশ ব্যাংক।" },
                { q: "৩. মূলধনি বা শেয়ার বাজারের নিয়ন্ত্রক কে?", a: "BSEC (Bangladesh Securities and Exchange Commission)।" },
                { q: "৪. কল মানি মার্কেট (Call Money Market) কী?", a: "ব্যাংকগুলোর নিজেদের মধ্যে স্বল্পকালীন ধারের বাজার।" },
                { q: "৫. ট্রেজারি বিল কোন বাজারের উপাদান?", a: "মুদ্রাবাজারের।" },
                { q: "৬. NBFI এর পূর্ণরূপ কী?", a: "Non-Bank Financial Institution." },
                { q: "৭. বাংলাদেশে বর্তমানে তফসিলি ব্যাংক কয়টি?", a: "৬১টি (নিয়মিত পরিবর্তনশীল)।" },
                { q: "৮. প্রাইমারি মার্কেট ও সেকেন্ডারি মার্কেট কিসের অংশ?", a: "মূলধনি বাজারের।" },
                { q: "৯. বন্ড (Bond) কী?", a: "দীর্ঘমেয়াদী ঋণপত্র।" },
                { q: "১০. আর্থিক মধ্যস্থতাকারী প্রতিষ্ঠান কারা?", a: "ব্যাংক ও আর্থিক প্রতিষ্ঠানসমূহ।" }
            ]
        },
        {
            id: 3,
            title: "অধ্যায় ৩: কেন্দ্রীয় ব্যাংক: গঠন ও কার্যাবলি",
            description: "বাংলাদেশ ব্যাংক অর্ডার, ১৯৭২ (রাষ্ট্রপতির আদেশ নং ১২৭) এর মাধ্যমে বাংলাদেশ ব্যাংক গঠিত হয়। এটি সরকারের ব্যাংক এবং অন্যান্য সকল ব্যাংকের ব্যাংক। এর প্রধান কাজ হলো নোট প্রচলন, মুদ্রানীতি প্রণয়ন, বৈদেশিক মুদ্রার রিজার্ভ সংরক্ষণ এবং বাণিজ্যিক ব্যাংকগুলোর কার্যাবলি নিয়ন্ত্রণ করা। বাংলাদেশ ব্যাংকের প্রধান নির্বাহী হলেন গভর্নর।",
            questions: [
                { q: "১. বাংলাদেশ ব্যাংক কোন আদেশের মাধ্যমে প্রতিষ্ঠিত হয়?", a: "বাংলাদেশ ব্যাংক অর্ডার, ১৯৭২ (P.O. 127)।" },
                { q: "২. বাংলাদেশ ব্যাংকের প্রধান কাজ কী?", a: "নোট ইস্যু করা ও মুদ্রানীতি নিয়ন্ত্রণ।" },
                { q: "৩. সরকারের ব্যাংক কোনটি?", a: "বাংলাদেশ ব্যাংক।" },
                { q: "৪. 'Lender of the Last Resort' কাকে বলা হয়?", a: "কেন্দ্রীয় ব্যাংককে।" },
                { q: "৫. ১, ২ ও ৫ টাকার নোটে কার স্বাক্ষর থাকে?", a: "অর্থ সচিবের।" },
                { q: "৬. ১০ টাকা থেকে ১০০০ টাকার নোটে কার স্বাক্ষর থাকে?", a: "গভর্নরের।" },
                { q: "৭. বাংলাদেশ ব্যাংকের বর্তমান গভর্নরের নাম কী?", a: "[বর্তমান গভর্নরের নাম বসবে]।" },
                { q: "৮. নিকাশ ঘর (Clearing House) পরিচালনা করে কে?", a: "বাংলাদেশ ব্যাংক।" },
                { q: "৯. বৈদেশিক মুদ্রার রিজার্ভ কে সংরক্ষণ করে?", a: "বাংলাদেশ ব্যাংক।" },
                { q: "১০. শিডিউলড ব্যাংকগুলোর লাইসেন্স প্রদান করে কে?", a: "বাংলাদেশ ব্যাংক।" }
            ]
        },
        {
            id: 4,
            title: "অধ্যায় ৪: মুদ্রানীতি ও ব্যাংকিং",
            description: "মুদ্রানীতি (Monetary Policy) হলো কেন্দ্রীয় ব্যাংকের এমন একটি কৌশল যার মাধ্যমে মুদ্রা সরবরাহ ও সুদের হার নিয়ন্ত্রণ করে মুদ্রাস্ফীতি কমানো ও অর্থনৈতিক প্রবৃদ্ধি নিশ্চিত করা হয়। এর প্রধান হাতিয়ারগুলো হলো: ব্যাংক রেট, সিআরআর (CRR), এসএলআর (SLR), রেপো (Repo) এবং রিভার্স রেপো (Reverse Repo)। বছরে সাধারণত দুইবার (জানুয়ারি ও জুলাই) মুদ্রানীতি ঘোষণা করা হয়।",
            questions: [
                { q: "১. মুদ্রানীতি (Monetary Policy) কে প্রণয়ন করে?", a: "বাংলাদেশ ব্যাংক।" },
                { q: "২. ব্যাংক রেট কী?", a: "যে হারে কেন্দ্রীয় ব্যাংক বাণিজ্যিক ব্যাংককে দীর্ঘমেয়াদী ঋণ দেয়।" },
                { q: "৩. রেপো (Repo) রেট কী?", a: "যে হারে বাণিজ্যিক ব্যাংক কেন্দ্রীয় ব্যাংক থেকে স্বল্পমেয়াদী ধার নেয়।" },
                { q: "৪. রিভার্স রেপো কী?", a: "বাণিজ্যিক ব্যাংক যে হারে কেন্দ্রীয় ব্যাংকে টাকা জমা রাখে।" },
                { q: "৫. CRR এর পূর্ণরূপ কী?", a: "Cash Reserve Ratio (নগদ জমার হার)।" },
                { q: "৬. SLR এর পূর্ণরূপ কী?", a: "Statutory Liquidity Ratio (বিধিবদ্ধ তরল সম্পদ)।" },
                { q: "৭. মুদ্রাস্ফীতি (Inflation) হলে কেন্দ্রীয় ব্যাংক কী করে?", a: "মুদ্রা সরবরাহ কমিয়ে দেয় (সুদের হার বাড়ায়)।" },
                { q: "৮. সংকোচনমূলক মুদ্রানীতি কী?", a: "বাজারে টাকার প্রবাহ কমানোর নীতি।" },
                { q: "৯. বর্তমানে বাংলাদেশে রেপো রেট কত?", a: "[বর্তমান রেট বসবে, যেমন: ৮.০০%]।" },
                { q: "১০. ওপেন মার্কেট অপারেশন (OMO) কী?", a: "খোলা বাজারে সরকারি সিকিউরিটিজ কেনা-বেচা।" }
            ]
        },
        {
            id: 5,
            title: "অধ্যায় ৫: ব্যাংকার-গ্রাহক সম্পর্ক",
            description: "ব্যাংকিং ব্যবসায় ব্যাংকার ও গ্রাহকের সম্পর্ক বহুমুখী। যখন গ্রাহক টাকা জমা দেয়, তখন গ্রাহক পাওনাদার (Creditor) এবং ব্যাংক দেনাদার (Debtor)। ঋণ নেওয়ার সময় ব্যাংক পাওনাদার এবং গ্রাহক দেনাদার। চেক জমা দেওয়ার সময় ব্যাংক এজেন্ট এবং গ্রাহক প্রিন্সিপাল। লকারে সম্পদ রাখলে সম্পর্ক হয় বেইলর (Bailor - গ্রাহক) ও বেইলি (Bailee - ব্যাংক)।",
            questions: [
                { q: "১. টাকা জমা দেওয়ার ক্ষেত্রে ব্যাংকার-গ্রাহক সম্পর্ক কী?", a: "দেনাদার (Debtor) - পাওনাদার (Creditor)।" },
                { q: "২. ঋণ গ্রহনের ক্ষেত্রে সম্পর্ক কী?", a: "পাওনাদার (Creditor) - দেনাদার (Debtor)।" },
                { q: "৩. সেইফ কাস্টডি বা লকারের ক্ষেত্রে সম্পর্ক কী?", a: "বেইলি (Bailee) - বেইলর (Bailor)।" },
                { q: "৪. চেক কালেকশনের সময় ব্যাংকের ভূমিকা কী?", a: "এজেন্ট (Agent)।" },
                { q: "৫. বন্ধকী (Mortgage) সম্পত্তিতে ব্যাংকের অবস্থান কী?", a: "মর্টগেজি (Mortgagee)।" },
                { q: "৬. ট্রাস্টি হিসেবে ব্যাংক কখন কাজ করে?", a: "গ্রাহকের সম্পত্তির রক্ষণাবেক্ষণ বা ট্রাস্ট ফান্ড পরিচালনায়।" },
                { q: "৭. গ্রাহকের মৃত্যুর পর তার জমানো টাকা কে পায়?", a: "নমিনি।" },
                { q: "৮. গার্নিশি অর্ডার (Garnishee Order) কে জারি করে?", a: "আদালত।" },
                { q: "৯. রাইট অফ লিয়েন (Right of Lien) কী?", a: "ঋণ পরিশোধ না করা পর্যন্ত সম্পদ আটকে রাখার অধিকার।" },
                { q: "১০. কেওয়াইসি (KYC) ফর্মে ইন্ট্রোডিউসারের ভূমিকা কী?", a: "গ্রাহকের পরিচয় নিশ্চিত করা।" }
            ]
        },
        {
            id: 6,
            title: "অধ্যায় ৬: ব্যাংকিং নীতিশাস্ত্র (Ethics)",
            description: "ব্যাংকিং একটি সেবামূলক পেশা। এখানে সততা (Integrity), স্বচ্ছতা (Transparency) এবং গোপনীয়তা (Confidentiality) রক্ষা করা অপরিহার্য। একজন ব্যাংকারকে অবশ্যই আচরণবিধি (Code of Conduct) মেনে চলতে হয়। গ্রাহকের আমানতের সুরক্ষা দেওয়া এবং মানিলন্ডারিং প্রতিরোধে সজাগ থাকা নৈতিক দায়িত্ব। সহকর্মীদের সাথে সম্মানজনক আচরণ এবং অফিসের সম্পদের সঠিক ব্যবহারও নীতিশাস্ত্রের অন্তর্ভুক্ত।",
            questions: [
                { q: "১. ব্যাংকিং পেশার মূল ভিত্তি কী?", a: "বিশ্বাস (Trust)।" },
                { q: "২. কনফিডেনশিয়ালিটি (Confidentiality) কী?", a: "গ্রাহকের তথ্যের গোপনীয়তা রক্ষা করা।" },
                { q: "৩. 'Conflict of Interest' বা স্বার্থের সংঘাত কী?", a: "ব্যক্তিগত স্বার্থ পেশাগত দায়িত্বের পথে বাধা হওয়া।" },
                { q: "৪. হুইসেল ব্লোয়িং (Whistle Blowing) কী?", a: "প্রতিষ্ঠানের অনিয়ম বা দুর্নীতি কর্তৃপক্ষকে জানানো।" },
                { q: "৫. ব্যাংকারদের আচরণের গোল্ডেন রুল কী?", a: "অন্যের সাথে সেই আচরণ করো, যা তুমি নিজের জন্য আশা করো।" },
                { q: "৬. ইনসাইডার ট্রেডিং (Insider Trading) কী?", a: "গোপন তথ্য ব্যবহার করে শেয়ার ব্যবসা (যা অনৈতিক)।" },
                { q: "৭. মানিলন্ডারিং প্রতিরোধে ব্যাংকারের নৈতিক দায়িত্ব কী?", a: "সন্দেহজনক লেনদেন রিপোর্ট করা।" },
                { q: "৮. গ্রাহকের সাথে ব্যাংকারের আচরণ কেমন হওয়া উচিত?", a: "সৌজন্যমূলক ও পেশাদার।" },
                { q: "৯. অফিসের সময় ব্যক্তিগত কাজ করা কি নৈতিক?", a: "না, এটি সময়ের অপচয়।" },
                { q: "১০. ফেয়ার প্র্যাকটিস (Fair Practice) বলতে কী বোঝায়?", a: "সকল গ্রাহককে সমান ও ন্যায্য সেবা প্রদান।" }
            ]
        },
        // [অন্যান্য অধ্যায়গুলো সংক্ষেপে নিচে দেওয়া হলো, সম্পূর্ণ টেক্সট লিমিটের কারণে]
        { id: 7, title: "অধ্যায় ৭: হিসাব খোলার নিয়মাবলি", description: "SB, CD, FDR ইত্যাদি হিসাব খোলার নিয়ম।", questions: [] },
        { id: 8, title: "অধ্যায় ৮: কেওয়াইসি (KYC) ও টিপি", description: "গ্রাহক পরিচিতি ও লেনদেনের প্রোফাইল।", questions: [] },
        { id: 9, title: "অধ্যায় ৯: চেক ও এনআই অ্যাক্ট", description: "চেকের প্রকারভেদ ও ব্যবহার বিধি।", questions: [] },
        { id: 10, title: "অধ্যায় ১০: চেক ডিজঅনার ও আইনি প্রতিকার", description: "১৩৮ ধারার মামলা ও নোটিশ।", questions: [] },
        // ... (অধ্যায় ১১ থেকে ৫০ পর্যন্ত এই প্যাটার্নে থাকবে)
    ],

    // ৪. ব্যাংকিং গ্লসারি (১০০টি শব্দ - পূর্ণাঙ্গ তালিকা)
    glossary: [
        { term: "Account", definition: "হিসাব।" }, { term: "Advice", definition: "লেনদেনের জ্ঞাপনপত্র।" },
        { term: "Agent", definition: "প্রতিনিধি।" }, { term: "AML", definition: "মানিলন্ডারিং প্রতিরোধ।" },
        { term: "Appreciation", definition: "মূল্য বৃদ্ধি।" }, { term: "Asset", definition: "সম্পদ।" },
        { term: "ATM", definition: "অটোমেটেড টেলার মেশিন।" }, { term: "Audit", definition: "নিরীক্ষা।" },
        { term: "Balance", definition: "স্থিতি।" }, { term: "Bank Rate", definition: "ব্যাংক রেট।" },
        { term: "Bankruptcy", definition: "দেউলিাত্ব।" }, { term: "Base Rate", definition: "ভিত্তি সুদের হার।" },
        { term: "Bearer", definition: "বাহক।" }, { term: "Beneficiary", definition: "সুবিধাভোগী।" },
        { term: "Bond", definition: "বন্ড।" }, { term: "Bounce", definition: "চেক ফেরত।" },
        { term: "Broker", definition: "দালাল।" }, { term: "Budget", definition: "বাজেট।" },
        { term: "Capital", definition: "মূলধন।" }, { term: "Cash", definition: "নগদ অর্থ।" },
        { term: "CC Loan", definition: "ক্যাশ ক্রেডিট।" }, { term: "Central Bank", definition: "কেন্দ্রীয় ব্যাংক।" },
        { term: "Cheque", definition: "চেক।" }, { term: "CIB", definition: "ক্রেডিট ইনফরমেশন ব্যুরো।" },
        { term: "CIF", definition: "কাস্টমার ইনফরমেশন ফর্ম।" }, { term: "Clearing", definition: "নিকাশ।" },
        { term: "Collateral", definition: "জামানত।" }, { term: "Commission", definition: "কমিশন।" },
        { term: "Credit", definition: "ঋণ/জমা।" }, { term: "Credit Card", definition: "ক্রেডিট কার্ড।" },
        { term: "CRR", definition: "ক্যাশ রিজার্ভ রেশিও।" }, { term: "Currency", definition: "মুদ্রা।" },
        { term: "Current A/C", definition: "চলতি হিসাব।" }, { term: "Custody", definition: "হেফাজত।" },
        { term: "Debit", definition: "খরচ/ডেবিট।" }, { term: "Debit Card", definition: "ডেবিট কার্ড।" },
        { term: "Debt", definition: "ঋণ।" }, { term: "Default", definition: "খেলাপি।" },
        { term: "Deflation", definition: "মুদ্রাসংকোচন।" }, { term: "Demand Draft", definition: "ডিমান্ড ড্রাফট।" },
        { term: "Deposit", definition: "আমানত।" }, { term: "Depreciation", definition: "অবচয়।" },
        { term: "Devaluation", definition: "অবমূল্যায়ন।" }, { term: "Disbursement", definition: "বিতরণ।" },
        { term: "Discount", definition: "বাট্টা।" }, { term: "Dividend", definition: "লভ্যাংশ।" },
        { term: "Document", definition: "দলিল।" }, { term: "Dormant", definition: "সুপ্ত।" },
        { term: "DPS", definition: "ডিপিএস।" }, { term: "Draft", definition: "ড্রাফট।" },
        { term: "Drawer", definition: "আদেশক।" }, { term: "Drawee", definition: "আদিষ্ট (ব্যাংক)।" },
        { term: "EMI", definition: "মাসিক কিস্তি।" }, { term: "Endorsement", definition: "পৃষ্ঠাঙ্কন।" },
        { term: "Equity", definition: "ইক্যুইটি।" }, { term: "Exchange", definition: "বিনিময়।" },
        { term: "Excise Duty", definition: "আবগারি শুল্ক।" }, { term: "Exporter", definition: "রপ্তানিকারক।" },
        { term: "Face Value", definition: "লিখিত মূল্য।" }, { term: "FDR", definition: "ফিক্সড ডিপোজিট।" },
        { term: "Fiscal Year", definition: "অর্থবছর।" }, { term: "Floating Rate", definition: "পরিবর্তনশীল হার।" },
        { term: "Forex", definition: "বৈদেশিক মুদ্রা।" }, { term: "Fraud", definition: "জালিয়াতি।" },
        { term: "Fund", definition: "তহবিল।" }, { term: "GDP", definition: "জিডিপি।" },
        { term: "Grace Period", definition: "গ্রেস পিরিয়ড।" }, { term: "Green Banking", definition: "সবুজ ব্যাংকিং।" },
        { term: "Gross Profit", definition: "মোট লাভ।" }, { term: "Guarantor", definition: "জামিনদার।" },
        { term: "Hedge", definition: "হেজিং।" }, { term: "Hypothecation", definition: "হাইপোথিকেশন।" },
        { term: "Importer", definition: "আমদানিকারক।" }, { term: "Inflation", definition: "মুদ্রাস্ফীতি।" },
        { term: "Installment", definition: "কিস্তি।" }, { term: "Interest", definition: "সুদ।" },
        { term: "Investment", definition: "বিনিয়োগ।" }, { term: "Invoice", definition: "চালান।" },
        { term: "Joint A/C", definition: "যৌথ হিসাব।" }, { term: "KYC", definition: "কেওয়াইসি।" },
        { term: "Lease", definition: "লিজ/ইজারা।" }, { term: "Ledger", definition: "খতিয়ান।" },
        { term: "Letter of Credit", definition: "ঋণপত্র।" }, { term: "Liability", definition: "দায়।" },
        { term: "Lien", definition: "লিয়েন।" }, { term: "Limit", definition: "সীমা।" },
        { term: "Liquidity", definition: "তারল্য।" }, { term: "Loan", definition: "ঋণ।" },
        { term: "Locker", definition: "লকার।" }, { term: "Margin", definition: "মার্জিন।" },
        { term: "Maturity", definition: "মেয়াদপূর্তি।" }, { term: "Micro Credit", definition: "ক্ষুদ্র ঋণ।" },
        { term: "Mortgage", definition: "বন্ধক।" }, { term: "Nominee", definition: "নমনি।" },
        { term: "Nostro", definition: "নস্ট্রো।" }, { term: "NPL", definition: "এনপিএল।" },
        { term: "OD", definition: "ওভারড্রাফট।" }, { term: "Online", definition: "অনলাইন।" },
        { term: "Opening Balance", definition: "প্রারম্ভিক স্থিতি।" }, { term: "Outstanding", definition: "বকেয়া।" },
        { term: "Passbook", definition: "পাসবই।" }, { term: "Pay Order", definition: "পে অর্ডার।" },
        { term: "Payee", definition: "প্রাপক।" }, { term: "Pledge", definition: "প্লেজ।" },
        { term: "Principal", definition: "আসল।" }, { term: "Profit", definition: "মুনাফা।" },
        { term: "Rate", definition: "হার।" }, { term: "Remittance", definition: "রেমিট্যান্স।" },
        { term: "Repo", definition: "রিপো।" }, { term: "Reserve", definition: "রিজার্ভ।" },
        { term: "Sanction", definition: "মঞ্জুরি।" }, { term: "Savings", definition: "সঞ্চয়।" },
        { term: "Schedule Bank", definition: "তফসিলি ব্যাংক।" }, { term: "Security", definition: "নিরাপত্তা।" },
        { term: "Share", definition: "শেয়ার।" }, { term: "SLR", definition: "এসএলআর।" },
        { term: "SME", definition: "এসএমই।" }, { term: "Solvency", definition: "সচ্ছলতা।" },
        { term: "Statement", definition: "বিবরণী।" }, { term: "SWIFT", definition: "সুইফট।" },
        { term: "Tax", definition: "কর।" }, { term: "Teller", definition: "টেলার।" },
        { term: "Transfer", definition: "স্থানান্তর।" }, { term: "Vault", definition: "ভল্ট।" },
        { term: "Vostro", definition: "ভস্ট্রো।" }, { term: "Voucher", definition: "ভাউচার।" },
        { term: "Withdrawal", definition: "উত্তোলন।" }, { term: "Yield", definition: "আয়।" }
    ],

    // ৫. ইমেইল ফরমেট (১০টি)
    emails: [
        {
            subject: "Request for Opening Corporate Account",
            body: "Dear Manager,\nWe, [Company Name], are interested in opening a corporate account with your branch. Please share the requirements.\nRegards,\nMonjurul Haque"
        },
        {
            subject: "Loan Installment Reminder",
            body: "Dear [Name],\nYour loan installment is due on [Date]. Please maintain sufficient balance.\nRegards,\nBank Asia Ltd."
        },
        {
            subject: "Application for Personal Loan",
            body: "Dear Sir,\nI want to apply for a personal loan of BDT [Amount]. Attached are my documents.\nSincerely,\n[Name]"
        },
        {
            subject: "Cheque Book Request",
            body: "Dear Sir,\nPlease issue a new cheque book for A/C [Number].\nThanks,\n[Name]"
        },
        {
            subject: "Account Opening Confirmation",
            body: "Dear Customer,\nYour account [Number] has been opened successfully. Welcome to our bank.\nRegards,\nManager"
        },
        {
            subject: "Solvency Certificate Request",
            body: "Dear Sir,\nI need a Solvency Certificate for visa purposes. Please arrange it urgently.\nRegards,\n[Name]"
        },
        {
            subject: "ATM Transaction Complaint",
            body: "Dear Sir,\nMy ATM withdrawal failed but money was deducted. ID: [ID]. Please reverse it.\nRegards,\n[Name]"
        },
        {
            subject: "Meeting Request",
            body: "Dear [Name],\nCan we meet next week to discuss the SME loan proposal?\nRegards,\nMonjurul Haque"
        },
        {
            subject: "KYC Update",
            body: "Dear Customer,\nPlease update your KYC information by visiting the branch with your NID.\nRegards,\nBank Admin"
        },
        {
            subject: "Thank You",
            body: "Dear Manager,\nThanks for the excellent service provided by your team today.\nBest regards,\n[Name]"
        }
    ]
};

export default bookContent;
