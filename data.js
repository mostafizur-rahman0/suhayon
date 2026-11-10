/* SUHAYON website content. Edit this file only. Keep quotes and commas.
   b("English", "বাংলা") = a text shown in the language the visitor picks.
   PHOTOS: upload them next to index.html with these exact names:
     committee: m01.jpg ... m14.jpg (number = Sl. in the committee list below)
     standing committee: s1.jpg, s2.jpg, s3.jpg
     activities / gallery / members: any name, then write it in the list (example: image: "a1.jpg")
   Keep each photo under about 300 KB so the site loads fast. */
const b = (en, bn) => ({ en, bn });
window.SITE = {
  name: "SUHAYON", bn: "সুহায়ন",
  motto: b("Education • Unity • Humanity", "শিক্ষা • ঐক্য • মানবতা"),
  slogan: b("Together for a Better Tomorrow", "একসাথে গড়ি সুন্দর আগামী"),
  email: "suhayon.org@gmail.com",
  place: b("Kishoreganj, Bangladesh", "কিশোরগঞ্জ, বাংলাদেশ"),
  joinUrl: "https://form.jotform.com/263073187535057",
  intro: b("SUHAYON is a voluntary social organization formed by young people in Kishoreganj, Bangladesh. We contribute to society through education, unity, humanity, social welfare, environmental awareness, youth development, and community service.",
           "সুহায়ন কিশোরগঞ্জের তরুণদের দ্বারা গঠিত একটি স্বেচ্ছাসেবী সামাজিক সংগঠন। শিক্ষা, ঐক্য, মানবতা, সমাজকল্যাণ, পরিবেশ সচেতনতা, যুব উন্নয়ন ও কমিউনিটি সেবার মাধ্যমে আমরা সমাজে অবদান রাখতে চাই।"),
  vision: b("To build a better, more educated, united, humane, and socially responsible society.", "একটি উন্নত, শিক্ষিত, ঐক্যবদ্ধ, মানবিক ও সামাজিকভাবে দায়িত্বশীল সমাজ গড়ে তোলা।"),
  mission: b("To engage young people in meaningful voluntary activities that contribute to education, humanity, environmental protection, social welfare, and community development.", "শিক্ষা, মানবতা, পরিবেশ সুরক্ষা, সমাজকল্যাণ ও কমিউনিটি উন্নয়নে অবদান রাখে এমন অর্থবহ স্বেচ্ছাসেবামূলক কাজে তরুণদের যুক্ত করা।"),
  principles: [b("Education", "শিক্ষা"), b("Unity", "ঐক্য"), b("Humanity", "মানবতা")],
  objectives: [
    b("Promote education and educational awareness among young people.", "তরুণদের মধ্যে শিক্ষা ও শিক্ষা-সচেতনতা বৃদ্ধি করা।"),
    b("Encourage unity, cooperation, and mutual respect.", "ঐক্য, সহযোগিতা ও পারস্পরিক শ্রদ্ধাবোধ উৎসাহিত করা।"),
    b("Provide voluntary humanitarian and social assistance.", "স্বেচ্ছায় মানবিক ও সামাজিক সহায়তা প্রদান করা।"),
    b("Promote environmental protection and climate awareness.", "পরিবেশ সুরক্ষা ও জলবায়ু সচেতনতা বৃদ্ধি করা।"),
    b("Develop leadership, creativity, and social responsibility among youth.", "তরুণদের মধ্যে নেতৃত্ব, সৃজনশীলতা ও সামাজিক দায়িত্ববোধ গড়ে তোলা।"),
    b("Support community development and positive social change.", "কমিউনিটি উন্নয়ন ও ইতিবাচক সামাজিক পরিবর্তনে সহায়তা করা।"),
    b("Encourage technology, innovation, and digital awareness.", "প্রযুক্তি, উদ্ভাবন ও ডিজিটাল সচেতনতাকে উৎসাহিত করা।"),
    b("Promote health awareness and community well-being.", "স্বাস্থ্য সচেতনতা ও কমিউনিটির সুস্থতা বৃদ্ধি করা।"),
    b("Participate in disaster preparedness and humanitarian response.", "দুর্যোগ প্রস্তুতি ও মানবিক সাড়াদানে অংশ নেওয়া।"),
    b("Build a better and more compassionate society.", "একটি উন্নত ও আরও সহানুভূতিশীল সমাজ গড়ে তোলা।")
  ],
  categories: [b("Education and Educational Assistance", "শিক্ষা ও শিক্ষা সহায়তা"), b("Humanitarian and Social Welfare", "মানবিক ও সামাজিক কল্যাণ"), b("Environment and Climate Protection", "পরিবেশ ও জলবায়ু সুরক্ষা"), b("Health Awareness", "স্বাস্থ্য সচেতনতা"), b("Youth Development", "যুব উন্নয়ন"), b("Technology and Innovation", "প্রযুক্তি ও উদ্ভাবন"), b("Disaster Management and Relief", "দুর্যোগ ব্যবস্থাপনা ও ত্রাণ"), b("Community Development", "কমিউনিটি উন্নয়ন")],

  /* Donation numbers shown on the public site. Delete a number (leave "") to hide it. */
  donate: { bkash: "01326549740", nagad: "01978023066" },

  /* Executive Committee: [Sl., Designation, Full name]. Parents' names and home addresses are kept off the public site. */
  committee: {
    term: "13 November 2026 – 13 November 2028", meeting: "13 November 2026",
    venue: b("Kishoreganj, Bangladesh", "কিশোরগঞ্জ, বাংলাদেশ"), authority: b("Standing Committee", "স্থায়ী কমিটি"), memo: b("To Be Assigned", "পরে নির্ধারিত হবে"),
    members: [
      ["01", b("President", "সভাপতি"), "Tariful Islam"],
      ["02", b("Vice-President", "সহ-সভাপতি"), "Jubayer Islam"],
      ["03", b("General Secretary", "সাধারণ সম্পাদক"), "Abdullah Al Jihan"],
      ["04", b("Joint General Secretary", "যুগ্ম সাধারণ সম্পাদক"), "Al Mahadi"],
      ["05", b("Organizing Secretary", "সাংগঠনিক সম্পাদক"), "Maruf Ahmed"],
      ["06", b("Assistant Organizing Secretary", "সহ-সাংগঠনিক সম্পাদক"), "Al Mahadi"],
      ["07", b("Finance Secretary", "অর্থ সম্পাদক"), "Arif Rabbani Munna"],
      ["08", b("Office Secretary", "দপ্তর সম্পাদক"), "Abir Ahmed"],
      ["09", b("Publicity and Publication Secretary", "প্রচার ও প্রকাশনা সম্পাদক"), "Mostafizur Rahman"],
      ["10", b("Education and Research Secretary", "শিক্ষা ও গবেষণা সম্পাদক"), "Abir Ahmed"],
      ["11", b("Environment and Climate Affairs Secretary", "পরিবেশ ও জলবায়ু বিষয়ক সম্পাদক"), "Naimul Islam Shanto"],
      ["12", b("Social Welfare Secretary", "সমাজকল্যাণ সম্পাদক"), "Md. Rifat Ul Haque"],
      ["13", b("Information and Technology Secretary", "তথ্য ও প্রযুক্তি সম্পাদক"), "Mostafizur Rahman"],
      ["14", b("Executive Member", "কার্যনির্বাহী সদস্য"), "Tanvir Hasan"]
    ]
  },

  /* Standing Committee: write each name between the quotes when it is formed. "" shows "To be announced". */
  standing: {
    responsibilities: [
      b("Formation and approval of the Executive Committee.", "কার্যনির্বাহী কমিটি গঠন ও অনুমোদন।"),
      b("Investigation of serious irregularities by the Executive Committee.", "কার্যনির্বাহী কমিটির গুরুতর অনিয়মের তদন্ত।"),
      b("Proposing cancellation of the Executive Committee when necessary.", "প্রয়োজনে কার্যনির্বাহী কমিটি বাতিলের প্রস্তাব প্রদান।"),
      b("Protecting the organization's constitution and core principles.", "সংগঠনের পঠনতন্ত্র ও মূলনীতি রক্ষা।"),
      b("Maintaining organizational accountability and constitutional integrity.", "সাংগঠনিক জবাবদিহি ও পঠনতন্ত্রের অখণ্ডতা বজায় রাখা।")
    ],
    members: [
      { role: b("Chairman of the Standing Committee", "স্থায়ী কমিটির চেয়ারম্যান"), name: "" },
      { role: b("Secretary of the Standing Committee", "স্থায়ী কমিটির সম্পাদক"), name: "" },
      { role: b("Member of the Standing Committee", "স্থায়ী কমিটির সদস্য"), name: "" }
    ]
  },

  constitution: {
    pdf: "constitution.pdf",
    chapters: ["অধ্যায় ১: প্রাথমিক বিধান", "অধ্যায় ২: লক্ষ্য ও উদ্দেশ্য", "অধ্যায় ৩: সদস্যপদ", "অধ্যায় ৪: সাংগঠনিক কাঠামো", "অধ্যায় ৫: কার্যনির্বাহী কমিটি", "অধ্যায় ৬: স্থায়ী কমিটি", "অধ্যায় ৭: সভা ও সিদ্ধান্ত গ্রহণ", "অধ্যায় ৮: অর্থ ও হিসাব ব্যবস্থাপনা", "অধ্যায় ৯: শৃঙ্খলা ও আচরণবিধি", "অধ্যায় ১০: পঠনতন্ত্র সংশোধন", "অধ্যায় ১১: সংগঠন বিলুপ্তি", "অধ্যায় ১২: চূড়ান্ত বিধান"]
  },

  /* Start adding real items below. Examples (remove the comment marks and edit):
  activities: [{ title: b("Tree Plantation", "বৃক্ষরোপণ"), date: "2026-12-05", place: b("Pakundia", "পাকুন্দিয়া"), status: b("Completed", "সম্পন্ন"), description: b("Short text", "সংক্ষিপ্ত বিবরণ"), image: "a1.jpg" }],
  announcements: [{ title: b("General meeting", "সাধারণ সভা"), date: "2026-11-20", text: b("Short text", "সংক্ষিপ্ত বিবরণ") }],
  gallery: [{ src: "g1.jpg", caption: b("Tree plantation", "বৃক্ষরোপণ") }],
  members: [{ name: "Name", role: b("General Member", "সাধারণ সদস্য"), photo: "p1.jpg", bio: b("Short bio", "সংক্ষিপ্ত পরিচিতি") }]
  */
  activities: [],
  announcements: [],
  gallery: [],
  members: []
};
