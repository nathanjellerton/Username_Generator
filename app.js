const firstName = [
  'Stinky',
  'Sweaty',
  'Cheesy',
  'Dangerous',
  'Adulterous',
  'Angry',
  'Blithering',
  'Confused',
  'Drunken',
  'Greedy',
  'Frisky',
  'Greedy',
  'Hateful',
  'Idiotic',
  'Insecure',
  'Maniacal',
  'Misunderstood',
  'Naked',
  'Swindling',
  'Twisted',
  'Useless',
  'Vile',
  'Stupid',
  'Big',
  'Absolute',
  'Salad',
  'Cool',
  'Brutal',
  'Silly',
  'Mother',
  'Dead',
  'Mouldy',
  'Huge',
  'Sad',
  'Wet',
  'Weak',
  'Donny',
  'Phat',
  'Shrimp',
  'Dry',
  'Hot',
  'Cold',
  'Honking',
  'Barking',
  'Stumpy',
  'Gamer',
  'God',
  'Old',
  'Mighty',
  'Golden',
  'Furry',
  'Poggers',
  'Raw',
  'Space',
  'Captain',
  'Oily',
  'Greasy',
  'Lord',
  'Toxic',
  'Daddy',
  'King',
  'Worst',
  'Best',
  'Happy',
  'Hungry',
  'Chicken',
  'Rat',
  'Donny',
  'Bird',
  'God',
  'Dumpy',
  'Pig',
  'Lettuce',
  'Boy',
  'Cow',
  'Daddy',
  'Cat',
  'Monkey',
  'Legend',
  'President',
  'Shoe',
  'Pirate',
  'Bunda',
  'Goose',
  'Scooby',
  'Dog',
  'Minion',
  'Glizzy',
  'Crab',
  'Squid',
  'Soldier',
  'Mother',
  'Scran',
  'Shrimp',
  'Furry',
  'Champion',
  'Loving',
  'Dogging',
  'Mining',
  'Binman',
  'Avon-Selling',
  'Bruh',
  'Alpha',
  'Beta',
  'Cuck',
  'Redneck',
  'American',
  'Father',
  'Hoya',
  'King',
  'Royalty',
  'Genius',
  'Pizzaboy',
  'Mailman',
  'Lady',
  'Nurse',
  'Bucket',
  'Tilted',
  'Jive',
  'Boring',
  'Buttered',
  'Seasoned',
  'Smut',
  'Crying',
  'Long',
  'Zombie',
  'Original',
  'Corpse',
  'Bag',
  'Hag',
  'Bat',
  'Lout',
  'Zombie',
  'Scientist',
  'Orc',
  'Man',
  'Turkey',
  'Edging',
]

const lastName = [
  'Rat',
  'Strider',
  'Donny',
  'Bird',
  'God',
  'Gamer',
  'Auughhh',
  'Dumpy',
  'Pig',
  'Pillock',
  'Lettuce',
  'Boy',
  'Cow',
  'Daddy',
  'Cat',
  'Monkey',
  'Legend',
  'President',
  'Shoe',
  'Pirate',
  'Bunda',
  'Goose',
  'Scooby',
  'Dog',
  'Minion',
  'Glizzy',
  'Destroyer',
  'Crab',
  'Squid',
  'Steven',
  'Josh',
  'Freak',
  'Soldier',
  'Mother',
  'Scran',
  'Shrimp',
  'Machine',
  'Greg',
  'Furry',
  'Champ',
  'Pal',
  'Dingus',
  'Worshipper',
  'Lover',
  'Dogger',
  'Stinker',
  'Engineer',
  'Miner',
  'Price',
  'Masseuse',
  'Binman',
  'Avon-Seller',
  'Bruh',
  'Alpha',
  'Beta',
  'Cuck',
  'Winner',
  'Harambe',
  'Lawyer',
  'Redneck',
  'American',
  'Brit',
  'Balls',
  'Father',
  'Hoya',
  'King',
  'Royalty',
  'Genius',
  'Pizzaboy',
  'Mailman',
  'Lady',
  'Nurse',
  'Baker',
  'Bucket',
  'Chaser',
  'Killer',
  'Man',
  'Turkey',
  'Reader',
  'Climber',
  'Corpse',
  'Bag',
  'Hag',
  'Bat',
  'Lout',
  'Zombie',
  'Scientist',
  'Orc',
  'Dodger',
  'Username',
  'Edger',
]

const oldeArray = [
  'Honourable',
  'Merciful',
  'Gentelmanly',
  'Courteous',
  'Spiffing',
  'Feeble',
  'Blasphemous',
  'Hubristic',
  'Insolent',
  'Nefarious',
  'Withering',
  'Weary',
]

const numberArray = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
  'Tenth',
  'Sixty Nineth',
  'Four Twentieth',
]

// --- VARIABLES ---
const bg = document.getElementById('body')
const usernameStyle = document.getElementById('username')

let numberIndex = Math.floor(Math.random() * numberArray.length)
let oldeNumber = numberArray[numberIndex]

let oldeIndex = Math.floor(Math.random() * oldeArray.length)
let oldeName = oldeArray[oldeIndex]

let firstIndex = Math.floor(Math.random() * firstName.length)
let lastIndex = Math.floor(Math.random() * firstName.length)

let first = firstName[firstIndex]
let last = ''
while (!last) {
  const index = Math.floor(Math.random() * lastName.length)
  const temp = lastName[index]
  if (temp !== first) {
    last = temp
  }
}

const usernameOutput = document.getElementById('username')
usernameOutput.innerHTML = `${first} ${last}`

const generateButton = document.getElementById('generate')

// --- Name Gen ---
const newName = () => {
  firstIndex = Math.floor(Math.random() * firstName.length)

  first = firstName[firstIndex]
  last = ''
  while (!last) {
    const index = Math.floor(Math.random() * lastName.length)
    const temp = lastName[index]
    if (temp !== first) {
      last = temp
    }
  }
}

newName()

// --- Copy to Clipboard ---
function copy() {
  var range = document.createRange()
  range.selectNode(document.getElementById('username'))
  window.getSelection().removeAllRanges() // clear current selection
  window.getSelection().addRange(range) // to select text
  document.execCommand('copy')
  window.getSelection().removeAllRanges() // to deselect
}

// --- CHECKBOXES ---
const mlg = document.getElementById('mlg')
mlg.addEventListener('click', () => {
  if (mlg.checked && olde.checked) {
    olde.checked = false
  }
})

const olde = document.getElementById('olde')
olde.addEventListener('click', () => {
  if (mlg.checked && olde.checked) {
    mlg.checked = false
  }
})

//--- GENERATE BUTTON---
generateButton.addEventListener('click', () => {
  newName()
  usernameOutput.innerHTML = `${first} ${last}`
  if (mlg.checked) {
    usernameOutput.innerHTML = `xxx_${first}_${last}_xxx`

    // --- MLG Style ---
    bg.className = 'mlg'
    // bg.style.backgroundColor = 'coral'
    // bg.style.backgroundImage = 'none'
    // bg.style.fontFamily = 'marvin'
    // bg.style.fontSize = 'larger'
    // body.style.color = 'white'

    usernameOutput.style.color = 'black'
  } else if (olde.checked) {
    oldeIndex = Math.floor(Math.random() * oldeArray.length)
    oldeName = oldeArray[oldeIndex]

    numberIndex = Math.floor(Math.random() * numberArray.length)
    oldeNumber = numberArray[numberIndex]

    usernameOutput.innerHTML = `Thy shall be knownn\n henceforth as\nThe ${oldeName}\n${first} ${last}\nthe ${oldeNumber}`

    // --- Olde Style ---
    bg.className = 'olde'
  } else {
    bg.className = 'normal'

    // bg.style.backgroundColor = 'white'
    // bg.style.backgroundImage = 'none'
    // bg.style.fontFamily = 'marvin'
    // bg.style.fontSize = 'larger'
    // bg.style.color = '#272727'
  }
})

// --- Show images and gif ---
// --- Need to add gifs and wacky stuff ---
