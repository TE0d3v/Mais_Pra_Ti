let fruitlist = Array();
let namelist = ['pedro', 'joão', 'marta'];

fruitlist[0] = 'banana'
fruitlist[1] = 'maça'

// mostra o array inteiro sem os indices e seus respectivos valores
console.log(fruitlist)
// mostra o array inteiro com os indices e seus respectivos valores
console.table(fruitlist)

console.log(namelist)
// mostra o array inteiro com os indices e seus respectivos valores
console.table(namelist)

for (let i = 0; i < namelist.length; i++) {
    console.log(namelist[i])
}

