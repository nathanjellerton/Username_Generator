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
]

let first = firstName[firstIndex]
let last = ''
const newName = () => {
  let firstIndex = Math.floor(Math.random() * firstName.length)
  let lastIndex = Math.floor(Math.random() * lastName.length)
  while (!last) {
    const index = Math.floor(Math.random() * lastName.length)
    const temp = lastName[index]
    if (temp !== first) {
      last = temp
    }
  }

  first = firstName[firstIndex]
  last = ''
}
newName()

console.log(`${first} ${last}`)

const usernameOutput = document.getElementById('username')
usernameOutput.innerHTML = `${first} ${last}`

const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', () => {
  first = firstName[firstIndex]
  last = ''
  usernameOutput.innerHTML = `${first} ${last}`
  console.log(usernameOutput)
})
