import "./styles.css";
import { useState } from "react";

const danceForms = {
  "Andhra Pradesh": [
    "Kuchipudi",
    "Vilasini Natyam",
    "Andhra Natyam",
    "Bhamakalpam",
    "Veeranatyam",
    "Dappu",
    "Tappeta Gullu",
    "Lambadi",
    "Dhimsa",
    "Kolattam",
    "Butta Bommalu"
  ],

  Assam: [
    "Bihu",
    "Bichhua",
    "Natpuja",
    "Maharas",
    "Kaligopal",
    "Bagurumba",
    "Naga dance",
    "Khel Gopal",
    "Tabal Chongli",
    "Canoe",
    "Jhumura Hobjanai"
  ],

  Bihar: ["Jata-Jatin", "Bakho-Bakhain", "Panwariya", "Sama Chakwa", "Bidesia"],

  Gujarat: ["Garba", "Dandiya Ras", "Tippani Juriun", "Bhavai"],

  Haryana: [
    "Jhumar",
    "Phag",
    "Daph",
    "Dhamal",
    "Loor",
    "Gugga",
    "Khor",
    "Gagor"
  ],

  "Himachal Pradesh": [
    "Jhora",
    "Jhali",
    "Chharhi",
    "Dhaman",
    "Chhapeli",
    "Mahasu",
    "Nati",
    "Dangi"
  ],

  "Jammu and Kashmir": ["Rauf", "Hikat", "Mandjas", "Kud Dandi Nach", "Damali"],

  Karnataka: ["Yakshagan", "Huttari", "Suggi", "Kunitha", "Karga", "Lambi"],

  Kerala: ["Kathakali", "Ottam Thulal", "Mohiniattam", "Kaikottikali"],

  Maharashtra: [
    "Lavani",
    "Nakata",
    "Koli",
    "Lezim",
    "Gafa",
    "Dahikala Dasavtar or Bohada"
  ],

  Odisha: ["Odissi", "Savari", "Ghumara", "Painka", "Munari", "Chhau"],

  "West Bengal": [
    "Kathi",
    "Gambhira",
    "Dhali",
    "Jatra",
    "Baul",
    "Marasia",
    "Mahal",
    "Keertan"
  ],

  Punjab: ["Bhangra", "Giddha", "Daff", "Dhaman", "Bhand", "Naqual"],

  Rajasthan: [
    "Ghumar",
    "Chakri",
    "Ganagor",
    "Jhulan Leela",
    "Jhuma",
    "Suisini",
    "Ghapal",
    "Kalbeliya"
  ],

  "Tamil Nadu": ["Bharatanatyam", "Kumi", "Kolattam", "Kavadi"],

  "Uttar Pradesh": [
    "Nautanki",
    "Raslila",
    "Kajri",
    "Jhora",
    "Chappeli",
    "Jaita"
  ],

  Uttarakhand: [
    "Garhwali",
    "Kumayuni",
    "Kajari",
    "Jhora",
    "Raslila",
    "Chappeli"
  ],

  Goa: [
    "Tarangamel",
    "Koli",
    "Dekhni",
    "Fugdi",
    "Shigmo",
    "Ghode",
    "Modni",
    "Samayi nrutya",
    "Jagar",
    "Ranmale",
    "Gonph",
    "Tonnya mell"
  ],

  "Madhya Pradesh": [
    "Jawara",
    "Matki",
    "Aada",
    "Khada Nach",
    "Phulpati",
    "Grida Dance",
    "Selalarki",
    "Selabhadoni",
    "Maanch"
  ],

  Chhattisgarh: [
    "Gaur Maria",
    "Panthi",
    "Raut Nacha",
    "Pandwani",
    "Vedamati",
    "Kapalik",
    "Bharthari Charit",
    "Chandaini"
  ],

  Jharkhand: [
    "Alkap",
    "Karma Munda",
    "Agni",
    "Jhumar",
    "Janani Jhumar",
    "Mardana Jhumar",
    "Paika",
    "Phagua",
    "Hunta Dance",
    "Mundari Dance",
    "Sarhul",
    "Barao",
    "Jhitka",
    "Danga",
    "Domkach",
    "Ghora Naach"
  ],

  "Arunachal Pradesh": [
    "Buiya",
    "Chalo",
    "Wancho",
    "Pasi Kongki",
    "Ponung",
    "Popir",
    "Bardo Chham"
  ],

  Manipur: [
    "Dol Cholam",
    "Thang Ta",
    "Lai Haraoba",
    "Pung Cholom",
    "Khamba Thaibi",
    "Nupa Dance",
    "Raslila",
    "Khubak Ishei",
    "Lhou Sha"
  ],

  Meghalaya: ["Ka Shad Suk Mynsiem", "Nongkrem", "Laho"],

  Mizoram: [
    "Cheraw Dance",
    "Khuallam",
    "Chailam",
    "Sawlakin",
    "Chawnglaizawn",
    "Zangtalam",
    "Par Lam",
    "Sarlamkai-Solakia",
    "Tlanglam"
  ],

  Nagaland: [
    "Rangma",
    "Bamboo Dance",
    "Zeliang",
    "Nsuirolians",
    "Gethinglim",
    "Temangnetin",
    "Hetaleulee"
  ],

  Tripura: ["Hojagiri"],

  Sikkim: [
    "Chu Faat Dance",
    "Sikmari",
    "Singhi Chaam or the Snow Lion Dance",
    "Yak Chaam",
    "Denzong Gnenha",
    "Tashi Yangku Dance",
    "Khukuri Naach",
    "Chutkey Naach",
    "Maruni Dance"
  ],

  Lakshadweep: ["Lava", "Kolkali", "Parichakali"]
};

const danceFormsArr = Object.keys(danceForms);

export default function App() {
  const [dances, setDances] = useState("");

  const [initialHeading, setIntialHeading] = useState("State Lists");
  
  const [initialDance, setInitialDance] = useState("State Dances");

  function clickHandleChange(dances) {
    setDances(
      danceForms[dances].map((dan) => {
        return (
          <li className="state-dance-list" key={dan}>
            {dan}
          </li>
        );
      })
    );
    setIntialHeading(dances);
    setInitialDance(dances);
  }

  return (
    <div className="App">
      <h1 className="head">
        <span className="dif-shade">Indian</span> Dance According to states
      </h1>

      <h3>{initialDance} </h3>

      <div className="dance-form">{dances}</div>

      <div className="head bold">{initialHeading}</div>

      <div className="states-name">
        {danceFormsArr.map((items) => {
          return (
            <li
              className="list-item"
              key={items}
              onClick={() => clickHandleChange(items)}
            >
              {items}
            </li>
          );
        })}
      </div>
    </div>
  );
}
