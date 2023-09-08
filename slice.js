const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga']
// slice é um método para definir o range que o array deve ser considerado,
// os parametros representam a posição dos elementos no array
// o primeiro parametro indica o inicio, a partir daquela posição o array deve ser considerado
// o ultimo parametro indica onde deve-se parar, a posição indicada no segundo parametro não é considerada
// caso o ultimo parametro não seja indicado o array será considerado até o ultimo elemento
// caso nenhum parametro seja indicado o array será inteiramente considerado.

const copia1 = frutas.slice(1, 3)
console.log(copia1)

const copia2 = frutas.slice(2)
console.log(copia2)

const copia3 = frutas.slice()
console.log(copia3)