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

const evImgs = ['e1', 'e2', 'e3', 'e4', 'e5'].map(x => `/images/events/${x}.jpg`);

export const content = {
  hi: {
    htmlLang: 'hi',
    switchLabel: 'English',
    name: 'आचार्य राम सनेही मिश्र',
    gurukul: 'वैष्णव विद्यापीठम्',
    location: 'वृन्दावन, उत्तर प्रदेश',
    bio: 'वैष्णव जीवन जीने की शिक्षा और सनातन धर्म की समझ देने वाला गुरुकुल',
    tagline: 'श्रीराधा-कृष्ण के धाम में सेवा, स्वाध्याय और साधना',
    defaultTitle: 'आचार्य राम सनेही मिश्र — वैष्णव विद्यापीठम्, वृन्दावन',
    nav: [
      { href: '/about', label: 'जीवन परिचय' },
      { href: '/gurukul', label: 'वैष्णव विद्यापीठम्' },
      { href: '/schedule', label: 'आगामी कार्यक्रम' },
      { href: '/contact', label: 'सम्पर्क' },
    ],
    ui: {
      viewMore: 'और जानें', knowMore: 'जानें', moreVideos: 'और वीडियो', allVideos: 'यूट्यूब पर सभी वीडियो',
      aboutGurukul: 'गुरुकुल के बारे में →', upcoming: 'आगामी कार्यक्रम', recentVideos: 'हाल के वीडियो',
      guruParampara: 'गुरु परम्परा', followGuru: 'महाराज जी को इंस्टाग्राम पर फ़ॉलो करें',
      schedule: 'आगामी कार्यक्रम', video: 'वीडियो', contact: 'सम्पर्क', about: 'जीवन परिचय', getInTouch: 'सम्पर्क करें',
      call: 'फ़ोन करें', whatsapp: 'व्हाट्सऐप', msgInsta: 'इंस्टाग्राम पर संदेश भेजें',
      yourName: 'आपका नाम', email: 'ईमेल', message: 'संदेश', send: 'भेजें',
      explore: 'देखें', connect: 'जुड़ें', igGurukul: 'इंस्टाग्राम — गुरुकुल', igGuru: 'इंस्टाग्राम — महाराज जी',
      rights: 'सर्वाधिकार सुरक्षित', noEvents: 'आगामी कार्यक्रमों की जानकारी जल्द ही यहाँ उपलब्ध होगी।',
      menu: 'मेनू',
    },
    contactIntro: 'प्रवेश, कथा या पुस्तक के बारे में जानने के लिए नीचे दिए माध्यमों से सम्पर्क करें।',
    events: [
      'श्री भक्तमाल कथा', 'भक्त वत्सल गोपाल', 'श्रीमद् भागवत कथा', 'श्री गिरधर लाल जी पंचम उत्सव', 'श्रीमद् भागवत',
    ].map((title, i) => ({ title, image: evImgs[i] })),
    gurukulPage: {
      teachTitle: 'यहाँ क्या पढ़ाया जाता है',
      photoAlt: 'वैष्णव विद्यापीठम् के विद्यार्थी',
      way: 'विद्यार्थी गुरु-परम्परा के अनुसार अध्ययन करते हैं। गुरुकुल का उद्देश्य वैष्णव जीवन जीने की शिक्षा देना और सनातन धर्म की समझ देना है।',
      galleryTitle: 'गैलरी',
      contactTitle: 'सम्पर्क',
    },
    gurukulInfo: {
      text: 'वैष्णव विद्यापीठम् वृन्दावन में चलने वाला गुरुकुल है। यहाँ विद्यार्थी गुरु-परम्परा के अनुसार वेद, पुराण और ज्योतिष पढ़ते हैं और रोज़ नियम से सन्ध्योपासन करते हैं।',
      subjects: ['वेद', 'पुराण', 'ज्योतिष', 'सन्ध्योपासन एवं सदाचार'],
    },
    book: {
      title: 'वैष्णवीयाराधनम्',
      subtitle: 'वैष्णव दिनचर्या एवं संक्षिप्त उपासना पद्धति',
      by: 'लेखक:',
      author: 'आचार्य श्री रामसनेही मिश्र',
      text: [
        'यह पुस्तक वैष्णव साधक की दिनचर्या और संक्षिप्त उपासना-पद्धति को सरल रूप में प्रस्तुत करती है।',
      ],
      cta: 'पुस्तक मँगवाएँ',
      alt: 'वैष्णवीयाराधनम् पुस्तक का आवरण',
      soldTitle: 'पुस्तक अभी उपलब्ध नहीं है',
      soldText: 'पहले संस्करण की 2100 प्रतियाँ छपी थीं और पाठकों के अपार स्नेह से सभी बिक चुकी हैं। अगला संस्करण प्रकाशित होते ही आपको सूचित किया जाएगा।',
      soldLink: 'अपडेट के लिए इंस्टाग्राम पर जुड़ें',
      close: 'बंद करें',
    },
    intro: {
      heading: 'आचार्य राम सनेही मिश्र जी',
      pre: '',
      guruTitle: 'श्रीमज्जगद्गुरु द्वाराचार्य श्रीअग्रपीठाधीश्वर एवं मलूकपीठाधीश्वर परम पूज्य स्वामी श्रीराजेन्द्रदास देवाचार्यजी महाराज',
      post: ' के कृपापात्र शिष्य',
      paras: [
        'आचार्य राम सनेही मिश्र जी को गुरु-कृपा बहुत छोटी आयु में ही मिल गई थी। मात्र पाँच वर्ष की आयु से वे नियमपूर्वक सन्ध्योपासन करते आ रहे हैं, और पाँच वर्ष की अवस्था में ही उनकी दीक्षा भी हो गई थी।',
        'बाल्यकाल से ही वे गुरुदेव के सान्निध्य में रहे। उसी सान्निध्य में रहकर उन्होंने वेदों, पुराणों और ज्योतिष का अध्ययन किया।',
        'आज वे वृन्दावन में वैष्णव विद्यापीठम् गुरुकुल में विद्यार्थियों को पढ़ा रहे हैं। गुरुकुल का उद्देश्य वैष्णव जीवन जीने की शिक्षा देना और सनातन धर्म की समझ देना है, ताकि गुरु-परम्परा से मिला ज्ञान अगली पीढ़ी तक पहुँचे।',
      ],
      guruLine: (name: string, title: string) => `${name} के गुरु, ${title}।`,
    },
  },

  en: {
    htmlLang: 'en',
    switchLabel: 'हिन्दी',
    name: 'Acharya Ram Sanehi Mishra',
    gurukul: 'Vaishnav Vidyapeetham',
    location: 'Vrindavan, Uttar Pradesh',
    bio: 'Teachings of gurukul for leading Vaishnav life and understanding of Sanatan Dharma',
    tagline: 'Sevā, svādhyāya and sādhanā in the dhām of Śrī Rādhā-Kṛṣṇa',
    defaultTitle: 'Acharya Ram Sanehi Mishra — Vaishnav Vidyapeetham, Vrindavan',
    nav: [
      { href: '/about', label: 'Biography' },
      { href: '/gurukul', label: 'Vaishnav Vidyapeetham' },
      { href: '/schedule', label: 'Upcoming Events' },
      { href: '/contact', label: 'Contact' },
    ],
    ui: {
      viewMore: 'View More', knowMore: 'Know More', moreVideos: 'More Videos', allVideos: 'All videos on YouTube',
      aboutGurukul: 'About the Gurukul →', upcoming: 'Upcoming Events', recentVideos: 'Recent Videos',
      guruParampara: 'Guru Parampara', followGuru: 'Follow Maharaj Ji on Instagram',
      schedule: 'Upcoming Events', video: 'Video', contact: 'Contact', about: 'Biography', getInTouch: 'Get in touch',
      call: 'Call', whatsapp: 'WhatsApp', msgInsta: 'Message on Instagram',
      yourName: 'Your name', email: 'Email', message: 'Message', send: 'Send',
      explore: 'Explore', connect: 'Connect', igGurukul: 'Instagram — Gurukul', igGuru: 'Instagram — Maharaj Ji',
      rights: 'All Rights Reserved', noEvents: 'Upcoming events will be announced here soon.',
      menu: 'Menu',
    },
    contactIntro: 'To know about admissions, katha or the book, please reach out using the options below.',
    events: [
      'Shri Bhakt Maal Katha', 'Bhakt Vatsal Gopal', 'Shrimad Bhagwat Katha', 'Shri Girdhar Laal Ji Pancham Utsav', 'Shrimad Bhagwat',
    ].map((title, i) => ({ title, image: evImgs[i] })),
    gurukulPage: {
      teachTitle: 'What is taught here',
      photoAlt: 'Students of Vaishnav Vidyapeetham',
      way: 'Students learn in the guru-parampara way. The aim of the gurukul is to teach how to live a Vaishnav life and to give an understanding of Sanatan Dharma.',
      galleryTitle: 'Gallery',
      contactTitle: 'Contact',
    },
    gurukulInfo: {
      text: 'Vaishnav Vidyapeetham is a gurukul in Vrindavan. Students study the Vedas, Puranas and Jyotish in the guru-parampara way, and perform sandhyopasana every day with discipline.',
      subjects: ['The Vedas', 'The Puranas', 'Jyotish (Vedic astrology)', 'Sandhyopasana & right conduct'],
    },
    book: {
      title: 'Vaishnaviyaaradhanam',
      subtitle: 'Vaishnav daily routine and a concise method of worship',
      by: 'Author:',
      author: 'Acharya Shri Ramsanehi Mishra',
      text: [
        'This book presents the daily routine of a Vaishnav practitioner and a concise method of worship in a simple form.',
      ],
      cta: 'Order the Book',
      alt: 'Vaishnaviyaaradhanam book cover',
      soldTitle: 'Currently out of stock',
      soldText: 'The first edition had 2,100 copies printed, and thanks to the overwhelming love of readers, every one has been sold. We will notify you as soon as the next edition is available.',
      soldLink: 'Follow us on Instagram for updates',
      close: 'Close',
    },
    intro: {
      heading: 'Acharya Ram Sanehi Mishra Ji',
      pre: 'A beloved disciple of ',
      guruTitle: 'Shrimaj Jagadguru Dwaracharya Shri Agrapeethadheeshwar and Malook Peethadheeshwar, Param Pujya Swami Shri Rajendra Das Devacharya Ji Maharaj',
      post: '.',
      paras: [
        'Acharya Ram Sanehi Mishra Ji received his Guru’s grace at a very young age. He has performed sandhyopasana with discipline since the age of five, and was initiated (diksha) at that same age.',
        'From childhood he lived in the close company of his Guru, and under that guidance studied the Vedas, the Puranas and Jyotish.',
        'Today he teaches students at the Vaishnav Vidyapeetham gurukul in Vrindavan. The gurukul’s aim is to teach how to live a Vaishnav life and to give an understanding of Sanatan Dharma, so that the knowledge received through the guru-parampara reaches the next generation.',
      ],
      guruLine: (name: string, title: string) => `The guru of ${name} is ${title}.`,
    },
  },
};

export type Content = typeof content.hi;
