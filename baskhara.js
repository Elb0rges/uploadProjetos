let prompt = require('prompt-sync')({sigint: true})
let D, n1, n2, n3, n4, r, c1, b1, c2, b2, final1, final2, x1, x2, formulaB, formulaA, formulaC

function loopb () {
    while (formulaB === "") {
        B ()
    }
}
function loopa () {
    while (formulaA === "") {
        A ()
    }
}
function loopc () {
    while (formulaC === "") {
        C ()
    }
}

console.log ("acharemos o ▲ com b²-4.a.c")
function B() {
    formulaB = prompt(`Digite o valor de B: `)
    if (formulaB === "" || formulaB == String) {
        throw loopb()
    }
}
    try {
        B()
    } catch (e1) {
        (e1)
    }

function A() {
        formulaA = prompt(`Digite o valor de A: `)
        if (formulaA === "") {
            throw loopa()
        }
    }
    try {
        A()
    } catch (e2) {
        (e2)
    }
function C() {
        formulaC = prompt(`Digite o valor de C: `)
        if (formulaC === "") {
            throw loopc()
        }
    }
    try {
        C()
    } catch (e3) {
        (e3)
    }




function delta () {
    n1 = formulaB**2
    Math.sign (n1)
    n2 = formulaA*formulaC
    Math.sign (n2)
    n3 = 4*n2
    Math.sign (n3)
    n4 = n1-n3
    Math.sign (n4)

D = (n4)
Math.sign (D)
r = Math.sqrt (D)


console.log (`Delta é ${D}\nVamos para o segundo passo, e descobrir o valor de X.`)

}
   
function Valorx () {
    console.log (`Raiz de ${D} é ${r}`)
        c1 = -formulaB+(r)
            Math.sign (c1)
        b1 = 2*formulaA
            Math.sign (b1)
        x1 = c1/b1
            Math.sign (x1)

        c2 = -formulaB-r
            Math.sign (c2)
        b2 = 2*formulaA
            Math.sign (c2)
        x2 = c2/b2
            Math.sign (x2)


    console.log (`x¹ é: ${x1}`)
    console.log (`x² é: ${x2}`)
}

function checkFloat () {
    if (r % 1 === 0) {
        Valorx ()
    } else {
        console.log (`${D} não tem uma raiz inteira, portanto, deve ser fatorado.`)
    }
}

delta ()
checkFloat ()
