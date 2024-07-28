import { values } from "../enums";


// Method to get a random element from an array
export function RandomNameGenerator(nameOrLastname: values) {
  let firstNames: string[] = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
  ];

  let lastNames: string[] = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
  ];

  if (nameOrLastname == values.Nombre) {
    return getRandomElement(firstNames);
  } else {
    return getRandomElement(lastNames);
  }

}


function getRandomElement(arr: string[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);  
  return arr[randomIndex];
}

