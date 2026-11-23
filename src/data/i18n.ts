// All translatable text lives here. Hindi (hi) is the default language at "/", English (en) lives under "/en/".
export type Lang = 'hi' | 'en';
export const langs: Lang[] = ['hi', 'en'];

// Locale-aware internal link: lp('en', '/about') -> '/en/about'
export const lp = (lang: Lang, p: string) => (lang === 'en' ? (p === '/' ? '/en/' : `/en${p}`) : p);

// Path of the same page in the other language, from the current URL path.
export function otherPath(lang: Lang, pathname: string) {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (lang === 'en') return p.replace(/^\/en/, '') || '/';
  return p === '/' ? '/en/' : `/en${p}`;
}

const evImgs = ['katha-3', 'katha-2', 'katha-1'].map(x => `/images/events/${x}.jpg`);

export const content = {
  hi: {
    htmlLang: 'hi',
    switchLabel: 'English',
    name: 'आचार्य श्री रामसनेही मिश्र',
    gurukul: 'वैष्णव विद्यापीठम्',
    location: 'प्राचीन हनुमान मंदिर, परिक्रमा मार्ग, वृंदावन',
    bio: 'एक प्रयास वैष्णवता की ओर',
    tagline: 'वृंदावन स्थित वैष्णव विद्यापीठम् के संस्थापक आचार्य श्री रामसनेही मिश्र जी की आधिकारिक वेबसाइट।',
    defaultTitle: 'आचार्य श्री रामसनेही मिश्र — वैष्णव विद्यापीठम्, वृंदावन',
    nav: [
      { href: '/about', label: 'जीवन परिचय' },
      { href: '/gurukul', label: 'वैष्णव विद्यापीठम्' },
      { href: '/#events', label: 'आगामी कार्यक्रम' },
      { href: '/contact', label: 'संपर्क' },
    ],
    ui: {
      viewMore: 'और जानें', viewLess: 'कम दिखाएँ', knowMore: 'जानें', moreVideos: 'और वीडियो', allVideos: 'यूट्यूब पर सभी वीडियो',
      aboutGurukul: 'अधिक जानकारी', upcoming: 'आगामी कार्यक्रम', recentVideos: 'हाल के वीडियो',
      guruParampara: 'गुरु परंपरा', followGuru: 'महाराज जी को इंस्टाग्राम पर फ़ॉलो करें',
      schedule: 'आगामी कार्यक्रम', video: 'वीडियो', contact: 'संपर्क', about: 'जीवन परिचय', getInTouch: 'संपर्क करें',
      contactWho: ['संपर्क — कृष्णकांत शर्मा जी', 'वैष्णव विद्यापीठम् कार्यालय'],
      call: 'फ़ोन करें', whatsapp: 'व्हाट्सऐप', waMsg: 'प्रणाम आचार्य जी, मैं आपकी वेबसाइट से संपर्क कर रहा/रही हूँ। मुझे वैष्णव विद्यापीठम् के बारे में जानकारी चाहिए।', msgInsta: 'इंस्टाग्राम पर संदेश भेजें',
      yourName: 'आपका नाम', email: 'ईमेल', message: 'संदेश', send: 'भेजें',
      explore: 'देखें', connect: 'जुड़ें', igGurukul: 'वैष्णव विद्यापीठम् (गुरुकुल)', igGuru: 'महाराज जी', ytName: 'सनातन धर्म रक्षा',
      rights: 'सर्वाधिकार सुरक्षित', noEvents: 'आगामी कार्यक्रमों की जानकारी जल्द ही यहाँ उपलब्ध होगी।',
      menu: 'मेनू',
    },
    contactIntro: 'प्रवेश, कथा या पुस्तक के बारे में जानने के लिए नीचे दिए गए माध्यमों से संपर्क करें।',
    events: [
      'श्रीमद् भागवत कथा, वृंदावन — 18 से 24 नवंबर',
      'श्रीमद् भागवत कथा, चित्रकूट — 20 से 26 अक्टूबर 2026',
      'श्रीमद् भागवत कथा, नवी मुंबई — 29 सितंबर से 5 अक्टूबर',
    ].map((title, i) => ({ title, image: evImgs[i] })),
    gurukulPage: {
      teachTitle: 'यहाँ क्या पढ़ाया जाता है',
      photoAlt: 'वैष्णव विद्यापीठम् के विद्यार्थी',
      way: 'विद्यार्थी गुरु-परंपरा के अनुसार अध्ययन करते हैं। गुरुकुल का उद्देश्य वैष्णव जीवन जीने की शिक्षा तथा सनातन धर्म की समझ प्रदान करना है।',
      study: {
        title: 'अध्ययन एवं गुरुजन',
        intro: 'आचार्य जी ने वृंदावन एवं भारत के अनेक विशिष्ट विद्वान आचार्यों के चरणों में बैठकर अध्ययन किया है। उनके प्रमुख गुरुजन और उनसे प्राप्त विद्या इस प्रकार हैं।',
        gurus: [
          ['प्रथम गुरु — आचार्य जी की माता जी', 'दो वर्ष की आयु में गोद में बिठाकर सुंदरकांड तथा रामचरितमानस की कुछ मुख्य चौपाइयाँ कंठस्थ करवाईं।'],
          ['द्वितीय गुरु — पिता जी, वै. पं. श्री राम लग्न मिश्र जी', 'मलूकपीठ में वेदों का अध्यापन करवाते हैं। इन्हीं के अनुशासन में आचार्य जी ने वेद एवं वेदांगों का गहन अध्ययन किया: गीता, व्याकरण के पंच पाठ, अमरकोश, सांख्यकारिका, शुक्ल यजुर्वेद, अथर्ववेद, कर्मकांड आदि मूल ग्रंथ कंठस्थ करवाए।'],
          ['परम पूज्य सद्गुरुदेव, मलूकपीठ वाले महाराज जी', 'संस्कृत व्याकरण में अष्टाध्यायी का प्रथम अध्याय।'],
          ['परम पूज्य श्री धरणीधर गुरुजी (रंगजी)', 'कृष्ण यजुर्वेद, ऋग्वेद, पराशर स्मृति, श्रीभाष्य, प्रक्रिया ग्रंथ, महाभाष्य तथा श्रीसंप्रदाय के कुछ मुख्य ग्रंथ।'],
          ['परम पूज्य श्री केशव गुरुजी (रंगलक्ष्मी आदर्श संस्कृत महाविद्यालय, व्याकरण विभाग)', 'संस्कृत परिष्कार दर्शन के अत्यंत क्लिष्ट ग्रंथ: नागेश भट्ट विरचित मंजूषा एवं शेखर, वैयाकरणभूषणसार, वाक्यपदीयम्, सिद्धांतकौमुदी, मनोरमा आदि।'],
          ['परम पूज्य श्री गिरिराज गुरुजी', 'पिंगल सूत्र, साहित्य के कुछ ग्रंथ एवं श्लोक रचना।'],
          ['श्री राजा राम मिश्र गुरुजी (परम पूज्य करपात्री जी महाराज के शिष्य)', 'श्रीमद् भागवत का टीका सहित अध्ययन।'],
          ['परम पूज्य श्री विष्वक्सेनाचार्य गुरुजी (रंगजी)', 'साहित्य के कुछ ग्रंथ।'],
          ['परम पूज्य वै. पं. गंगाधर पाठक गुरुजी', 'निघंटु तथा प्रातिशाख्य (वैदिक व्याकरण) का कुछ प्रकरण।'],
          ['परम पूज्य श्री रामसुदर्शन मिश्र गुरुजी', 'न्याय एवं तर्कशास्त्र: तर्कसंग्रह, न्यायमुक्तावली आदि।'],
          ['परम पूज्य श्री रामकृपाल त्रिपाठी गुरुजी', 'साहित्य के प्राथमिक ग्रंथ: अभिज्ञानशाकुंतलम्, मेघदूतम्, रघुवंशम् आदि।'],
          ['परम पूज्य श्री पुष्पा दीक्षित माता जी', 'पाणिनि पौष्पी प्रक्रिया, काशिका, स्वर्वैदिकी प्रक्रिया।'],
        ],
        visible: 3,
        others: 'इनके अतिरिक्त आचार्य जी ने अन्य गुरुजनों से भी अस्थायी रूप से अध्ययन किया है, परंतु मुख्यतः इन्हीं गुरुजनों से किया है और आज भी कर रहे हैं।',
        nowTitle: 'वर्तमान अध्ययन',
        now: 'वर्तमान समय में आचार्य जी गुरुजनों से श्रीभाष्य (यतींद्रमतदीपिका, तत्त्वत्रय) आदि वेदांत ग्रंथों तथा वीरमित्रोदय का अध्ययन कर रहे हैं।',
        method: 'आचार्य जी ने स्वयं नव्य एवं प्राच्य, दोनों पद्धतियों से व्याकरण का अध्ययन किया है, और वे लघुसिद्धांत तथा पाणिनि पौष्पी प्रक्रिया, दोनों के द्वारा अध्ययन करवाते हैं।',
      },
      galleryTitle: 'गैलरी',
      contactTitle: 'संपर्क',
    },
    stats: [['150+', 'बटुक ब्राह्मण'], ['निःशुल्क', 'संपूर्ण शिक्षा'], ['छात्रावास', 'व्यवस्था उपलब्ध']],
    gurukulInfo: {
      text: 'वृंदावन में आचार्य श्री रामसनेही मिश्र जी के सान्निध्य में 150 से अधिक बटुक ब्राह्मण प्रतिदिन वेद-वेदांग आदि शास्त्रों का सांगोपांग अध्ययन करते हैं, और यह संपूर्ण शिक्षा निःशुल्क है। गुरु-परंपरा के अनुसार चलने वाले इस विद्यापीठ का संकल्प है कि वास्तविक गुरुकुल-परंपरा का पुनः प्रकाश हो, वैदिकों के वैदुष्य की रक्षा हो और इस राष्ट्र में अधिक से अधिक गुरुकुलों की अभिवृद्धि हो।',
      subjects: ['वेद', 'पुराण', 'श्रीमद् भागवत', 'राम कथा', 'ज्योतिष', 'व्याकरण', 'कर्मकांड'],
    },
    book: {
      title: 'वैष्णवीयाराधनम्',
      subtitle: 'वैष्णव दिनचर्या एवं संक्षिप्त उपासना पद्धति',
      by: 'लेखक:',
      author: 'आचार्य श्री रामसनेही मिश्र',
      text: [
        'वर्तमान काल में प्रामाणिक ग्रंथों का अनुशीलन करने का अवकाश किसी के पास नहीं है, और पुराणों एवं उपनिषदों में निरूपित भगवदर्चन की शास्त्रोक्त पद्धति जनसामान्य के लिए दुर्गम हो गई है। इसी कारण अशास्त्रीय आचरण बढ़ रहा है। इस अभाव की पूर्ति हेतु शास्त्रसम्मत पद्धति को सरल भाषा में प्रस्तुत किया गया है।',
        '30 दिन के चैलेंज की तरह, सरल भाषा में लिखी गई यह उपासनात्मक पुस्तिका प्रत्येक वैष्णव के लिए है। इसके प्रथम भाग में जीवन जीने के विज्ञान को समझाया गया है, दूसरे भाग में भगवदर्चन की संपूर्ण पद्धति है, और तीसरे भाग में सर्वसाधारण के लिए उपयोगी स्तोत्रों एवं पाठों का लघु संग्रह है।',
      ],
      cta: 'पुस्तक मँगवाएँ',
      alt: 'वैष्णवीयाराधनम् पुस्तक का आवरण',
      soldTitle: 'पुस्तक अभी उपलब्ध नहीं है',
      soldText: 'पहले संस्करण की 2100 प्रतियाँ छपी थीं और पाठकों के अपार स्नेह से सभी बिक चुकी हैं। अगला संस्करण प्रकाशित होते ही आपको सूचित किया जाएगा।',
      soldLink: 'अपडेट के लिए इंस्टाग्राम पर जुड़ें',
      close: 'बंद करें',
    },
    intro: {
      heading: 'आचार्य श्री रामसनेही मिश्र जी',
      guruTitle: 'अग्र-मलूकपीठाधीश्वर द्वाराचार्य चतुर्थ पहाड़ी बाबा जगद्गुरु स्वामी श्री राजेंद्र दास जी महाराज',
      paras: [
        'प्रातः स्मरणीय परम पूज्य सद्गुरुदेव अग्र-मलूकपीठाधीश्वर द्वाराचार्य चतुर्थ पहाड़ी बाबा जगद्गुरु स्वामी श्री राजेंद्र दास जी महाराज के अत्यंत स्नेही एवं कृपापात्र शिष्य आचार्य श्री रामसनेही मिश्र जी को जन्म से ही हरि, गुरु एवं वैष्णवों की अहेतुकी कृपा प्राप्त होती आ रही है। पवित्र वैष्णव ब्राह्मण परिवार में आचार्य जी का जन्म हुआ। मात्र पाँच वर्ष की आयु में आपश्री का यज्ञोपवीत एवं दीक्षा संस्कार सविधि पूज्य महाराज जी की पावन मंगल उपस्थिति में संपन्न हुआ।',
        'बाल्यावस्था के उन्हीं दिनों से आचार्य जी ने वैदिक परंपराओं एवं सनातन धर्म की शास्त्रोक्त मर्यादाओं के प्रति अद्भुत निष्ठा एवं अटूट श्रद्धा का परिचय देना प्रारंभ कर दिया था। उनका जीवन आध्यात्मिक संस्कारों एवं धर्माचरण की पावन छाया में गुरुजनों के सान्निध्य में निरंतर अभिसिंचित होता रहा। वस्तुतः इतनी छोटी आयु में धर्मानुष्ठान, साधना और गुरु-परंपरा के प्रति ऐसी गहन निष्ठा उनके विलक्षण संस्कारों, आध्यात्मिक अभिरुचि एवं धर्मनिष्ठ व्यक्तित्व का परिचायक है।',
        'आचार्य जी ने अपना संपूर्ण जीवन हरि, गुरु, वैष्णव, शास्त्र एवं गौ सेवा में ही समर्पित किया है। वैष्णव विद्यापीठम् के माध्यम से प्रतिदिन आप वृंदावन में 150 से अधिक बटुक ब्राह्मणों को वेद-वेदांग इत्यादि शास्त्रों का सांगोपांग निःशुल्क अध्ययन करवा रहे हैं, जिससे वास्तविक गुरुकुल की परंपरा का पुनः प्रकाश हो और अधिक से अधिक गुरुकुलों की इस राष्ट्र में अभिवृद्धि हो।',
      ],
      photoCap: 'पूज्य सद्गुरुदेव अग्र-मलूकपीठाधीश्वर स्वामी श्री राजेंद्र दास जी महाराज के साथ बाल्यकाल में आचार्य श्री रामसनेही मिश्र जी की स्मृतियाँ।',
      photoCap2: 'अपने सद्गुरुदेव से अपनी प्रथम पुस्तक ‘वैष्णवीयाराधनम्’ के लिए आशीर्वचन प्राप्त करते हुए आचार्य श्री रामसनेही मिश्र जी।',
      scholarTitle: 'विद्वत् परिचय',
      scholar: [
        'आचार्य जी ने संपूर्ण ऋग्वेद, संपूर्ण शुक्ल यजुर्वेद, संपूर्ण कृष्ण यजुर्वेद के संहिता पाठ का सांगोपांग अध्ययन गुरुजनों के चरणों में बैठकर किया है।',
        'सामवेद और अथर्ववेद में भी आपश्री का प्रवेश है, जिससे आपको चारों वेदों का अच्छा ज्ञान है। छह वेदांगों में भी आपका गहन अध्ययन है, परंतु आपका मुख्य विषय व्याकरण एवं टीकाओं सहित श्रीमद् भागवत कथा है।',
      ],
      guruLine: (name: string, title: string) => `${name} के गुरु, ${title}।`,
    },
  },

  en: {
    htmlLang: 'en',
    switchLabel: 'हिन्दी',
    name: 'Acharya Shri Ramsanehi Mishra',
    gurukul: 'Vaishnav Vidyapeetham',
    location: 'Prachin Hanuman Mandir, Parikrama Marg, Vrindavan',
    bio: 'Ek Prayas Vaishnavata Ki Or',
    tagline: 'Official website of Acharya Shri Ramsanehi Mishra Ji, founder of Vaishnav Vidyapeetham, Vrindavan.',
    defaultTitle: 'Acharya Shri Ramsanehi Mishra — Vaishnav Vidyapeetham, Vrindavan',
    nav: [
      { href: '/about', label: 'Biography' },
      { href: '/gurukul', label: 'Vaishnav Vidyapeetham' },
      { href: '/#events', label: 'Upcoming Events' },
      { href: '/contact', label: 'Contact' },
    ],
    ui: {
      viewMore: 'View More', viewLess: 'Show Less', knowMore: 'Know More', moreVideos: 'More Videos', allVideos: 'All videos on YouTube',
      aboutGurukul: 'More Information', upcoming: 'Upcoming Events', recentVideos: 'Recent Videos',
      guruParampara: 'Guru Parampara', followGuru: 'Follow Maharaj Ji on Instagram',
      schedule: 'Upcoming Events', video: 'Video', contact: 'Contact', about: 'Biography', getInTouch: 'Get in touch',
      contactWho: ['Contact — Krishnakant Sharma Ji', 'Vaishnav Vidyapeetham Office'],
      call: 'Call', whatsapp: 'WhatsApp', waMsg: 'Pranam Acharya Ji, I am contacting you from your website. I would like to know more about Vaishnav Vidyapeetham.', msgInsta: 'Message on Instagram',
      yourName: 'Your name', email: 'Email', message: 'Message', send: 'Send',
      explore: 'Explore', connect: 'Connect', igGurukul: 'Vaishnav Vidyapeetham (Gurukul)', igGuru: 'Maharaj Ji', ytName: 'Sanatana Dharma Raksha',
      rights: 'All Rights Reserved', noEvents: 'Upcoming events will be announced here soon.',
      menu: 'Menu',
    },
    contactIntro: 'To know about admissions, katha or the book, please reach out using the options below.',
    events: [
      'Shrimad Bhagwat Katha, Vrindavan — 18 to 24 Nov',
      'Shrimad Bhagwat Katha, Chitrakoot — 20 to 26 Oct 2026',
      'Shrimad Bhagwat Katha, Navi Mumbai — 29 Sep to 5 Oct',
    ].map((title, i) => ({ title, image: evImgs[i] })),
    gurukulPage: {
      teachTitle: 'What is taught here',
      photoAlt: 'Students of Vaishnav Vidyapeetham',
      way: 'Students learn in the guru-parampara way. The aim of the gurukul is to teach how to live a Vaishnav life and to give an understanding of Sanatan Dharma.',
      study: {
        title: 'Studies and Gurus',
        intro: 'Acharya Ji has studied at the feet of many distinguished scholars of Vrindavan and across India. These are his principal gurus and what he learned from each.',
        gurus: [
          ['First guru — his mother', 'At the age of two, seated in her lap, she had him memorise the Sundarkand and some key chaupais of the Ramcharitmanas.'],
          ['Second guru — his father, Vai. Pt. Shri Ram Lagn Mishra Ji', 'He teaches the Vedas at Malukpeeth. Under his guidance Acharya Ji studied the Vedas and Vedangas in depth: the Gita, the five sections of Vyakaran, Amarkosh, Sankhyakarika, Shukla Yajurveda, Atharvaveda, Karmakand and other root texts, all committed to memory.'],
          ['Param Pujya Sadgurudev, Maharaj Ji of Malukpeeth', 'The first chapter of the Ashtadhyayi in Sanskrit grammar.'],
          ['Param Pujya Shri Dharanidhar Guruji (Rangji)', 'Krishna Yajurveda, Rigveda, Parashar Smriti, Shribhashya, prakriya texts, Mahabhashya and key texts of the Shri Sampradaya.'],
          ['Param Pujya Shri Keshav Guruji (Vyakaran department, Ranglakshmi Adarsh Sanskrit Mahavidyalaya)', 'Highly advanced texts of Sanskrit Parishkar Darshan: Nagesh Bhatt’s Manjusha and Shekhar, Vaiyakaranabhushanasara, Vakyapadiyam, Siddhantakaumudi, Manorama and more.'],
          ['Param Pujya Shri Giriraj Guruji', 'Pingala Sutra, some works of Sahitya and the composition of shlokas.'],
          ['Shri Raja Ram Mishra Guruji (disciple of Param Pujya Karpatri Ji Maharaj)', 'Study of the Shrimad Bhagwat with commentary.'],
          ['Param Pujya Shri Vishvaksenacharya Guruji (Rangji)', 'Some works of Sahitya.'],
          ['Param Pujya Vai. Pt. Gangadhar Pathak Guruji', 'Nighantu and part of the Pratishakhya (Vedic grammar).'],
          ['Param Pujya Shri Ramsudarshan Mishra Guruji', 'Nyaya and Tarka Shastra: Tarka Sangraha, Nyaya Muktavali and more.'],
          ['Param Pujya Shri Ramkripal Tripathi Guruji', 'Foundational works of Sahitya: Abhijnanashakuntalam, Meghadutam, Raghuvamsham and more.'],
          ['Param Pujya Shri Pushpa Dixit Mata Ji', 'Panini Paushpi Prakriya, Kashika, Swarvaidiki Prakriya.'],
        ],
        visible: 3,
        others: 'Acharya Ji has also studied briefly under other gurus, but mainly under those listed here, and he continues to do so.',
        nowTitle: 'Current study',
        now: 'At present Acharya Ji is studying, under his gurus, the Vedanta texts including Shribhashya (Yatindramatadipika, Tattvatraya), as well as the Viramitrodaya.',
        method: 'Acharya Ji has himself studied grammar through both the Navya and the Prachya methods, and teaches through both the Laghusiddhant and the Panini Paushpi Prakriya.',
      },
      galleryTitle: 'Gallery',
      contactTitle: 'Contact',
    },
    stats: [['150+', 'Batuk Brahmins'], ['Free', 'Complete education'], ['Hostel', 'Facility available']],
    gurukulInfo: {
      text: 'In Vrindavan, under the guidance of Acharya Shri Ramsanehi Mishra Ji, more than 150 batuk Brahmins study the Vedas, Vedangas and other scriptures in depth every day, and all of this education is completely free of charge. Following the guru-parampara, the Vidyapeetham is committed to reviving the true gurukul tradition, to protecting the scholarship (vaidushya) of the Vedic scholars, and to seeing more and more gurukuls flourish across this nation.',
      subjects: ['The Vedas', 'The Puranas', 'Shrimad Bhagwat', 'Ram Katha', 'Jyotish (Astrology)', 'Vyakaran (Grammar)', 'Karmakand (Vedic Rituals)'],
    },
    book: {
      title: 'Vaishnaviyaradhanam',
      subtitle: 'Vaishnav daily routine and a concise method of worship',
      by: 'Author:',
      author: 'Acharya Shri Ramsanehi Mishra',
      text: [
        'Few today have the leisure to study the authentic texts, and the scriptural method of worshipping the Lord laid down in the Puranas and Upanishads has become beyond the reach of ordinary people. In its absence, unscriptural practices are spreading. To fill this gap, the scripture-based method is presented here in simple language.',
        'Written in simple language in the style of a 30-day challenge, this devotional handbook is meant for every Vaishnav. Its first part explains the science of living life, the second gives the complete method of worshipping the Lord (archana), and the third is a compact collection of stotras and recitations useful to everyone.',
      ],
      cta: 'Order the Book',
      alt: 'Vaishnaviyaradhanam book cover',
      soldTitle: 'Currently out of stock',
      soldText: 'The first edition had 2,100 copies printed, and thanks to the overwhelming love of readers, every one has been sold. We will notify you as soon as the next edition is available.',
      soldLink: 'Follow us on Instagram for updates',
      close: 'Close',
    },
    intro: {
      heading: 'Acharya Shri Ramsanehi Mishra Ji',
      guruTitle: 'Agra-Malookpeethadheeshwar Dwaracharya Chaturth Pahadi Baba Jagadguru Swami Shri Rajendra Das Ji Maharaj',
      paras: [
        'Acharya Shri Ramsanehi Mishra Ji, a deeply beloved and graced disciple of Pratah Smaraniya Param Pujya Sadgurudev Agra-Malookpeethadheeshwar Dwaracharya Chaturth Pahadi Baba Jagadguru Swami Shri Rajendra Das Ji Maharaj, has received the causeless grace of Hari, Guru and the Vaishnavas since birth. Acharya Ji was born into a pure Vaishnav Brahmin family. At just five years of age, his yajnopavita and diksha sanskar were duly performed in the holy and auspicious presence of Pujya Maharaj Ji.',
        'From those very days of childhood, Acharya Ji began to show remarkable devotion and unwavering faith toward the Vedic traditions and the scriptural disciplines of Sanatan Dharma. His life continued to be nourished by spiritual values and righteous conduct, under the guidance of his gurus. Indeed, such deep devotion to dharmic rites, sadhana and the guru-parampara at so young an age reflects his extraordinary samskaras, his spiritual inclination and his dharma-minded personality.',
        'Acharya Ji has dedicated his entire life to the service of Hari, Guru, the Vaishnavas, the scriptures and cows. Through Vaishnav Vidyapeetham, every day in Vrindavan he teaches more than 150 batuk Brahmins, free of charge, the Vedas, Vedangas and other scriptures in their entirety, so that the true tradition of the gurukul may shine again and more and more gurukuls may flourish across this nation.',
      ],
      photoCap: 'Childhood memories of Acharya Shri Ramsanehi Mishra Ji with Pujya Sadgurudev Agra-Malookpeethadheeshwar Swami Shri Rajendra Das Ji Maharaj.',
      photoCap2: 'Acharya Shri Ramsanehi Mishra Ji receiving the blessings of his Sadgurudev for his first book, ‘Vaishnaviyaradhanam’.',
      scholarTitle: 'Scholarly Profile',
      scholar: [
        'Acharya Ji has studied the entire Rigveda and the Samhita recitation of the entire Shukla Yajurveda and the entire Krishna Yajurveda, completely and in depth, sitting at the feet of his gurus.',
        'He is also well versed in the Samaveda and Atharvaveda, which gives him a good knowledge of all four Vedas. He has studied the six Vedangas in depth as well, but his main subjects are grammar and the Shrimad Bhagwat Katha along with its commentaries.',
      ],
      guruLine: (name: string, title: string) => `The guru of ${name} is ${title}.`,
    },
  },
};

export type Content = typeof content.hi;
