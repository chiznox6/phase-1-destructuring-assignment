const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// ✅ 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log(moo, neigh, baa, oink, cluck); // cow horse sheep pig chicken

// ✅ 2. Bolt the horse wandered off, so just give us four animals
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little); // cow sheep pig chicken

// ✅ 3. Little the chicken had to go back to the coop, leaving three
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');
console.log(blackAndWhite, black, pink); // cow sheep pig

// ✅ 4. Use destructuring to assign variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red, orange, yellow, green, blue, indigo, violet);

// ✅ 5. Use first letters as variable names, skipping indigo
const [r, o, y, g, b, , v] = colors;
console.log(r, o, y, g, b, v); // red orange yellow green blue violet

// ✅ 6. Assign only indigo using 'indg'
const [ , , , , , indg] = colors;
console.log(indg); // indigo

// ✅ 7. Use destructuring to assign all variables from muppet
const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner);

// ✅ 8. Destructure song2 and song4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log(song2);        // Moving Right Along
console.log(song4);        // I Hope That Something Better Comes Along
console.log(nestedJob);    // Host of The Muppet Show
console.log(nestedPartner); // Miss Piggy