import React, { useState, useEffect } from 'react';
import { 
  X, Mail, Lock, User, Phone, MapPin, 
  Eye, EyeOff, Check, Loader2, AlertCircle 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

const locationData = [
  { district: "Ahilyanagar", taluka: "Ahilyanagar" },
  { district: "Ahilyanagar", taluka: "Akole" },
  { district: "Ahilyanagar", taluka: "Jamkhed" },
  { district: "Ahilyanagar", taluka: "Karjat" },
  { district: "Ahilyanagar", taluka: "Kopargaon" },
  { district: "Ahilyanagar", taluka: "Nevasa" },
  { district: "Ahilyanagar", taluka: "Parner" },
  { district: "Ahilyanagar", taluka: "Pathardi" },
  { district: "Ahilyanagar", taluka: "Rahta" },
  { district: "Ahilyanagar", taluka: "Rahuri" },
  { district: "Ahilyanagar", taluka: "Sangamner" },
  { district: "Ahilyanagar", taluka: "Shevgaon" },
  { district: "Ahilyanagar", taluka: "Shrigonda" },
  { district: "Ahilyanagar", taluka: "Shrirampur" },

  //akola
  { district: "Akola", taluka: "Akola" },
  { district: "Akola", taluka: "Akot" },
  { district: "Akola", taluka: "Balapur" },
  { district: "Akola", taluka: "Barshitakli" },
  { district: "Akola", taluka: "Murtijapur" },
  { district: "Akola", taluka: "Patur" },
  { district: "Akola", taluka: "Telhara" },
  //amravati
  { district: "Amravati", taluka: "Achalpur" },
  { district: "Amravati", taluka: "Amravati" },
  { district: "Amravati", taluka: "Anjangaon Surji" },
  { district: "Amravati", taluka: "Bhatkuli" },
  { district: "Amravati", taluka: "Chandur Railway" },
  { district: "Amravati", taluka: "Chandurbazar" },
  { district: "Amravati", taluka: "Chikhaldara" },
  { district: "Amravati", taluka: "Daryapur" },
  { district: "Amravati", taluka: "Dhamangaon Railway" },
  { district: "Amravati", taluka: "Dharni" },
  { district: "Amravati", taluka: "Morshi" },
  { district: "Amravati", taluka: "Nandgaon-Khandeshwar" },
  { district: "Amravati", taluka: "Tiosa" },
  { district: "Amravati", taluka: "Warud" },
  //beed
  { district: "Beed", taluka: "Ambejogai" },
  { district: "Beed", taluka: "Ashti" },
  { district: "Beed", taluka: "Beed" },
  { district: "Beed", taluka: "Dharur" },
  { district: "Beed", taluka: "Georai" },
  { district: "Beed", taluka: "Kaij" },
  { district: "Beed", taluka: "Majalgaon" },
  { district: "Beed", taluka: "Parli" },
  { district: "Beed", taluka: "Patoda" },
  { district: "Beed", taluka: "Shirur (Kasar)" },
  { district: "Beed", taluka: "Wadwani" },

  { district: "Bhandara", taluka: "Bhandara" },
  { district: "Bhandara", taluka: "Lakhandur" },
  { district: "Bhandara", taluka: "Lakhani" },
  { district: "Bhandara", taluka: "Mohadi" },
  { district: "Bhandara", taluka: "Pauni" },
  { district: "Bhandara", taluka: "Sakoli" },
  { district: "Bhandara", taluka: "Tumsar" },

  //buldhana
  { district: "Buldhana", taluka: "Buldana" },
  { district: "Buldhana", taluka: "Chikhli" },
  { district: "Buldhana", taluka: "Deolgaon Raja" },
  { district: "Buldhana", taluka: "Jalgaon (Jamod)" },
  { district: "Buldhana", taluka: "Khamgaon" },
  { district: "Buldhana", taluka: "Lonar" },
  { district: "Buldhana", taluka: "Malkapur" },
  { district: "Buldhana", taluka: "Mehkar" },
  { district: "Buldhana", taluka: "Motala" },
  { district: "Buldhana", taluka: "Nandura" },
  { district: "Buldhana", taluka: "Sangrampur" },
  { district: "Buldhana", taluka: "Shegaon" },
  { district: "Buldhana", taluka: "Sindkhed Raja" },

  { district: "Chandrapur", taluka: "Ballarpur" },
  { district: "Chandrapur", taluka: "Bhadravati" },
  { district: "Chandrapur", taluka: "Brahmapuri" },
  { district: "Chandrapur", taluka: "Chandrapur" },
  { district: "Chandrapur", taluka: "Chimur" },
  { district: "Chandrapur", taluka: "Gondpipri" },
  { district: "Chandrapur", taluka: "Jiwati" },
  { district: "Chandrapur", taluka: "Korpana" },
  { district: "Chandrapur", taluka: "Mul" },
  { district: "Chandrapur", taluka: "Nagbhid" },
  { district: "Chandrapur", taluka: "Pombhurna" },
  { district: "Chandrapur", taluka: "Rajura" },
  { district: "Chandrapur", taluka: "Sawali" },
  { district: "Chandrapur", taluka: "Sindewahi" },
  { district: "Chandrapur", taluka: "Warora" },

  //chhatrapati sambhaji nagar
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Chhatrapati Sambhaji Nagar" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Gangapur" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Kannad" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Khuldabad" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Paithan" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Phulambri" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Sillod" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Soegaon" },
  { district: "Chhatrapati Sambhaji Nagar", taluka: "Vaijapur" },

  // dharashiv
  { district: "Dharashiv", taluka: "Bhum" },
  { district: "Dharashiv", taluka: "Dharashiv" },
  { district: "Dharashiv", taluka: "Kalamb" },
  { district: "Dharashiv", taluka: "Lohara" },
  { district: "Dharashiv", taluka: "Omarga" },
  { district: "Dharashiv", taluka: "Paranda" },
  { district: "Dharashiv", taluka: "Tuljapur" },
  { district: "Dharashiv", taluka: "Washi" },

  { district: "Dhule", taluka: "Dhule" },
  { district: "Dhule", taluka: "Sakri" },
  { district: "Dhule", taluka: "Shirpur" },
  { district: "Dhule", taluka: "Sindkhede" },

  { district: "Gadchiroli", taluka: "Aheri" },
  { district: "Gadchiroli", taluka: "Armori" },
  { district: "Gadchiroli", taluka: "Bhamragad" },
  { district: "Gadchiroli", taluka: "Chamorshi" },
  { district: "Gadchiroli", taluka: "Desaiganj (Vadasa)" },
  { district: "Gadchiroli", taluka: "Dhanora" },
  { district: "Gadchiroli", taluka: "Etapalli" },
  { district: "Gadchiroli", taluka: "Gadchiroli" },
  { district: "Gadchiroli", taluka: "Korchi" },
  { district: "Gadchiroli", taluka: "Kurkheda" },
  { district: "Gadchiroli", taluka: "Mulchera" },
  { district: "Gadchiroli", taluka: "Sironcha" },

  { district: "Gondia", taluka: "Amgaon" },
  { district: "Gondia", taluka: "Arjuni Morgaon" },
  { district: "Gondia", taluka: "Deori" },
  { district: "Gondia", taluka: "Gondiya" },
  { district: "Gondia", taluka: "Goregaon" },
  { district: "Gondia", taluka: "Sadak-Arjuni" },
  { district: "Gondia", taluka: "Salekasa" },
  { district: "Gondia", taluka: "Tirora" },

  // hingoli
  { district: "Hingoli", taluka: "Aundha (Nagnath)" },
  { district: "Hingoli", taluka: "Hingoli" },
  { district: "Hingoli", taluka: "Kalamnuri" },
  { district: "Hingoli", taluka: "Sengaon" },
  { district: "Hingoli", taluka: "Vasmath" },

  { district: "Jalgaon", taluka: "Amalner" },
  { district: "Jalgaon", taluka: "Bhadgaon" },
  { district: "Jalgaon", taluka: "Bhusawal" },
  { district: "Jalgaon", taluka: "Bodvad" },
  { district: "Jalgaon", taluka: "Chalisgaon" },
  { district: "Jalgaon", taluka: "Chopda" },
  { district: "Jalgaon", taluka: "Dharangaon" },
  { district: "Jalgaon", taluka: "Erandol" },
  { district: "Jalgaon", taluka: "Jalgaon" },
  { district: "Jalgaon", taluka: "Jamner" },
  { district: "Jalgaon", taluka: "Muktainagar (Edlabad)" },
  { district: "Jalgaon", taluka: "Pachora" },
  { district: "Jalgaon", taluka: "Parola" },
  { district: "Jalgaon", taluka: "Raver" },
  { district: "Jalgaon", taluka: "Yawal" },

  //jalna
  { district: "Jalna", taluka: "Ambad" },
  { district: "Jalna", taluka: "Badnapur" },
  { district: "Jalna", taluka: "Bhokardan" },
  { district: "Jalna", taluka: "Ghansawangi" },
  { district: "Jalna", taluka: "Jafrabad" },
  { district: "Jalna", taluka: "Jalna" },
  { district: "Jalna", taluka: "Mantha" },
  { district: "Jalna", taluka: "Partur" },

  { district: "Kolhapur", taluka: "Ajra" },
  { district: "Kolhapur", taluka: "Bhudargad" },
  { district: "Kolhapur", taluka: "Chandgad" },
  { district: "Kolhapur", taluka: "Gadhinglaj" },
  { district: "Kolhapur", taluka: "Gaganbawada" },
  { district: "Kolhapur", taluka: "Hatkanangle" },
  { district: "Kolhapur", taluka: "Kagal" },
  { district: "Kolhapur", taluka: "Karvir" },
  { district: "Kolhapur", taluka: "Panhala" },
  { district: "Kolhapur", taluka: "Radhanagari" },
  { district: "Kolhapur", taluka: "Shahuwadi" },
  { district: "Kolhapur", taluka: "Shirol" },

  //latur
  { district: "Latur", taluka: "Ahmadpur" },
  { district: "Latur", taluka: "Ausa" },
  { district: "Latur", taluka: "Chakur" },
  { district: "Latur", taluka: "Deoni" },
  { district: "Latur", taluka: "Jalkot" },
  { district: "Latur", taluka: "Latur" },
  { district: "Latur", taluka: "Nilanga" },
  { district: "Latur", taluka: "Renapur" },
  { district: "Latur", taluka: "Shirur Anantpal" },
  { district: "Latur", taluka: "Udgir" },

  { district: "Nagpur", taluka: "Bhiwapur" },
  { district: "Nagpur", taluka: "Hingna" },
  { district: "Nagpur", taluka: "Kalameshwar" },
  { district: "Nagpur", taluka: "Kamptee" },
  { district: "Nagpur", taluka: "Katol" },
  { district: "Nagpur", taluka: "Kuhi" },
  { district: "Nagpur", taluka: "Mauda" },
  { district: "Nagpur", taluka: "Nagpur (Rural)" },
  { district: "Nagpur", taluka: "Nagpur (Urban)" },
  { district: "Nagpur", taluka: "Narkhed" },
  { district: "Nagpur", taluka: "Parseoni" },
  { district: "Nagpur", taluka: "Ramtek" },
  { district: "Nagpur", taluka: "Savner" },
  { district: "Nagpur", taluka: "Umred" },

  // nanded
  { district: "Nanded", taluka: "Ardhapur" },
  { district: "Nanded", taluka: "Bhokar" },
  { district: "Nanded", taluka: "Biloli" },
  { district: "Nanded", taluka: "Deglur" },
  { district: "Nanded", taluka: "Dharmabad" },
  { district: "Nanded", taluka: "Hadgaon" },
  { district: "Nanded", taluka: "Himayatnagar" },
  { district: "Nanded", taluka: "Kandhar" },
  { district: "Nanded", taluka: "Kinwat" },
  { district: "Nanded", taluka: "Loha" },
  { district: "Nanded", taluka: "Mahur" },
  { district: "Nanded", taluka: "Mudkhed" },
  { district: "Nanded", taluka: "Mukhed" },
  { district: "Nanded", taluka: "Naigaon (Khairgaon)" },
  { district: "Nanded", taluka: "Nanded" },
  { district: "Nanded", taluka: "Umri" },

  { district: "Nandurbar", taluka: "Akkalkuwa" },
  { district: "Nandurbar", taluka: "Akrani" },
  { district: "Nandurbar", taluka: "Nandurbar" },
  { district: "Nandurbar", taluka: "Nawapur" },
  { district: "Nandurbar", taluka: "Shahade" },
  { district: "Nandurbar", taluka: "Talode" },

  { district: "Nashik", taluka: "Baglan" },
  { district: "Nashik", taluka: "Chandvad" },
  { district: "Nashik", taluka: "Deola" },
  { district: "Nashik", taluka: "Dindori" },
  { district: "Nashik", taluka: "Igatpuri" },
  { district: "Nashik", taluka: "Kalwan" },
  { district: "Nashik", taluka: "Malegaon" },
  { district: "Nashik", taluka: "Nandgaon" },
  { district: "Nashik", taluka: "Nashik" },
  { district: "Nashik", taluka: "Niphad" },
  { district: "Nashik", taluka: "Peth" },
  { district: "Nashik", taluka: "Sinnar" },
  { district: "Nashik", taluka: "Surgana" },
  { district: "Nashik", taluka: "Trimbakeshwar" },
  { district: "Nashik", taluka: "Yevla" },

  // palghar
  { district: "Palghar", taluka: "Dahanu" },
  { district: "Palghar", taluka: "Jawhar" },
  { district: "Palghar", taluka: "Mokhada" },
  { district: "Palghar", taluka: "Palghar" },
  { district: "Palghar", taluka: "Talasari" },
  { district: "Palghar", taluka: "Vasai" },
  { district: "Palghar", taluka: "Vikramgad" },
  { district: "Palghar", taluka: "Wada" },
  //parbhani
  { district: "Parbhani", taluka: "Gangakhed" },
  { district: "Parbhani", taluka: "Jintur" },
  { district: "Parbhani", taluka: "Manwath" },
  { district: "Parbhani", taluka: "Palam" },
  { district: "Parbhani", taluka: "Parbhani" },
  { district: "Parbhani", taluka: "Pathri" },
  { district: "Parbhani", taluka: "Purna" },
  { district: "Parbhani", taluka: "Selu" },
  { district: "Parbhani", taluka: "Sonpeth" },
  //pune
  { district: "Pune", taluka: "Ambegaon" },
  { district: "Pune", taluka: "Baramati" },
  { district: "Pune", taluka: "Bhor" },
  { district: "Pune", taluka: "Daund" },
  { district: "Pune", taluka: "Haveli" },
  { district: "Pune", taluka: "Indapur" },
  { district: "Pune", taluka: "Junnar" },
  { district: "Pune", taluka: "Khed" },
  { district: "Pune", taluka: "Mawal" },
  { district: "Pune", taluka: "Mulshi" },
  { district: "Pune", taluka: "Pune City" },
  { district: "Pune", taluka: "Purandhar" },
  { district: "Pune", taluka: "Shirur" },
  { district: "Pune", taluka: "Velhe" },
  //Raigad
  { district: "Raigad", taluka: "Alibag" },
  { district: "Raigad", taluka: "Karjat" },
  { district: "Raigad", taluka: "Khalapur" },
  { district: "Raigad", taluka: "Mahad" },
  { district: "Raigad", taluka: "Mangaon" },
  { district: "Raigad", taluka: "Mhasla" },
  { district: "Raigad", taluka: "Murud" },
  { district: "Raigad", taluka: "Panvel" },
  { district: "Raigad", taluka: "Pen" },
  { district: "Raigad", taluka: "Poladpur" },
  { district: "Raigad", taluka: "Roha" },
  { district: "Raigad", taluka: "Shrivardhan" },
  { district: "Raigad", taluka: "Sudhagad" },
  { district: "Raigad", taluka: "Tala" },
  { district: "Raigad", taluka: "Uran" },

  { district: "Ratnagiri", taluka: "Chiplun" },
  { district: "Ratnagiri", taluka: "Dapoli" },
  { district: "Ratnagiri", taluka: "Guhagar" },
  { district: "Ratnagiri", taluka: "Khed" },
  { district: "Ratnagiri", taluka: "Lanja" },
  { district: "Ratnagiri", taluka: "Mandangad" },
  { district: "Ratnagiri", taluka: "Rajapur" },
  { district: "Ratnagiri", taluka: "Ratnagiri" },
  { district: "Ratnagiri", taluka: "Sangameshwar" },

  { district: "Sangli", taluka: "Atpadi" },
  { district: "Sangli", taluka: "Jat" },
  { district: "Sangli", taluka: "Kadegaon" },
  { district: "Sangli", taluka: "Kavathemahankal" },
  { district: "Sangli", taluka: "Khanapur" },
  { district: "Sangli", taluka: "Miraj" },
  { district: "Sangli", taluka: "Palus" },
  { district: "Sangli", taluka: "Shirala" },
  { district: "Sangli", taluka: "Tasgaon" },
  { district: "Sangli", taluka: "Walwa" },

  { district: "Satara", taluka: "Jaoli" },
  { district: "Satara", taluka: "Karad" },
  { district: "Satara", taluka: "Khandala" },
  { district: "Satara", taluka: "Khatav" },
  { district: "Satara", taluka: "Koregaon" },
  { district: "Satara", taluka: "Mahabaleshwar" },
  { district: "Satara", taluka: "Man" },
  { district: "Satara", taluka: "Patan" },
  { district: "Satara", taluka: "Phaltan" },
  { district: "Satara", taluka: "Satara" },
  { district: "Satara", taluka: "Wai" },

  { district: "Sindhudurg", taluka: "Devgad" },
  { district: "Sindhudurg", taluka: "Dodamarg" },
  { district: "Sindhudurg", taluka: "Kankavli" },
  { district: "Sindhudurg", taluka: "Kudal" },
  { district: "Sindhudurg", taluka: "Malwan" },
  { district: "Sindhudurg", taluka: "Sawantwadi" },
  { district: "Sindhudurg", taluka: "Vaibhavvadi" },
  { district: "Sindhudurg", taluka: "Vengurla" },

  { district: "Solapur", taluka: "Akkalkot" },
  { district: "Solapur", taluka: "Barshi" },
  { district: "Solapur", taluka: "Karmala" },
  { district: "Solapur", taluka: "Madha" },
  { district: "Solapur", taluka: "Malshiras" },
  { district: "Solapur", taluka: "Mangalvedhe" },
  { district: "Solapur", taluka: "Mohol" },
  { district: "Solapur", taluka: "Pandharpur" },
  { district: "Solapur", taluka: "Sangole" },
  { district: "Solapur", taluka: "Solapur North" },
  { district: "Solapur", taluka: "Solapur South" },

  { district: "Thane", taluka: "Ambarnath" },
  { district: "Thane", taluka: "Bhiwandi" },
  { district: "Thane", taluka: "Kalyan" },
  { district: "Thane", taluka: "Murbad" },
  { district: "Thane", taluka: "Shahapur" },
  { district: "Thane", taluka: "Thane" },
  { district: "Thane", taluka: "Ulhasnagar" },

  { district: "Wardha", taluka: "Arvi" },
  { district: "Wardha", taluka: "Ashti" },
  { district: "Wardha", taluka: "Deoli" },
  { district: "Wardha", taluka: "Hinganghat" },
  { district: "Wardha", taluka: "Karanja" },
  { district: "Wardha", taluka: "Samudrapur" },
  { district: "Wardha", taluka: "Seloo" },
  { district: "Wardha", taluka: "Wardha" },

  // washim
  { district: "Washim", taluka: "Karanja" },
  { district: "Washim", taluka: "Malegaon" },
  { district: "Washim", taluka: "Mangrulpir" },
  { district: "Washim", taluka: "Manora" },
  { district: "Washim", taluka: "Risod" },
  { district: "Washim", taluka: "Washim" },
  // yavatmal
  { district: "Yavatmal", taluka: "Arni" },
  { district: "Yavatmal", taluka: "Babulgaon" },
  { district: "Yavatmal", taluka: "Darwha" },
  { district: "Yavatmal", taluka: "Digras" },
  { district: "Yavatmal", taluka: "Ghatanji" },
  { district: "Yavatmal", taluka: "Kalamb" },
  { district: "Yavatmal", taluka: "Kelapur" },
  { district: "Yavatmal", taluka: "Mahagaon" },
  { district: "Yavatmal", taluka: "Maregaon" },
  { district: "Yavatmal", taluka: "Ner" },
  { district: "Yavatmal", taluka: "Pusad" },
  { district: "Yavatmal", taluka: "Ralegaon" },
  { district: "Yavatmal", taluka: "Umarkhed" },
  { district: "Yavatmal", taluka: "Wani" },
  { district: "Yavatmal", taluka: "Yavatmal" },
  { district: "Yavatmal", taluka: "Zari-Jamani" }
];

// Compute unique districts sorted alphabetically
const districts = Array.from(new Set(locationData.map(item => item.district))).sort();

// Group talukas by district
const talukasByDistrict = locationData.reduce((acc, item) => {
  if (!acc[item.district]) {
    acc[item.district] = [];
  }
  acc[item.district].push(item.taluka);
  return acc;
}, {});

// De-duplicate and sort talukas alphabetically
Object.keys(talukasByDistrict).forEach(district => {
  talukasByDistrict[district] = Array.from(new Set(talukasByDistrict[district])).sort();
});

// Marathi district name mapping
const districtNamesMr = {
  "Ahilyanagar": "अहिल्यानगर",
  "Akola": "अकोला",
  "Amravati": "अमरावती",
  "Beed": "बीड",
  "Bhandara": "भंडारा",
  "Buldhana": "बुलढाणा",
  "Chandrapur": "चंद्रपूर",
  "Chhatrapati Sambhaji Nagar": "छत्रपती संभाजीनगर",
  "Dharashiv": "धाराशिव",
  "Dhule": "धुळे",
  "Gadchiroli": "गडचिरोली",
  "Gondia": "गोंदिया",
  "Hingoli": "हिंगोली",
  "Jalgaon": "जळगाव",
  "Jalna": "जालना",
  "Kolhapur": "कोल्हापूर",
  "Latur": "लातूर",
  "Mumbai City": "मुंबई शहर",
  "Mumbai Suburban": "मुंबई उपनगर",
  "Nagpur": "नागपूर",
  "Nanded": "नांदेड",
  "Nandurbar": "नंदुरबार",
  "Nashik": "नाशिक",
  "Palghar": "पालघर",
  "Parbhani": "परभणी",
  "Pune": "पुणे",
  "Raigad": "रायगड",
  "Ratnagiri": "रत्नागिरी",
  "Sangli": "सांगली",
  "Satara": "सातारा",
  "Sindhudurg": "सिंधुदुर्ग",
  "Solapur": "सोलापूर",
  "Thane": "ठाणे",
  "Wardha": "वर्धा",
  "Washim": "वाशीम",
  "Yavatmal": "यवतमाळ",
};

// Marathi taluka name mapping
const talukaNamesMr = {
  // Ahilyanagar
  "Ahilyanagar": "अहिल्यानगर",
  "Akole": "अकोले",
  "Jamkhed": "जामखेड",
  "Karjat": "कर्जत",
  "Kopargaon": "कोपरगाव",
  "Nevasa": "नेवासा",
  "Parner": "पारनेर",
  "Pathardi": "पाथर्डी",
  "Rahta": "राहता",
  "Rahuri": "राहुरी",
  "Sangamner": "संगमनेर",
  "Shevgaon": "शेवगाव",
  "Shrigonda": "श्रीगोंदा",
  "Shrirampur": "श्रीरामपूर",

  // Akola
  "Akola": "अकोला",
  "Akot": "अकोट",
  "Balapur": "बाळापूर",
  "Barshitakli": "बार्शीटाकळी",
  "Murtijapur": "मूर्तिजापूर",
  "Patur": "पातूर",
  "Telhara": "तेल्हारा",

  // Amravati
  "Achalpur": "अचलपूर",
  "Amravati": "अमरावती",
  "Anjangaon Surji": "अंजनगाव सुर्जी",
  "Bhatkuli": "भादकुली",
  "Chandur Railway": "चांदूर रेल्वे",
  "Chandurbazar": "चांदूर बाजार",
  "Chikhaldara": "चिखलदरा",
  "Daryapur": "दर्यापूर",
  "Dhamangaon Railway": "धामणगाव रेल्वे",
  "Dharni": "धारणी",
  "Morshi": "मोर्शी",
  "Nandgaon-Khandeshwar": "नांदगाव खंडेश्वर",
  "Tiosa": "तिवसा",
  "Warud": "वरुड",

  // Beed
  "Ambejogai": "अंबेजोगाई",
  "Ashti": "आष्टी",
  "Beed": "बीड",
  "Dharur": "धारूर",
  "Georai": "गेवराई",
  "Kaij": "केज",
  "Majalgaon": "माजलगाव",
  "Parli": "परळी",
  "Patoda": "पाटोदा",
  "Shirur (Kasar)": "शिरूर (कासार)",
  "Wadwani": "वडवणी",

  // Bhandara
  "Bhandara": "भंडारा",
  "Lakhandur": "लाखांदूर",
  "Lakhani": "लाखनी",
  "Mohadi": "मोहाडी",
  "Pauni": "पवनी",
  "Sakoli": "साकोली",
  "Tumsar": "तुमसर",

  // Buldhana
  "Buldana": "बुलढाणा",
  "Chikhli": "चिखली",
  "Deolgaon Raja": "देऊळगाव राजा",
  "Jalgaon (Jamod)": "जळगाव जामोद",
  "Khamgaon": "खामगाव",
  "Lonar": "लोणार",
  "Malkapur": "मलकापूर",
  "Mehkar": "मेहकर",
  "Motala": "मोताळा",
  "Nandura": "नांदुरा",
  "Sangrampur": "संग्रामपूर",
  "Shegaon": "शेगाव",
  "Sindkhed Raja": "सिंदखेड राजा",

  // Chandrapur
  "Ballarpur": "बल्लारपूर",
  "Bhadravati": "भद्रावती",
  "Brahmapuri": "ब्रह्मपुरी",
  "Chandrapur": "चंद्रपूर",
  "Chimur": "चिमूर",
  "Gondpipri": "गोंडपिपरी",
  "Jiwati": "जिवती",
  "Korpana": "कोरपना",
  "Mul": "मूल",
  "Nagbhid": "नागभीड",
  "Pombhurna": "पोंभुर्णा",
  "Rajura": "राजुरा",
  "Sawali": "सावली",
  "Sindewahi": "सिंदेवाही",
  "Warora": "वरोरा",

  // Chhatrapati Sambhaji Nagar
  "Chhatrapati Sambhaji Nagar": "छत्रपती संभाजीनगर",
  "Gangapur": "गंगापूर",
  "Kannad": "कन्नड",
  "Khuldabad": "खुल्दाबाद",
  "Paithan": "पैठण",
  "Phulambri": "फुलंब्री",
  "Sillod": "सिल्लोड",
  "Soegaon": "सोयगाव",
  "Vaijapur": "वैजापूर",

  // Dharashiv
  "Bhum": "भूम",
  "Dharashiv": "धाराशिव",
  "Kalamb": "कळंब",
  "Lohara": "लोहारा",
  "Omarga": "उमरगा",
  "Paranda": "परंडा",
  "Tuljapur": "तुळजापूर",
  "Washi": "वाशी",

  // Dhule
  "Dhule": "धुळे",
  "Sakri": "साक्री",
  "Shirpur": "शिरपूर",
  "Sindkhede": "शिंदखेडा",

  // Gadchiroli
  "Aheri": "अहेरी",
  "Armori": "आरमोरी",
  "Bhamragad": "भामरागड",
  "Chamorshi": "चामोर्शी",
  "Desaiganj (Vadasa)": "देसाईगंज (वडसा)",
  "Dhanora": "धानोरा",
  "Etapalli": "एटापल्ली",
  "Gadchiroli": "गडचिरोली",
  "Korchi": "कोरची",
  "Kurkheda": "कुरखेडा",
  "Mulchera": "मूलचेरा",
  "Sironcha": "सिरोंचा",

  // Gondia
  "Amgaon": "आमगाव",
  "Arjuni Morgaon": "अर्जुनी मोरगाव",
  "Deori": "देवरी",
  "Gondiya": "गोंदिया",
  "Goregaon": "गोरेगाव",
  "Sadak-Arjuni": "सडक अर्जुनी",
  "Salekasa": "सालेकसा",
  "Tirora": "तिरोडा",

  // Hingoli
  "Aundha (Nagnath)": "औंढा नागनाथ",
  "Hingoli": "हिंगोली",
  "Kalamnuri": "कलमनुरी",
  "Sengaon": "सेनगाव",
  "Vasmath": "वसमत",

  // Jalgaon
  "Amalner": "अमळनेर",
  "Bhadgaon": "भडगाव",
  "Bhusawal": "भुसावळ",
  "Bodvad": "बोदवड",
  "Chalisgaon": "चाळीसगाव",
  "Chopda": "चोपडा",
  "Dharangaon": "धरणगाव",
  "Erandol": "एरंडोल",
  "Jalgaon": "जळगाव",
  "Jamner": "जामनेर",
  "Muktainagar (Edlabad)": "मुक्ताईनगर",
  "Pachora": "पाचोरा",
  "Parola": "पारोळा",
  "Raver": "रावेर",
  "Yawal": "यावल",

  // Jalna
  "Ambad": "अंबड",
  "Badnapur": "बदनापूर",
  "Bhokardan": "भोकरदन",
  "Ghansawangi": "घनसावंगी",
  "Jafrabad": "जाफ्राबाद",
  "Jalna": "जालना",
  "Mantha": "मंठा",
  "Partur": "परतूर",

  // Kolhapur
  "Ajra": "आजरा",
  "Bhudargad": "भुदरगड",
  "Chandgad": "चंदगड",
  "Gadhinglaj": "गडहिंग्लज",
  "Gaganbawada": "गगनबावडा",
  "Hatkanangle": "हातकणंगले",
  "Kagal": "कागल",
  "Karvir": "करवीर",
  "Panhala": "पन्हाळा",
  "Radhanagari": "राधानगरी",
  "Shahuwadi": "शाहूवाडी",
  "Shirol": "शिरोळ",

  // Latur
  "Ahmadpur": "अहमदपूर",
  "Ausa": "औसा",
  "Chakur": "चाकूर",
  "Deoni": "देवणी",
  "Jalkot": "जळकोट",
  "Latur": "लातूर",
  "Nilanga": "निलंगा",
  "Renapur": "रेणापूर",
  "Shirur Anantpal": "शिरूर अनंतपाळ",
  "Udgir": "उदगीर",

  // Nagpur
  "Bhiwapur": "भिवपूर",
  "Hingna": "हिंगणा",
  "Kalameshwar": "कळमेश्वर",
  "Kamptee": "कामठी",
  "Katol": "काटोल",
  "Kuhi": "कुही",
  "Mauda": "मौदा",
  "Nagpur (Rural)": "नागपूर ग्रामीण",
  "Nagpur (Urban)": "नागपूर शहर",
  "Narkhed": "नरखेड",
  "Parseoni": "पारशिवनी",
  "Ramtek": "रामटेक",
  "Savner": "सावनेर",
  "Umred": "उमरेड",

  // Nanded
  "Ardhapur": "अर्धापूर",
  "Bhokar": "भोकर",
  "Biloli": "बिलोली",
  "Deglur": "देगलूर",
  "Dharmabad": "धर्माबाद",
  "Hadgaon": "हदगाव",
  "Himayatnagar": "हिमायतनगर",
  "Kandhar": "कंधार",
  "Kinwat": "किनवट",
  "Loha": "लोहा",
  "Mahur": "माहूर",
  "Mudkhed": "मुदखेड",
  "Mukhed": "मुखेड",
  "Naigaon (Khairgaon)": "नायगाव (खैरगाव)",
  "Nanded": "नांदेड",
  "Camp": "कॅम्प",
  "Umri": "उमरी",

  // Nandurbar
  "Akkalkuwa": "अक्कलकुवा",
  "Akrani": "अक्राणी",
  "Nandurbar": "नंदुरबार",
  "Nawapur": "नवापूर",
  "Shahade": "शहादा",
  "Talode": "तळोदा",

  // Nashik
  "Baglan": "बागलाण",
  "Chandvad": "चांदवड",
  "Deola": "देवळा",
  "Dindori": "दिंडोरी",
  "Igatpuri": "इगतपुरी",
  "Kalwan": "कलवण",
  "Malegaon": "मालेगाव",
  "Nandgaon": "नांदगाव",
  "Nashik": "नाशिक",
  "Niphad": "निफाड",
  "Peth": "पेठ",
  "Sinnar": "सिन्नर",
  "Surgana": "सुरगाणा",
  "Trimbakeshwar": "त्र्यंबकेश्वर",
  "Yevla": "येवला",

  // Palghar
  "Dahanu": "डहाणू",
  "Jawhar": "जव्हार",
  "Mokhada": "मोखाडा",
  "Palghar": "पालघर",
  "Talasari": "तलासरी",
  "Vasai": "वसई",
  "Vikramgad": "विक्रमगड",
  "Wada": "वाडा",

  // Parbhani
  "Gangakhed": "गंगाखेड",
  "Jintur": "जिंतूर",
  "Manwath": "मानवत",
  "Palam": "पालम",
  "Parbhani": "परभणी",
  "Pathri": "पाथरी",
  "Purna": "पूर्णा",
  "Selu": "सेलू",
  "Sonpeth": "सोनपेठ",

  // Pune
  "Ambegaon": "आंबेगाव",
  "Baramati": "बारामती",
  "Bhor": "भोर",
  "Daund": "दौंड",
  "Haveli": "हवेली",
  "Indapur": "इंदापूर",
  "Junnar": "जुन्नर",
  "Khed": "खेड",
  "Mawal": "मावळ",
  "Mulshi": "मुळशी",
  "Pune City": "पुणे शहर",
  "Purandhar": "पुरंदर",
  "Shirur": "शिरूर",
  "Velhe": "वेल्हे",

  // Raigad
  "Alibag": "अलिबाग",
  "Karjat": "कर्जत",
  "Khalapur": "खालापूर",
  "Mahad": "महाड",
  "Mangaon": "माणगाव",
  "Mhasla": "म्हासला",
  "Murud": "मुरुड",
  "Panvel": "पनवेल",
  "Pen": "पेन",
  "Poladpur": "पोलादपूर",
  "Roha": "रोहा",
  "Shrivardhan": "श्रीवर्धन",
  "Sudhagad": "सुधागड",
  "Tala": "तळा",
  "Uran": "उरण",

  // Ratnagiri
  "Chiplun": "चिपळूण",
  "Dapoli": "दापोली",
  "Guhagar": "गुहागर",
  "Lanja": "लांजा",
  "Mandangad": "मंडणगड",
  "Rajapur": "राजापूर",
  "Ratnagiri": "रत्नागिरी",
  "Sangameshwar": "संगमेश्वर",

  // Sangli
  "Atpadi": "आटपाडी",
  "Jat": "जत",
  "Kadegaon": "कडेगाव",
  "Kavathemahankal": "कवठे महांकाळ",
  "Khanapur": "खानापूर",
  "Miraj": "मिरज",
  "Palus": "पलूस",
  "Shirala": "शिराळा",
  "Tasgaon": "तासगाव",
  "Walwa": "वाळवा",

  // Satara
  "Jaoli": "जावळी",
  "Karad": "कराड",
  "Khandala": "खंडाळा",
  "Khatav": "खटाव",
  "Koregaon": "कोरेगाव",
  "Mahabaleshwar": "महाबळेश्वर",
  "Man": "माण",
  "Patan": "पाटण",
  "Phaltan": "फलटण",
  "Satara": "सातारा",
  "Wai": "वाई",

  // Sindhudurg
  "Devgad": "देवगड",
  "Dodamarg": "दोडामार्ग",
  "Kankavli": "कणकवली",
  "Kudal": "कुडाळ",
  "Malwan": "मालवण",
  "Sawantwadi": "सावंतवाडी",
  "Vaibhavvadi": "वैभववाडी",
  "Vengurla": "वेंगुर्ला",

  // Solapur
  "Akkalkot": "अक्कलकोट",
  "Barshi": "बार्शी",
  "Karmala": "करमाळा",
  "Madha": "माढा",
  "Malshiras": "माळशिरस",
  "Mangalvedhe": "मंगळवेढा",
  "Mohol": "मोहोळ",
  "Pandharpur": "पंढरपूर",
  "Sangole": "सांगोला",
  "Solapur North": "उत्तर सोलापूर",
  "Solapur South": "दक्षिण सोलापूर",

  // Thane
  "Ambarnath": "अंबरनाथ",
  "Bhiwandi": "भिवंडी",
  "Kalyan": "कल्याण",
  "Murbad": "मुरबाड",
  "Shahapur": "शहापूर",
  "Thane": "ठाणे",
  "Ulhasnagar": "उल्हासनगर",

  // Wardha
  "Arvi": "आर्वी",
  "Ashti": "आष्टी",
  "Deoli": "देवळी",
  "Hinganghat": "हिंगणघाट",
  "Karanja": "कारंजा",
  "Samudrapur": "समुद्रपूर",
  "Seloo": "सेलू",
  "Wardha": "वर्धा",

  // Washim
  "Karanja": "कारंजा",
  "Malegaon": "मालेगाव",
  "Mangrulpir": "मंगरुळपीर",
  "Manora": "मानोरा",
  "Risod": "रिसोड",
  "Washim": "वाशीम",

  // Yavatmal
  "Arni": "आर्णी",
  "Babulgaon": "बाभुळगाव",
  "Darwha": "दारव्हा",
  "Digras": "दिग्रस",
  "Ghatanji": "घाटनजी",
  "Kalamb": "कळंब",
  "Kelapur": "केळापूर",
  "Mahagaon": "महागाव",
  "Maregaon": "मारेगाव",
  "Ner": "नेर",
  "Pusad": "पुसद",
  "Ralegaon": "राळेगाव",
  "Umarkhed": "उमरखेड",
  "Wani": "वणी",
  "Yavatmal": "यवतमाळ",
  "Zari-Jamani": "झरी जामणी",
};

const AuthModal = ({ isOpen, initialTab = 'login', userType = 'applicant', onClose }) => {
  const { lang } = useLanguage();
  const ta = translations[lang].auth;
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // CAPTCHA state
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);

  // Form states
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    mobileNumber: '',
    address: '',
    district: '',
    taluka: '',
    village: '',
    password: '',
    confirmPassword: ''
  });

  // Validation & Error States
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(userType === 'office' ? 'login' : initialTab);
      setErrors({});
      setSubmitSuccess(false);
      setCaptchaChecked(false);
    }
  }, [isOpen, initialTab, userType]);

  if (!isOpen) return null;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCaptchaClick = () => {
    if (captchaChecked) {
      setCaptchaChecked(false);
      return;
    }
    setCaptchaLoading(true);
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaChecked(true);
      if (errors.captcha) setErrors(prev => ({ ...prev, captcha: '' }));
    }, 1200);
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    
    // Required fields check
    if (!registerData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!registerData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!registerData.gender) newErrors.gender = 'Gender selection is required';
    
    if (!registerData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!registerData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(registerData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be a 10-digit number';
    }
    
    if (!registerData.address.trim()) newErrors.address = 'Address is required';
    if (!registerData.district) newErrors.district = 'District is required';
    if (!registerData.taluka) newErrors.taluka = 'Taluka is required';
    if (!registerData.village.trim()) newErrors.village = 'Village name is required';
    
    if (!registerData.password) {
      newErrors.password = 'Password is required';
    } else if (registerData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(registerData.password)) {
      newErrors.password = 'Must contain uppercase, lowercase, number, and special character';
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!captchaChecked) {
      newErrors.captcha = 'Please verify that you are not a robot';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      setSubmitSuccess(true);
      setTimeout(() => {
        alert('Logged in successfully! (Simulation)');
        onClose();
      }, 800);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      setSubmitSuccess(true);
      setTimeout(() => {
        alert('Registered successfully! (Simulation)');
        onClose();
      }, 800);
    }
  };

  const handleResetRegister = () => {
    setRegisterData({
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      email: '',
      mobileNumber: '',
      address: '',
      district: '',
      taluka: '',
      village: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setCaptchaChecked(false);
  };

  return (
    <div className="auth-modal-backdrop d-flex align-items-center justify-content-center" onClick={onClose}>
      <div 
        className="auth-modal-content bg-white rounded-4 overflow-hidden shadow-2xl position-relative d-flex flex-column animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '92%',
          maxWidth: activeTab === 'login' ? '450px' : '750px',
          maxHeight: '90vh',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Header Bar */}
        <div 
          className="px-4 py-3 text-white d-flex align-items-center justify-content-between"
          style={{ 
            background: 'linear-gradient(135deg, var(--primary-color) 0%, #003399 100%)',
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span className="info-icon-badge d-flex align-items-center justify-content-center bg-white bg-opacity-20 rounded-circle" style={{ width: '28px', height: '28px' }}>
              i
            </span>
            <h5 className="mb-0 fw-bold font-outfit" style={{ fontSize: '1.15rem' }}>
              {userType === 'office' 
                ? ta.officeLogin 
                : activeTab === 'login' 
                  ? ta.applicantLogin 
                  : ta.applicantRegister}
            </h5>
          </div>
          <button 
            onClick={onClose}
            className="btn btn-link text-white p-1 rounded-circle hover-bg-white-10 d-flex align-items-center justify-content-center"
            style={{ textDecoration: 'none', transition: 'background-color 0.2s' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Pills */}
        {userType === 'applicant' && (
          <div className="px-4 pt-3 pb-2 bg-light border-bottom d-flex justify-content-center">
            <div className="d-flex bg-secondary bg-opacity-10 p-1 rounded-3 w-100" style={{ maxWidth: '320px' }}>
              <button
                onClick={() => { setActiveTab('login'); setErrors({}); }}
                className={`flex-fill py-1.5 px-3 rounded-2 border-0 fw-semibold transition-all ${activeTab === 'login' ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-secondary'}`}
                style={{ fontSize: '0.88rem' }}
              >
                {ta.loginTab}
              </button>
              <button
                onClick={() => { setActiveTab('register'); setErrors({}); }}
                className={`flex-fill py-1.5 px-3 rounded-2 border-0 fw-semibold transition-all ${activeTab === 'register' ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-secondary'}`}
                style={{ fontSize: '0.88rem' }}
              >
                {ta.registerTab}
              </button>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-grow-1 overflow-y-auto px-4 py-3" style={{ scrollBehavior: 'smooth' }}>
          
          {activeTab === 'login' ? (
            /* ================= LOGIN FORM ================= */
            <form onSubmit={handleLoginSubmit} className="py-2">
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">{ta.emailAddress}</label>
                <div className="position-relative">
                  <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className={`form-control ps-5 py-2.5 rounded-3 ${errors.email ? 'is-invalid' : ''}`}
                    placeholder={ta.emailPlaceholder}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label small fw-bold text-secondary mb-0">{ta.password}</label>
                  <a href="#forgot" className="small text-decoration-none fw-medium" style={{ color: 'var(--primary-color)' }}>{ta.forgotPassword}</a>
                </div>
                <div className="position-relative">
                  <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className={`form-control ps-5 pe-5 py-2.5 rounded-3 ${errors.password ? 'is-invalid' : ''}`}
                    placeholder={ta.passwordPlaceholder}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="position-absolute end-0 top-50 translate-middle-y pe-3 btn btn-link text-secondary py-0 border-0 shadow-none"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
              </div>

              {/* Login Action Buttons */}
              <div className="d-flex gap-3 mt-4 pt-2">
                <button 
                  type="submit" 
                  className="btn btn-primary flex-fill py-2.5 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  disabled={submitSuccess}
                >
                  {submitSuccess ? <Loader2 size={18} className="animate-spin" /> : null}
                  <span>{ta.loginBtn}</span>
                </button>
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="btn btn-outline-secondary px-4 py-2.5 rounded-3 fw-semibold"
                >
                  {ta.cancelBtn}
                </button>
              </div>
            </form>
          ) : (
            /* ================= REGISTER FORM ================= */
            <form onSubmit={handleRegisterSubmit} className="py-2">
              
              {/* Section 1: Personal Information */}
              <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-1 border-bottom">
                <span className="section-dot bg-primary"></span>
                <h6 className="mb-0 fw-bold text-primary" style={{ fontSize: '0.92rem' }}>{ta.personalInfo}</h6>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.firstName} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <User size={15} />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      value={registerData.firstName}
                      onChange={handleRegisterChange}
                      className={`form-control ps-5 rounded-3 ${errors.firstName ? 'is-invalid' : ''}`}
                      placeholder={ta.firstNamePlaceholder}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.middleName}</label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <User size={15} />
                    </span>
                    <input
                      type="text"
                      name="middleName"
                      value={registerData.middleName}
                      onChange={handleRegisterChange}
                      className="form-control ps-5 rounded-3"
                      placeholder={ta.middleNamePlaceholder}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.lastName} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <User size={15} />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      value={registerData.lastName}
                      onChange={handleRegisterChange}
                      className={`form-control ps-5 rounded-3 ${errors.lastName ? 'is-invalid' : ''}`}
                      placeholder={ta.lastNamePlaceholder}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.gender} <span className="text-danger">*</span></label>
                  <select
                    name="gender"
                    value={registerData.gender}
                    onChange={handleRegisterChange}
                    className={`form-select rounded-3 ${errors.gender ? 'is-invalid' : ''}`}
                  >
                    <option value="">{ta.selectGender}</option>
                    <option value="Male">{ta.male}</option>
                    <option value="Female">{ta.female}</option>
                    <option value="Transgender">{ta.transgender}</option>
                    <option value="Other">{ta.other}</option>
                  </select>
                  {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.email} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <Mail size={15} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      className={`form-control ps-5 rounded-3 ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="example@mail.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.mobile} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <Phone size={15} />
                    </span>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={registerData.mobileNumber}
                      onChange={handleRegisterChange}
                      className={`form-control ps-5 rounded-3 ${errors.mobileNumber ? 'is-invalid' : ''}`}
                      placeholder={ta.mobilePlaceholder}
                      maxLength={10}
                    />
                    {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
                  </div>
                </div>
              </div>

              {/* Section 2: Address Information */}
              <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-1 border-bottom">
                <span className="section-dot bg-primary"></span>
                <h6 className="mb-0 fw-bold text-primary" style={{ fontSize: '0.92rem' }}>{ta.addressInfo}</h6>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">{ta.address} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-0 pt-2.5 ps-3 text-secondary">
                      <MapPin size={15} />
                    </span>
                    <textarea
                      name="address"
                      value={registerData.address}
                      onChange={handleRegisterChange}
                      rows={2}
                      className={`form-control ps-5 rounded-3 ${errors.address ? 'is-invalid' : ''}`}
                      placeholder={ta.addressPlaceholder}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.district} <span className="text-danger">*</span></label>
                  <select
                    name="district"
                    value={registerData.district}
                    onChange={handleRegisterChange}
                    className={`form-select rounded-3 ${errors.district ? 'is-invalid' : ''}`}
                  >
                    <option value="">{ta.selectDistrict}</option>
                    {districts.map((d, i) => (
                      <option key={i} value={d}>
                        {lang === 'मराठी' ? (districtNamesMr[d] || d) : d}
                      </option>
                    ))}
                  </select>
                  {errors.district && <div className="invalid-feedback d-block">{errors.district}</div>}
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.taluka} <span className="text-danger">*</span></label>
                  <select
                    name="taluka"
                    value={registerData.taluka}
                    onChange={handleRegisterChange}
                    className={`form-select rounded-3 ${errors.taluka ? 'is-invalid' : ''}`}
                    disabled={!registerData.district}
                  >
                    <option value="">{ta.selectTaluka}</option>
                    {registerData.district && talukasByDistrict[registerData.district]?.map((t, i) => (
                      <option key={i} value={t}>
                        {lang === 'मराठी' ? (talukaNamesMr[t] || t) : t}
                      </option>
                    ))}
                  </select>
                  {errors.taluka && <div className="invalid-feedback d-block">{errors.taluka}</div>}
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label small fw-bold text-secondary">{ta.village} <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="village"
                    value={registerData.village}
                    onChange={handleRegisterChange}
                    className={`form-control rounded-3 ${errors.village ? 'is-invalid' : ''}`}
                    placeholder={ta.villagePlaceholder}
                  />
                  {errors.village && <div className="invalid-feedback">{errors.village}</div>}
                </div>
              </div>

              {/* Section 3: Security & Verification */}
              <div className="form-section-title d-flex align-items-center gap-2 mb-3 pb-1 border-bottom">
                <span className="section-dot bg-primary"></span>
                <h6 className="mb-0 fw-bold text-primary" style={{ fontSize: '0.92rem' }}>{ta.securityInfo}</h6>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-secondary">{ta.passwordLabel} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <Lock size={15} />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      className={`form-control ps-5 pe-5 rounded-3 ${errors.password ? 'is-invalid' : ''}`}
                      placeholder={ta.passwordPlaceholderReg}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="position-absolute end-0 top-50 translate-middle-y pe-3 btn btn-link text-secondary py-0 border-0 shadow-none"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <div className="text-muted mt-1" style={{ fontSize: '0.72rem' }}>
                    {ta.passwordHint}
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-secondary">{ta.confirmPassword} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <span className="position-absolute start-0 top-50 translate-middle-y ps-3 text-secondary">
                      <Lock size={15} />
                    </span>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      className={`form-control ps-5 pe-5 rounded-3 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      placeholder={ta.confirmPasswordPlaceholder}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="position-absolute end-0 top-50 translate-middle-y pe-3 btn btn-link text-secondary py-0 border-0 shadow-none"
                    >
                      {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
                </div>

                {/* Google reCAPTCHA Simulator */}
                <div className="col-12 mt-3">
                  <div 
                    onClick={handleCaptchaClick}
                    className={`recaptcha-widget d-flex align-items-center justify-content-between p-3 rounded-2 border ${errors.captcha ? 'border-danger bg-danger bg-opacity-10' : 'border-secondary-subtle bg-light'}`}
                    style={{ maxWidth: '302px', cursor: 'pointer', userSelect: 'none' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="captcha-checkbox-wrapper position-relative">
                        {captchaLoading ? (
                          <Loader2 className="animate-spin text-primary" size={24} />
                        ) : captchaChecked ? (
                          <div className="captcha-checked-mark d-flex align-items-center justify-content-center bg-success text-white rounded-1" style={{ width: '24px', height: '24px' }}>
                            <Check size={16} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="captcha-empty-box border border-2 border-secondary border-opacity-50 bg-white rounded-1" style={{ width: '24px', height: '24px' }}></div>
                        )}
                      </div>
                      <span className="small fw-semibold text-secondary-emphasis" style={{ fontSize: '0.82rem' }}>
                        {ta.notRobot}
                      </span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        alt="reCAPTCHA logo" 
                        style={{ width: '28px', height: '28px' }}
                      />
                      <span className="text-muted" style={{ fontSize: '0.55rem' }}>reCAPTCHA</span>
                      <span className="text-muted" style={{ fontSize: '0.5rem', marginTop: '-2px' }}>Privacy - Terms</span>
                    </div>
                  </div>
                  {errors.captcha && <div className="text-danger small mt-1" style={{ fontSize: '0.78rem' }}><AlertCircle size={12} className="inline me-1" />{errors.captcha}</div>}
                </div>
              </div>

              {/* Register Action Buttons */}
              <div className="d-flex gap-3 mt-4 pt-2 border-top border-secondary border-opacity-10">
                <button 
                  type="submit" 
                  className="btn btn-primary px-5 py-2.5 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  disabled={submitSuccess}
                >
                  {submitSuccess ? <Loader2 size={18} className="animate-spin" /> : null}
                  <span>{ta.registerBtn}</span>
                </button>
                <button 
                  type="button" 
                  onClick={handleResetRegister} 
                  className="btn btn-outline-secondary px-4 py-2.5 rounded-3 fw-semibold"
                >
                  {ta.resetBtn}
                </button>
              </div>

              {/* Already have account */}
              <div className="text-center mt-3 text-secondary small">
                {ta.alreadyAccount}{' '}
                <button 
                  type="button" 
                  onClick={() => { setActiveTab('login'); setErrors({}); }} 
                  className="btn btn-link p-0 fw-bold border-0 align-baseline small text-decoration-none"
                  style={{ color: 'var(--primary-color)', fontSize: '0.85rem' }}
                >
                   {ta.logIn}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default AuthModal;
