
// objekt objektis

// const tegelane = {
//     isiklikudAndmed: {
//         eesnimi: "Harry",
//         perekonnanimi: "Potter",
//         vanus: 17,
//         linn: "London"
//     },
//     eriala: "Nõiduskunst"
// };

// const {isiklikudAndmed: {perekonnanimi: lastName, vanus: age}, eriala: profession} = tegelane;

// // const firstname = tegelane.eesnimi;
// // const lastname = tegelane.perekonnanimi;


// console.log(`Last Name: ${lastName}; Age: ${age}; Profession: ${profession}`);

const numbrid = [1,2,3,4,5];

const [first, second, third, fourth, fifth] = numbrid;

// const firstElement = numbrid[0];
// const lastElement = numbrid[numbrid.length-1];
const [firstElement,,,, lastElement] = numbrid;



const kool = {
    nimi: "Hogwarts",
    asukoht: {
        linn: "Hogsmeade",
        maakond: "Soti kõrge-Šotimaa",
        riik: "Suurbritannia"

    },
    tudeng: [
    {
        eesnimi: "Harry",
        perenimi: "Potter",
        majad: ["Gryffindor", "Kolmas aasta"]
    },
    {
        eesnimi: "Hermione",
        perenimi: "Granger",
        majad: ["Gryffindor", "Kolmas aasta"]
        
    }
]
};

const {tudeng: students} = kool;
const [harry, hermione] = students;

const {eesnimi: harryFirstname} = harry;
const {eesnimi: hermioneFirstname} = hermione;

console.log(`${harryFirstname} and ${hermioneFirstname} are friends.`);




const eestiAndmed = {
    riik: 'Eesti', 
    pealinn: 'Tallinn', 
    elanikkond: 1326535,  
    pindalaRuutkilomeetrites: 45227, 
    ametlikKeel: 'eesti keel',  
    valuuta: 'euro (EUR)',  
    ajavöönd: 'Ida-Euroopa aeg (EET)',   
    telefonikood: '+372',   
    naaberriigid: [   
      {  
        nimi: 'Läti', 
        pealinn: 'Riia', 
        elanikkond: 1901548, 
      },   
      {    
        nimi: 'Soome',
        pealinn: 'Helsingi',
        elanikkond: 5540720,
      },
      {
        nimi: 'Rootsi',
        pealinn: 'Stockholm',
        elanikkond: 10367232,
      },  
    ], 
  };

  const {naaberriigid: neighbouringCountries} = eestiAndmed; //naaberriikide massiiv 
  const [latvia, findland, sweden] = neighbouringCountries;
  const {pealinn} = latvia; 
  console.log(pealinn);




