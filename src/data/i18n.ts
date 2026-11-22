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
      viewMore: 'और जानें', viewLess: 'कम दिखाएँ', knowMore: 'जानें', moreVideos: 'और वीडियो', allVideos: 'यूट्यूब पर सभी वीडियो',
      aboutGurukul: 'अधिक जानकारी', upcoming: 'आगामी कार्यक्रम', recentVideos: 'हाल के वीडियो',
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
      'श्रीमद् भागवत कथा, वृन्दावन — 18 से 24 नवंबर',
      'श्रीमद् भागवत कथा, चित्रकूट — 20 से 26 अक्टूबर 2026',
      'श्रीमद् भागवत कथा, नवी मुंबई — 29 सितंबर से 5 अक्टूबर',
    ].map((title, i) => ({ title, image: evImgs[i] })),
    gurukulPage: {
      teachTitle: 'यहाँ क्या पढ़ाया जाता है',
      photoAlt: 'वैष्णव विद्यापीठम् के विद्यार्थी',
      way: 'विद्यार्थी गुरु-परम्परा के अनुसार अध्ययन करते हैं। गुरुकुल का उद्देश्य वैष्णव जीवन जीने की शिक्षा देना और सनातन धर्म की समझ देना है।',
      galleryTitle: 'गैलरी',
      contactTitle: 'सम्पर्क',
    },
    gurukulInfo: {
      text: 'वैष्णव विद्यापीठम् वृन्दावन का गुरुकुल है, जहाँ आचार्य श्री राम सनेही मिश्र जी के सान्निध्य में 150 से अधिक बटुक ब्राह्मण प्रतिदिन वेद-वेदांग आदि शास्त्रों का सांगोपांग अध्ययन करते हैं, और यह सम्पूर्ण शिक्षा निःशुल्क है। गुरु-परम्परा के अनुसार चलने वाले इस विद्यापीठ का संकल्प है कि वास्तविक गुरुकुल-परम्परा का पुनः प्रकाश हो और इस राष्ट्र में अधिक से अधिक गुरुकुलों की अभिवृद्धि हो।',
      subjects: ['वेद', 'पुराण', 'श्रीमद् भागवत', 'राम कथा'],
    },
    book: {
      title: 'वैष्णवीयाराधनम्',
      subtitle: 'वैष्णव दिनचर्या एवं संक्षिप्त उपासना पद्धति',
      by: 'लेखक:',
      author: 'आचार्य श्री रामसनेही मिश्र',
      text: [
        'वर्तमान काल में प्रामाणिक ग्रंथों के अनुशीलन का अवकाश किसी के पास नहीं है, और पुराणों एवं उपनिषदों में निरूपित भगवदर्चन की शास्त्रोक्त पद्धति जनसामान्य के लिए दुर्गम हो गई है। इसी कारण अशास्त्रीय आचरण बढ़ रहा है। इस अभाव की पूर्ति हेतु शास्त्रसम्मत पद्धति को सरल भाषा में प्रस्तुत किया गया है।',
        '30 दिन के चैलेंज की तरह, सरल भाषा में लिखी गई यह उपासनात्मक पुस्तिका प्रत्येक वैष्णव के लिए है। इसके प्रथम भाग में जीवन जीने के विज्ञान को समझाया गया है, दूसरे भाग में भगवत् अर्चन की सम्पूर्ण पद्धति है, और तीसरे भाग में सर्वसाधारण के उपयोगी स्तोत्रों एवं पाठों का लघु संग्रह है।',
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
      guruTitle: 'अग्र-मलूकपीठाधीश्वर द्वाराचार्य चतुर्थ पहाड़ी बाबा जगद्गुरु स्वामी श्री राजेंद्र दास जी महाराज',
      paras: [
        'प्रातः स्मरणीय परम पूज्य सद्‌गुरुदेव अग्र-मलूकपीठाधीश्वर द्वाराचार्य चतुर्थ पहाड़ी बाबा जगद्गुरु स्वामी श्री राजेंद्र दास जी महाराज जी के अत्यंत सनेही एवं कृपापात्र शिष्य आचार्य श्री राम सनेही मिश्र जी को जन्म से ही हरि गुरु वैष्णवों की अहेतुकी कृपा प्राप्त होती आ रही है। पवित्र वैष्णव ब्राह्मण परिवार में आचार्य जी का जन्म हुआ। मात्र पांच वर्ष की आयु में आप श्री का यज्ञोपवीत एवं दीक्षा संस्कार सविधि पूज्य महराज जी की पावन मंगल उपस्थिति में संपन्न हुआ।',
        'बाल्यावस्था के उन्हीं दिनों से ही आचार्य जी ने वैदिक परम्पराओं एवं सनातन धर्म की शास्त्रोक्त मर्यादाओं के प्रति अद्भुत निष्ठा एवं अटूट श्रद्धा का परिचय देना प्रारम्भ कर दिया था। उनका जीवन आध्यात्मिक संस्कारों एवं धर्माचरण की पावन छाया में गुरुजनों के अंतर्गत निरन्तर अभिसिंचित होता रहा। वस्तुतः इतनी छोटी आयु में धर्मानुष्ठान, साधना और गुरु-परम्परा के प्रति ऐसी गहन निष्ठा उनके विलक्षण संस्कारों, आध्यात्मिक अभिरुचि एवं धर्मनिष्ठ व्यक्तित्व का परिचायक है।',
        'आचार्य जी ने अपना संपूर्ण जीवन हरि गुरु वैष्णव, शास्त्र एवं गौ सेवा में ही समर्पित किया है। वैष्णव विद्यापीठम् के माध्यम से प्रत्येक दिवस आप वृंदावन में 150 से अधिक बटुक ब्राह्मणों को वेद वेदांग इत्यादि शास्त्रों का सांगोपांग निःशुल्क अध्ययन करवा रहे हैं जिससे वास्तविक गुरुकुल की परम्परा का पुनः प्रकाश हो और अधिक से अधिक गुरुकुलों की इस राष्ट्र में अभिवृद्धि हो।',
      ],
      scholarTitle: 'विद्वत् परिचय',
      scholar: [
        'आचार्य जी ने संपूर्ण ऋग्वेद, संपूर्ण शुक्ल यजुर्वेद, संपूर्ण कृष्ण यजुर्वेद के संहिता पाठ का सांगोपांग अध्ययन गुरुजनों के चरणों में बैठकर किया है।',
        'सामवेद और अथर्ववेद में भी आप श्री का प्रवेश है, जिससे आपको चारों वेदों का अच्छा ज्ञान है। षडंग वेदों में भी आपका काफी गहन अध्ययन है परंतु आपका मुख्य विषय व्याकरण एवं टीकाओं सहित श्रीमद् भागवत कथा है।',
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
      viewMore: 'View More', viewLess: 'Show Less', knowMore: 'Know More', moreVideos: 'More Videos', allVideos: 'All videos on YouTube',
      aboutGurukul: 'More Information', upcoming: 'Upcoming Events', recentVideos: 'Recent Videos',
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
      'Shrimad Bhagwat Katha, Vrindavan — 18 to 24 Nov',
      'Shrimad Bhagwat Katha, Chitrakoot — 20 to 26 Oct 2026',
      'Shrimad Bhagwat Katha, Navi Mumbai — 29 Sep to 5 Oct',
    ].map((title, i) => ({ title, image: evImgs[i] })),
    gurukulPage: {
      teachTitle: 'What is taught here',
      photoAlt: 'Students of Vaishnav Vidyapeetham',
      way: 'Students learn in the guru-parampara way. The aim of the gurukul is to teach how to live a Vaishnav life and to give an understanding of Sanatan Dharma.',
      galleryTitle: 'Gallery',
      contactTitle: 'Contact',
    },
    gurukulInfo: {
      text: 'Vaishnav Vidyapeetham is a gurukul in Vrindavan where more than 150 batuk Brahmins study the Vedas, Vedangas and other scriptures in depth every day under the guidance of Acharya Shri Ram Sanehi Mishra Ji, and all of this education is completely free of charge. Following the guru-parampara, the Vidyapeetham is committed to reviving the true gurukul tradition and to seeing more and more gurukuls flourish across this nation.',
      subjects: ['The Vedas', 'The Puranas', 'Shrimad Bhagwat', 'Ram Katha'],
    },
    book: {
      title: 'Vaishnaviyaaradhanam',
      subtitle: 'Vaishnav daily routine and a concise method of worship',
      by: 'Author:',
      author: 'Acharya Shri Ramsanehi Mishra',
      text: [
        'Few today have the leisure to study the authentic texts, and the scriptural method of worshipping the Lord laid down in the Puranas and Upanishads has become out of reach for ordinary people. In its absence, unscriptural practices are spreading. To fill this gap, the scripture-based method is presented here in simple language.',
        'Written in simple language in the style of a 30-day challenge, this devotional handbook is meant for every Vaishnav. Its first part explains the science of living life, the second gives the complete method of worshipping the Lord (archana), and the third is a compact collection of stotras and recitations useful to everyone.',
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
      guruTitle: 'Agra-Malookpeethadheeshwar Dwaracharya Chaturth Pahadi Baba Jagadguru Swami Shri Rajendra Das Ji Maharaj',
      paras: [
        'Acharya Shri Ram Sanehi Mishra Ji, a deeply beloved disciple and recipient of the grace of Pratah Smaraniya Param Pujya Sadgurudev Agra-Malookpeethadheeshwar Dwaracharya Chaturth Pahadi Baba Jagadguru Swami Shri Rajendra Das Ji Maharaj, has received the causeless grace of Hari, Guru and the Vaishnavas since birth. Acharya Ji was born into a pure Vaishnav Brahmin family. At just five years of age, his yajnopavita and diksha sanskar were duly performed in the holy and auspicious presence of Pujya Maharaj Ji.',
        'From those very days of childhood, Acharya Ji began to show remarkable devotion and unwavering faith toward the Vedic traditions and the scriptural disciplines of Sanatan Dharma. His life continued to be nourished by spiritual values and righteous conduct, under the guidance of his gurus. Indeed, such deep devotion to dharmic rites, sadhana and the guru-parampara at so young an age reflects his extraordinary samskaras, his spiritual inclination and his dharma-minded personality.',
        'Acharya Ji has dedicated his entire life to the service of Hari, Guru, the Vaishnavas, the scriptures and cows. Through Vaishnav Vidyapeetham, every day in Vrindavan he teaches more than 150 batuk Brahmins, free of charge, the Vedas, Vedangas and other scriptures in their entirety, so that the true tradition of the gurukul may shine again and more and more gurukuls may flourish across this nation.',
      ],
      scholarTitle: 'Scholarly Profile',
      scholar: [
        'Acharya Ji has studied the entire Rigveda and the Samhita recitation of the entire Shukla Yajurveda and the entire Krishna Yajurveda, completely and in depth, sitting at the feet of his gurus.',
        'He also has access to the Samaveda and Atharvaveda, giving him a good knowledge of all four Vedas. He has studied the six Vedangas deeply as well, but his main subject is grammar and the Shrimad Bhagwat Katha along with its commentaries.',
      ],
      guruLine: (name: string, title: string) => `The guru of ${name} is ${title}.`,
    },
  },
};

export type Content = typeof content.hi;
