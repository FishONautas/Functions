const frutas = ['maçã', 'banana', 'laranja', 'uva'];

const temBanana = frutas.includes('banana');
console.log(temBanana); // Output: true

const temPera = frutas.includes('pera');
console.log(temPera); // Output: false

// o include retorna verdadeiro ou falso, verificando se o valor indicado no parametro se encontra dentro do array
// podemos personalizar o inicio da busca, mostrando apartir de qual elemento ele deve procurar

const nomes = ["joao", "carlos", "helio"]
const TemJoao = nomes.includes('joao', 1)
console.log(TemJoao)

// retorno falso pois a busca começa apartir do indice 1, "carlos"

const listaDeUsuarios = ["alice", "bob", "carol", "dave"]
const usuarioProcurado = "carol"

if (listaDeUsuarios.includes(usuarioProcurado)) {
  console.log(`${usuarioProcurado} está na lista de usuários.`)
} else {
  console.log(`${usuarioProcurado} não está na lista de usuários.`)
}