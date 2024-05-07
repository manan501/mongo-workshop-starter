import fs from "fs";

const FILENAME = "initial-contacts.json";

export async function createInitialContacts() {
  if (fs.existsSync(FILENAME)) return JSON.parse(fs.readFileSync(FILENAME, { encoding: "utf-8" }));

  const contacts = [
    {
      _id: "055f1aaa-aab0-4ff3-a709-85c28f1d397f",
      name: "Luke Skywalker",
      phoneNumber: "+1 555-000-1001",
      funFact: "Has a green lightsaber in 'Return of the Jedi'."
    },
    {
      _id: "5f90d372-7bdf-4b39-b621-cf6d3cd975f4",
      name: "Hermione Granger",
      phoneNumber: "+1 555-000-1002",
      funFact: "Uses the Time-Turner in 'The Prisoner of Azkaban'."
    },
    {
      _id: "b8853e3f-38d1-4712-9071-8f62d71c19b8",
      name: "Walter White",
      phoneNumber: "+1 555-000-1003",
      funFact: "Is also known as Heisenberg."
    },
    {
      _id: "18fb9676-3c5b-4480-b8bc-4b9cc2f6ef28",
      name: "Darth Vader",
      phoneNumber: "+1 555-000-1004",
      funFact: "Was originally a Jedi named Anakin Skywalker."
    },
    {
      _id: "983c620f-6500-476f-a856-8791aac32794",
      name: "Tony Stark",
      phoneNumber: "+1 555-000-1005",
      funFact: "Is the real name of Iron Man."
    },
    {
      _id: "99fb1c56-98b3-41a9-b67b-580567495e86",
      name: "Sherlock Holmes",
      phoneNumber: "+1 555-000-1006",
      funFact: "Plays the violin when he is thinking."
    },
    {
      _id: "71b5ed07-9e1e-47d0-937a-64c396d5567b",
      name: "Bruce Wayne",
      phoneNumber: "+1 555-000-1007",
      funFact: "Lives in Gotham City."
    },
    {
      _id: "6b0c1d4f-8d2d-4a23-b6e8-8830a0cd5c06",
      name: "Jon Snow",
      phoneNumber: "+1 555-000-1008",
      funFact: "Knows nothing, but is the King in the North."
    },
    {
      _id: "e8b2c85a-4c25-4ea2-953b-9c77f9d08a10",
      name: "Marty McFly",
      phoneNumber: "+1 555-000-1009",
      funFact: "Travels in time using a DeLorean."
    },
    {
      _id: "e3f778de-494c-40d3-a60c-cd15f124b9b2",
      name: "Indiana Jones",
      phoneNumber: "+1 555-000-1010",
      funFact: "Has a phobia of snakes."
    },
    {
      _id: "d9bb7458-d5ad-4e08-a1a0-ee9c35f82edf",
      name: "Harry Potter",
      phoneNumber: "+1 555-000-1011",
      funFact: "Is known as the Boy Who Lived."
    },
    {
      _id: "0e37df36-f698-41e4-8270-3b5ded18a4ff",
      name: "Ellen Ripley",
      phoneNumber: "+1 555-000-1012",
      funFact: "Is the main character in the movie 'Alien'."
    },
    {
      _id: "f84676e0-c6a5-4b0b-9ae6-ac3c54c0bfe7",
      name: "Jack Sparrow",
      phoneNumber: "+1 555-000-1013",
      funFact: "Is a pirate captain in the Caribbean."
    },
    {
      _id: "dafe7260-70d7-4499-85be-aee7da3879e3",
      name: "Frodo Baggins",
      phoneNumber: "+1 555-000-1014",
      funFact: "Is the ring-bearer in 'The Lord of the Rings'."
    },
    {
      _id: "56733c1b-f8c2-4d72-abe0-d533c2458c0f",
      name: "Arya Stark",
      phoneNumber: "+1 555-000-1015",
      funFact: "Has a list of people she wants to kill."
    },
    {
      _id: "fa2dd6ee-5b0b-4086-a0bd-61c60d7366ec",
      name: "Neo",
      phoneNumber: "+1 555-000-1016",
      funFact: "Is the One in 'The Matrix'."
    },
    {
      _id: "9b124e27-bf31-4571-a834-a3d9ecce9264",
      name: "Michael Corleone",
      phoneNumber: "+1 555-000-1017",
      funFact: "Is the Godfather's youngest son."
    },
    {
      _id: "45e9dced-d11b-418b-aada-4e9d9d15e0a6",
      name: "Spock",
      phoneNumber: "+1 555-000-1018",
      funFact: "His home planet is Vulcan."
    },
    {
      _id: "3b62658c-3c23-4bfc-812b-36b0c6076dd8",
      name: "Katniss Everdeen",
      phoneNumber: "+1 555-000-1019",
      funFact: "Is known as the 'Girl on Fire'."
    },
    {
      _id: "49cfa77f-9c68-4c09-b712-eabdd97f1dc3",
      name: "Bilbo Baggins",
      phoneNumber: "+1 555-000-1020",
      funFact: "Found the One Ring by accident."
    },
    {
      _id: "528076ba-ea3e-40eb-9a3a-ee6e3c25fbd9",
      name: "Tyler Durden",
      phoneNumber: "+1 555-000-1021",
      funFact: "Is a soap salesman and the narrator's alter ego."
    },
    {
      _id: "8a56feb1-4c7d-4426-aefa-eb6e6063a9f2",
      name: "Gandalf",
      phoneNumber: "+1 555-000-1022",
      funFact: "Is known to say 'You shall not pass!'."
    },
    {
      _id: "0b5eaba6-eb2a-4ea6-980e-b12b85dd688b",
      name: "Norman Bates",
      phoneNumber: "+1 555-000-1023",
      funFact: "Runs the Bates Motel."
    },
    {
      _id: "ad6de0a7-5d67-43a7-97e5-632c9f4b1a53",
      name: "Peter Parker",
      phoneNumber: "+1 555-000-1024",
      funFact: "Is also known as Spider-Man."
    },
    {
      _id: "8bcf2093-58c1-403b-a350-3d422e999032",
      name: "James Bond",
      phoneNumber: "+1 555-000-1025",
      funFact: "Is known by his code number, 007."
    },
    {
      _id: "cbead8c9-c93d-4991-9303-2ef9f9789fe2",
      name: "Leia Organa",
      phoneNumber: "+1 555-000-1026",
      funFact: "Is Luke Skywalker's sister."
    },
    {
      _id: "9b75c3ba-3a75-4418-9122-1baaf5a50de8",
      name: "Rick Sanchez",
      phoneNumber: "+1 555-000-1027",
      funFact: "Is known for his interdimensional adventures."
    },
    {
      _id: "f8f5e430-29ea-4a90-bb99-84c7388b27c1",
      name: "Michael Scott",
      phoneNumber: "+1 555-000-1028",
      funFact: "Is the regional manager of Dunder Mifflin Scranton."
    },
    {
      _id: "a6e9ac1f-db5b-4064-a599-1057f2dc5510",
      name: "Jesse Pinkman",
      phoneNumber: "+1 555-000-1029",
      funFact: "Frequently says 'Yeah, science!' in 'Breaking Bad'."
    },
    {
      _id: "b0a0b9b2-9225-4b25-9b7e-6f7f5e3b1736",
      name: "Clarice Starling",
      phoneNumber: "+1 555-000-1030",
      funFact: "Is an FBI trainee in 'The Silence of the Lambs'."
    },
    {
      _id: "91d5be5e-9d75-4036-9638-320c1e957b59",
      name: "Forrest Gump",
      phoneNumber: "+1 555-000-1031",
      funFact: "Says 'Life is like a box of chocolates.'"
    },
    {
      _id: "54e8a140-a849-4342-97ae-1acd9ae3d3c3",
      name: "Vito Corleone",
      phoneNumber: "+1 555-000-1032",
      funFact: "Is the original Godfather."
    },
    {
      _id: "60f5b60f-e000-4b6b-866f-2aa5d3cfe713",
      name: "Hannibal Lecter",
      phoneNumber: "+1 555-000-1033",
      funFact: "Is a cannibalistic psychiatrist."
    },
    {
      _id: "1c843e4c-41ca-4ac3-b921-908c5fd5c530",
      name: "Mulder",
      phoneNumber: "+1 555-000-1034",
      funFact: "Believes 'The truth is out there' in 'The X-Files'."
    },
    {
      _id: "3f544e55-0932-4d70-abad-a29c7de3edec",
      name: "Scully",
      phoneNumber: "+1 555-000-1035",
      funFact: "Is a medical doctor and Mulder's partner in 'The X-Files'."
    },
    {
      _id: "ec0aaaf5-2d7e-4c0a-90d8-2900a171c55b",
      name: "Tyrion Lannister",
      phoneNumber: "+1 555-000-1036",
      funFact: "Is known for his wit and love of wine."
    },
    {
      _id: "53bb3a80-f265-436f-81c7-ecb5d79596c1",
      name: "Elizabeth Bennet",
      phoneNumber: "+1 555-000-1037",
      funFact: "Is the protagonist of 'Pride and Prejudice'."
    },
    {
      _id: "4e93cbb5-1173-4a72-aff4-f6f2f3f153c1",
      name: "Bruce Banner",
      phoneNumber: "+1 555-000-1038",
      funFact: "Turns into the Hulk when he is angry."
    },
    {
      _id: "45ef1318-07c4-4c5f-ba8b-8d2d3d285b99",
      name: "Don Draper",
      phoneNumber: "+1 555-000-1039",
      funFact: "Is a creative director in 'Mad Men'."
    },
    {
      _id: "c4f7fc8a-0a58-49ea-abde-a4bf8283dc78",
      name: "Goku",
      phoneNumber: "+1 555-000-1040",
      funFact: "Can transform into a Super Saiyan."
    }
  ];

  const photoJson = await fetch(`https://randomuser.me/api/?results=${contacts.length}`).then((r) =>
    r.json()
  );
  const photoUrls = photoJson.results.map((r) => r.picture.large);

  console.log("Photos for initial contacts generated successfully!");

  const contactsWithImages = contacts.map((c, i) => ({ ...c, photoUrl: photoUrls[i] }));

  fs.writeFileSync(FILENAME, JSON.stringify(contactsWithImages), { encoding: "utf-8" });

  return contactsWithImages;
}
