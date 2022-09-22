const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN - CERULEAN - PALLET)"


const pkm = pokemon.split(", ")

const shock = pkm[2].toLocaleUpperCase()
const ability = pkm[4].toLowerCase()

const upperName = pkm[0].slice(0, 1).toUpperCase()
const lowerName = pkm[0].slice(1).toLocaleLowerCase()

const nv = pkm[1]

const attacks = pkm[3].replace("(", "").replace(")", "").split(" - ")
const primeiraLetra = attacks[0].slice(0, 1).toUpperCase()
const restoLetra = attacks[0].slice(1).toLocaleLowerCase()


const poderUm = attacks[1].slice(0, 1).toUpperCase()
const poderDois = attacks[1].slice(1).toLocaleLowerCase()


const trovaoUm = attacks[2].slice(0, 1).toUpperCase()
const trovaoDois = attacks[2].slice(1).toLocaleLowerCase()

const locale = pkm[5].replace("(", "").replace(")", "").split(" - ")
const biomas = pkm[5].replace("(", "").replace(")", "").split(" - ")
const lugares = pkm[5].replace("(", "").replace(")", "").split(" - ")



console.log(`Name: ${upperName + lowerName}
Lv: ${nv} - Type: ${shock}
Ability: ${ability}
Attacks: 
  - ${primeiraLetra + restoLetra},
  - ${poderUm + poderDois},
  - ${trovaoUm + trovaoDois}

 Places:
    - ${locale[0].toLowerCase()} 
    - ${biomas[2].toLowerCase()}
    - ${lugares[1].toLowerCase()}

`
)


/*
 Name: Pikachu
Lv: 3 - Type: ELETRIC
 Ability: static
  Attacks:
     - Thundershock,
     - Quick attack
     - Thunder

Places:
     - veridian
     - pallet
     - cerulean */