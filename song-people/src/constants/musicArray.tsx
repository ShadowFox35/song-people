import {
  answerSoundsType,
  musicElemType,
} from '../types/Objects';

export const genresArray: string[] = [
  'Pop',
  'Rock',
  'Metal',
  'Rap',
  'Electro',
  'Classic',
];

export const answerSounds: answerSoundsType[] = [
  {
    right: '/rightAnswerSound.mp3',
    wrong: '/wrongAnswerSound.mp3',
  },
];

export const startMessage: musicElemType[] = [
  {
    artist: '',
    img: '/startImg.jpg',
    audio: '',
    genre: '',
    info: 'Please listen the song and chooce correct artist',
  },
];

export const allSongsArray: musicElemType[][] = [
  [
    {
      artist: 'Billie Eilish',
      img: '/BillieEilish.jpg',
      audio: 'pop/BillieEilish.mp3',
      genre: 'Pop',
      info: "Billie Eilish is an American singer-songwriter. She first gained public attention in 2015 with her debut single 'Ocean Eyes', written and produced by her brother Finneas O'Connell, with whom she collaborates on music and live shows. In 2017, she released her debut extended play (EP), titled Don't Smile at Me. Commercially successful, it reached the top 15 of record charts in numerous countries, including the US, UK, Canada, and Australia.",
    },

    {
      artist: 'Britney Spears',
      img: '/BritneySpears.jpg',
      audio: 'pop/BritneySpears.mp3',
      genre: 'Pop',
      info: "Britney Jean Spears (born December 2, 1981) is an American singer. Often referred to as the 'Princess of Pop', she is credited with influencing the revival of teen pop during the late 1990s and early 2000s. Regarded as a pop icon, Spears has sold over 100 million records worldwide, including over 70 million in the United States, making her one of the world's best-selling music artists.",
    },

    {
      artist: 'Haddway',
      img: '/Haddway.jpg',
      audio: 'pop/Haddway.mp3',
      genre: 'Pop',
      info: 'Nestor Alexander Haddaway (born 9 January 1965) is a Trinidadian-born German singer best known for his 1993 hit single "What Is Love", which reached number 1 in 13 countries. In 1992, Haddaway was signed by German label Coconut Records. His debut single, "What Is Love", rapidly became popular in Europe, reaching number 2 in Germany and the United Kingdom.',
    },

    {
      artist: 'Lady Gaga',
      img: '/LadyGaga.jpg',
      audio: 'pop/LadyGaga.mp3',
      genre: 'Pop',
      info: 'Stefani Joanne Angelina Germanotta (born March 28, 1986), known as Lady Gaga, is an American singer, songwriter and actress. She is known for her image reinventions and musical versatility. Gaga was named the "Queen of Pop" in a 2011 ranking by Rolling Stone based on record sales and social media metrics. Gaga has won thirteen Grammy Awards, an Academy Award and two Golden Globe Awards.',
    },

    {
      artist: 'One Republic',
      img: '/OneRepublic.jpg',
      audio: 'pop/OneRepublic.mp3',
      genre: 'Pop',
      info: 'One Republic is an American pop rock band formed in Colorado Springs, Colorado,[5] in 2002. OneRepublic have won several music awards and landed many nominations, including ones for American Music Awards, Billboard Music Awards, World Music Awards, and Grammy Awards. Separately, lead singer Ryan Tedder has won three Grammy Awards due to his songwriting credits for Adele and Taylor Swift.',
    },
  ],

  [
    {
      artist: 'Green Day',
      img: '/GreenDay.jpg',
      audio: 'rock/GreenDay.mp3',
      genre: 'Rock',
      info: 'Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong, together with bassist and backing vocalist Mike Dirnt. Green Day is credited with popularizing mainstream interest in punk rock in the United States, particularly with the album Dookie, which was cited by Fuse as the most important pop-punk album of all time.',
    },

    {
      artist: 'Three Days Grace',
      img: '/ThreeDaysGrace.jpg',
      audio: 'rock/ThreeDaysGrace.mp3',
      genre: 'Rock',
      info: 'Three Days Grace is a Canadian rock band formed in Norwood, Ontario in 1992. The bands original line-up consisted of guitarist and lead vocalist Adam Gontier, drummer and backing vocalist Neil Sanderson, bassist Brad Walst. In 2003, Barry Stock was recruited as the bands lead guitarist, making them a quartet. In 2013, Gontier left the band and was replaced by Matt Walst, the younger brother of Brad Walst.',
    },

    {
      artist: 'My Chemical Romance',
      img: '/MyChemicalRomance.jpg',
      audio: 'rock/MyChemicalRomance.mp3',
      genre: 'Rock',
      info: 'My Chemical Romance  is an American rock band from Newark, New Jersey. The bands current lineup consists of lead vocalist Gerard Way, lead guitarist Ray Toro, rhythm guitarist Frank Iero, and bassist Mikey Way. In 2020, Kerrang! deemed the band "the rock superstars of the 21st century" while stating that "no other band has had such a musical or cultural impact over recent years.',
    },

    {
      artist: 'The Pretty Reckless',
      img: '/ThePrettyReckless.jpg',
      audio: 'rock/ThePrettyReckless.mp3',
      genre: 'Rock',
      info: 'The Pretty Reckless is an American rock band from New York City, formed in 2009. The band consists of Taylor Momsen (lead vocals, rhythm guitar), Ben Phillips (lead guitar, backing vocals), Mark Damon (bass), and Jamie Perkins (drums). The band released their debut studio album, Light Me Up, in August 2010. The album spawned three moderately successful singles, most notably "Make Me Wanna Die"',
    },

    {
      artist: '30 Seconds to Mars',
      img: '/30SecondsToMars.jpg',
      audio: 'rock/30SecondsToMars.mp3',
      genre: 'Rock',
      info: '30 Seconds to Mars is an American rock band from Los Angeles, California, formed in 1998. The band consists of brothers Jared Leto (lead vocals, guitar, bass, keyboards) and Shannon Leto (drums, percussion). The band achieved worldwide fame with the release of its second album A Beautiful Lie (2005), which received multiple certifications all over the world.',
    },
  ],

  [
    {
      artist: 'Bullet For My Valentine',
      img: '/BulletForMyValentine.jpg',
      audio: 'metal/BulletForMyValentine.mp3',
      genre: 'Metal',
      info: 'Bullet for My Valentine, often abbreviated as BFMV, are a Welsh heavy metal band from Bridgend, formed in 1998. The band is currently composed of Matthew Tuck (lead vocals, rhythm guitar), Michael Paget (lead guitar, backing vocals), Jason Bowld (drums) and Jamie Mathias (bass guitar, backing vocals). Debut album The Poison was released on 3 October 2005 and entered the U.S. Billboard 200 at number 128.',
    },

    {
      artist: 'Slipknot',
      img: '/Slipknot.jpg',
      audio: 'metal/Slipknot.mp3',
      genre: 'Metal',
      info: 'Slipknot is an American band formed in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray. An essential element for the bands image is the Slipknot logo. The nonagram was created by the bands members around the same time the band was founded. The nonagram is arguably the best-known sigil of Slipknot and it represents a 9-point stara symbol of unity, loyalty, friendship and remembrance.',
    },

    {
      artist: 'Korn',
      img: '/Korn.jpg',
      audio: 'metal/Korn.mp3',
      genre: 'Metal',
      info: 'Korn is an American nu metal band from Bakersfield, California, formed in 1993. The band is notable for pioneering the nu metal genre and bringing it into the mainstream. As of 2021, Korn had sold more than 40 million records worldwide. Twelve of the bands official releases have peaked in the top ten of the Billboard 200, eight of which have peaked in the top five.',
    },

    {
      artist: 'Disturbed',
      img: '/Disturbed.jpg',
      audio: 'metal/Disturbed.mp3',
      genre: 'Metal',
      info: 'Disturbed is an American heavy metal band from Chicago, formed in 1994. The band includes vocalist David Draiman, guitarist/keyboardist Dan Donegan, bassist John Moyer, and drummer Mike Wengren. The band has released eight studio albums, five of which have consecutively debuted at number one on the Billboard 200.',
    },

    {
      artist: 'Bring Me The Horizon',
      img: '/BringMeTheHorizon.jpg',
      audio: 'metal/BringMeTheHorizon.mp3',
      genre: 'Metal',
      info: 'Bring Me the Horizon are a British band, formed in Sheffield in 2004. The group currently consists of lead vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean, drummer Matt Nicholls and keyboardist Jordan Fish.The bands musical style has been described mainly as metalcore and – though they have since moved on from the genre – their early material was considered deathcore. ',
    },
  ],

  [
    {
      artist: 'Billie Eilish',
      img: '/BillieEilish.jpg',
      audio: 'pop/BillieEilish.mp3',
      genre: 'Rap',
      info: "Billie Eilish is an American singer-songwriter. She first gained public attention in 2015 with her debut single 'Ocean Eyes', written and produced by her brother Finneas O'Connell, with whom she collaborates on music and live shows. In 2017, she released her debut extended play (EP), titled Don't Smile at Me. Commercially successful, it reached the top 15 of record charts in numerous countries, including the US, UK, Canada, and Australia.",
    },

    {
      artist: 'Britney Spears',
      img: '/BritneySpears.jpg',
      audio: 'pop/BritneySpears.mp3',
      genre: 'Rap',
      info: "Britney Jean Spears (born December 2, 1981) is an American singer. Often referred to as the 'Princess of Pop', she is credited with influencing the revival of teen pop during the late 1990s and early 2000s. Regarded as a pop icon, Spears has sold over 100 million records worldwide, including over 70 million in the United States, making her one of the world's best-selling music artists.",
    },

    {
      artist: 'Haddway',
      img: '/Haddway.jpg',
      audio: 'pop/Haddway.mp3',
      genre: 'Rap',
      info: 'Nestor Alexander Haddaway (born 9 January 1965) is a Trinidadian-born German singer best known for his 1993 hit single "What Is Love", which reached number 1 in 13 countries. In 1992, Haddaway was signed by German label Coconut Records. His debut single, "What Is Love", rapidly became popular in Europe, reaching number 2 in Germany and the United Kingdom.',
    },

    {
      artist: 'Lady Gaga',
      img: '/LadyGaga.jpg',
      audio: 'pop/LadyGaga.mp3',
      genre: 'Rap',
      info: 'Stefani Joanne Angelina Germanotta (born March 28, 1986), known as Lady Gaga, is an American singer, songwriter and actress. She is known for her image reinventions and musical versatility. Gaga was named the "Queen of Pop" in a 2011 ranking by Rolling Stone based on record sales and social media metrics. Gaga has won thirteen Grammy Awards, an Academy Award and two Golden Globe Awards.',
    },

    {
      artist: 'One Republic',
      img: '/OneRepublic.jpg',
      audio: 'pop/OneRepublic.mp3',
      genre: 'Rap',
      info: 'One Republic is an American pop rock band formed in Colorado Springs, Colorado,[5] in 2002. OneRepublic have won several music awards and landed many nominations, including ones for American Music Awards, Billboard Music Awards, World Music Awards, and Grammy Awards. Separately, lead singer Ryan Tedder has won three Grammy Awards due to his songwriting credits for Adele and Taylor Swift.',
    },
  ],
];
