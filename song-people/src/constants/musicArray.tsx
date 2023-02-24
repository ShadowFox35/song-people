import { musicElemType } from '../types/Objects';

export const genresArray: string[] = [
  'Pop',
  'Rock',
  'Metal',
  'Rap',
  'Electro',
  'Classic',
];

export const startMessage: musicElemType = {
  artist: '',
  img: '/startImg.jpg',
  audio: '',
  info: 'Please listen to the song and choose the right artist',
};

export const allSongsArray: musicElemType[][] = [
  [
    {
      artist: 'Billie Eilish',
      img: 'pop/BillieEilish.jpg',
      audio: 'pop/BillieEilish.mp3',
      info: "Billie Eilish is an American singer-songwriter. She first gained public attention in 2015 with her debut single 'Ocean Eyes', written and produced by her brother Finneas O'Connell, with whom she collaborates on music and live shows. In 2017, she released her debut extended play (EP), titled Don't Smile at Me. Commercially successful, it reached the top 15 of record charts in numerous countries, including the US, UK, Canada, and Australia.",
    },

    {
      artist: 'Britney Spears',
      img: 'pop/BritneySpears.jpg',
      audio: 'pop/BritneySpears.mp3',
      info: "Britney Jean Spears (born December 2, 1981) is an American singer. Often referred to as the 'Princess of Pop', she is credited with influencing the revival of teen pop during the late 1990s and early 2000s. Regarded as a pop icon, Spears has sold over 100 million records worldwide, including over 70 million in the United States, making her one of the world's best-selling music artists.",
    },

    {
      artist: 'Haddway',
      img: 'pop/Haddway.jpg',
      audio: 'pop/Haddway.mp3',
      info: 'Nestor Alexander Haddaway (born 9 January 1965) is a Trinidadian-born German singer best known for his 1993 hit single "What Is Love", which reached number 1 in 13 countries. In 1992, Haddaway was signed by German label Coconut Records. His debut single, "What Is Love", rapidly became popular in Europe, reaching number 2 in Germany and the United Kingdom.',
    },

    {
      artist: 'Lady Gaga',
      img: 'pop/LadyGaga.jpg',
      audio: 'pop/LadyGaga.mp3',
      info: 'Stefani Joanne Angelina Germanotta (born March 28, 1986), known as Lady Gaga, is an American singer, songwriter and actress. She is known for her image reinventions and musical versatility. Gaga was named the "Queen of Pop" in a 2011 ranking by Rolling Stone based on record sales and social media metrics. Gaga has won thirteen Grammy Awards, an Academy Award and two Golden Globe Awards.',
    },

    {
      artist: 'One Republic',
      img: 'pop/OneRepublic.jpg',
      audio: 'pop/OneRepublic.mp3',
      info: 'One Republic is an American pop rock band formed in Colorado Springs, Colorado,[5] in 2002. OneRepublic have won several music awards and landed many nominations, including ones for American Music Awards, Billboard Music Awards, World Music Awards, and Grammy Awards. Separately, lead singer Ryan Tedder has won three Grammy Awards due to his songwriting credits for Adele and Taylor Swift.',
    },
  ],

  [
    {
      artist: 'Green Day',
      img: 'rock/GreenDay.jpg',
      audio: 'rock/GreenDay.mp3',
      info: 'Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong, together with bassist and backing vocalist Mike Dirnt. Green Day is credited with popularizing mainstream interest in punk rock in the United States, particularly with the album Dookie, which was cited by Fuse as the most important pop-punk album of all time.',
    },

    {
      artist: 'Three Days Grace',
      img: 'rock/ThreeDaysGrace.jpg',
      audio: 'rock/ThreeDaysGrace.mp3',
      info: 'Three Days Grace is a Canadian rock band formed in Norwood, Ontario in 1992. The bands original line-up consisted of guitarist and lead vocalist Adam Gontier, drummer and backing vocalist Neil Sanderson, bassist Brad Walst. In 2003, Barry Stock was recruited as the bands lead guitarist, making them a quartet. In 2013, Gontier left the band and was replaced by Matt Walst, the younger brother of Brad Walst.',
    },

    {
      artist: 'My Chemical Romance',
      img: 'rock/MyChemicalRomance.jpg',
      audio: 'rock/MyChemicalRomance.mp3',
      info: 'My Chemical Romance  is an American rock band from Newark, New Jersey. The bands current lineup consists of lead vocalist Gerard Way, lead guitarist Ray Toro, rhythm guitarist Frank Iero, and bassist Mikey Way. In 2020, Kerrang! deemed the band "the rock superstars of the 21st century" while stating that "no other band has had such a musical or cultural impact over recent years.',
    },

    {
      artist: 'The Pretty Reckless',
      img: 'rock/ThePrettyReckless.jpg',
      audio: 'rock/ThePrettyReckless.mp3',
      info: 'The Pretty Reckless is an American rock band from New York City, formed in 2009. The band consists of Taylor Momsen (lead vocals, rhythm guitar), Ben Phillips (lead guitar, backing vocals), Mark Damon (bass), and Jamie Perkins (drums). The band released their debut studio album, Light Me Up, in August 2010. The album spawned three moderately successful singles, most notably "Make Me Wanna Die"',
    },

    {
      artist: '30 Seconds to Mars',
      img: 'rock/30SecondsToMars.jpg',
      audio: 'rock/30SecondsToMars.mp3',
      info: '30 Seconds to Mars is an American rock band from Los Angeles, California, formed in 1998. The band consists of brothers Jared Leto (lead vocals, guitar, bass, keyboards) and Shannon Leto (drums, percussion). The band achieved worldwide fame with the release of its second album A Beautiful Lie (2005), which received multiple certifications all over the world.',
    },
  ],

  [
    {
      artist: 'Bullet For My Valentine',
      img: 'metal/BulletForMyValentine.jpg',
      audio: 'metal/BulletForMyValentine.mp3',
      info: 'Bullet for My Valentine, often abbreviated as BFMV, are a Welsh heavy metal band from Bridgend, formed in 1998. The band is currently composed of Matthew Tuck (lead vocals, rhythm guitar), Michael Paget (lead guitar, backing vocals), Jason Bowld (drums) and Jamie Mathias (bass guitar, backing vocals). Debut album The Poison was released on 3 October 2005 and entered the U.S. Billboard 200 at number 128.',
    },

    {
      artist: 'Slipknot',
      img: 'metal/Slipknot.jpg',
      audio: 'metal/Slipknot.mp3',
      info: 'Slipknot is an American band formed in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray. An essential element for the bands image is the Slipknot logo. The nonagram was created by the bands members around the same time the band was founded. The nonagram is arguably the best-known sigil of Slipknot and it represents a 9-point stara symbol of unity, loyalty, friendship and remembrance.',
    },

    {
      artist: 'Korn',
      img: 'metal/Korn.jpg',
      audio: 'metal/Korn.mp3',
      info: 'Korn is an American nu metal band from Bakersfield, California, formed in 1993. The band is notable for pioneering the nu metal genre and bringing it into the mainstream. As of 2021, Korn had sold more than 40 million records worldwide. Twelve of the bands official releases have peaked in the top ten of the Billboard 200, eight of which have peaked in the top five.',
    },

    {
      artist: 'Disturbed',
      img: 'metal/Disturbed.jpg',
      audio: 'metal/Disturbed.mp3',
      info: 'Disturbed is an American heavy metal band from Chicago, formed in 1994. The band includes vocalist David Draiman, guitarist/keyboardist Dan Donegan, bassist John Moyer, and drummer Mike Wengren. The band has released eight studio albums, five of which have consecutively debuted at number one on the Billboard 200.',
    },

    {
      artist: 'Bring Me The Horizon',
      img: 'metal/BringMeTheHorizon.jpg',
      audio: 'metal/BringMeTheHorizon.mp3',
      info: 'Bring Me the Horizon are a British band, formed in Sheffield in 2004. The group currently consists of lead vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean, drummer Matt Nicholls and keyboardist Jordan Fish.The bands musical style has been described mainly as metalcore and – though they have since moved on from the genre – their early material was considered deathcore. ',
    },
  ],

  [
    {
      artist: 'Eminem',
      img: 'rap/Eminem.jpg',
      audio: 'rap/Eminem.mp3',
      info: 'Marshall Bruce Mathers III, known as Eminem, is an American rapper and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time. Eminems global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music.',
    },

    {
      artist: 'Snoop Dogg',
      img: 'rap/SnoopDogg.jpg',
      audio: 'rap/SnoopDogg.mp3',
      info: 'Snoop Dogg, known professionally as Snoop Dogg, is an American rapper. His fame dates back to 1992 when he was featured on Dr. Dres debut solo single, "Deep Cover", and then on Dres debut solo album, The Chronic. Broadus has since sold over 23 million albums in the United States and 35 million albums worldwide. His accolades include an American Music Award, a Primetime Emmy Award, and 17 nominations at the Grammy Awards.',
    },

    {
      artist: '50 Cent',
      img: 'rap/50Cent.jpg',
      audio: 'rap/50Cent.mp3',
      info: 'Curtis James Jackson III, known professionally as 50 Cent, is an American rapper, actor, television producer, and businessman. His commercial debut album Get Rich or Die Tryin (2003) earned him a Best New Artist nomination at the 46th Grammy Awards, a Billboard Music Award for Album of the Year, and the ASCAP Songwriter of the Year Award.',
    },

    {
      artist: 'Post Malone',
      img: 'rap/PostMalone.jpg',
      audio: 'rap/PostMalone.mp3',
      info: 'Austin Richard Post, known professionally as Post Malone, is an American rapper, singer, songwriter, and record producer. Known for his variegated vocals, Malone has gained acclaim for blending genres and subgenres of hip hop, pop, R&B, and trap. Malone has won 10 Billboard Music Awards, 3 American Music Awards, and one MTV Video Music Award, and received 9 Grammy Award nominations.',
    },

    {
      artist: 'Jay-Z',
      img: 'rap/JayZ.jpg',
      audio: 'rap/JayZ.mp3',
      info: 'Shawn Corey Carter, known as Jay-Z, is an American rapper, record producer, entrepreneur, and founder of Manhattan-based conglomerate talent and entertainment agency Roc Nation. He is regarded as one of the greatest rappers of all time. He was the CEO of Def Jam Recordings and he has been central to the creative and commercial success of artists including Kanye West, Rihanna, and J. Cole.',
    },
  ],

  [
    {
      artist: 'The Prodigy',
      img: 'electro/TheProdigy.jpg',
      audio: 'electro/TheProdigy.mp3',
      info: 'The Prodigy are an English electronic dance music band formed in Braintree, Essex, in 1990 by producer, keyboard player and songwriter Liam Howlett. The original line-up also featured dancer and singer Keith Flint and dancer and occasional live keyboard player Leeroy Thornhill, dancer Sharky and MC and vocalist Maxim. They were pioneers of the breakbeat-influenced genre big beat, and achieved mainstream popularity in the 1990s. ',
    },

    {
      artist: 'Skrillex',
      img: 'electro/Skrillex.jpg',
      audio: 'electro/Skrillex.mp3',
      info: 'Sonny John Moore known professionally as Skrillex, is an American DJ and record producer. He joined the post-hardcore band From First to Last as the lead singer in 2004, and recorded two studio albums with the band (Dear Diary, My Teen Angst Has a Bodycount and Heroine before leaving to pursue a solo career in 2007. Skrillex has won eight Grammy Awards, more than any other electronic dance music artist.',
    },

    {
      artist: 'David Guetta',
      img: 'electro/DavidGuetta.jpg',
      audio: 'electro/DavidGuetta.mp3',
      info: 'Pierre David Guetta is a French DJ and music producer. He has over 10 million album and 65 million single sales globally, with more than 10 billion streams. In 2011, 2020 and 2021, Guetta was voted the number one DJ in the DJ Mag Top 100 DJs poll. In 2013, Billboard crowned "When Love Takes Over" as the number one dance-pop collaboration of all time.',
    },

    {
      artist: 'Deadmau5',
      img: 'electro/Deadmau5.jpg',
      audio: 'electro/Deadmau5.mp3',
      info: 'Joel Thomas Zimmerman, known professionally as Deadmau5, is a Canadian electronic music producer and DJ. He mainly produces progressive house music, though he also produces and DJs other genres of electronic music, including techno under the alias Testpilot. Zimmerman has received six Grammy Award nominations for his work.',
    },

    {
      artist: 'Calvin Harris',
      img: 'electro/CalvinHarris.jpg',
      audio: 'electro/CalvinHarris.mp3',
      info: 'Adam Richard Wiles, known professionally as Calvin Harris, is a Scottish DJ, record producer, singer, and songwriter who has released six studio albums. His debut studio album, I Created Disco, was released in June 2007. In October 2014, Harris became the first artist to place three songs simultaneously on the top 10 of Billboards Dance/Electronic Songs chart. He also became the first UK solo artist to reach more than one billion streams on Spotify.',
    },
  ],

  [
    {
      artist: 'Johann Sebastian Bach',
      img: 'classic/Bach.jpg',
      audio: 'classic/Bach.mp3',
      info: 'Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his orchestral music such as the Brandenburg Concertos; instrumental compositions such as the Cello Suites; keyboard works such as the Goldberg Variations and The Well-Tempered Clavier; organ works such as the Schubler Chorales and the Toccata and Fugue in D minor; and vocal music such as the St Matthew Passion and the Mass in B minor.',
    },

    {
      artist: 'Antonio Lucio Vivaldi',
      img: 'classic/Vivaldi.jpg',
      audio: 'classic/Vivaldi.mp3',
      info: 'Antonio Lucio Vivaldi was a Venetian composer, virtuoso violinist and impresario of Baroque music. Along with Johan Sebastian Bach and Georg Frideric Handel, Vivaldi is regarded as one of the greatest Baroque composers and his influence during his lifetime was widespread across Europe, giving origin to many imitators and admirers. He pioneered many developments in orchestration, violin technique and programatic music.',
    },

    {
      artist: 'Fryderyk Franciszek Chopin',
      img: 'classic/Chopin.jpg',
      audio: 'classic/Chopin.mp3',
      info: 'Fryderyk Franciszek Chopin was a Polish composer and virtuoso pianist of the Romantic period, who wrote primarily for solo piano. He has maintained worldwide renown as a leading musician of his era, one whose "poetic genius was based on a professional technique that was without equal in his generation". All of Chopins compositions include the piano. ',
    },

    {
      artist: 'Ludwig van Beethoven',
      img: 'classic/Beethoven.jpg',
      audio: 'classic/Beethoven.mp3',
      info: 'Ludwig van Beethoven was a German composer and pianist. Beethoven remains one of the most admired composers in the history of Western music; his works rank amongst the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music.',
    },

    {
      artist: 'Pyotr Ilyich Tchaikovsky',
      img: 'classic/Tchaikovsky.jpg',
      audio: 'classic/Tchaikovsky.mp3',
      info: 'Pyotr Ilyich Tchaikovsky was a Russian composer of the Romantic period. He wrote some of the most popular concert and theatrical music in the current classical repertoire, including the ballets Swan Lake and The Nutcracker, the 1812 Overture, his First Piano Concerto, Violin Concerto, the Romeo and Juliet Overture-Fantasy, several symphonies, and the opera Eugene Onegin.',
    },
  ],
];
