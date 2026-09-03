const universeThemes = {
  "MCU": {
    "name": "Earth-616 Sacred Timeline",
    "primary": "#E62429",
    "secondary": "#FACC15"
  },
  "Fox": {
    "name": "Earth-10005 Mutant Realm",
    "primary": "#3B82F6",
    "secondary": "#FACC15"
  },
  "Sony": {
    "name": "Earth-688 Spider-Verse",
    "primary": "#E11D48",
    "secondary": "#06B6D4"
  },
  "Netflix": {
    "name": "The Defenders Saga",
    "primary": "#E50914",
    "secondary": "#F59E0B"
  },
  "ABC": {
    "name": "S.H.I.E.L.D. Division",
    "primary": "#F59E0B",
    "secondary": "#3B82F6"
  },
  "Other": {
    "name": "Legacy & One-Offs",
    "primary": "#64748B",
    "secondary": "#94A3B8"
  },
  "All": {
    "name": "Multiverse Nexus",
    "primary": "#E62429",
    "secondary": "#F59E0B"
  }
};

const marvelProjects = [
  {
    "id": 1,
    "title": "Eyes of Wakanda",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 1,
    "releaseDate": "2025-08-01",
    "description": "An animated exploration of Wakanda's history and its War Dogs across different eras.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 2,
    "title": "Captain America: The First Avenger",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 2,
    "releaseDate": "2011-07-22",
    "description": "The origin of Steve Rogers during WWII. Essential for understanding the Super Soldier serum.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 3,
    "title": "Captain Marvel",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 3,
    "releaseDate": "2019-03-08",
    "description": "Set in the 1990s, this introduces Carol Danvers and the Kree-Skrull conflict.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 4,
    "title": "Iron Man",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 4,
    "releaseDate": "2008-05-02",
    "description": "The project that started it all. Introduces Tony Stark and the concept of the MCU.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 5,
    "title": "Iron Man 2",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 5,
    "releaseDate": "2010-05-07",
    "description": "Stark deals with the fallout of his identity and the introduction of Black Widow.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 6,
    "title": "The Incredible Hulk",
    "category": "Movie",
    "universe": "MCU",
    "timelineOrder": 6,
    "releaseDate": "2008-06-13",
    "description": "Bruce Banner's struggle with the Hulk. Occurs roughly alongside Iron Man 2.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 7,
    "title": "Thor",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 7,
    "releaseDate": "2011-05-06",
    "description": "Introduces the cosmic side of the MCU and the God of Thunder.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 8,
    "title": "The Avengers",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 8,
    "releaseDate": "2012-05-04",
    "description": "The first time the core team unites to stop Loki's invasion of New York.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 9,
    "title": "Thor: The Dark World",
    "category": "Movie",
    "universe": "MCU",
    "timelineOrder": 9,
    "releaseDate": "2013-11-08",
    "description": "Thor faces the Dark Elves in a quest to protect the Aether.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 10,
    "title": "Iron Man 3",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 10,
    "releaseDate": "2013-05-03",
    "description": "Tony Stark's personal journey with PTSD following the Battle of New York.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 11,
    "title": "Captain America: The Winter Soldier",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 11,
    "releaseDate": "2014-04-04",
    "description": "A political thriller that exposes HYDRA within S.H.I.E.L.D.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 12,
    "title": "Guardians of the Galaxy",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 12,
    "releaseDate": "2014-08-01",
    "description": "Introduces the cosmic misfits and the Power Stone.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 13,
    "title": "Guardians of the Galaxy Vol. 2",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 13,
    "releaseDate": "2017-05-05",
    "description": "Peter Quill discovers the truth about his father.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 14,
    "title": "Avengers: Age of Ultron",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 14,
    "releaseDate": "2015-05-01",
    "description": "The Avengers battle an AI gone rogue created by Tony Stark.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 15,
    "title": "Ant-Man",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 15,
    "releaseDate": "2015-07-17",
    "description": "Scott Lang discovers the power of shrinking.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 16,
    "title": "Captain America: Civil War",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 16,
    "releaseDate": "2016-05-06",
    "description": "The Avengers split over government oversight, leading to a massive clash.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 17,
    "title": "Black Widow",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 17,
    "releaseDate": "2021-07-09",
    "description": "Takes place immediately after Civil War; Natasha deals with her past.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 18,
    "title": "Black Panther",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 18,
    "releaseDate": "2018-02-16",
    "description": "Introduction to the hidden kingdom of Wakanda.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 19,
    "title": "Spider-Man: Homecoming",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 19,
    "releaseDate": "2017-07-07",
    "description": "Peter Parker's early days balancing school and heroism.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 20,
    "title": "Doctor Strange",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 20,
    "releaseDate": "2016-11-04",
    "description": "Explores the mystic arts and the Time Stone.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 21,
    "title": "Thor: Ragnarok",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 21,
    "releaseDate": "2017-11-03",
    "description": "The destruction of Asgard and the lead-up to Infinity War.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 22,
    "title": "Ant-Man and the Wasp",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 22,
    "releaseDate": "2018-07-06",
    "description": "Scott and Hope venture into the Quantum Realm. Watch before Infinity War.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 23,
    "title": "Avengers: Infinity War",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 23,
    "releaseDate": "2018-04-27",
    "description": "The climax of the Infinity Saga as Thanos seeks all six stones.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 24,
    "title": "Avengers: Endgame",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 24,
    "releaseDate": "2019-04-26",
    "description": "The resolution of the Infinity Saga and the 'Blip'.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 25,
    "title": "Loki",
    "category": "Series",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 25,
    "releaseDate": "2021-06-09",
    "description": "Exists outside of linear time; essentially the catalyst for the Multiverse Saga.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 26,
    "title": "What If...?",
    "category": "Series",
    "universe": "MCU",
    "timelineOrder": 26,
    "releaseDate": "2021-08-11",
    "description": "Animated exploration of alternate timelines. Non-linear viewing.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 3
  },
  {
    "id": 27,
    "title": "WandaVision",
    "category": "Series",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 27,
    "releaseDate": "2021-01-15",
    "description": "Wanda's grief manifests as a simulated suburban reality.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 28,
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 28,
    "releaseDate": "2021-09-03",
    "description": "Introduces Shang-Chi and the cosmic origins of the Ten Rings.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 29,
    "title": "The Falcon and the Winter Soldier",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 29,
    "releaseDate": "2021-03-19",
    "description": "Sam Wilson's journey to becoming the new Captain America.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 30,
    "title": "Spider-Man: Far From Home",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 30,
    "releaseDate": "2019-07-02",
    "description": "Post-Endgame transition for Peter Parker.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 31,
    "title": "Spider-Man: No Way Home",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 31,
    "releaseDate": "2021-12-17",
    "description": "A multiversal event that resets Peter's social standing.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 32,
    "title": "Eternals",
    "category": "Movie",
    "universe": "MCU",
    "timelineOrder": 32,
    "releaseDate": "2021-11-05",
    "description": "Immortal protectors of Earth reveal themselves after thousands of years.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 33,
    "title": "Doctor Strange in the Multiverse of Madness",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 33,
    "releaseDate": "2022-05-06",
    "description": "Strange and Wanda explore the dangers of the multiverse.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 34,
    "title": "Hawkeye",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 34,
    "releaseDate": "2021-11-24",
    "description": "Clint Barton mentors Kate Bishop during the holiday season.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 35,
    "title": "Moon Knight",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 35,
    "releaseDate": "2022-03-30",
    "description": "Marc Spector and the Egyptian god Khonshu.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 36,
    "title": "Black Panther: Wakanda Forever",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 36,
    "releaseDate": "2022-11-11",
    "description": "Wakanda mourns T'Challa and faces the kingdom of Talokan.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 37,
    "title": "She-Hulk: Attorney at Law",
    "category": "Series",
    "universe": "MCU",
    "timelineOrder": 37,
    "releaseDate": "2022-08-18",
    "description": "Jennifer Walters navigates the law and her new gamma powers.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 38,
    "title": "Ms. Marvel",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 38,
    "releaseDate": "2022-06-08",
    "description": "Kamala Khan's origin as a superfan turned superhero.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 39,
    "title": "Thor: Love and Thunder",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 39,
    "releaseDate": "2022-07-08",
    "description": "Thor's battle with Gorr the God Butcher.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 40,
    "title": "Ant-Man and the Wasp: Quantumania",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 40,
    "releaseDate": "2023-02-17",
    "description": "The first major movie of Phase 5, introducing Kang the Conqueror.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 41,
    "title": "Guardians of the Galaxy Vol. 3",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 41,
    "releaseDate": "2023-05-05",
    "description": "The emotional conclusion to the Guardians' trilogy.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 42,
    "title": "Secret Invasion",
    "category": "Series",
    "universe": "MCU",
    "timelineOrder": 42,
    "releaseDate": "2023-06-21",
    "description": "Nick Fury deals with a Skrull infiltration on Earth.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 43,
    "title": "The Marvels",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 43,
    "releaseDate": "2023-11-10",
    "description": "Captain Marvel, Ms. Marvel, and Monica Rambeau team up.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 44,
    "title": "Deadpool & Wolverine",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 44,
    "releaseDate": "2024-07-26",
    "description": "Multiversal team-up to save their respective timelines.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 45,
    "title": "Agatha All Along",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 45,
    "releaseDate": "2024-09-18",
    "description": "Agatha's journey to regain her magic in a coven.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 46,
    "title": "Captain America: Brave New World",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 46,
    "releaseDate": "2025-02-14",
    "description": "Sam Wilson's first lead film as Captain America.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 47,
    "title": "Thunderbolts*",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 47,
    "releaseDate": "2025-05-02",
    "description": "A team of anti-heroes recruited for government covert ops.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 48,
    "title": "The Fantastic Four: First Steps",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 48,
    "releaseDate": "2025-07-25",
    "description": "The First Family debuts in a retro-futuristic universe.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 49,
    "title": "Daredevil: Born Again",
    "category": "Series",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 49,
    "releaseDate": "2025-03-04",
    "description": "Matt Murdock returns to fight crime in Hell's Kitchen.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 50,
    "title": "Ironheart",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 50,
    "releaseDate": "2025-06-24",
    "description": "Riri Williams' journey as a technological prodigy.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 51,
    "title": "Wonder Man",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 51,
    "releaseDate": "2026-01-27",
    "description": "An actor with powers attempts to find his place in the world.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 52,
    "title": "The Punisher: One Last Kill",
    "category": "Special",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 52,
    "releaseDate": "2026-05-12",
    "description": "Frank Castle's high-stakes return for one final mission.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 53,
    "title": "Spider-Man: Brand New Day",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 53,
    "releaseDate": "2026-07-31",
    "description": "Peter Parker's return as a forgotten hero in NYC.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 54,
    "title": "I Am Groot",
    "category": "Series",
    "universe": "MCU",
    "timelineOrder": 54,
    "releaseDate": "2022-08-10",
    "description": "Short animated adventures focusing on baby Groot's chaotic explorations across the galaxy.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 55,
    "title": "Werewolf by Night",
    "category": "Special",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 55,
    "releaseDate": "2022-10-07",
    "description": "A gothic horror story featuring monster hunters.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 56,
    "title": "Guardians of the Galaxy Holiday Special",
    "category": "Special",
    "universe": "MCU",
    "timelineOrder": 56,
    "releaseDate": "2022-11-25",
    "description": "The Guardians celebrate Christmas in space.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 101,
    "title": "X-Men",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 1001,
    "releaseDate": "2000-01-01",
    "description": "The foundation of the modern mutant cinematic era.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 102,
    "title": "X2: X-Men United",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 1002,
    "releaseDate": "2003-01-01",
    "description": "Often considered the best of the original trilogy.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 103,
    "title": "X-Men: The Last Stand",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 1003,
    "releaseDate": "2006-01-01",
    "description": "The conclusion to the initial trilogy.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 104,
    "title": "X-Men Origins: Wolverine",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 1004,
    "releaseDate": "2009-01-01",
    "description": "Explores Logan's early days and relationship with Sabretooth.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 105,
    "title": "X-Men: First Class",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 1005,
    "releaseDate": "2011-01-01",
    "description": "A prequel focusing on the early bond between Xavier and Magneto.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 106,
    "title": "The Wolverine",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 1006,
    "releaseDate": "2013-01-01",
    "description": "Takes the action to Japan for a more personal struggle.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 107,
    "title": "X-Men: Days of Future Past",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 1007,
    "releaseDate": "2014-01-01",
    "description": "A clever crossover between the original and prequel casts.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 108,
    "title": "X-Men: Apocalypse",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 1008,
    "releaseDate": "2016-01-01",
    "description": "Features the arrival of one of the most powerful mutants.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 109,
    "title": "Deadpool",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 1009,
    "releaseDate": "2016-01-01",
    "description": "A meta, R-rated break from traditional superhero tropes.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 110,
    "title": "Logan",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 110,
    "releaseDate": "2017-01-01",
    "description": "A gritty, emotional farewell to Hugh Jackman's Wolverine.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 111,
    "title": "Deadpool 2",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 111,
    "releaseDate": "2018-01-01",
    "description": "More chaos and fourth-wall breaking.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 112,
    "title": "Dark Phoenix",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 112,
    "releaseDate": "2019-01-01",
    "description": "Focuses on Jean Grey's destructive cosmic power.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 113,
    "title": "The New Mutants",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 113,
    "releaseDate": "2020-01-01",
    "description": "A psychological horror take on the mutant genre.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 114,
    "title": "Legion",
    "category": "Series",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 114,
    "releaseDate": "2017-01-01",
    "description": "A highly stylized, surreal exploration of mental illness and mutant power.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 3
  },
  {
    "id": 115,
    "title": "The Gifted",
    "category": "Series",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 115,
    "releaseDate": "2017-01-01",
    "description": "Focuses on mutant fugitives and the underground railroad.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 116,
    "title": "Fantastic Four",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 116,
    "releaseDate": "2005-01-01",
    "description": "The first cinematic attempt at the First Family.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 117,
    "title": "Fantastic Four: Rise of the Silver Surfer",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 117,
    "releaseDate": "2007-01-01",
    "description": "Introduces the iconic cosmic herald.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 118,
    "title": "Fantastic Four",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 118,
    "releaseDate": "2015-01-01",
    "description": "A darker, more grounded reboot.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 119,
    "title": "Spider-Man",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Essential",
    "timelineOrder": 119,
    "releaseDate": "2002-01-01",
    "description": "The Sam Raimi classic that kickstarted the modern era.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 120,
    "title": "Spider-Man 2",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Essential",
    "timelineOrder": 120,
    "releaseDate": "2004-01-01",
    "description": "Widely considered one of the best superhero sequels ever.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 121,
    "title": "Spider-Man 3",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 121,
    "releaseDate": "2007-01-01",
    "description": "The conclusion to the Tobey Maguire era.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 122,
    "title": "The Amazing Spider-Man",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 122,
    "releaseDate": "2012-01-01",
    "description": "A reboot featuring Andrew Garfield's Peter Parker.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 123,
    "title": "The Amazing Spider-Man 2",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 123,
    "releaseDate": "2014-01-01",
    "description": "Introduces Electro and a different take on the mythos.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 124,
    "title": "Spider-Man: Into the Spider-Verse",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Essential",
    "timelineOrder": 124,
    "releaseDate": "2018-01-01",
    "description": "Groundbreaking animation introducing Miles Morales.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 125,
    "title": "Spider-Man: Across the Spider-Verse",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Essential",
    "timelineOrder": 125,
    "releaseDate": "2023-01-01",
    "description": "Expands the multiverse with stunning visuals.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 126,
    "title": "Venom",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 126,
    "releaseDate": "2018-01-01",
    "description": "The start of the Sony Spider-Man Universe (SSU).",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 127,
    "title": "Venom: Let There Be Carnage",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 127,
    "releaseDate": "2021-01-01",
    "description": "Focuses on the rivalry between Venom and Carnage.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 128,
    "title": "Venom: The Last Dance",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 128,
    "releaseDate": "2024-01-01",
    "description": "The finale of the Venom trilogy.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 129,
    "title": "Morbius",
    "category": "Movie",
    "universe": "Sony",
    "timelineOrder": 129,
    "releaseDate": "2022-01-01",
    "description": "A story about a living vampire.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 130,
    "title": "Madame Web",
    "category": "Movie",
    "universe": "Sony",
    "timelineOrder": 130,
    "releaseDate": "2024-01-01",
    "description": "A prequel exploring precognition within the SSU.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 131,
    "title": "Spider-Noir",
    "category": "Series",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 131,
    "releaseDate": "2025-12-01",
    "description": "In 1930s New York, an aging, down-on-his-luck private investigator grapples with his past as the city's one and only superhero.",
    "platform": "Other",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 132,
    "title": "Kraven the Hunter",
    "category": "Movie",
    "universe": "Sony",
    "timelineOrder": 132,
    "releaseDate": "2024-12-13",
    "description": "The origin story of the world's greatest hunter.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 133,
    "title": "Ghost Rider",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 133,
    "releaseDate": "2007-01-01",
    "description": "Supernatural action featuring a flaming skull.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 134,
    "title": "Ghost Rider: Spirit of Vengeance",
    "category": "Movie",
    "universe": "Sony",
    "timelineOrder": 134,
    "releaseDate": "2011-01-01",
    "description": "A more experimental sequel to the first film.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 135,
    "title": "Daredevil",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 135,
    "releaseDate": "2003-01-01",
    "description": "The first cinematic take on the blind lawyer.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 136,
    "title": "Elektra",
    "category": "Movie",
    "universe": "Fox",
    "timelineOrder": 136,
    "releaseDate": "2005-01-01",
    "description": "A spin-off focusing on the assassin Elektra.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 137,
    "title": "Blade",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 137,
    "releaseDate": "1998-01-01",
    "description": "The film that proved adult-oriented superhero movies could work.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 138,
    "title": "Blade II",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 138,
    "releaseDate": "2002-01-01",
    "description": "Introduces the Reaper vampires.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 139,
    "title": "Blade: Trinity",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Recommended",
    "timelineOrder": 139,
    "releaseDate": "2004-01-01",
    "description": "The final chapter of the original Blade trilogy.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 140,
    "title": "Hulk",
    "category": "Movie",
    "universe": "Other",
    "timelineOrder": 140,
    "releaseDate": "2003-01-01",
    "description": "Ang Lee's stylized take on Bruce Banner.",
    "platform": "Other",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 141,
    "title": "The Punisher",
    "category": "Movie",
    "universe": "Other",
    "guide": "Recommended",
    "timelineOrder": 141,
    "releaseDate": "2004-01-01",
    "description": "A gritty revenge story about Frank Castle.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 142,
    "title": "Punisher: War Zone",
    "category": "Movie",
    "universe": "Other",
    "guide": "Recommended",
    "timelineOrder": 142,
    "releaseDate": "2008-01-01",
    "description": "A high-octane, comic-accurate action movie.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 143,
    "title": "Howard the Duck",
    "category": "Movie",
    "universe": "Other",
    "timelineOrder": 143,
    "releaseDate": "1986-01-01",
    "description": "A cult classic comedy featuring a talking duck.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 144,
    "title": "Men in Black",
    "category": "Movie",
    "universe": "Sony",
    "guide": "Essential",
    "timelineOrder": 144,
    "releaseDate": "1997-01-01",
    "description": "Based on Malibu Comics; focuses on alien policing.",
    "platform": "Netflix",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 145,
    "title": "Kick-Ass",
    "category": "Movie",
    "universe": "Other",
    "guide": "Recommended",
    "timelineOrder": 145,
    "releaseDate": "2010-01-01",
    "description": "A deconstruction of the superhero fantasy.",
    "platform": "Other",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 146,
    "title": "Kick-Ass 2",
    "category": "Movie",
    "universe": "Other",
    "guide": "Recommended",
    "timelineOrder": 146,
    "releaseDate": "2013-01-01",
    "description": "Sequel expanding the world of amateur heroes.",
    "platform": "Other",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 147,
    "title": "Kingsman",
    "category": "Movie",
    "universe": "Fox",
    "guide": "Recommended",
    "timelineOrder": 147,
    "releaseDate": "2015-01-01",
    "description": "Spy-themed superhero hybrids based on Icon Comics.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 148,
    "title": "Big Hero 6",
    "category": "Movie",
    "universe": "Other",
    "guide": "Essential",
    "timelineOrder": 148,
    "releaseDate": "2014-01-01",
    "description": "A heartwarming animated take on the Marvel team.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 149,
    "title": "Captain America (1944)",
    "category": "Series",
    "universe": "Other",
    "timelineOrder": 149,
    "releaseDate": "1944-01-01",
    "description": "The original cinematic serial.",
    "platform": "Other",
    "languages": [
      "English"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 150,
    "title": "The Incredible Hulk (1977)",
    "category": "Series",
    "universe": "Other",
    "timelineOrder": 150,
    "releaseDate": "1977-01-01",
    "description": "The definitive vintage TV portrayal of Bruce Banner starring Bill Bixby and Lou Ferrigno.",
    "platform": "Other",
    "languages": [
      "English"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 5
  },
  {
    "id": 151,
    "title": "The Amazing Spider-Man (1977)",
    "category": "Series",
    "universe": "Other",
    "timelineOrder": 151,
    "releaseDate": "1977-01-01",
    "description": "An early TV adaptation of Peter Parker starring Nicholas Hammond.",
    "platform": "Other",
    "languages": [
      "English"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 152,
    "title": "The Punisher (1989)",
    "category": "Movie",
    "universe": "Other",
    "timelineOrder": 152,
    "releaseDate": "1989-01-01",
    "description": "An early, low-budget take on the Punisher starring Dolph Lundgren.",
    "platform": "Other",
    "languages": [
      "English"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 200,
    "title": "Avengers: Doomsday",
    "category": "Movie",
    "universe": "MCU",
    "guide": "Essential",
    "timelineOrder": 57,
    "releaseDate": "2026-12-18",
    "description": "Heroes from three universes collide to face Doctor Doom, reuniting much of the Avengers roster.",
    "platform": "Other",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9"
  },
  {
    "id": 201,
    "title": "Daredevil",
    "category": "Series",
    "universe": "Netflix",
    "guide": "Essential",
    "timelineOrder": 2001,
    "releaseDate": "2015-04-10",
    "description": "Blind lawyer Matt Murdock fights crime in Hell's Kitchen by night as Daredevil.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 3
  },
  {
    "id": 202,
    "title": "Jessica Jones",
    "category": "Series",
    "universe": "Netflix",
    "guide": "Recommended",
    "timelineOrder": 2002,
    "releaseDate": "2015-11-20",
    "description": "A hard-drinking private investigator with super-strength confronts her traumatic past.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 3
  },
  {
    "id": 203,
    "title": "Luke Cage",
    "category": "Series",
    "universe": "Netflix",
    "guide": "Recommended",
    "timelineOrder": 2003,
    "releaseDate": "2016-09-30",
    "description": "A man with unbreakable skin and super-strength becomes the hero of Harlem.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 204,
    "title": "Iron Fist",
    "category": "Series",
    "universe": "Netflix",
    "timelineOrder": 2004,
    "releaseDate": "2017-03-17",
    "description": "Danny Rand returns to New York wielding the mystical power of the Iron Fist.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 205,
    "title": "The Defenders",
    "category": "Series",
    "universe": "Netflix",
    "guide": "Essential",
    "timelineOrder": 2005,
    "releaseDate": "2017-08-18",
    "description": "Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up against the Hand.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  },
  {
    "id": 206,
    "title": "The Punisher",
    "category": "Series",
    "universe": "Netflix",
    "guide": "Recommended",
    "timelineOrder": 2006,
    "releaseDate": "2017-11-17",
    "description": "Frank Castle wages a one-man war on crime as the Punisher.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 207,
    "title": "Agents of S.H.I.E.L.D.",
    "category": "Series",
    "universe": "ABC",
    "guide": "Recommended",
    "timelineOrder": 3001,
    "releaseDate": "2013-09-24",
    "description": "Agent Coulson leads a small S.H.I.E.L.D. task force investigating global threats.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 7
  },
  {
    "id": 208,
    "title": "Agent Carter",
    "category": "Series",
    "universe": "ABC",
    "guide": "Recommended",
    "timelineOrder": 3002,
    "releaseDate": "2015-01-06",
    "description": "Peggy Carter navigates post-WWII espionage while helping found S.H.I.E.L.D.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 209,
    "title": "X-Men '97",
    "category": "Series",
    "universe": "Fox",
    "guide": "Essential",
    "timelineOrder": 1010,
    "releaseDate": "2024-03-20",
    "description": "A direct animated continuation of the 1990s X-Men series, picking up after Charles Xavier's death.",
    "platform": "Disney+",
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 2
  },
  {
    "id": 210,
    "title": "Your Friendly Neighborhood Spider-Man",
    "category": "Series",
    "universe": "MCU",
    "guide": "Recommended",
    "timelineOrder": 49,
    "releaseDate": "2025-01-29",
    "description": "An animated look at Peter Parker's early days learning the ropes as Spider-Man.",
    "platform": "Disney+",
    "languages": [
      "Tamil",
      "English",
      "Hindi",
      "Telugu",
      "Malayalam",
      "Kannada"
    ],
    "customLink": "https://t.me/+7oiLC4M_Ok4yYjk9",
    "seasons": 1
  }
];
