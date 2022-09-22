//If pode ser usado sozinho
//Eu posso ter vários Else ifs na checagem
//Sempre que utilizo a palavra  else, preciso de um if antes
//Só posso ter um else na checagem
//Pode, usar condições sem else if, utilizando apenas if e else

/*
Entre 0 - 11h - Bom dia
Entre 12h - 17h Boa tarde
Entre 18h - 23h Boa noite
*/
const hora = 50
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia !')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde-Friend!!')

} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite,Durma bem !')
} else {
    console.log("Hora incorreta!")
}
