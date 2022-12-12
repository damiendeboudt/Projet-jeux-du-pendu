//Tableau avec mots à deviner
let table = [
    "vendredi",
    "banane",
    "velo",
    "ordinateur",
    "voiture",
    "belgique",
    "soleil",
    "objet",
    "introduction",
    "pomme",
    "pendu",
]
console.table(table)

//Selection d'un mot aléatoire dans le tableau [table]
let random = table[Math.floor(Math.random() * table.length)]
console.log(random)

//recup lettre rentrée par User après click sur submit
let userSubmit = document.getElementById("submit")
let userLetter = document.getElementById("UserInput")
let motAleatoire = document.getElementById("random")
let under = document.getElementById('underscore')

for (let i = 0; i < random.length; i++) {
    under.innerText += "|" +"_" + "| "
}



console.log(random.length)

userSubmit.addEventListener("click", ()=> {
    userLetter.value.toLowerCase()
    console.log(userLetter.value)

    if(random.includes(userLetter.value)) {
        alert("yes")
    } else {
        alert("Oh no")
    }
})

