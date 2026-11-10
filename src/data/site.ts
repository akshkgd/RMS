// Central content file. Empty strings ('') are hidden on the site until you fill them in.
export const site = {
  name: 'Ram Sanehi Mishra',
  bio: 'Teachings of gurukul for leading Vaishnav life and understanding of Sanatan Dharma', // from the gurukul Instagram bio
  nameHi: 'राम सनेही मिश्र',
  gurukul: 'Vaishnav Vidyapeetham',
  gurukulHi: 'वैष्णव विद्यापीठम्',
  location: 'Vrindavan, Uttar Pradesh',
  tagline: 'Sevā, svādhyāya and sādhanā in the dhām of Śrī Rādhā-Kṛṣṇa',
  guru: 'Malook Peethadheeshwar Rajendra Das Ji Maharaj',
  guruHi: 'मलूक पीठाधीश्वर श्री राजेन्द्र दास जी महाराज',
  instagram: 'https://www.instagram.com/vaishnav_vidyapeetham/',
  youtube: 'https://www.youtube.com/@sanatanadharmaraksha', // channel of the two embedded videos; confirm this is the right channel
  guruInstagram: 'https://www.instagram.com/rajendradasjimaharaj/',
  email: '',
  phone: '',        // e.g. '+91 98765 43210' — shows Call button
  whatsapp: '',     // digits only with country code, e.g. '919876543210' — shows WhatsApp button
  address: '',      // full postal address, optional
  formEndpoint: '', // e.g. a Formspree URL — shows the contact form when set
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/video', label: 'Video' },
  { href: '/contact', label: 'Contact' },
];

// Events: leave empty until real events are confirmed. Each item:
// { title: 'Shrimad Bhagwat Katha', image: '/images/events/katha.jpg', href: '/schedule' }
// TEMPORARY: the 5 cards below are placeholders copied from bhaktipaths.com — replace with this site's own event posters.
export const events: { title: string; image: string; href?: string }[] = [
  { title: 'Shri Bhakt Maal Katha', image: '/images/events/e1.jpg' },
  { title: 'Bhakt Vatsal Gopal', image: '/images/events/e2.jpg' },
  { title: 'Shrimad Bhagwat Katha', image: '/images/events/e3.jpg' },
  { title: 'Shri Girdhar Laal Ji Pancham Utsav', image: '/images/events/e4.jpg' },
  { title: 'Shrimad Bhagwat', image: '/images/events/e5.jpg' },
];

export const gurukul = {
  text: 'वैष्णव विद्यापीठम् वृन्दावन में चलने वाला गुरुकुल है। यहाँ विद्यार्थी गुरु-परम्परा के अनुसार वेद, पुराण और ज्योतिष पढ़ते हैं और रोज़ नियम से सन्ध्योपासन करते हैं।',
  subjects: ['वेद', 'पुराण', 'ज्योतिष', 'सन्ध्योपासन एवं सदाचार'],
};

export const videos = [
  { id: 'dc7mQ_FIjIA', title: 'Recent video 1' },
  { id: 'G1Rulk7If5s', title: 'Recent video 2' },
];

export const book = {
  titleHi: 'श्रीचैतन्य मंगल',
  title: 'Sri Caitanya Mangala',
  subtitle: 'The transcendental pastimes of Lord Caitanya (4 volume set)',
  originalAuthor: 'Srila Locana Das Thakura',
  // How Ram Sanehi Mishra is credited (e.g. 'Translated by', 'Edited by', 'Commentary by'). Leave '' to hide the line.
  role: '',
  text: [
    'Previously in Bengal the poets used to compose sacred songs and verses in different forms of classic rhymes and rhythmic meters called Panchali. The Panchali style of composition was especially used for glorifying the Lord.',
    'Srila Locana Das Thakura used the Panchali form of verse-meter in composing his famous work, Sri Caitanya Mangala. The Panchali form employs five different kinds of song-styles.',
  ],
  cta: { label: 'Order the Book', href: '/contact' }, // replace href with a store link when available
};

export const intro = {
  heading: 'राम सनेही मिश्र जी',
  guruTitle: 'श्रीमज्जगद्गुरु द्वाराचार्य श्रीअग्रपीठाधीश्वर एवं मलूकपीठाधीश्वर परम पूज्य स्वामी श्रीराजेन्द्रदास देवाचार्यजी महाराज',
  lead: 'के कृपापात्र शिष्य',
  paras: [
    'राम सनेही मिश्र जी को गुरु-कृपा बहुत छोटी आयु में ही मिल गई थी। मात्र पाँच वर्ष की आयु से वे नियमपूर्वक सन्ध्योपासन करते आ रहे हैं, और पाँच वर्ष की अवस्था में ही उनकी दीक्षा भी हो गई थी।',
    'बाल्यकाल से ही वे गुरुदेव के सान्निध्य में रहे। उसी सान्निध्य में रहकर उन्होंने वेदों, पुराणों और ज्योतिष का अध्ययन किया।',
    'आज वे वृन्दावन में वैष्णव विद्यापीठम् गुरुकुल में विद्यार्थियों को पढ़ा रहे हैं। गुरुकुल का उद्देश्य वैष्णव जीवन जीने की शिक्षा देना और सनातन धर्म की समझ देना है, ताकि गुरु-परम्परा से मिला ज्ञान अगली पीढ़ी तक पहुँचे।',
  ],
};
