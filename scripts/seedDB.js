const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/streamiMovies",
  {
    useMongoClient: true
  }
);

const movieSeed = [
  {
    title: "Author! Author!",
    director: "Arthur Hiller",
    synopsis:
      "Successful playwright Al Pacino can't get any work done as long as he is pestered by his wacko wife Tuesday Weld. Making things worse are the couple's obstreperous children, many of them products of her previous marriages. Just as Pacino is completing his latest work, his wife walks out on him. That's the good news: the bad news is that he's saddled with a bunch of snot-nosed kids. Still and all, Pacino finds time to inaugurate an affair with his play's leading lady, played by Dyan Cannon, while attempting to juggle the stresses of opening night with the needs of the demanding, often obnoxious children. ~ Hal Erickson, Rovi.",
    date: new Date(Date.now())
  },
  {
    title: "Fresh",
    director: "Boaz Yakin",
    synopsis:
      "A bright young African-American boy attempts to survive life in the city by acting as an errand boy for a drug dealer in this thoughtful, sharply plotted drama. Known as Fresh, the young man must use his delivery jobs to support himself and his troubled sister, receiving nothing from his distant, alcoholic father but the occasional chess lesson. His intelligence and quiet determination serve him well, as he wins the trust of his employer and settles into an unpleasant but survivable routine. Even this small comfort disappears, however, when Fresh accidentally witnesses the killing of a classmate and becomes a potential target himself. Forced into an impossible situation, he puts his experience and strategic ability to good use, developing a tricky plan to protect his own life and defeat the killers. First-time director Boaz Yakin emphasizes restraint and realism, presenting potentially sensationalistic material with a minimum of violence and flash. Instead, attention is placed on the strong, layered performances, particularly Sean Nelson as Fresh and Samuel L. Jackson as his embittered father. While some have questioned the film's treatment of inner city life, the film was generally acclaimed, thanks to its seriousness and complexity. ~ Judd Blaise, Rovi.",
    date: new Date(Date.now())
  },
  {
    title: "Clockers",
    director: "Spike Lee",
    synopsis:
      "Based on Richard Price's grim best-seller, and directed by Spike Lee from a screenplay co-written with Price, Clockers takes the structure of a police procedural to build a chilling portrait of despair, hope, and the unanswered problem of black-on-black crime in an urban housing project. The film's haunting themes are vividly visualized during the opening credits, which run over police photos of dead young black men, shot and sprawled on sidewalks, in streets, and hanging over fences. Strike (Mekhi Phifer) is a 19-year-old African-American. Clocker -- the lowest link on the drug dealing chain -- who hangs around park benches and street corners selling small amounts of druges at all hours of the day. Strike drinks chocolate milk to soothe an ulcer and plays with model trains in his apartment, dreaming of a way out of his dead-end life. Drug kingpin Rodney (Delroy Lindo) asks Strike to kill another clocker, Darryl, for skimming money, saying that this will be Strike's ticket to a higher post in Rodney's organization. Darryl is indeed shot, and suspicion immediately falls on Strike, but a weary cop named Rocco Klein (Harvey Keitel) thinks there's more to the case. ~ Don Kaye, Rovi.",
    date: new Date(Date.now())
  },
  {
    title: "The Boss Baby",
    director: "Tom McGrath",
    synopsis:
      "A seven-year-old boy (voice of Miles Christopher Bakshi) has his life turned upside down by his new brother, an infant known as the Boss Baby (Alec Baldwin) who wears a suit and has the brusque manner of a businessman. However, the two are forced to get past their initial antagonism when they must work together on a mission of espionage involving the rivalry between babies and puppies. Steve Buscemi, Lisa Kudrow, Jimmy Kimmel, and Tobey Maguire also lend their voices to this animated comedy, which is based on a picture book by Marla Frazee. ~ Jack Rodgers, Rovi.",
    date: new Date(Date.now())
  },
  {
    title: "Mamma Mia! Here We Go Again ",
    director: "Ol Parker",
    synopsis:
      " Five years after the events of Mamma Mia!, Sophie learns about her mother's past while pregnant herself.",
    date: new Date(Date.now())
  },
  {
    title: "Jurassic World: Fallen Kingdom",
    director: "Juan Antonio Bayona",
    synopsis:
      " It’s been three years since theme park and luxury resort Jurassic World was destroyed by dinosaurs out of containment. Isla Nublar now sits abandoned by humans while the surviving dinosaurs fend for themselves in the jungles. When the island’s dormant volcano begins roaring to life, Owen (Chris Pratt) and Claire (Bryce Dallas Howard) mount a campaign to rescue the remaining dinosaurs from this extinction-level event. Owen is driven to find Blue, his lead raptor who’s still missing in the wild, and Claire has grown a respect for these creatures she now makes her mission. Arriving on the unstable island as lava begins raining down, their expedition uncovers a conspiracy that could return our entire planet to a perilous order not seen since prehistoric times..",
    date: new Date(Date.now())
  },
  {
    title: "Ocean's 8",
    director: "Gary Ross",
    synopsis:
      "Five years, eight months, 12 days and counting -- that's how long Debbie Ocean has been devising the biggest heist of her life. She knows what it's going to take -- a team of the best people in the field, starting with her partner-in-crime Lou Miller. Together, they recruit a crew of specialists, including jeweler Amita, street con Constance, suburban mom Tammy, hacker Nine Ball, and fashion designer Rose. Their target -- a necklace that's worth more than $150 million., ",
    date: new Date(Date.now())
  },
  {
    title: "Alpha ",
    director: "Albert Hughes ",
    synopsis:
      " While on his first hunt with his tribe's most elite group, a young man is injured and left for dead. Awakening to find himself broken and alone - he must learn to survive and navigate the harsh and unforgiving wilderness. Reluctantly taming a lone wolf abandoned by its pack,he learns to rely on it, and they become unlikely allies, enduring countless dangers and overwhelming odds to find their way home before the deadly winter arrives.",
    date: new Date(Date.now())
  },
  {
    title: " Incredibles 2",
    director: "Brad Bird",
    synopsis:
      "Telecommunications guru Winston Deavor enlists Elastigirl to fight crime and make the public fall in love with superheroes once again. That leaves Mr. Incredible with one of his greatest challenges ever -- staying home and taking care of three rambunctious children. As Violet, Dash and Jack-Jack offer him a new set of headaches, a cybercriminal named Screenslaver launches his dastardly plan -- hypnotizing the world through computer screens.",
    date: new Date(Date.now())
  },
  {
    title: "Teen Titans Go! To The Movies",
    director: "Aaron Horvath",
    synopsis:
      "It seems that all the major superheroes out there are starring in their own movies -- all but the Teen Titans. Robin is bound and determined to remedy that situation by becoming a star instead of a sidekick. With a few madcap ideas and a song in their hearts, the Teen Titans head to Hollywood to fulfill their dreams. Things soon go awry, however, when a supervillain plans to take over the planet -- putting the very fate of the young heroes on the line. ",
    date: new Date(Date.now())
  },
  {
    title: "The First Purge",
    director: "Gerard McMurray",
    synopsis:
      "Behind every tradition lies a revolution. Next Independence Day, witness the rise of our country’s 12 hours of annual lawlessness. Welcome to the movement that began as a simple experiment: The First Purge. To push the crime rate below one percent for the rest of the year, the New Founding Fathers of America (NFFA) test a sociological theory that vents aggression for one night in one isolated community. But when the violence of oppressors meets the rage of the marginalized, the contagion will explode from the trial-city borders and spread across the nation. ",
    date: new Date(Date.now())
  },
  {
    title: "Sorry To Bother You",
    director: "Boots Riley",
    synopsis:
      " In an alternate present-day version of Oakland, telemarketer Cassius Green discovers a magical key to professional success - which propels him into a macabre universe.",
    date: new Date(Date.now())
  },
  {
    title: "Hotel Transylvania 3: Summer Vacation",
    director: "Genndy Tartakovsky",
    synopsis:
      " Mavis surprises Dracula with plans for a fun-filled summer voyage on a monster cruise. As the pack starts enjoying colossal buffets and exotic excursions, Drac finds himself falling for the ship's intriguing but dangerous captain. He soon learns that trying to balance family, friends and romance might just be too much to handle -- even for the world's most powerful vampire.",
    date: new Date(Date.now())
  },
  {
    title: "Mission: Impossible - Fallout",
    director: "Director, Screenwriter ",
    synopsis:
      "The best intentions often come back to haunt you. MISSION: IMPOSSIBLE - FALLOUT finds Ethan Hunt (Tom Cruise) and his IMF team (Alec Baldwin, Simon Pegg, Ving Rhames) along with some familiar allies (Rebecca Ferguson, Michelle Monaghan) in a race against time after a mission gone wrong. Henry Cavill, Angela Bassett, and Vanessa Kirby also join the dynamic cast with filmmaker Christopher McQuarrie returning to the helm. ",
    date: new Date(Date.now())
  },
  {
    title: "Hot Summer Nights",
    director: "Elijah Bynum",
    synopsis:
      "An awkward teenager gets in over his head dealing drugs while falling for his business partner's enigmatic sister during one scorching summer in Cape Cod, Mass.",
    date: new Date(Date.now())
  },
  {
    title: "The Meg ",
    director: "Jon Turteltaub",
    synopsis:
      "A deep-sea submersible—part of an international undersea observation program—has been attacked by a massive creature, previously thought to be extinct, and now lies disabled at the bottom of the deepest trench in the Pacific…with its crew trapped inside. With time running out, expert deep sea rescue diver Jonas Taylor (Jason Statham) is recruited by a visionary Chinese oceanographer (Winston Chao), against the wishes of his daughter Suyin (Li Bingbing), to save the crew—and the ocean itself—from this unstoppable threat: a pre-historic 75-foot-long shark known as the Megalodon. What no one could have imagined is that, years before, Taylor had encountered this same terrifying creature. Now, teamed with Suyin, he must confront his fears and risk his own life to save everyone trapped below ",
    date: new Date(Date.now())
  }
];

db.Movies
  .remove({})
  .then(() => db.movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
