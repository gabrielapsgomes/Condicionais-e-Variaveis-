/*EXERCICIO 1- FOLHA 3
const numA = 30
const numB = 90
const resultado = numA + numB
if (resultado > 50) {
    console.log(`Apresentar os valores ${resultado}`)
} else {
    console.log('Menor que 50')
}*/


/*EXERCICIO 2- FOLHA 3
const unitario = 20
const produto = 4
const venda = 20 * 1
if (venda > 100) {
    console.log("Bonificação de 10% para o vendedor!")
} else {
    console.log("Valor abaixo de 100 sem Bonificação para o vendedor.")
}*/


/*EXERCICIO 3- FOLHA 3
const numero = prompt("Digite um número inteiro")
if (numero % 2 === 0) {
    console.log("O número é par ")
} else {
    console.log("O número é impar")
}*/


/*EXERCICIO 4- FOLHA 3
const num = prompt('Digite seu número e verificamos se é positivo, negativo ou nulo')

if (num < 0) {
    alert('Seu número é negativo')
} else if (num > 0) {
    alert('Seu número é positivo')
} else {
    alert('Seu número é igual a zero')
}*/



/*EXERCICIO 5- FOLHA 3
const numero1 = 10
const numero2 = 3
const soma = numero1 + numero2
if (soma > 20) {
    console.log(`Apresentar os valores maiores que 20: ${soma + 8}`)
} else (soma <= 20)
console.log(`Apresentar os valores menores que 20: ${soma - 5}`)*/


/*EXERCICIO 6- FOLHA 3
const raiz = 10 ** 0.5
const raizResultado = - raiz
if (raizResultado > 0) {
    console.log(`Raiz quadrada numero positivo ${raizResultado}`)
} else if (raizResultado < 0) {
    console.log(`Raiz quadrada do numero negativo ${raizResultado}`)
} else {
    console.log("Numero igual a zero")
}*/


/*EXERCICIO 7- FOLHA 3
const algoritmo = 8
if (algoritmo % 3 === 0) {
    console.log(`É múltiplo de 3 `)
} else {
    console.log(`Não é múltiplo de 3`)
} */

/*EXERCICIO 8- FOLHA 3
const numeroA = 8
const numeroB = 4
if (numeroA % numeroB === 0) {
    console.log("NumeroA é divisivel por numeroB")
} else {
    console.log("Não é possível efetuar a divisão")
}*/


/*EXERCICIO 9- FOLHA 3
const algoritmo = prompt('Verifique seu numero')
const numeroMaior = 12
const numeroMenor = 5
if (numeroMaior > numeroMenor === algoritmo) {
    console.log('Numero maior')
} else {
    console.log('Numero menor ')
} */


/*EXERCICIO 10- FOLHA 3
const valorPrestacao = 1500
const salarioBruto = 8000
const salarioCortado = (salarioBruto * 30) / 100

if (valorPrestacao < salarioCortado) {
    console.log(Emprestimo concencido!!Seu salário com 30% é ${salarioCortado})
} else {
    console.log('Emprestimo negado')
}*/



/*EXERCICIO 11- FOLHA 3
const a = 1
const b = 3
const c = 24
const d = 56

if (a > b) {
    if (a > c) {
        if (a > d) {
            console.log(a, b)
        } else {
            console.log(a, c)
        }
    } else {
        console.log(a, d)
    }
}

if (b > a) {
    if (b > c) {
        if (b > d) {
            console.log(b, a)
        } else {
            console.log(d, b)
        }
    } else {
        console.log(c, b)
    }
}

if (c > a) {
    if (c > b) {
        if (c > d) {
            console.log(c, a)
        } else {
            console.log(c, b)
        }
    } else {
        console.log(d, c)
    }
}

if (d > a) {
    if (d > b) {
        if (d > c) {
            console.log(d, a)
        } else {
            console.log(d, b)
        }
    } else {
        console.log(d, c)
    }
}*/

/*EXERCICIO 12- FOLHA 3
const a = 9
const b = 5
const c = 1

if (a < b) {
    if (a < c) {
        if (b < c) {
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    }
}

if (b < a) {
    if (b < c) {
        if (a < c) {
            console.log(b, a, c)
        } else {
            console.log(b, c, a)
        }
    }
}

if (c < a) {
    if (c < b) {
        if (a < b) {
            console.log(c, a, b)
        } else {
            console.log(c, b, a)
        }
    }
}*/


/*EXERCICIO 13- FOLHA 3
const a = 9
const b = 5
const c = 1

if (a > b) {
    if (a > c) {
        if (b > c) {
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    }
}

if (b > a) {
    if (b > c) {
        if (a > c) {
            console.log(b, a, c)
        } else {
            console.log(b, c, a)
        }
    }
}

if (c > a) {
    if (c > b) {
        if (a > b) {
            console.log(c, a, b)
        } else {
            console.log(c, b, a)
        }
    }
} */


/*EXERCICIO 14- FOLHA 3
const algoritmo = 10
if (algoritmo % 10 === 0) {
    console.log("Esse numero é divisivel por 10")
} else if (algoritmo % 5 === 0) {
    console.log("Esse numero é divisivel por 5")
} else if (algoritmo % 2 === 0) {
    console.log("Esse numero é divisivel por 2")
} else {
    console.log("Não pode ser dividido por nenhum deles")
}*/


/*EXERCICIO 15- FOLHA 3
const algoritmo = 40
if (algoritmo > 20 && algoritmo < 90) {
    console.log("Esta entre 20 e 90")
} else {
    console.log("Não esta entre 20 e 90")
}*/

/*EXERCICIO 16- FOLHA 3
const algoritmo = 1200
const igualdade1 = 5
const igualdade2 = 200
const igualdade3 = 400

const entre1 = 500
const entre2 = 1000

if (algoritmo == igualdade1 || algoritmo == igualdade2 || algoritmo == igualdade3) {
    console.log("Algoritmo é igual a um dos números que esta em igualdades")
} else if (algoritmo >= entre1 && algoritmo <= entre2) {
    console.log("Algoritmo está no intervalo entre 500 e 1000")
} else {
    console.log("Está fora dos escopos anteriores")
} */


/*EXERCICIO 17- FOLHA 3*/